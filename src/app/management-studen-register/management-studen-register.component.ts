import { Component,  } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup,   Validators } from '@angular/forms';


import { AuthService } from '../service/auth.service';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SharedModule } from '../shared/shared.module';



@Component({
  selector: 'app-management-studen-register',
  imports: [
    
    SharedModule,
  
  ],
  templateUrl: './management-studen-register.component.html',
  styleUrl: './management-studen-register.component.css'
})
export class ManagementStudenRegisterComponent {

  monthFormat = 'yyyy/MM//dd';

  studentForm: FormGroup;
  majors: any[] = []; // To store the list of majors
  showPassword: boolean = false; // Toggle password visibility
  submissionError: string | null = null;
  submissionSuccess: string | null = null;




  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private notification: NzNotificationService

  ) {
    this.studentForm = this.fb.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]+$')
        ]
      ],
      major_id: ['', [Validators.required]],
      date_joined: ['', [Validators.required]],
      group_student: ['', [Validators.required]],
      shift_name: ['', [Validators.required]] // New field for shift name

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
    this.studentForm.get('password')?.setValue(password); // Set the generated password
  }

  closeModal() {
    this.submissionSuccess = "";
  }




  ngOnInit() {

    this.fetchMajors();


  }

  fetchMajors() {
    this.apiService.getMajors().subscribe(
      (response) => {
        this.majors = response; // Set the majors array with the response
      },
      (error) => {
        console.error('Error loading majors:', error);
        // You can also display an error message to the user here if needed
      }
    );

  }

  // Method to find a major by its ID
  findMajor(majorId: number): any {
    const major = this.majors.find((m) => m.id === majorId);
    return major || { major_name: 'Unknown', department_name: 'Unknown', Departments_id: 'Unknown' };
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isLoading: boolean = false
  login_student(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      (response) => {

        localStorage.setItem('studentDetails', JSON.stringify(response.user));

        // Show success notification
        this.notification.success(
          'ការចូលបានជោគជ័យ',
          'អ្នកបានចូលដោយជោគជ័យ! 10 វិនាទីបន្ទាប់អ្នកនឹងត្រូវបានបញ្ជូនទៅទំព័ររូបប្រវត្តិ។'
        );
        this.isLoading = true;

        // Redirect to /Profile after 10 seconds
        setTimeout(() => {
          this.isLoading = false; // Hide the spinner

          window.location.href = '/Profile';
        }, 10000); // 10 seconds (10,000 milliseconds)


      },
      (error) => {
        const errorMessage = error.error?.error || 'Login failed';
        alert(`Login failed: ${errorMessage}`);
      }
    );
  }


  onSubmit() {


    if (this.studentForm.valid) {
      this.apiService.create('students', this.studentForm.value).subscribe(
        (response) => {


          // Show success notification
          this.notification.success(
            'ការចុះឈ្មោះបានជោគជ័យ',
            'អ្នកបានចុះឈ្មោះដោយជោគជ័យ!'
          );

          const autoLogin = confirm('ការចុះឈ្មោះទទួលបានជោគជ័យ! តើអ្នកចង់ចូលឥឡូវនេះទេ?');
          this.notification

          if (autoLogin) {

            this.login_student(this.studentForm.value.username, this.studentForm.value.password);
          } else {
            this.notification.info(
              'ចូលប្រើប្រាស់',
              'អ្នកអាចចូលប្រើបានគ្រប់ពេលដោយប្រើលិខិតសម្គាល់របស់អ្នក។'
            );

            this.studentForm.reset();  // Clear the form after successful submission
          }


        },
        (error) => {
          this.submissionError = error.error?.error || 'An error occurred. Please try again.';
          this.submissionSuccess = null;
        }
      );
    }




  }




}

