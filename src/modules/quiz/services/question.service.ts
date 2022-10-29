import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async getQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id },
      relations: ['quiz', 'options'],
    });
  }

  async createQuestion(
    questionData: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestions = await this.questionRepository.save({
      name: questionData.name,
    });
    quiz.questions = [...quiz.questions, newQuestions];
    await quiz.save();
    return newQuestions;
  }
}
