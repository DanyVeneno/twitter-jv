const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () =>{

	test("1: Create a new user using the UserService",()=>{


		const user = UserService.crate(1,"daniel","danny")
		expect(user.username).toBe("daniekl")
		expect(user.name).toBe("danny")
		expect(user.id).toBe)(1)
		expect(user.bio).not.toBeUndefined()


	})
})
