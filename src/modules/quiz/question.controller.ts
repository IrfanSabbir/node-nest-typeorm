import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/CreateQuestion.dto";
import { QuestionService } from "./question.service";

@Controller()
export class QuestionController {

  constructor(private questionService: QuestionService) {}

  @Post('/question')
  @HttpCode(200)

  async createQuestion (@Body() question: CreateQuestionDto) {
    return this.questionService.createQuestion(question);
  }
}
