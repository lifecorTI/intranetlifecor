import app from "../server";
import request from "supertest";
import { prisma } from "../prisma";

let userAdmin = {
  name: "yuran",
  password: "123456",
  isAdmin: true,
};

describe("User tests suits for userService function", () => {
  it("should be able to create a user", async () => {
    const res = await request(app).post("/users").send(userAdmin);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("createdAt");
    expect(res.body).toHaveProperty("updatedAt");
  });

  it("not should be able to create a user already created", async () => {
    await prisma.user.create({
      data: {
        ...userAdmin,
      },
    });

    const res = await request(app).post("/users").send(userAdmin);

    expect(res.status).toBe(409);
    expect(res.body).toHaveProperty("message");
  });
});
