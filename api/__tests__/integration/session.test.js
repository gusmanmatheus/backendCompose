const request = require('supertest');
const app = require('../../src/app');
const factory = require('../factories')
const truncate = require('../utils/truncate');
describe("Authenticate", () => {

  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate whith valid credentials", async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })
    console.log(usersInsert)
    const response = await request(app)
      .post('/session')
      .send({
        email: "matheusenrik@hotmail.com",
        password: "ola"
      });
    // expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("token");

  });

  it('should not authenticate with invalid credentials', async () => {
    const usersInsert = await factory.create('user', {
      password: "123123"
    })
    const response = await request(app)
      .post('/session')
      .send({
        email: "matheusgenrik2@gmail.com",
        password: "121212"
      });

    expect(response.status).toBe(401);
  });

  it('should not authenticate with email void', async () => {
    const usersInsert = await factory.create('user', {
      email: ""
    })
    const response = await request(app)
      .post('/session')
      .send({
        email: "",
        password: "abc"
      });

    expect(response.status).toBe(401);
  });

  it('should not authenticate with email error', async () => {
    const usersInsert = await factory.create('user', {
     })
    const response = await request(app)
      .post('/session')
      .send({
        email: "dddd",
       });

    expect(response.status).toBe(401);
  });


  it('should not authenticate with password void', async () => {
    const usersInsert = await factory.create('user', {});
    const response = await request(app)
      .post('/session')
      .send({
        email: "henrik@hotmail.com",
        password: ""
      });

    expect(response.status).toBe(401);
  });
});