import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ScanService {
  
  constructor(
    private http: HttpClient
  ) { }

  /* ======================================================================================================================================
    Funtion to call All GET Apis
  * ======================================================================================================================================*/

 getScan(apiUrl) {
  const url = apiUrl;
  let promise = new Promise((resolve, reject) => {
    this.http
      .get(url)
      .toPromise()
      .then(
        (res: any) => {
          // Success
          if(res.cssvalidation.validity)
            resolve('CSS Validation for job passed');
          else
            resolve('CSS Validation for job failed');
        },
        msg => {
          // Error
          reject('CSS Validation for job failed');
        }
      );
  });
  return promise;
}
}
