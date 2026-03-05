//asyncHandler executa meu controller e, se der erro, manda pro middleware automaticamente.
// recebe a função e retorna outra funão pra ser executada e se der erro manda ao middleware

module.exports = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}