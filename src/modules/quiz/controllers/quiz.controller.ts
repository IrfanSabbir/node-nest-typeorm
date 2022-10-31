import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { Param, UsePipes } from '@nestjs/common/decorators';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { ApiTags } from '@nestjs/swagger';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  async getQuiz(): Promise<[Quiz[], number]> {
    return this.quizService.getService();
  }

  @Get('/:id')
  @HttpCode(200)
  async getQUizBYId(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.postService(quizData);
  }
}
