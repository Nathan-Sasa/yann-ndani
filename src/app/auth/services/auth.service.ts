import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, BehaviorSubject, EMPTY, Subscription, timer, throwError } from "rxjs";
import { Router } from "@angular/router";
import { map, distinctUntilChanged, tap, shareReplay, catchError } from "rxjs/operators";
import { environment } from '../../../environment/environment'
import { JwtService } from "../services/jwt.service";

export type AuthState = 'authenticated' | 'unauthenticated' | 'unavailable' | 'loading';

interface LoginResponse {
    access: string;
    refresh: string;
    type?: string;
    user: UserResponse
}

interface UserResponse {
    email: string;
    first_name: string;
    last_name: string;
    pk: number;
}

interface RegisterRequest {
    email: string;
    password1: string;
    username: string;
    // role?: string;
}

// interface LoginResponse{
//     key: string;
//     // type?: string;
// }

@Injectable({
    providedIn: "root"
})
export class AuthService{

    private readonly TOKEN_KEY = 'yann_token'
    private readonly REFRESH_TOKEN = 'yann_refresh'
    private readonly authPrefixApi = environment.prefixAuthUrl
    private readonly refreshTokenApi = environment.refreshApiUrl
    
    private _isLoggedIn$ = new BehaviorSubject<boolean>(this.hasValidToken() || this.hasValidRefreshToken())
    public isLoggedIn$ = this._isLoggedIn$.asObservable()


    constructor(
        private readonly http: HttpClient,
        private readonly jwtService: JwtService,
        private readonly router: Router
    ){}

    //-------------------------------------------------------
    // Auth API calls
    //-------------------------------------------------------
    login(email: string, password: string): Observable<LoginResponse>{
        const url = `${this.authPrefixApi}/login/`
        return this.http.post<LoginResponse>(url, {email, password})
            .pipe(
                tap(res => { this.handleAuthentication(res)})
            )
    }

    register(payload: RegisterRequest): Observable<LoginResponse> {
        const url = `${this.authPrefixApi}/register/`
        return this.http.post<LoginResponse>(url, payload).pipe(
            tap(res => { this.handleAuthentication(res)})
        )
    }

    refreshToken(): Observable<{access: string}> {
        const refresh = localStorage.getItem(this.REFRESH_TOKEN)
        if (!refresh) {
            return throwError(() => new Error('Aucun refresh token disponible'))
        }

        const url = this.refreshTokenApi
        return this.http.post<{access: string}>(url, { refresh }).pipe(
            tap(res => {
                if(res?.access) {
                    localStorage.setItem(this.TOKEN_KEY, res.access)
                }
            }),
            catchError(err => {
                this.logout()
                return throwError(() => err)
            })
        )
    }

    logout(): void {
        this.destroyToken()
        this._isLoggedIn$.next(false)

        this.router.navigate(['/login'])
    }

    // ---------------------------------------------------------
    // Token helpers
    //---------------------------------------------------------
    getToken(): string | null {
        // return window.localStorage['jwtToken']
        return localStorage.getItem(this.TOKEN_KEY)
        // return localStorage.getItem(this.REFRESH_TOKEN)
    }

    private handleAuthentication(res: LoginResponse): void {
        if (res?.access && res.refresh) {
            localStorage.setItem(this.TOKEN_KEY, res.access);
            localStorage.setItem(this.REFRESH_TOKEN, res.refresh);
            this._isLoggedIn$.next(true);
        }
    }

    destroyToken(): void {
        // window.localStorage.removeItem('jwtToken')
        localStorage.removeItem(this.TOKEN_KEY)
        localStorage.removeItem(this.REFRESH_TOKEN)
    }

    // extraction du token
    private urlBase64Decode(str: string): string {
        str = str.replace(/-/g, '+').replace(/_/g, '/');

        while(str.length % 4){
            str += '=';
        }
        try{
            return atob(str)
        }catch{
            return '';
        }
    }

    private decodeJwtPayload(token?: string): any | null {
        const t = token ?? this.getToken();
        if (!t) return null

        const parts = t.split('.')
        if(parts.length !==3) return null
        try{
            const payload = this.urlBase64Decode(parts[1])
            return JSON.parse(payload)
        }catch{
            return null
        }
    }

    // check expiration du  JWT 
    isTokenExpired(token?: string): boolean {
        const payload = this.decodeJwtPayload(token)
        if (!payload || !payload.exp) return true ; // on considere expired si incertain
        const nowSec = Math.floor(Date.now() / 1000)
        return payload.exp < nowSec
    }

    hasValidToken(): boolean {
        const t = this.getToken()
        return !!t && !this.isTokenExpired(t)
    }

    hasValidRefreshToken(): boolean {
        const refresh = localStorage.getItem(this.REFRESH_TOKEN);
        return !this.isTokenExpired(refresh as unknown as string);
    }
}





// private saveToken(token: string, refresh: string): void {
//     // window.localStorage['jwtToken'] = token
//     localStorage.setItem(this.TOKEN_KEY, token)
//     localStorage.setItem(this.REFRESH_TOKEN, refresh)
// }


// voirTokenExtract() {
//     console.log('token info : ', this.decodeJwtPayload(this.getToken() as unknown as string))
//     console.log('refresh info : ', this.decodeJwtPayload(localStorage.getItem(this.REFRESH_TOKEN) as unknown as string))
//     console.log('token exp : ', this.isTokenExpired(this.getToken() as unknown as string))
//     console.log('refresh exp : ', this.isTokenExpired(localStorage.getItem(this.REFRESH_TOKEN) as unknown as string))
//     console.log('date : ', Date.now())
//     console.log('date en milis : ', Math.floor(Date.now() /1000))
// }

// export class UserService {
//     private currentUserSubject = new BehaviorSubject<IUser | null>(null)
//     public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged())

//     private authStateSubject = new BehaviorSubject<AuthState>('loading')
//     public authSate = this.authStateSubject.asObservable().pipe(distinctUntilChanged())

//     public isAuthenticated = this.currentUser.pipe(map(user => !!user))

//     private userLoginApi = environment.loginApiUrl
//     private userRegisterApi = environment.registerApiUrl
//     private userCurrentApi = environment.userCurrentApiUrl

//     constructor(
//         private readonly http: HttpClient,
//         private readonly jwtService: JwtService,
//         private readonly router: Router
//     ){}

//     login(username: string, password: string): Observable<LoginResponse>{
//         const url = `${this.userLoginApi}`
//         return this.http.post<LoginResponse>(url, {username, password})
//             .pipe(
//                 tap(res => {
//                     if(res?.key) {
//                         console.log(res.key)
//                     }
//                 })
//             )
//     }
// }