import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // loginbaseUrl:string='http://localhost:8080/api/';
  loginbaseUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }

  login(obj:any){
    return (this.http.post(`${this.loginbaseUrl}login`,obj));
  }

}
