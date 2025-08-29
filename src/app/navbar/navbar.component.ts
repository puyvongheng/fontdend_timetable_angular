import { environment } from './../service/environments/environment.prod';
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

import { SharedModule } from '../shared/shared.module';
declare var bootstrap: any;  // Declare Bootstrap to access the collapse functionality

import { BarChartOutline, BookOutline, FileTextOutline, FolderOutline, HomeOutline, InsertRowAboveOutline, LockOutline, LogoutOutline, PieChartOutline, PlusOutline, ScheduleOutline, SolutionOutline, TeamOutline, ToolOutline, UserOutline } from '@ant-design/icons-angular/icons';

import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-navbar',
  imports: [
    
    NzDrawerModule,
    
    SharedModule,
    
  
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
[x: string]: any;
  studentDetails: any = null;
  teacherDetails: any = null;
  router: any;
  constructor(private authService: AuthService, private modal: NzModalService,
        private iconService: NzIconService,
    
  
  ) { 

    
        this.iconService.addIcon(
          UserOutline,
          HomeOutline,
          PieChartOutline,
          InsertRowAboveOutline,
          PlusOutline,
          SolutionOutline,
          FolderOutline,
          TeamOutline,
          FileTextOutline,
          BookOutline,
          ScheduleOutline,
          BarChartOutline,
          LockOutline,
          ToolOutline,
          LogoutOutline
        );
  }



  showProFeature(): void {
    this.modal.info({
      nzTitle: 'សេវាកម្មជំនួយ Pro',
      nzContent: 'មុខងារនេះមានសម្រាប់អ្នកប្រើប្រាស់ជំនួយបន្តិចបន្តួច (Pro Version) ប៉ុណ្ណោះ។ សូមទំនាក់ទំនងដើម្បី upgrade។',
      nzOkText: 'យល់ព្រម'
    });
  }


  isWrapperVisible: boolean = true;  // Initially show the menu

  toggleWrapperVisibility(): void {
    this.isWrapperVisible = !this.isWrapperVisible;  // Toggle visibility
  }



  isNavbarOpen = false; // Track whether the navbar is open or closed
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;  // Toggle navbar open/close
  }

  closeNavbar() {
    this.isNavbarOpen = false;  // Set navbar to closed
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false  // Prevent it from toggling, just collapsing
    });
    bsCollapse.hide();  // Manually close the navbar
  }

  logout() {
    this.authService.logout();  // Call the logout method from AuthService
    //window.location.reload();  // This reloads the page
  }

  ngOnInit() {





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


  isDrawerVisible = false;

  openDrawer(): void {
    this.isDrawerVisible = true;
  }

  closeDrawer(): void {
    this.isDrawerVisible = false;
  }






}
