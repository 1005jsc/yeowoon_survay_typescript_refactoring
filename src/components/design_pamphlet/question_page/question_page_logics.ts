// 점수

export type TypeOfPersonalityPointsIndex =
  | 'improvisive'
  | 'exploring'
  | 'onPlanning'
  | 'efficient'
  | 'passionate'
  | 'flexing'
  | 'relaxing'
  | 'safetyConcerning';

type TypeOfPersonalityPoints = {
  [key in TypeOfPersonalityPointsIndex]: number;
};

const personalityPointsFromStart: TypeOfPersonalityPoints = {
  improvisive: 0,
  exploring: 0,
  onPlanning: 0,
  efficient: 0,
  passionate: 0,
  flexing: 0,
  relaxing: 0,
  safetyConcerning: 0,
};

export type TypeOfQuestionPageLogicAddPoints = (
  personalityIndex: TypeOfPersonalityPointsIndex,
  score: number
) => void;

export type TypeOfQuestionPageLogic = {
  personalityPointsFromStart: TypeOfPersonalityPoints;
  addPoints: TypeOfQuestionPageLogicAddPoints;
  resetPoints: () => void;
};

export const QuestionPageLogic: TypeOfQuestionPageLogic = {
  personalityPointsFromStart: personalityPointsFromStart,
  addPoints(personalityIndex: TypeOfPersonalityPointsIndex, score: number) {
    this.personalityPointsFromStart[personalityIndex] = +score;
  },
  resetPoints() {
    this.personalityPointsFromStart = personalityPointsFromStart;
  },
};

export interface InterfaceOfQuestionPageLogic {
  personalityPointsFromStart: TypeOfPersonalityPoints;
  addPoints: (personalityIndex: TypeOfPersonalityPointsIndex, score: number) => void;
  resetPoints: () => void;
}

class QuestionPageLogicClass {
  personalityPointsFromStart = personalityPointsFromStart;

  addPoints(personalityIndex: TypeOfPersonalityPointsIndex, score: number) {
    this.personalityPointsFromStart[personalityIndex] = +score;
    // console.log(personalityIndex);
    // console.log(score);
    // console.log(this.personalityPointsFromStart);
  }
  resetPoints() {
    this.personalityPointsFromStart = personalityPointsFromStart;
  }
}

export const QuestionPageLogic2: InterfaceOfQuestionPageLogic = new QuestionPageLogicClass();
