const messages = {
    required: 'O campo ${path} é obrigatório',
    integer: 'O campo ${path} deve ser um número inteiro',
    positivo: 'O campo ${path} deve ser um número positivo',
    length: 'O campo ${path} deve conter ${length} caracter(es)',
    lowercase: 'O campo ${path} deve ser uma string minúscula',
    oneOf: 'O campo ${path} deve ser um dos seguintes valores ${values}',
    min: 'O campo ${path} deve conter no mínimo ${min} valor(es)',
    max: 'O campo ${path} deve conter no máximo ${max} valor(es)',
    endDate: 'A data de término não pode ser anterior à data de início',
    decimal: 'O campo ${path} deve ser um decimal',
  };
  
  export default messages;