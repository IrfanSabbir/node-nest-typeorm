import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizReqository: Repository<Quiz>,
  ) {}

  async getService(): Promise<[Quiz[], number]> {
    return await this.quizReqository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      // .leftJoinAndSelect('qt.options', 'o')
      .skip(0)
      .take(5)
      .getManyAndCount();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizReqository.findOne({
      where: { id: id },
      relations: ['questions'],
    });
  }

  async postService(quizData: CreateQuizDto) {
    return await this.quizReqository.save(quizData);
  }
}
