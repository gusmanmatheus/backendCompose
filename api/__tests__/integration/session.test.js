const request = require('supertest');
const app = require('../../src/app');
const factory = require('../factories')
const truncate = require('../utils/truncate');
const faker = require('faker');

describe("Authenticate", () => {

  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate whith valid credentials verify if have token", async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })
    // console.log(usersInsert)
    const response = await request(app)
      .get('/session')
      .send({
        email: "matheusenrik@hotmail.com",
        password: "ola"
      });
    // expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("token");

  });
  it("should authenticate whith invalid credentials"  , async () => {
    const usersInsert = await factory.create('user', {
      email: "matheusenrik@hotmail.com",
      password: "ola"
    })
    // console.log(usersInsert)
    const response = await request(app)
      .get('/session')
      .send({
        email: "matheusenrik@homail.com",
        password: "ola"
      });
     expect(response.status).toBe(401);

  });
1
  it('should not authenticate with invalid credentials', async () => {
    const usersInsert = await factory.create('user', {
      password: "123123"
    })
    const response = await request(app)
      .get('/session')
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
      .get('/session')
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
      .get('/session')
      .send({
        email: "dddd",
       });

    expect(response.status).toBe(401);
  });


  it('should not authenticate with password void', async () => {
    const usersInsert = await factory.create('user', {});
    const response = await request(app)
      .get('/session')
      .send({
        email: "henrik@hotmail.com",
        password: ""
      });

    expect(response.status).toBe(401);
  });


  //////////////////////Register User/////////////////////////////////////
  it('should register verify if have token', async () => {
    const response = await request(app)
    .post('/session/register')
    .send({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      birth_date: "00/00/00",
      work: "programador"});
      expect(response.body).toHaveProperty("token");

  });
  it('should register failed not have data enogh', async () => {
    const response = await request(app)
    .post('/session/register')
    .send({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
       work: "programador"});

      expect(response.status).toBe(401);

  });
  it('should register failed with email exist', async () => {
    const email= faker.internet.email()
    const usersInsert = await factory.create('user', {
      email:email
    });

    const response = await request(app)
    .post('/session/register')
    .send({
      name: faker.name.findName(),
      email: email,
      password: faker.internet.email(),
      birth_date: "00/00/00",
       work: "programador"});
       
      expect(response.status).toBe(401);

  });
});