import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient, public router: Router) { }

  getData(url:string, params: {}) { 
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({ 
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
      })
      const options = {
        headers: headers,
        params: params
     };
     this.http.get(url, options).subscribe(
      res => resolve(res),
     )
    })
  }

}
