import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Answer, SurveyPage } from '../../models/Survey';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private answerStore: Record<string, Answer> = {};

  constructor(private http: HttpClient) {
    //Load stored data
    const storedData = localStorage.getItem('answers');
    if (storedData) this.answerStore = JSON.parse(storedData);
  }

  /**
   * Gets survey questions to ask the user.
   * (Name should be a file name in the assets folder without the extension. e.g. simple-survey)
   */
  getSurvey(name: string): Promise<SurveyPage[]> {
    return firstValueFrom(this.http.get<SurveyPage[]>(`/assets/${name}.json`));
  }

  /**
   * Pretend to save user answers. This stores the answers in local storage, and waits for bit to mock a server connection.
   */
  async saveAnswers(answers: Answer[]): Promise<void> {
    //Store in memory
    for (const a of answers) {
      const key = `${a.pageId}-${a.questionId}`;
      this.answerStore[key] = a;
    }

    //Store in local storage to persist through page reloads
    localStorage.setItem('answers', JSON.stringify(this.answerStore));

    //To make it seem async, let's throw in some delay
    return await new Promise((res) => setTimeout(res, 1500));
  }

  /**
   * Get stored answers.
   */
  async getAnswers(): Promise<Answer[]> {
    //To make it seem async, let's throw in some delay
    await new Promise((res) => setTimeout(res, 1500));

    return Object.values(this.answerStore);
  }
}
