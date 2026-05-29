export interface IDistResponse {
    companies: IUserDistCompanies[];
    group_joined: IUserDistGroup[]
}

export interface IUserDistCompanies {
    id_company: number;
    name: string;
    slug: string;
    hashtag: string
    logo: string
}

export interface IUserDistGroup {
    name: string;
    slug: string;
    hashtag: string
    logo: string
}