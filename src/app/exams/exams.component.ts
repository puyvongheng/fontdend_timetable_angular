import { ApiService } from './../service/api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { gsap } from 'gsap';

@Component({
  selector: 'app-exams',
  imports: [SharedModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {



  


  






  ngOnInit() {


    this.load_exams()
  }
  constructor(
    private apiService:ApiService
  ) {}
  exams:any[]=[]
  load_exams() {
    this.apiService.get(`/students/exams`).subscribe({
      next: (data: any) => this.exams = data.exams,
      error: (err) => console.error('Error loading major filter:', err)
    });
  }

}
