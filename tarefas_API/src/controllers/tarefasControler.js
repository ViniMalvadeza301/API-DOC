//O controller serve para pegar requests HTTP dos clientes e enviar as informações para o services fazer a logica,
//sql e lançar erros para o controller que finalmente vai fazer o tratamento de erros e enviar uma response ao cliente   

const tarefasServices = require('../services/tarefas.service');

exports.getTarefas = async (req, res) => {
    try {
        const tarefas = await tarefasServices.listar();

        res.status(200).json({
            message: "sucesso",
            data: tarefas
        })

    } catch (err) {
        res.status(500).json({message: "erro interno no servidor"})
    }
}

exports.createTarefa = async (req, res) => {
    try {
        const tarefa = await tarefasServices.create(req.body);

        res.status(201).json({
            message: "tarefa criada",
            data:  tarefa //manda do id como objeto pra ficar mais clean
        })

    } catch (err) {
        if (err.message === 'SEM_TITULO') {
            return res.status(400).json({message: "sem titulo"});
        }

        res.status(500).json({message: "erro interno no servidor"});
    }
}

exports.updateTarefa = async (req, res) => {
    try {
        const {id} = req.params;

        const {titulo, descricao} = req.body;

        const tarefa = await tarefasServices.atualizar({id, titulo, descricao});

        res.status(200).json(
            {
                message: "tarefa atualizada",
                data: tarefa
            }
        );

    } catch (err) {
        if (err.message === 'SEM_TITULO') {
            return res.status(400).json({message: "sem titulo"});
        }

        if (err.message === 'NOT_FOUND') {
            return res.status(404).json({message: "id não encontrado"});
        }

        res.status(500).json({message: "erro interno no servidor"});
    }
}

exports.deleteTarefa = async (req, res) => {
    try {
        const {id} = req.params;

        const tarefa = await tarefasServices.deletar({id});

        res.status(200).json({message: "tarefa deletada"})

    } catch (err) {
        if (err.message === 'NOT_FOUND') {
            return res.status(404).json({message: "id não encontrado"})
        }
        res.status(500).json({message: "erro interno no servidor"})
    }
}