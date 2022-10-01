import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quize.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getQuiz() {
    this.quizService.getService();
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  create(@Body() quizData: CreateQuizDto) {
    return this.quizService.postService(quizData)
  }
}
