
class AppError extends Error { // A superclasse Error é nativa do js ai o appError so fica com a herança dessa superclasse
    constructor(message, statusCode) {
        super(message); // mensagem do erro
        this.statusCode = statusCode; // status HTTP
        this.isOperational = true; // flag pra diferenciar erros de sistema

        Error.captureStackTrace(this, this.constructor); // stack trace bonito
    }
}

module.exports = AppError;