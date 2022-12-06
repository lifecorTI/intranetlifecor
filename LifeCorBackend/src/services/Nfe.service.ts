import { prisma } from "../prisma";
import fs from "fs";
import { randomUUID } from "crypto";
import { AppError } from "../errors/AppError";

class NfeService {
  async create(userId: string, path: any) {
    const read = fs.readFileSync(path.path, "utf-8");
    const uuid = randomUUID();
    const xmlAlreadyExists = await prisma.$executeRawUnsafe(
      'SELECT * FROM "Nfe" WHERE name = $1;',
      path.filename
    );
    fs.unlink(path.path, (err) => {
      if (err) throw err;
      console.log("file temporary removed!");
    });
    if (xmlAlreadyExists) {
      throw new AppError("already exists in the database", 409);
    }
    await prisma.$executeRawUnsafe(
      'INSERT INTO "Nfe" ("id" ,"name" , "userId" , "content" ) VALUES ($1 , $2,$3 ,cast($4 as xml));',
      uuid,
      path.filename,
      userId,
      read
    );

    await prisma.$disconnect();
    return "nfe armazenada com sucesso";
  }

  async findMany() {
    const findNfe = await prisma.$queryRawUnsafe(`SELECT * FROM "Nfe";`);

    await prisma.$disconnect();

    return findNfe;
  }
}

export { NfeService };
