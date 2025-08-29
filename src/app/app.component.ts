import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { NavbarComponent } from "./navbar/navbar.component";
import { NavleftComponent } from "./navleft/navleft.component";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    NavbarComponent,
    NavleftComponent,
    NzBreadCrumbModule,




  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  teacherDetails: any = null;
  studentDetails: any = null;

  constructor(private authService: AuthService,
    private router: Router
  ) { }


  // Check if the current route is timetable_x
  isTimetablePage(): boolean {
    return this.router.url.includes('/timetable_x');
  }

  // ngOnInit lifecycle hook
  ngOnInit(): void {

    const storedTeacherDetails = localStorage.getItem('teacherDetails');
    if (storedTeacherDetails) {
      this.teacherDetails = JSON.parse(storedTeacherDetails);
    } else {
      //  console.error("គ្មានស្សិស");
    }



    // Get student details from localStorage (or sessionStorage)
    const storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails) {
      this.studentDetails = JSON.parse(storedStudentDetails);
    } else {

      // Handle the case if no student details are found in storage
      //  console.warn("គ្មានស្សិស");

    }


  }

}