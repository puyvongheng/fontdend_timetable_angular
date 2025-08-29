import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

import { Router,  } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-login',
  imports: [
    
    SharedModule,
  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  studentDetails: any = null;  // To store student details after successful login


  isLoading: boolean = false;  // Flag to control the spinner visibility
  loginStatus: string | null = null;
  alertType: 'success' | 'error' = 'success'; // C
  errors: string[] = []; // Array to hold error messages


  constructor(private authService: AuthService, private router: Router) { }


  home(): void {
    window.location.href = '/Profile';  // This will navigate to the /home route
  }

  // Method to handle login
  login() {

    // បើសិនជា ជាវាមាន in localstorage   
    if (localStorage.getItem('teacherDetails') || localStorage.getItem('studentDetails')) {
      this.loginStatus = 'Please log out of your teacher account first!';
      this.alertType = 'error';
      return; // Stop login process
    }

    this.isLoading = true;

    // Make the login request using the AuthService
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.isLoading = true;
        // If login is successful
        this.studentDetails = response.user;  // Store user details in memory
        localStorage.setItem('studentDetails', JSON.stringify(response.user));
        this.loginStatus = 'Login successful!';
        this.alertType = 'success';
        this.isLoading = true;
        
        setTimeout(() => {
          this.isLoading = false;
          this.home()
        }, 100);

      },
      (error) => {
        this.isLoading = false;
        const errorMessage = error.error?.error || 'Login failed'; // Adjusted based on the backend error response
        this.errors.push(errorMessage); // Add error message to errors array
        this.alertType = 'error';
        this.loginStatus = errorMessage; // Update status to show the error message
      }
    );
  }
}