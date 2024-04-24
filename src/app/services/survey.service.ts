import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SurveyPage } from '../../../models/Survey';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  getSurvey(name: string): Promise<SurveyPage[]> {
    return firstValueFrom(this.http.get<SurveyPage[]>(`/assets/${name}.json`));
  }
}
