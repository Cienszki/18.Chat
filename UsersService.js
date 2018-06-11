class UsersService {
    constructor(){
        this.users = []; // czemu bez this.state
    }
    getAllUsers(){
        return this.users;
    }
    getUserById(userId){
        return this.users.filter(user => user.id === userId);
    }
    addUser(user){
        this.users = [user, ...this.users];
    }
    removeUser(userId){
        this.users = this.users.filter(user => user.id !== userId);
    }
}

module.exports = UsersService;