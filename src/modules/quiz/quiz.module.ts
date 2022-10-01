import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quize.service';

@Module({
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {}