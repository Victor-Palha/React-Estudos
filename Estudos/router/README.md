# REACT ROUTER
***
`npm install react-router-dom`
* BrowserRouter: Define onde a área do nosso app que vai trocar as páginas;
* Routes: Define as rotas;
* Route: Um elemento deste para cada rota, configurar com path e componente da rota
* Páginas são componentes e ficam na pasta *pages*

## LINKS
* Para usar links para redirecionar usuários é necessário importar do react router dom.
* `import { Link } from 'react-router-dom'`
* OBS: Como o Link é do Reacr Router Dom, ele deve ser posto ou o componente que utiliza ele, dentro do `BrowserRouter`

## Rotas Dinamicas
* Para criar uma rota dinâmica vamos precisar definir uma *nova Route* em App.js
* Que deve ter o padrão de: */products/:id*
* Onde *:id* é o dado dinâmic, ou sejam podemos ter qualquer valor
* Na página podemos utilizar o Hook *useParams* para resgatar esta informação

## Nested Route
* As Nested routes indicam *URLs mais complexas*, como: `/products/:id/something`;
* Neste caso vamos precisar criar um componente que corresponda com o padrão indicado e também a URL em App.js
* Na nested route *teremos o acesso ao parâmetro da URL* também

## No match route (404)
* Podemos criar uma *página 404* facilmente com React Router
* Basta *Criarmos o componente* da página
* E no arquivo App.js definir um *path como '*'*
* Desta maneira, qualquer rota que não exista cairá neste componente

## Links Ativo
* Para ter fácil acesso a uma modificação para os links ativos vamos trocar o Link pelo `NavLink`
* Neste elemento temos acesso a um valor chamado `isActive`
* Ou seja, podemos *Ativar uma classe* se a rota atual for a que está no `atributo to`
* Podemos também fazer validações com else if: `className={({isActive}) => (isActive ? "yes" : "no")}`