import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../service/auth.service';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-management-teacher-register',
  imports: [
       SharedModule,
   
  ],
  templateUrl: './management-teacher-register.component.html',
  styleUrl: './management-teacher-register.component.css'
})
export class ManagementTeacherRegisterComponent {

  showPassword: boolean = false; // Toggle for password visibility


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private authService: AuthService

  ) {


    this.teacherForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['simple', Validators.required],
    });

  }


  generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&#';
    const passwordLength = 12;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    this.teacherForm.get('password')?.setValue(password); // Set the generated password
  }

  ngOnInit(): void {

  }




  teacherForm: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string | null = null;

  isLoading: boolean = false; // Loading state for spinner

  login_tacher(username: string, password: string): void {
    this.isLoading = true; // Show spinner
    this.authService.login_tacher(username, password).subscribe({
      next: (response) => {
        localStorage.setItem('teacherDetails', JSON.stringify(response.user));

        // Notify user about successful login
        this.notification.success(
          'ការចូលបានជោគជ័យ',
          'អ្នកបានចូលដោយជោគជ័យ! 10 វិនាទីបន្ទាប់អ្នកនឹងត្រូវបានបញ្ជូនទៅទំព័ររូបប្រវត្តិ។'
        );

        // Redirect to profile after 10 seconds
        setTimeout(() => {
          this.isLoading = false; // Hide spinner
          window.location.href = '/Profile';
        }, 10000); // 10 seconds
      },
      error: (error) => {
        this.isLoading = false; // Hide spinner
        const errorMessage = error.error?.error || 'Login failed';
        this.notification.error('ការចូលបរាជ័យ', errorMessage);
      }
    });
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      this.isLoading = true; // Show spinner
      this.apiService.create('teachers', this.teacherForm.value).subscribe({
        next: (response) => {
          this.submissionSuccess = true;
          this.submissionError = null;

          // Notify user about successful registration
          this.notification.success(
            'ការចុះឈ្មោះបានជោគជ័យ',
            'អ្នកបានចុះឈ្មោះដោយជោគជ័យ!'
          );

          // Ask the user if they want to log in
          const autoLogin = confirm('ការចុះឈ្មោះទទួលបានជោគជ័យ! តើអ្នកចង់ចូលឥឡូវនេះទេ?');
          if (autoLogin) {
            this.login_tacher(this.teacherForm.value.username, this.teacherForm.value.password);
          } else {
            alert('អ្នកអាចចូលបានគ្រប់ពេលដោយប្រើលិខិតសម្គាល់របស់អ្នក។');
          }

          this.teacherForm.reset({ role: 'simple' }); // Reset the form
          this.isLoading = false; // Hide spinner
        },
        error: (error) => {
          this.submissionSuccess = false;
          this.submissionError = error.error?.error || 'An error occurred. Please try again.';
          this.isLoading = false; // Hide spinner
        }
      });
    }
  }
}












