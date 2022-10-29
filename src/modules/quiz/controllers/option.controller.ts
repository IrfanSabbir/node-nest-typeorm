import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from '../dto/createOption.dto';
import { Option } from '../entities/option.entity';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  // : Promise<Option>

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createOptionQuestion(
    @Body() createOption: CreateOptionDto,
  ): Promise<any> {
    const question = await this.questionService.getQuestionById(
      createOption.questionId,
    );
    const optionData = await this.optionService.createOption(
      createOption,
      question,
    );
    return { question, optionData };
  }
}
