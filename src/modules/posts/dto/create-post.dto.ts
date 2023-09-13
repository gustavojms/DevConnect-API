export class CreatePostDto {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
