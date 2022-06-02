import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  header: any;
  beforeLoginheader = {
    Authorization: "Basic " + btoa("android-client:android-secret"),
    "Content-Type": "application/x-www-form-urlencoded",
};

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

  postData(url, data) {
    if (localStorage.getItem("access_token")) {
        this.header = {
            Authorization:
                localStorage.getItem("token_type") +
                " " +
                localStorage.getItem("access_token"),
            "Content-Type": "application/json;",
        };
    } else {
        if (url.match(/token/gi)) {
            this.header = this.beforeLoginheader;
        } else {
            this.header = {
                Authorization: "bearer" + " " + data["accessToken"],
                "Content-Type": "application/json;",
            };
        }
    }
    return new Promise((resolve, reject) => {
        const httpOptions: { headers } = {
            headers: new HttpHeaders(this.header),
        };
        this.http.post(url, data, httpOptions).subscribe(
            (res) => {
                resolve(res);
            },
            (err) => {
                if (err["status"] == 401) {
                    let errPromise = new Promise((resolve, reject) => {
                        const httpOptions: { headers } = {
                            headers: new HttpHeaders(
                                this.beforeLoginheader
                            ),
                        };
                        this.http
                            .post(
                                environment["stagingUrl"] + "oauth/token",
                                "grant_type=refresh_token&refresh_token=" +
                                localStorage.getItem("refresh_token"),
                                httpOptions
                            )
                    });
                    resolve(errPromise);
                } else {
                    reject(err)
                }
            }
        );
    });
}

}
