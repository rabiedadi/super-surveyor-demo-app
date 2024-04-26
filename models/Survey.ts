/**
 * Represents a page of questions.
 */
export interface SurveyPage {
  /** A unique ID for the page. */
  id: number;

  /** The text shown to the user at the top of the page */
  title: string;

  /** The questions to be asked on this page */
  questions: Question[];
}

/**
 * Represents a question to be asked.
 */
export interface Question {
  /** A unique ID for the question */
  id: number;

  /** The text shown to the user */
  title: string;

  /** The type of question. Currently only 'TEXT' exists. */
  type: QuestionType;
}

/**
 * Different types of questions could exist. e.g. Text, number, select lists, ratings, etc.
 * For now we will only support text.
 */
export enum QuestionType {
  TEXT = 'text',
}

/**
 * This interface represents answers given by the user.
 */
export interface Answer {
  /** The id of the page that the answer was given on */
  pageId: number;

  /** The id of the question */
  questionId: number;

  /** The answer given */
  answer: string;
}
