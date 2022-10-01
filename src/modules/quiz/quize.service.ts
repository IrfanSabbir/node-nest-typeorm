import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getService(): number[]  {
    return [1,2,3]
  }

  postService(): string  {
    return 'This action adds a new cat';
  }
}
