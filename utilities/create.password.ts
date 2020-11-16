import * as bcrypt from 'bcryptjs';

async function createPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 8);
}

console.log(process.argv);

createPassword(process.argv[2])
  .then((passwordHash) => {
    console.log(
      `create password hash for password: ${process.argv[2]} ${passwordHash}`,
    );
  })
  .catch((error) => console.error(error));
