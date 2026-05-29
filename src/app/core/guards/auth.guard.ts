import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { AuthService } from '../../auth/services/auth.service'

export const authGuard: CanActivateFn = () => {
    const auth = inject(AuthService)
    const router = inject(Router)

    // if (!auth.hasValidToken() && !auth.isLoggedIn()) {
    //     router.navigate(['login'])
    //     return false
    // }

    if (auth.isLoggedIn$) {
        return true
    }

    auth.logout()
    return false
}