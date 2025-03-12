import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

// http://localhost:5000/posts
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
