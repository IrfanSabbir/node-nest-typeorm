import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { Param, UsePipes } from '@nestjs/common/decorators';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';
import { QuizService } from './quize.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getQuiz() {
    this.quizService.getService();
  }

  @Get('/:id')
  @HttpCode(200)
  getQUizBYId(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return this.quizService.getQuizById(id);
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.postService(quizData);
  }
}
