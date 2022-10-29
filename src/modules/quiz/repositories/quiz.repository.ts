import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@EntityRepository(Quiz)
export class QuizReqository extends Repository<Quiz> {}
