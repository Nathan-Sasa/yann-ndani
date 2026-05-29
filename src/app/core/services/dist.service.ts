import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core'
import { Observable, map } from 'rxjs';
import { environment } from '../../../environment/environment'
import { IDistResponse, IUserDistCompanies, IUserDistGroup } from '../../core/interfaces/dist.interface';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class DistService {

    distApi = environment.distApiUrl
    // router = inject(Router)

    constructor (
        private readonly http: HttpClient,
        private readonly router: Router
    ) {}

    getUserDist(): Observable<IDistResponse> {
        return this.http.get<IDistResponse>(`${this.distApi}/connexion/`).pipe(
            map(res => {
                const {companies, group_joined} = res
                if (!res){
                    this.router.navigate(['/home'])
                }
                const responseData = {
                    companies: companies,
                    group_joined: group_joined
                }
                console.log(`dist response ${responseData}`)
                return responseData
            })
        )
    }
}