import { Body, Controller, Get, Post, HttpCode, Request } from '@nestjs/common';
import { Param, UseGuards, UsePipes } from '@nestjs/common/decorators';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/modules/auth/roles.decorator';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { UserRoles } from 'src/modules/user/enums/user.enum';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@ApiTags('Quiz')
@Controller('/quiz')
@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  @UseGuards(RolesGuard)
  @Roles(UserRoles.ADMIN, UserRoles.MEMBER)
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
  @UsePipes(ValidationPipe)
  @UseGuards(RolesGuard)
  @Roles(UserRoles.ADMIN)
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.postService(quizData);
  }

}
