import { Component, OnInit } from '@angular/core';
import { SurveyPage } from '../../../models/Survey';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'sup-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrl: './survey-page.component.scss',
})
export class SurveyPageComponent implements OnInit {
  pages: SurveyPage[] | undefined;

  constructor(private surveyService: SurveyService) {}

  async ngOnInit(): Promise<void> {
    this.pages = await this.surveyService.getSurvey('simple-survey');

    //Todo handle these pages
    console.log('Gotten Survey Pages', this.pages);
  }
}
