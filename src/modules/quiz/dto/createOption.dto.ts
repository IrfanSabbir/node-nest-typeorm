import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty({ message: 'Text shouldnt be empty' })
  @Length(3, 255)
  text: string;

  isCorrect?: boolean;

  @IsNotEmpty()
  questionId: number;
}
