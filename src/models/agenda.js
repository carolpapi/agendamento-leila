// Serviços disponíveis
const servicos = [
  'Corte de Cabelo',
  'Escova',
  'Hidratação',
];

// Agenda de horários disponíveis por data (exemplo para 2025-08-16, sábado)
const agenda = {
  '2025-08-16': ['09:00', '10:00', '11:00', '12:00', '13:00'], // Sábado
  '2025-08-12': ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'], // Terça
  // Adicione mais datas conforme necessário
};

module.exports = {
  servicos,
  agenda,
};
