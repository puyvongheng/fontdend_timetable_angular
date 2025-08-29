import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl  = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/students/login`, { username, password });
  }
  login_tacher(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/teachers/login`, { username, password });
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('studentDetails');
    localStorage.removeItem('teacherDetails');
    this.router.navigate(['/login']);
    setTimeout(() => {
      window.location.reload();
      this.router.navigate(['/login']);
    }, 100);
  }


}
