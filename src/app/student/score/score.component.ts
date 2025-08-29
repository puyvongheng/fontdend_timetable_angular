import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { SharedModule } from './../../shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-score',
  imports: [SharedModule ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {


  ngOnInit(): void {

    // ⬇️ Auto-populate filters from URL query params
    this.route.queryParams.subscribe(params => {
      this.filters.student_id = params['student_id'] || '';
      this.filters.exam_id = params['exam_id'] || '1';
      this.filters.subject_id = params['subject_id'] || '';
      this.filters.teacher_id = params['teacher_id'] || '';
      this.filters.major_id = params['major_id'] || '';
      this.filters.generation = params['generation'] || ''; 
      this.filters.batch = params['batch'] || '';
      this.filters.group_student = params['group_student'] || '';
      this.filters.shift_name = params['shift_name'] || '';

      // 🔁 Once filters are populated, load data
      this.loadData();
      this.loadDaatass();

    });


    this.ApiService.get('majors').subscribe({
      next: (data: any) => {
        this.majorOptions = data.map((item: any) => ({
          id: item.id,
          name: item.major_name,
        }));
      }
    });


    this.ApiService.get('subjects').subscribe({
      next: (data: any) => {
        this.subject_idOptions = data.map((item: any) => ({
          id: item.id,
          name: item.name,
        }));
      }
    });

  }
  
  constructor(
   private notification: NzNotificationService,
    
    private ApiService: ApiService,
    private route: ActivatedRoute // 👈 Inject ActivatedRoute
    

  ) {
    
  }

  scores1rank: any[] = []; // Array to hold scores data

  
  scores2: any[] = []; // Array to hold scores data



  // Filters
  filters = {
    student_id: '',
    exam_id: '1',
    subject_id: '',
    teacher_id: '',
    major_id: '1',
    generation: '16',
    batch: '3',
    group_student: '1',
    shift_name: ''
  };


  examOptions = [
    { id: '1', name: 'Exam 1' },
    { id: '2', name: 'Exam 2' },
  ];


  majorOptions : any[]=[];

  shiftOptions = [
    { name: 'Monday-Friday Morning' },
    { name: 'Saturday-Sunday' },
    { name: 'Evening' }
  ];
  subject_idOptions: any[] = [];
    

  onFilterChange(): void {
    this.loadData();
    this.loadDaatass(); // Load data when filters change

  }
  
  loadDaatass(): void {


    let params = new HttpParams(); //this.filters.exam_id
    params = params.set('student_id', this.filters.student_id);
    params = params.set('exam_id', this.filters.exam_id);
    params = params.set('major_id', this.filters.major_id);
    params = params.set('generation', this.filters.generation);
    params = params.set('batch', this.filters.batch);
    params = params.set('group_student', this.filters.group_student);
    params = params.set('shift_name', this.filters.shift_name);
    params = params.set('subject_id', this.filters.subject_id);


    this.ApiService.get('students/total_scores2', params).subscribe({
      next: (data: any) => {
        this.totalStudents = data.total_students;
        this.scores1rank = data.results;
      }
    });

    this.load_exams(this.filters.exam_id)
    this.load_score_types() 
    
  }


  score_types: any[] = []

  load_score_types() {
    this.ApiService.get(`/students/score_types`).subscribe({
      next: (data: any) => this.score_types = data.score_types,
      error: (err) => console.error('Error loading major filter:', err)
    });
  }

  getMaxScoreByName(name: string): number {
    const type = this.score_types.find(t => t.name === name);
    return type ? type.max_score : 100; // default to 100 if not found
  }

    



  exam: any; // <-- add this
  load_exams(id: string) {
    this.ApiService.get(`/students/exams/${id}`).subscribe({
      next: (data: any) => this.exam = data.exam, // ✅ FIXED LINE
      error: (err) => console.error('Error loading major filter:', err)
    });
  }

  totalStudents: number = 0; // Variable to hold the total number of students

  majors_fillter:any=[]=[]
  load_majors_fillter(id: string) {
    this.ApiService.get(`/majors/fillter/${id}`).subscribe({
      next: (data: any) => this.majors_fillter = data,
      error: (err) => console.error('Error loading major filter:', err)
    });
  }




  loadData(): void {

    let params = new HttpParams();
    params = params.set('exam_id', this.filters.exam_id);
    params = params.set('major_id', this.filters.major_id);
    params = params.set('generation', this.filters.generation);
    params = params.set('batch', this.filters.batch);
    params = params.set('group_student', this.filters.group_student);
    params = params.set('shift_name', this.filters.shift_name);
    params = params.set('subject_id', this.filters.subject_id);
    params = params.set('teacher_id', this.filters.teacher_id);
    params = params.set('student_id', this.filters.student_id);

    this.load_majors_fillter(this.filters.major_id)


    this.ApiService.get('students/scores2tess', params).subscribe({
      next: (data: any) => this.scores2 = data,
    });


  }

  scoreTypes: any[] = []; // Array to hold unique score types


  getHeaderKeys(): string[] {
    // Extract keys from the first item and exclude 'Subject Name' and 'Student Name'
    return Object.keys(this.scores2[0]).filter(
      key =>
        key !== 'Subject Name' &&
        key !== 'Student Name' &&
        key !== 'subject_id' &&
        key !== 'Total មធ្យមភាគ' &&
        key !== 'ពិន្ទុកសរុប' &&
        key !== 'ពិន្ទុកសរុប' &&
        key !== 'ពិន្ទុកសរុប With Status' &&
        key !== 'student_id');
  }







  editing: any = {}; // Track editing state for each row




  editingCell: { [key: string]: boolean } = {};

  isEditing(score: any, key: string): boolean {
    return this.editingCell[`${score['Student Name']}_${score['Subject Name']}_${key}`];
  }

  toggleEdit(score: any, key: string): void {
    const cellKey = `${score['Student Name']}_${score['Subject Name']}_${key}`;
    if (this.editingCell[cellKey]) {
      // ✅ Save the new value
      const newValue = score[key];

      // ✅ Check if score is a valid number and not 0
      const parsedScore = parseFloat(newValue);
      if (!newValue || isNaN(parsedScore) || parsedScore === 0) {
        this.notification.warning('ពិន្ទុមិនត្រឹមត្រូវ', 'សូមបញ្ចូលពិន្ទុត្រឹមត្រូវ មិនអាចទទេ ឬ 0 បានទេ។');

        return;
      }


      const payload = {
        student_id: score['student_id'],
        subject_id: score['subject_id'] || this.filters.subject_id,
        score_type: key,
        score: parsedScore,
        exam_id: this.filters.exam_id,
        teacher_id: this.filters.teacher_id || 1,
      };

      this.ApiService.post('students/edit_score', payload).subscribe({
        next: () => {
          
          this.notification.success('ជោគជ័យ', 'បានបង្កើតដោយជោគជ័យ! ');
          delete this.editingCell[cellKey]; // exit edit mode
          this.loadData(); // optionally reload

        },
        error: (err) => {
          console.error('Error updating score:', err);
        }
      });
    } else {
      // ✏️ Enable editing
      this.editingCell[cellKey] = true;
    }
  }

  








  getScoreColor(value: any): any {
    if (typeof value === 'string') {
      if (value.includes('ធ្លាក់') || value.trim().startsWith('0')) {
        return { color: 'red' };
      }
    }
    return { color: 'green' };
  }


}