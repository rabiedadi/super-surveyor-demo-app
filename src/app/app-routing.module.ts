import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyComponent } from './UI/components/survey/survey.component';

const routes: Routes = [
  { path: '', component: SurveyComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
