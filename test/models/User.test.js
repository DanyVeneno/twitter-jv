const User = require('./../../app/models/user')

describe("Unit test for user class", () => {
test('Requerimiento 1:Creación de objeto user',() => {

//aqui invocas el codigo que vas a usar en la app
const user = new User(1,"venenodigital","Danny Veneno","bio")
//aqui validas los resultados de este código
//Esta es una comparación que va a igualar
//el valor de la izquierda con el valor de la derecha(valor esperado)
expect(user.id).toBe(1)
expect(user.username).toBe("venenodigital")
	})	


test("Requerimiento 2: Fechas en atributos de User", () => {
const user = new User (1,"venenodigital","Danny Veneno","bio")
expect(user.dateCreated).not.toBeUndefined()
expect(user.lastUpdated).not.toBeUndefined()

   })

test("Requerimiento 3: Agregando getters", () => {
const user = new User(1,"venenodigital","Dany Veneno","bio")

expect(user.getUsername).toBe("venenodigital")


	})

})
