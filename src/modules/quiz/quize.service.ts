import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getService(): number[]  {
    return [1,2,3]
  }

  postService(quizData): any  {
    return { data: quizData };
  }
}
