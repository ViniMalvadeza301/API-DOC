//Services tem toda logica sql e lancar erros necessarios para o controller

const db = require('../db');

exports.listar = async () => {
    const [result] = await db.execute('SELECT * FROM tarefas');

    return result;
}

exports.create = async ({titulo, descricao}) => {
    const tituloFormatado = titulo.trim();
    const descricaoFormatada = descricao ? descricao.trim() : null; // descricao?.trim() || null;

    if (!tituloFormatado) {
        throw new Error('SEM_TITULO'); // aponta que deu erro e vai direto pro catch
    }

    const [result] = await db.execute(
        `INSERT INTO tarefas (titulo, descricao)
         VALUES (?, ?)`, [tituloFormatado, descricaoFormatada || null]
    );

    return { id: result.insertId };
}

exports.atualizar = async ({id, titulo, descricao}) => {
    const tituloFormatado = titulo.trim();
    const descricaoFormatada = descricao ? descricao.trim() : null;

    if (!tituloFormatado) {
        throw new Error('SEM_TITULO');
    }

    const [result] = await db.execute(
        `UPDATE tarefas
         SET titulo = ?, descricao = ?
         WHERE id = ?`, [tituloFormatado, descricaoFormatada || null, id]
    );

    if (result.affectedRows === 0) {
        throw new Error('NOT_FOUND');
    }

    return {id};
}

exports.deletar = async ({id}) => {
    

    const [result] = await db.execute(
        `DELETE FROM tarefas
         WHERE id = ?`, [id]
    );

    if (result.affectedRows === 0) {
        throw new Error('NOT_FOUND');
    }

    return {id};
}