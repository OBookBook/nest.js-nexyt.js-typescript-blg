import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

// http://localhost:5000/posts
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  // @NOTE: テストデータ server/json/post_data.json に配置
  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }

  @Get(':id')
  findById(@Param('id') id: string): PostType | undefined {
    return this.postsService.findById(id);
  }
}
