const {User} = require('../../src/app/models')
describe("Authenticate", () => {
   it("shold sum two numbers", async() => {
    const user = await User.create({name:"Matheus",email:"matheusenrik@hotmail.com",password_hash:"1234"});
    console.log(user)
    expect(user.email).toBe("matheusenrik@hotmail.com");

  });
});