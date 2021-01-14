import "reflect-metadata";
import dotenv from 'dotenv'
import express from "express";
import { createConnection } from "typeorm";
import { __prod__ } from "./constants";
import { join } from "path";
import { User } from "./entities/User";

dotenv.config()

const main = async () => {
  const {DB_USERNAME, DB_PASSWORD} = process.env
  await createConnection({
    type: "postgres",
    database: "vstodo",
    username: DB_USERNAME,
    password: DB_PASSWORD,
    entities: [join(__dirname, "./entities/*.*")],
    logging: !__prod__,
    synchronize: !__prod__,
  });

  const user = await User.create({ name: "bob" }).save();

  console.log({ user });

  const app = express();
  app.get("/", (_req, res) => {
    res.send("hello");
  });
  app.listen(3002, () => {
    console.log("listening on localhost:3002");
  });
};

main();
