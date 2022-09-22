import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class teatro_service {
  URL: string = "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/";

  constructor(private http: HttpClient) { }

  get_teatro(chiave: string): Observable<string> {
    return this.http.get<string>(`${this.URL}get?key=${chiave}`);
  }

  set_teatro(chiave: string, chiave_accesso: string): Observable<string> {
    return this.http.post<string>(`${this.URL}set?key=${chiave}`,chiave_accesso);
  }
  
/*  set_Postiteatro(chiave: string, teatro: any[]): Observable<string> {
    return this.http.post<string>(`${this.URL}set?key=${chiave}`, teatro);
  }*/
}