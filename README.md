### Havas Code Challenge

#### Para rodar a aplicação

1. Clone o projeto
2. `cd havas-code-challenge`
3. `npm install` ou `yarn`
4. `npm start` ou `yarn start`

**Com docker**:

3. `docker build -t havas-code-challenge:development .`
4. `docker run -it -p 3000:3000 havas-code-challenge:development`

5) Acesse `localhost:3000`

#### Para executar a suite de testes

1. `npm test` ou `yarn test`
2. Em modo `watch`: `npm run test:watch` ou `yarn test:watch`

#### Pontos de melhorias

1. Definição aprimorada de estilizações em geral (cores, tipografia, layout);
2. Estado de loading inicial e durante transiçõo entre as views;
3. Code splitting, reduzindo os tamanhos dos chunks de js de acordo com a funcionalidade requisitada pelo usuário em tempo de execução;

Apesar de a API utilizada ser um placeholder, alguns pontos válidos de observação:

1. Possibilidade de paginação na listagem de posts, através de um scroll infinito ou de um paginador;
2. A regra de negócio de `Ver mais` poderia e deveria ser embutida na API, talvez em um endpoint separado, permitindo o carregamento dinâmico na interface e variação na quantidade de posts, além de diversificar a possibilidade de não se ter apenas os 4 primeiros da lista;
3. Serviço de autenticação, permitindo uma seção pública e uma privada, com eventuais restrições de acesso;
4. Interação com os posts, possivelmente no modelo de threads, permitindo engajamento e comunicação entre usuários;
5. Inclusão de datas de postagens e status informando se o post já foi visto ou não pelo usuário logado.
