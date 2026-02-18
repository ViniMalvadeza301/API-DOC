//middleware serve para pegar os erros que acontecem durante a requesição e retornar para o controller

module.exports = (err, req, res, next) => {
    console.error(err);

    if (err.message === 'SEM_TITULO') {
        return res.status(400).json({ message: "sem titulo" });
    }

    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({ message: "id não encontrado" });
    }

    return res.status(500).json({ message: "erro interno no servidor" });
};
