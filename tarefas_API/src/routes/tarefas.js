/* 
ROUTES..JS
Objetivo: Configurar as rotas para qual mandar a requisição do cliente para a API nos controllers

1 - Importar o express
2 - Criar um router utilizando express.Router();
3 - Importar o controller
4 - Configuras router (rotas) com seu http code é mandar url com ou sem parametros (ex: '/', '/:id') e chamar o controller acima com as regras de negócio
5 - Exportar router
*/

const express = require('express');

const router = express.Router();

const controllers = require('../controllers/tarefasControler');

router.get('/', controllers.getTarefas);
router.post('/', controllers.createTarefa);
router.put('/:id', controllers.updateTarefa);
router.delete('/:id', controllers.deleteTarefa);

module.exports = router;