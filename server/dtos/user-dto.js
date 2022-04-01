module.exports = class UserDto {
    login;
    id;
    isActivated;
    role;
    email;
    code;

    constructor(model) {
        this.role = model.role;
        this.login=model.login
        this.id = model.id;
        this.isActivated = model.isActivated;
        this.email=model.email;
        this.code  =model.code;
    }
}