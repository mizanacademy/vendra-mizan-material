import { Routes, Route, Router } from '@angular/router';
import { Injectable, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root',
})

export class ApiService extends BaseService {
  myAppUrl: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    super();
  }

  getData(): Observable<any> {
    this.myAppUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    let url = this.myAppUrl;
    return this.http.get<any>(url);
  }


}
