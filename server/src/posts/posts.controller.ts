import { Controller, Get } from '@nestjs/common';

// http://localhost:5000/posts
@Controller('posts')
export class PostsController {
  @Get()
  findAll() {
    return 'This action returns all posts';
  }
}
