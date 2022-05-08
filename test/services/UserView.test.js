const UserView = require('./../../app/views/UserView')

describe ("Test for UserView", ()=>{

    test("Return 1: an error object when try to create a new user wit a null payload", ()=>{

        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/usingmatchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return 2: an error object when try to create a new user with a payload with invalid properties",()=>{

        const payload = {username:null, name: 12, id:"id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesita tener un valor válido/)

    })
    test("Return 3: an error object when try to create a new user with a payload with invalid properties",()=>{

        const payload = {username:"Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesita tener un valor válido/)

    })
    test("Return 4: an error object when try to create a new user with a payload with invalid properties",()=>{

        const payload = {username:"Username",id:1,name:"name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.name).toBe("username")
        expect(result.name).toBe("1")


    })


})