import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

const apikey:any = "61b563423245692ed78e98033044fa9e";
  
@Injectable({
    providedIn: 'root'
})
export class wetherService { 
    constructor(private http: HttpClient) { }

    searchweatherData(cityname : string): Observable<any>{
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`).pipe(
            tap(
                // data=>{
                //     console.log(data)
                // }
            ),catchError(err => {
                console.log('Reached Error', err);
                return of([]);
            })
        );
    }


}