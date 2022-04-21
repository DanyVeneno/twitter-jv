class User {

	constructor(id, username, name, bio, dateCreated, lastUpdated){
		this.id = id
		this.username = username
		this.name = name
		this.bio = bio
		this.dateCreated = dateCreated
		this.lastUpdated = lastUpdated
	}
	getGeneralInfo(){
return `Información de este usuario es:${this.id},${this.username},${this.name},${this.bio}, ${this.dateCreated},${this.lastUpdated}`
  }

}
module.exports = User;








