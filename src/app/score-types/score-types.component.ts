import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-score-types',
  imports: [SharedModule],
  templateUrl: './score-types.component.html',
  styleUrl: './score-types.component.css'
})
export class ScoreTypesComponent {

   ngOnInit() {
      this.load_exams()
    }
    constructor(
      private apiService:ApiService
    ) {}
  score_types:any[]=[]
    load_exams() {
      this.apiService.get(`/students/score_types`).subscribe({
        next: (data: any) => this.score_types = data.score_types,
        error: (err) => console.error('Error loading major filter:', err)
      });
    }

}
