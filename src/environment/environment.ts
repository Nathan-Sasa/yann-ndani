const baseUrl = 'http://192.168.1.27:8080';

export const environment = {
    production: true,

    // authentication apis url =======================
    // ======================================
    prefixAuthUrl: `${baseUrl}/api/auth`,
    loginApiUrl: `${baseUrl}`,
    registerApiUrl: `${baseUrl}/`,
    refreshApiUrl: `${baseUrl}/api/token/refresh/`,
    

    distApiUrl: `${baseUrl}/yann-ndani/api`


    // base/api/auth/login/
    //base/api/auth/register
    // base/api/
}