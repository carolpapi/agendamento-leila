const { agenda, servicos } = require('../models/agenda');

const agendamentos = [];

function isHorarioDisponivel(data, horario) {
  if (!agenda[data]) return false;
  return agenda[data].includes(horario);
}

function removerHorario(data, horario) {
  if (agenda[data]) {
    agenda[data] = agenda[data].filter(h => h !== horario);
  }
}

function criarAgendamento(payload) {
  const { nome, telefone, data, horario, tipoDeServico } = payload;

  // Validação do serviço
  if (!servicos.includes(tipoDeServico)) {
    return { status: 400, erro: 'Serviço inválido.' };
  }

  // Validação de data e horário disponíveis
  if (!isHorarioDisponivel(data, horario)) {
    return { status: 400, erro: 'Data ou horário indisponível.' };
  }

  // Grava agendamento
  const agendamento = { nome, telefone, data, horario, tipoDeServico };
  agendamentos.push(agendamento);
  removerHorario(data, horario);
  return { status: 201, data: agendamento };
}

module.exports = {
  criarAgendamento,
  agendamentos,
};
