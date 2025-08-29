import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router,  } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-login-teacher',
  imports: [
    
    SharedModule,
  
  ],
  templateUrl: './login-teacher.component.html',
  styleUrl: './login-teacher.component.css'
})
export class LoginTeacherComponent {

  username: string = '';
  password: string = '';
  teacherDetails: any = [];  // To store student details after successful login

  constructor(private authService: AuthService, private router: Router) { }

  isLoading: boolean = false;  // Flag to control the spinner visibility

  loginStatus: string | null = null;
  alertType: 'success' | 'error' = 'success'; // C
  errors: string[] = []; // Array to hold error messages



  ngOnInit(): void {
    // Get student details from localStorage (or sessionStorage)
    const storedteacherDetails = localStorage.getItem('studentDetails');
    if (localStorage.getItem('teacherDetails') || localStorage.getItem('studentDetails'))
    if (storedteacherDetails) {
      this.teacherDetails = JSON.parse(storedteacherDetails);
    } else {
      // Handle the case if no student details are found in storage
      console.error("No student details found.");
      }
    





   

  }

  home() {
    window.location.href = '/Profile';  // This will navigate to the /home route
  }
  dashboard() {
    this.router.navigate(['/dashboard']);
  }
  Details() {
    this.router.navigate(['/t']);
  }

  // Method to handle login
  login_tacher() {

    // Check if a student is already logged in
    if (localStorage.getItem('teacherDetails') || localStorage.getItem('studentDetails')) {
      this.loginStatus = 'Please log out of your  account first!';
      this.alertType = 'error';
      return; // Stop login process
    }





    this.isLoading = true;  // Start showing the spinner

    // Make the logi
    // n request using the AuthService
    this.authService.login_tacher(this.username, this.password).subscribe(
      (response) => {
        this.isLoading = true;  // Start showing the spinner
        // If login is successful
        this.teacherDetails = response.user;  // Store user details in memory
        // Optionally, store the user details in localStorage/sessionStorage if needed

        localStorage.setItem('teacherDetails', JSON.stringify(response.user));

        this.loginStatus = 'Login successful!';
        this.alertType = 'success';

        setTimeout(() => {
          this.isLoading = false;  // Hide the spinner after 10 seconds
          this.home()

        }, 100); //


      },
      (error) => {
        this.isLoading = false;
        const errorMessage = error.error?.error || 'Login failed';
        this.errors.push(errorMessage);
        this.alertType = 'error';
        this.loginStatus = errorMessage;

      }
    );
  }

}
