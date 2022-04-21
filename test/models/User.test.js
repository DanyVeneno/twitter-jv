const User = require('./../../app/models/user')


describe("Unit test for user class", () => {



	test('Create an user object',() => {

//aqui invocas el codigo que vas a usar en la app
const User = new User(1,"venenodigital","Danny Veneno","bio","dateCreated","lastUpdated")
//aqui validas los resultados de este código
//Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)
expect(user.id).toBe(1)
expect(user.username).toBe("venenodigital")
expect(user.name).toBe("Danny Veneno")
expect(user.bio).toBe("bio")
expect(user.dateCreated).toBe("dateCreated")
expect(user.lastUpdated).toBe("lastUpdatedgit push -u origin maingit push -u origin main")
	});	

})
