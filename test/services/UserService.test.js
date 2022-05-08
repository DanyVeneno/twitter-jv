const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () =>{

	test("1: Create a new user using the UserService",()=>{


		const user = UserService.create(1,"daniel","danny")
		expect(user.username).toBe("daniel")
		expect(user.name).toBe("danny")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()


	})

	test("2: Get all user data in a list", () =>{

		const user = UserService.create(1,"daniel","daniel")
		const userInfoList =  UserService.getInfo(user)
		expect(userInfoList[0]).toBe(1)
		expect(userInfoList[1]).toBe("daniel")
		expect(userInfoList[2]).toBe("daniel")
		expect(userInfoList[3]).toBe("sin bio")
	})

	test("3: Update username",()=>{

		const user = UserService.create(1,"daniel","danny")
		UserService.updateUserUsername(user,"danny veneno")
		expect(user.username).toBe("daniel")

	})
})
