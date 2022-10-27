import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizReqository: Repository<Quiz>,
  ) {}

  getService(): number[] {
    return [1, 2, 3];
  }

  async postService(quizData: CreateQuizDto) {
    return await this.quizReqository.save(quizData);
  }
}
