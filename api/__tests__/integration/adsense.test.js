const request = require('supertest');
const app = require('../../src/app');
const factory = require('../factories')
const truncate = require('../utils/truncate');
const faker = require('faker');

describe("Authenticate", () => {

  beforeEach(async () => {
    await truncate();
  });

  it("should verify if have token jwt with miss token failed", async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })

    const response = await request(app)
      .post('/adsense/register')
      .send({
        type: "learnTolear",
        learn: "Java",
        teach: "Go",
      });
    expect(response.status).toBe(401);
  });

  it("should verify if have token jwt with token invalid failed", async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })

    // console.log(usersInsert)
    const response = await request(app)
      .post('/adsense/register')
      .set("Authorization", `Bearer wwdxmlwlxmw`)
      .send({
        type: "learnTolear",
        learn: "Java",
        teach: "Go",
       });
    expect(response.status).toBe(401);
  });
  it("should verify if have token jwt with token valid success", async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })

    console.log(usersInsert.generateToken())
    const response = await request(app)
      .post('/adsense/register')
      .set("Authorization", `Bearer ${usersInsert.generateToken()}`)
      .send({
        type: "learnTolear",
        learn: "Java",
        teach: "Go",
        value: "0"
      });
    expect(response.status).toBe(200);
  });
  
  it("should verify if accept all data null", async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })

    const response = await request(app)
      .post('/adsense/register')
      .set("Authorization", `Bearer ${usersInsert.generateToken()}`)
      .send({
        type: undefined,
        learn: undefined,
        teach: undefined,
       });
    expect(response.status).toBe(401);
  });

  it("should verify if have all date", async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })

    const response = await request(app)
      .post('/adsense/register')
      .set("Authorization", `Bearer ${usersInsert.generateToken()}`)
      .send({
        type: "java",
        learn: "koltin",
        teach: "money",
        value:"33,00"
      });
    expect(response.status).toBe(200);
});




});