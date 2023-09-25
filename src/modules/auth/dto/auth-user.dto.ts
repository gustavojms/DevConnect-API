export class AuthUserDto {
  access_token: string;
  payload: {
    sub: number;
    username: string;
  };
}
