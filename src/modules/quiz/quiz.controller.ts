import { Controller, Get, Post } from '@nestjs/common';
import { QuizService } from './quize.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getQuiz() {
    this.quizService.getService();
  }

  @Post('/')
  create() {
    return this.quizService.postService()
  }
}
