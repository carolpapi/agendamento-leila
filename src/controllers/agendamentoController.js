const agendamentoService = require('../services/agendamentoService');

exports.criarAgendamento = (req, res) => {
  const resultado = agendamentoService.criarAgendamento(req.body);
  if (resultado.status === 201) {
    return res.status(201).json(resultado.data);
  } else {
    return res.status(400).json({ erro: resultado.erro });
  }
};
