import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  quizId: number;
}
