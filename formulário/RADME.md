Formulário de Cadastro de Aluno

Descrição
Este projeto contém um formulário HTML semântico e acessível para cadastro de alunos.

Campos do formulário
O formulário possui os seguintes campos:
- Nome
- E-mail
- CPF
- Data de nascimento
- Curso (select)
- Turno (manhã, tarde ou noite)
- Aceite dos termos

Também contém botões de envio e limpar formulário.

Decisões de implementação

Acessibilidade
- Todos os campos possuem `<label for>` explícito para melhorar a acessibilidade.
- Foi utilizado `fieldset` e `legend` para agrupar as opções de turno.
- Foi usado `aria-describedby` no campo CPF para indicar o formato esperado.

Validação
- O campo e-mail utiliza `type="email"` e `required`.
- O campo CPF utiliza `pattern` para aceitar apenas 11 números.
- Foi usado `inputmode="numeric"` para facilitar a digitação em dispositivos móveis.

Semântica
- O formulário foi estruturado com elementos HTML semânticos.
- Os campos foram organizados de forma clara para melhor experiência do usuário.

Estrutura do projeto