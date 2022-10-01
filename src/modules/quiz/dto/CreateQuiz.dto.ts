import { IsNotEmpty, Length } from "class-validator"

export class CreateQuizDto {

  @IsNotEmpty({ message: 'Title should not be empty' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'description Should Not be empty' })
  @Length(10)
  description: string;

}
