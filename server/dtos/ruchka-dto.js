module.exports = class RuchkaDto {
    workerId
    name
    series
    value
    status
    dolg
    brak
    workerId
    id

    constructor(model) {
        this.id=model.id
        this.workerId=model.workerId
        this.name=model.name
        this.series=model.series
        this.value=model.value
        this.status=model.status
        this.dolg=model.dolg
        this.brak=model.brak
        this.workerId=model.workerId
    }
}