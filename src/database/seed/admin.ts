import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';
import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, username, password, "isAdmin", created_at ) 
      values('${id}', 'admin', 'admin@brokerx.com.br', 'admin', '${password}', true, 'now()')`
  );
}

create().then(() => console.log('User admin created!'));
