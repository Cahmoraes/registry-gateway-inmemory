import { Post } from '../entities/post.entity'

export interface PostGateway {
  allPosts(): Promise<Post[]>
}
