module.exports = class DefecDto {
    title;
    value;
    constructor(model) {
        this.title=model.title;
        this.value=model.value;
    }
}