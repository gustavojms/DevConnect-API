export interface LikesInterfaceRepository {
  likePost(authorId: number, postId: number): Promise<void>;
  unlikePost(authorId: number, postId: number): Promise<void>;
}
