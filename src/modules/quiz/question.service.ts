import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { Question } from './question.entity';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}
  async createQuestion(questionData: CreateQuestionDto, quiz: Quiz) {
    const newQuestions = await this.questionRepository.save({
      name: questionData.name,
    });
    quiz.questions = [...quiz.questions, newQuestions];
    await quiz.save();
    return newQuestions;
  }
}
