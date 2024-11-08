```markdown
# Configuração do Projeto

Este projeto utiliza TypeScript, Jest para testes, Express para o servidor, e outras dependências úteis para o desenvolvimento. Abaixo estão os passos necessários para configurar e executar o ambiente de desenvolvimento.

## Instalação das Dependências

1. **Instalar o TypeScript como dependência de desenvolvimento:**

   ```bash
   npm install typescript -D
   ```

2. **Instalar as definições de tipo do Jest:**

   ```bash
   npm i --save-dev @types/jest
   ```

3. **Instalar o Express e suas definições de tipo, além de dotenv para variáveis de ambiente:**

   ```bash
   npm i express @types/express dotenv
   ```

4. **Instalar o Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento:**

   ```bash
   npm i nodemon
   ```

5. **Instalar o Supertest para facilitar os testes HTTP:**

   ```bash
   npm i -D supertest
   ```

6. **Instalar o Yup para validação de esquemas:**

   ```bash
   npm i -S yup
   ```

## Rodando o Projeto

1. **Executar os testes:**

   Para rodar os testes do projeto com o Jest, use o seguinte comando:

   ```bash
   npm test
   ```

2. **Iniciar o servidor em modo de desenvolvimento (usando Nodemon):**

   ```bash
   npm run dev
   ```

## Instalação Limpa

Se você deseja garantir que todas as dependências estejam instaladas corretamente, execute:

```bash
npm ci
```

Este comando faz uma instalação limpa das dependências, garantindo que a versão exata de cada pacote seja instalada conforme especificado no `package-lock.json`.
```

Este README contém os comandos essenciais para configurar, testar e rodar seu projeto. Se você tiver outras configurações ou detalhes específicos para adicionar, é só ajustar conforme necessário!