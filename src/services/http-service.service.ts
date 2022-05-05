import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient, public router: Router) { }

  getData(url:string) { 
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({ 
        'Authorization' : localStorage.getItem("token_type") + ' ' + localStorage.getItem("refresh_token")
      })
     /*  const options = {
        headers: headers,
        params: params
     }; */
     this.http.get(url).subscribe(
      res => resolve(res),
     )
    })
  }

}
