import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  url = "http://localhost:3000/client";

  getClient() : Observable<any> {
    return this.httpClient.get(this.url); 
  }
  addClient(client : any) : Observable<any> {
    return this.httpClient.post<any>(this.url, client, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }); 
  }
}
