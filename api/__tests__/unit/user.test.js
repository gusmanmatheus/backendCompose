const {user} = require('../../src/app/models');
const truncate = require('../utils/truncate');
 describe('User',() => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password',async () => {
    const usersInsert = await user.create({
      name:"Matheus",
      email:"matheusenrik@hotmail.com",
      password:"12345",
      green_coins:"0",
      orange_coins:"0",
      birth_date:"00/00/00",
      work:"programador"
    });
  
   const compareHash = await usersInsert.checkPassword('12345');
     expect(compareHash).toBe(true)
  })
});