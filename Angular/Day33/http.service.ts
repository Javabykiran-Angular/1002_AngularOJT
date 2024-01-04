import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }


  getAllRecord(){
     return (this.http.get(`${this.baseUrl}getallemployee`));
  }

  getParticularRecordByID(id:any){

    let idParam=new HttpParams();
    idParam=idParam.append("id",id);

    return (this.http.get(`${this.baseUrl}getemployeebyId`,{
      params:idParam
    }));

  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  saveRecord(obj:any){
  return (this.http.post(`${this.baseUrl}addemployee`,obj,{
      responseType:'text'
    }));
  }

  UpdateRecord(obj:any){
    return  (this.http.put(`${this.baseUrl}updateemployee`,obj,{
      responseType:'text'
    }));
  }

  DeleteRecord(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{
      responseType:'text'
    }));
  }

}
