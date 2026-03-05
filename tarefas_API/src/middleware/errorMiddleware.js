//middleware serve para pegar os erros que acontecem durante a requesição e retornar para o controller

module.exports = (err, req, res, next) => {
    console.error(err);

    if (err.isOperational) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    // erro inesperado
    return res.status(500).json({ message: 'Erro interno no servidor' });
};
