<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Link para o Font Awesome (ícones) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<h1><i class="fas fa-cogs"></i> Configuração do Projeto</h1>

<p>Este projeto utiliza TypeScript, Jest para testes, Express para o servidor, e outras dependências úteis para o desenvolvimento. Abaixo estão os passos necessários para configurar e executar o ambiente de desenvolvimento.</p>

<h2><i class="fas fa-download"></i> Instalação das Dependências</h2>

<ol>
    <li><strong>Instalar o TypeScript como dependência de desenvolvimento:</strong>
        <pre><code>npm install typescript -D</code></pre>
    </li>
    <li><strong>Instalar as definições de tipo do Jest:</strong>
        <pre><code>npm i --save-dev @types/jest</code></pre>
    </li>
    <li><strong>Instalar o Express e suas definições de tipo, além de dotenv para variáveis de ambiente:</strong>
        <pre><code>npm i express @types/express dotenv</code></pre>
    </li>
    <li><strong>Instalar o Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento:</strong>
        <pre><code>npm i nodemon</code></pre>
    </li>
    <li><strong>Instalar o Supertest para facilitar os testes HTTP:</strong>
        <pre><code>npm i -D supertest</code></pre>
    </li>
    <li><strong>Instalar o Yup para validação de esquemas:</strong>
        <pre><code>npm i -S yup</code></pre>
    </li>
</ol>

<h2><i class="fas fa-play-circle"></i> Rodando o Projeto</h2>

<ol>
    <li><strong>Executar os testes:</strong>
        <p>Para rodar os testes do projeto com o Jest, use o seguinte comando:</p>
        <pre><code>npm test</code></pre>
    </li>
    <li><strong>Iniciar o servidor em modo de desenvolvimento (usando Nodemon):</strong>
        <pre><code>npm run dev</code></pre>
    </li>
</ol>

<h2><i class="fas fa-trash-alt"></i> Instalação Limpa</h2>

<p>Se você deseja garantir que todas as dependências estejam instaladas corretamente, execute:</p>

<pre><code>npm ci</code></pre>

<p>Este comando faz uma instalação limpa das dependências, garantindo que a versão exata de cada pacote seja instalada conforme especificado no <code>package-lock.json</code>.</p>

<h2><i class="fas fa-link"></i> Links Úteis</h2>

<ul>
    <li><a href="https://www.npmjs.com/package/typescript" target="_blank"><i class="fas fa-external-link-alt"></i> TypeScript no NPM</a></li>
    <li><a href="https://jestjs.io/" target="_blank"><i class="fas fa-external-link-alt"></i> Jest - Framework de Testes</a></li>
    <li><a href="https://expressjs.com/" target="_blank"><i class="fas fa-external-link-alt"></i> Express - Framework para Node.js</a></li>
    <li><a href="https://www.npmjs.com/package/nodemon" target="_blank"><i class="fas fa-external-link-alt"></i> Nodemon - Ferramenta para Desenvolvimento</a></li>
    <li><a href="https://github.com/visionmedia/supertest" target="_blank"><i class="fas fa-external-link-alt"></i> Supertest - Testes HTTP</a></li>
    <li><a href="https://github.com/jquense/yup" target="_blank"><i class="fas fa-external-link-alt"></i> Yup - Validação de Esquemas</a></li>
</ul>

</body>
</html>
