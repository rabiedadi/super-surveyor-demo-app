export interface SurveyPage {
  id: number;
  title: string;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  type: QuestionType;
}

export enum QuestionType {
  TEXT = 'text',
}
