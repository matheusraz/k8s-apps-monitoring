import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { createAuthorizationHeader } from '../../../headers'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getApps() {
    return this.http.get(`${environment.server}/jst-apps`, {
      headers: createAuthorizationHeader()}).toPromise();
  }

}
