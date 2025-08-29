import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const teacherDetails = localStorage.getItem('teacherDetails');
    const studentDetails = localStorage.getItem('studentDetails');
    // If teacherDetails exist, parse them and check the 
    if (teacherDetails) {
      const teacher = JSON.parse(teacherDetails);
      const allowedRoles = route.data['roles'] as Array<string>;
      if (allowedRoles.includes(teacher.role)) {
        console.log('Access Granted');
        return true;
      }
    }
    console.log('Access Denied');
    return false; // Redirect unauthorized users


  }
}
