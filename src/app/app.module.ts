import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyComponent } from './UI/components/survey/survey.component';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { QuestionComponent } from './UI/components/question/question.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [AppComponent, SurveyPageComponent, NotFoundComponent, SurveyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AngularSvgIconModule.forRoot(),
    ...[
      QuestionComponent
    ],
    ...[
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatStepperModule,
    ]
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule { }
