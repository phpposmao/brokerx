interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  id?: string;
  avatar?: string;
  isAdmin?: boolean;
}

export { ICreateUserDTO };
