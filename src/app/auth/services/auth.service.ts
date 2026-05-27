import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, BehaviorSubject, EMPTY, Subscription, timer } from "rxjs";
import { Router } from "@angular/router";
import { map, distinctUntilChanged, tap, shareReplay, catchError } from "rxjs/operators";

import { environment } from '../../../environment/environment'

import { JwtService } from "../services/jwt.service";
import { IUser } from "../interfaces/auth.interface";


export type AuthState = 'authenticated' | 'unauthenticated' | 'unavailable' | 'loading';

interface LoginResponse {
    token: string;
    type?: string;
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
    private readonly authPrefixApi = environment.prefixAuthUrl
    
    private _isLoggedIn$ = new BehaviorSubject<boolean>(this.hasValidToken())
    private isLoggedIn$ = this._isLoggedIn$.asObservable()


    constructor(
        private readonly http: HttpClient,
        private readonly jwtService: JwtService,
        private readonly router: Router
    ){}

    //-------------------------------------------------------
    // Auth API calls
    //-------------------------------------------------------
    login(email: string, password: string): Observable<LoginResponse>{
        const url = `${this.authPrefixApi}/api/auth/login/`
        return this.http.post<LoginResponse>(url, {email, password})
            .pipe(
                tap(res => {
                    if (res?.token) {
                        this.saveToken(res.token)
                        this._isLoggedIn$.next(true)
                        console.log('Utilisateur connecté')
                    }
                })
            )
    }

    register(payload: RegisterRequest): Observable<any> {
        const url = `${this.authPrefixApi}/api/auth/register/`
        return this.http.post(url, payload).pipe(
            
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
    }

    saveToken(token: string): void {
        // window.localStorage['jwtToken'] = token
        localStorage.setItem(this.TOKEN_KEY, token)
    }

    destroyToken(): void {
        // window.localStorage.removeItem('jwtToken')
        localStorage.removeItem(this.TOKEN_KEY)
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
}









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