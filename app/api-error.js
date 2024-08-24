class ApiError {
    constructor(status, message) {
        super();
        this.message = message;
        this.status = status;
        console.log(message)
    }
}

module.exports = ApiError;