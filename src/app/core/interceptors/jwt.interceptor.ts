import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { AuthService } from '../../auth/services/auth.service'
import { environment } from '../../../environment/environment'
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    const auth = inject(AuthService)
    const token = auth.getToken()

    const ignoredUrl = [
        `${environment.prefixAuthUrl}/login/`,
        `${environment.prefixAuthUrl}/register`,
        environment.refreshApiUrl
    ]

    let authReq = req

    if (token && !ignoredUrl.some(url => req.url.includes(url))) {
        authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return next(authReq).pipe(
        catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401 && !ignoredUrl.some(url => req.url.includes(url))) {
                return auth.refreshToken().pipe(
                    switchMap((res) => {
                        const retryReq = req.clone({
                            setHeaders: {
                                Authorization: `Bearer ${res.access}`
                            }
                        })
                        return next(retryReq)
                    }),
                    catchError((refreshErr) => {
                        auth.logout()
                        return throwError(() => refreshErr)
                    })
                )
            }
            return throwError(() => error)
        })
    )
}


// export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
//     const auth = inject(AuthService)
//     const token = auth.getToken()

//     const ignoredUrl = [
//         `${environment.prefixAuthUrl}/login/`,
//         `${environment.prefixAuthUrl}/register`,
//         environment.refreshApiUrl
//     ]

//     // si pas de token (login, register), on fait de request sans envoyer l'en-tete
//     if (!token || ignoredUrl.some(url => req.url.includes(url))){
//         return next(req)
//     }

//     // Authorization header
//     const authReq = req.clone({
//         setHeaders: {
//             Authorization: `Bearer ${token}`
//         } 
//     })

//     // afficher le header Authorization si besoin

//     function afficheHeaderAuthorization() {
//         return `Header Authorization ajouté : ${authReq.headers.get('Authorization')}`
//     }

//     return next(authReq)

// }