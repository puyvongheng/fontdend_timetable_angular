import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { SharedModule } from './../../shared/shared.module';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-totalscore',
  imports: [SharedModule],
  templateUrl: './totalscore.component.html',
  styleUrl: './totalscore.component.css'
})
export class TotalscoreComponent {


  scores1rank: any[] = []; // Array to hold scores data

  constructor(
    private ApiService: ApiService,
    private route: ActivatedRoute // 👈 Inject ActivatedRoute
  ) {
    
  }

  totalStudents: number = 0; // Variable to hold the total number of students



  // Filters and get data for m input 
  @Input() filters = {
    student_id: '',
    exam_id: '',
    subject_id: '',
    teacher_id: '',
    major_id: '',
    generation: '',
    batch: '',
    group_student: '',
    shift_name: ''
  };


  @Input() filters_only_student_id: string = ''; // 👈 this fixes the error



  get filteredScoresByStudentAndSubject(): any[] {
    return this.scores1rank.filter(score =>
      (!this.filters_only_student_id || score.student_id == this.filters_only_student_id) 
    );
  }

  filteredScoresByStudentId(): any[] {
    if (!this.filters_only_student_id) {
      return this.scores1rank;
    }

    return this.scores1rank.filter(score =>
      score.student_id?.toString() === this.filters_only_student_id
    );
  }




  ngOnInit() {




    
    // get data form params add to fillter 
    this.route.queryParams.subscribe(params => {
      this.filters.student_id = params['student_id'] || this.filters.student_id;
      this.filters.exam_id = params['exam_id'] || this.filters.exam_id;
      this.filters.major_id = params['major_id'] || this.filters.major_id;
      this.filters.generation = params['generation'] || this.filters.generation;
      this.filters.batch = params['batch'] || this.filters.batch;
      this.filters.group_student = params['group_student'] || this.filters.group_student;
      this.filters.shift_name = params['shift_name'] || this.filters.shift_name;
      this.filters.subject_id = params['subject_id'] || this.filters.subject_id;
      // Load data after filters are populated
      this.load_majors_fillter(this.filters.major_id);
      this.load_total_scores2();
      this.load_exams(this.filters.exam_id)
    });

    
  }

  load_total_scores2() { 
    this.ApiService.get('students/total_scores2', this.filters).subscribe({
      next: (data: any) => {
        this.totalStudents = data.total_students;
        this.scores1rank = data.results;
      }
    });
  }


  majors_fillter: any = [] = []
  load_majors_fillter(id: string) {
    this.ApiService.get(`/majors/fillter/${id}`).subscribe({
      next: (data: any) => this.majors_fillter = data,
      error: (err) => console.error('Error loading major filter:', err)
    });
  }



  exam: any; // <-- add this
  load_exams(id: string) {
    this.ApiService.get(`/students/exams/${id}`).subscribe({
      next: (data: any) => this.exam = data.exam, // ✅ FIXED LINE
      error: (err) => console.error('Error loading major filter:', err)
    });
  }




 

}
