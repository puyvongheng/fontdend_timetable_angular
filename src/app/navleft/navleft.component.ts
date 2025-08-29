import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

import {  NzIconService } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';

import { BarChartOutline, BookOutline, FileTextOutline, FolderOutline, HomeOutline, InsertRowAboveOutline, LockOutline, LogoutOutline, PieChartOutline, PlusOutline, ScheduleOutline, SolutionOutline, TeamOutline, ToolOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { SharedModule } from '../shared/shared.module';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-navleft',
  imports: [
    SharedModule,
  
  
  ],
  templateUrl: './navleft.component.html',
  styleUrl: './navleft.component.css'
})
export class NavleftComponent {




  constructor(
    private modal: NzModalService,
    private iconService: NzIconService,
    private authService: AuthService
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



  isCollapsed = true;


  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }






  studentDetails: any = null;
  teacherDetails: any = null;



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


}
