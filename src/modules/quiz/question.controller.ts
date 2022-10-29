import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { Question } from './question.entity';
import { QuestionService } from './question.service';
import { QuizService } from './quize.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post('/')
  @HttpCode(200)
  async createQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizid);
    return this.questionService.createQuestion(question, quiz);
  }
}
