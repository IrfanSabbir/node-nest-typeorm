import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "./dto/CreateQuestion.dto";
import { Question } from "./question.entity";

@Injectable()

export class QuestionService {

  constructor(@InjectRepository(Question) private questionRepository: Repository<Question>  ) {}
  async createQuestion (questionData: CreateQuestionDto) {
    return await this.questionRepository.save(questionData);
  }
}
