import { Component, Input, OnInit } from '@angular/core';
import { Question, QuestionType, SurveyPage } from '../../../../models/Survey';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { StarsRatingComponent } from '../stars-rating/stars-rating.component';
@Component({
  selector: 'sup-question',
  templateUrl: './question.component.html',
  imports: [
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    StarsRatingComponent
  ],
  styleUrl: './question.component.scss',
  standalone: true
})
export class QuestionComponent implements OnInit {
  questionType = QuestionType
  @Input() question: Question | undefined
  
  ngOnInit(): void {
    console.log(this.question);
  }
}
