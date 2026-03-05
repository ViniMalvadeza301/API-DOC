//O controller serve para pegar requests HTTP dos clientes e enviar as informações para o services fazer a logica,
//sql e lançar erros para o controller que finalmente vai fazer o tratamento de erros e enviar uma response ao cliente   

const asyncHandler = require('../middleware/asyncHandler');
const tarefasServices = require('../services/tarefas.service');

// pega todas as tarefas
exports.getTarefas = asyncHandler(async (req, res) => {
    const tarefas = await tarefasServices.listar();

    res.status(200).json({
        message: "sucesso",
        data: tarefas
    });
});

// cria uma nova tarefa
exports.createTarefa = asyncHandler(async (req, res) => {
    const tarefa = await tarefasServices.create(req.body);

    res.status(201).json({
        message: "tarefa criada",
        data: tarefa // manda o id como objeto pra ficar mais clean
    });
});

// atualiza uma tarefa
exports.updateTarefa = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao } = req.body;

    const tarefa = await tarefasServices.atualizar({ id, titulo, descricao });

    res.status(200).json({
        message: "tarefa atualizada",
        data: tarefa
    });
});

// deleta uma tarefa
exports.deleteTarefa = asyncHandler(async (req, res) => {
    const { id } = req.params;

    await tarefasServices.deletar({ id });

    res.status(200).json({ message: "tarefa deletada" });
});