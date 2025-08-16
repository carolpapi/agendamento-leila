const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("Agendamento API", () => {
  it("Deve criar um agendamento com sucesso", async () => {
    const agendamentoData = {
      nome: "Joana Silva", 
      telefone: "1234567890", 
      data: "2025-08-16", 
      horario: "10:00",   
      tipoDeServico: "Corte de Cabelo",  
    };
    const response = await request(app).post("/agendamentos").send(agendamentoData);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("nome").to.equal(agendamentoData.nome);
    expect(response.body).to.have.property("telefone").to.equal(agendamentoData.telefone);
    expect(response.body).to.have.property("data").to.equal(agendamentoData.data);
    expect(response.body).to.have.property("horario").to.equal(agendamentoData.horario);
    expect(response.body).to.have.property("tipoDeServico").to.equal(agendamentoData.tipoDeServico);
  });

});