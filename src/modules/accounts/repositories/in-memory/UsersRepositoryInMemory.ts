import { User } from '../../../../database/entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepositories';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ username, email, name, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      username,
      email,
      name,
      password,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { UsersRepositoryInMemory };
