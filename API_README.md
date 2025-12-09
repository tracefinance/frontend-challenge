# Serviço de API de Transações

Uma API REST baseada em TypeScript para gerenciar transações financeiras com suporte para tipos de pagamento PIX e TED.

A API estará disponível em `https://fe-challenge-trace-api-production.up.railway.App`.

## Endpoints da API

### Health Check

```
GET /health
```

**Resposta:**

```json
{
  "status": "ok",
  "timestamp": "2024-12-09T10:00:00.000Z"
}
```

### Listar Transações

```
GET /api/transactions
```

**Parâmetros de Query:**

| Parâmetro   | Tipo   | Obrigatório | Padrão | Descrição                                            |
| ----------- | ------ | ----------- | ------ | ---------------------------------------------------- |
| `page`      | number | Não         | 1      | Número da página atual                               |
| `limit`     | number | Não         | 20     | Itens por página (máx: 100)                          |
| `search`    | string | Não         | -      | Buscar por descrição ou ID da transação              |
| `status`    | string | Não         | -      | Filtrar por status: `COMPLETED`, `PENDING`, `FAILED` |
| `currency`  | string | Não         | -      | Filtrar por moeda: `BRL`, `USD`, `EUR`               |
| `startDate` | string | Não         | -      | Filtrar a partir da data (formato ISO 8601)          |
| `endDate`   | string | Não         | -      | Filtrar até a data (formato ISO 8601)                |

**Exemplo de Requisição:**

```bash
curl "http://localhost:8080/api/transactions?page=1&limit=10&status=COMPLETED&currency=BRL"
```

**Resposta:**

```json
{
  "data": [
    {
      "id": "tx-1",
      "description": "Pagamento fornecedor",
      "type": "PIX",
      "amount": 150000,
      "currency": "BRL",
      "status": "COMPLETED",
      "createdAt": "2024-12-08T10:30:00.000Z",
      "cpfCnpj": "12345678901",
      "pixKey": "fornecedor@email.com",
      "keyType": "EMAIL"
    }
  ],
  "meta": {
    "total": 15,
    "page": 1,
    "limit": 10,
    "totalPages": 2,
    "previousCursor": null,
    "nextCursor": 2
  }
}
```

**Cursores de Paginação:**

- `previousCursor`: Número da página anterior (`null` se estiver na primeira página)
- `nextCursor`: Número da próxima página (`null` se estiver na última página)

### Criar Transação

```
POST /api/transactions
```

**Corpo da Requisição:**

#### Transação PIX

```json
{
  "type": "PIX",
  "amount": 150000,
  "cpfCnpj": "12345678901",
  "pixKey": "example@email.com",
  "keyType": "EMAIL",
  "description": "Descrição opcional"
}
```

**Campos obrigatórios:**

- `type` - Deve ser `"PIX"`
- `amount` - Inteiro em centavos (ex: 150000 = R$ 1.500,00)
- `cpfCnpj` - CPF (11 dígitos) ou CNPJ (14 dígitos)
- `pixKey` - Valor da chave PIX
- `keyType` - Um de: `EMAIL`, `PHONE`, `CPF`, `CNPJ`, `RANDOM`

**Campos opcionais:**

- `description` - Descrição da transação

#### Transação TED

```json
{
  "type": "TED",
  "amount": 250000,
  "cpfCnpj": "12345678000190",
  "bank": "001",
  "account": "12345-6",
  "agency": "0001",
  "accountType": "CORRENTE",
  "description": "Descrição opcional"
}
```

**Campos obrigatórios:**

- `type` - Deve ser `"TED"`
- `amount` - Inteiro em centavos
- `cpfCnpj` - CPF (11 dígitos) ou CNPJ (14 dígitos)
- `bank` - Código do banco
- `account` - Número da conta
- `agency` - Número da agência
- `accountType` - Um de: `CORRENTE`, `POUPANCA`

**Campos opcionais:**

- `description` - Descrição da transação

**Resposta de Sucesso (201 Created):**

```json
{
  "id": "tx-16",
  "type": "PIX",
  "amount": 150000,
  "currency": "BRL",
  "status": "PENDING",
  "createdAt": "2024-12-09T10:00:00.000Z",
  "cpfCnpj": "12345678901",
  "pixKey": "example@email.com",
  "keyType": "EMAIL",
  "description": "Descrição opcional"
}
```

**Resposta de Erro (400 Bad Request):**

```json
{
  "status": 400,
  "message": "Validation error",
  "errors": [
    {
      "field": "amount",
      "message": "Number must be greater than 0"
    }
  ]
}
```

## Regras de Validação

### CPF/CNPJ

- CPF: Exatamente 11 dígitos
- CNPJ: Exatamente 14 dígitos
- Validação apenas de formato (sem verificação de dígitos verificadores)

### Valor

- Deve ser um inteiro positivo
- Armazenado em centavos (ex: 100 = R$ 1,00)

### Tipo de Transação

A API valida campos obrigatórios com base no tipo de transação:

**PIX:** Requer `pixKey` e `keyType`
**TED:** Requer `bank`, `account`, `agency` e `accountType`

## Valores de Enum

A API usa os seguintes valores de enum para vários campos. Use esses valores exatos ao criar transações ou filtrar:

### Tipo de Transação

| Valor | Descrição                 |
| ----- | ------------------------- |
| `PIX` | Tipo de pagamento PIX     |
| `TED` | Tipo de transferência TED |

### Status da Transação

| Valor       | Descrição                       |
| ----------- | ------------------------------- |
| `COMPLETED` | Transação concluída com sucesso |
| `PENDING`   | Transação pendente              |
| `FAILED`    | Transação falhou                |

**Uso:** Filtrar transações por status no parâmetro de query `?status=COMPLETED`

### Moeda

| Valor | Descrição       |
| ----- | --------------- |
| `BRL` | Real Brasileiro |
| `USD` | Dólar Americano |
| `EUR` | Euro            |

**Uso:** Filtrar transações por moeda no parâmetro de query `?currency=BRL`

### Tipo de Chave PIX

Usado ao criar transações PIX (campo `keyType`):

| Valor    | Descrição              | Exemplo                                |
| -------- | ---------------------- | -------------------------------------- |
| `EMAIL`  | Endereço de e-mail     | `user@example.com`                     |
| `PHONE`  | Número de telefone     | `+5511987654321`                       |
| `CPF`    | Número do CPF          | `12345678901`                          |
| `CNPJ`   | Número do CNPJ         | `12345678000190`                       |
| `RANDOM` | Chave aleatória (UUID) | `a1b2c3d4-e5f6-7890-abcd-ef1234567890` |

### Tipo de Conta

Usado ao criar transações TED (campo `accountType`):

| Valor      | Descrição      |
| ---------- | -------------- |
| `CORRENTE` | Conta corrente |
| `POUPANCA` | Conta poupança |

### Dados de Mock

A API inclui 15 transações pré-populadas com vários tipos, status e moedas para fins de teste.

## Códigos de Status de Resposta

- `200 OK` - Requisição GET bem-sucedida
- `201 Created` - Requisição POST bem-sucedida
- `400 Bad Request` - Erro de validação
- `500 Internal Server Error` - Erro do servidor
