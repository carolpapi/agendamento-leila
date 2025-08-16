# API de Agendamento - Salão de Beleza

## Descrição
API RESTful para agendamento de horários e serviços em um salão de beleza. Desenvolvida para fins de estudo e testes de software, com armazenamento em memória e comunicação via JSON.

## Tecnologias Utilizadas
- Node.js
- Express
- Swagger (OpenAPI)

## Instalação
1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor:
   ```
   node src/server.js
   ```

## Exemplos de Requisições
### Agendar um serviço
```
POST /agendamentos
Content-Type: application/json
{
  "nome": "Maria Souza",
  "telefone": "11999999999",
  "data": "2025-08-16",
  "horario": "10:00",
  "tipoDeServico": "Corte de Cabelo"
}
```

### Resposta de sucesso (201)
```
{
  "nome": "Maria Souza",
  "telefone": "11999999999",
  "data": "2025-08-16",
  "horario": "10:00",
  "tipoDeServico": "Corte de Cabelo"
}
```

### Resposta de erro (400)
```
{
  "erro": "Data ou horário indisponível."
}
```

## Documentação Swagger
Acesse a documentação interativa em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
