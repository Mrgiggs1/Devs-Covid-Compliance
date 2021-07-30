import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './screening/screening.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  client: Client[] = [];


  getClient() : Observable<any> {
    return this.httpClient.get('http://localhost:3000/client'); 
  }
  
}
