import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatStepper } from "@angular/material/stepper";
import { SurveyPage } from '../../../../models/Survey';
import { SurveyService } from '../../../services/survey.service';
@Component({
  selector: 'sup-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent implements OnInit {
  @ViewChild(MatStepper) stepper: MatStepper | undefined
  @Inject(FormBuilder) fb: FormBuilder | undefined

  SIMPLE_SURVEY = 'simple-survey'
  COMPLEX_SURVEY = 'survey2'
  surveyPages: SurveyPage[] = []

  form: FormArray | undefined

  constructor(
    private surveyService: SurveyService
  ) { }

  async ngOnInit() {
    this.surveyPages = await this.surveyService.getSurvey(this.COMPLEX_SURVEY) ?? []
    // this.form = this.fb!.array([])
    // this.surveyPages.forEach(survey => {
    //   this.form?.push(this.fb?.group({

    //   }))
    // });
  }

  next() {
    this.stepper?.next()
  }
  
  prev() {
    this.stepper?.previous()
  }

  get isLast() {
    return this.stepper && this.stepper?.selectedIndex + 1 == this.stepper.steps.length
  }
}
