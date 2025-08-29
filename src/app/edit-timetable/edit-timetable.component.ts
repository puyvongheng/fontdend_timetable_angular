import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router,  } from '@angular/router';
import { ApiService } from '../service/api.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-edit-timetable',
  imports: [SharedModule,],
  templateUrl: './edit-timetable.component.html',
  styleUrl: './edit-timetable.component.css'
})
export class EditTimetableComponent implements OnInit {
  timetableId!: number;
  timetableForm: FormGroup;
  timetable: any; // Store timetable data
  isLoading: boolean = false;
  message: string = '';

  // Dropdown data
  studySessions: any[] = [];
  majors: any[] = [];
  teachers: any[] = [];
  subjects: any[] = [];
  rooms: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.timetableForm = this.fb.group({
      note: ['', Validators.required],
      study_sessions_id: ['', Validators.required],
      group_student: ['', Validators.required],
      batch: ['', Validators.required],
      generation: ['', Validators.required],
      major_id: ['', Validators.required],
      teacher_id: ['', Validators.required],
      subject_id: ['', Validators.required],
      room_id: ['', Validators.required],
      years: ['', Validators.required],
      semester: ['', Validators.required]
    });
  }
  teacherDetails: any = null;

  ngOnInit(): void {
    // Get timetable ID from the route parameter
    this.timetableId = +this.route.snapshot.paramMap.get('id')!;

    // Load data needed for the form
    this.loadDropdownData();
    this.loadTimetable();



    const storedTeacherDetails = localStorage.getItem('teacherDetails');
    if (storedTeacherDetails) {
      this.teacherDetails = JSON.parse(storedTeacherDetails);
    } else {
      this.gotologin()

      console.error("No  details found.");
    }


  }

  gotologin() {
    window.location.href = '/login';  // This will navigate to the /home route

  }

  // Load dropdown data (study sessions, majors, teachers, subjects, rooms)
  loadDropdownData(): void {




    this.isLoading = true;

    this.apiService.get('study_sessions').subscribe((response) => {
      this.studySessions = response;
    });

    this.apiService.get('majors').subscribe((response) => {
      this.majors = response;
    });

    this.apiService.get('teachers').subscribe((response) => {
      this.teachers = response;
    });

    this.apiService.get('subjects').subscribe((response) => {
      this.subjects = response;
    });

    this.apiService.get('rooms').subscribe((response) => {
      this.rooms = response;
      this.isLoading = false;
    });
  }

  // Load specific timetable data for editing
  loadTimetable(): void {
    this.apiService.get(`timetable/${this.timetableId}`).subscribe(
      (response) => {
        this.timetable = response;
        this.fillForm(response);
      },
      (error) => {
        console.error('Error loading timetable:', error);
        this.message = 'Failed to load timetable for editing';
      }
    );
  }

  // Prefill the form with the timetable data
  fillForm(timetable: any): void {
    this.timetableForm.patchValue({
      note: timetable.note,
      study_sessions_id: timetable.study_sessions_id,
      group_student: timetable.group_student,
      batch: timetable.batch,
      generation: timetable.generation,
      major_id: timetable.major_id,
      teacher_id: timetable.teacher_id,
      subject_id: timetable.subject_id,
      room_id: timetable.room_id,
      years: timetable.years,
      semester: timetable.semester
    });
  }

  // Update the timetable when the form is submitted
  onSubmit(): void {
    if (this.timetableForm.invalid) {
      return;
    }

    const updatedTimetable = this.timetableForm.value;

    this.apiService.update('timetable', this.timetableId, updatedTimetable).subscribe(
      (response) => {
        this.router.navigate(['/timetables']); // Navigate back to the timetables list
      },
      (error) => {
        console.error('Error updating timetable:', error);
        this.message = 'Failed to update timetable';
      }
    );
  }

  // Reset the form if needed
  resetForm(): void {
    this.timetableForm.reset();
  }


  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.log('No history available, cannot go back.');
    }
  }
}