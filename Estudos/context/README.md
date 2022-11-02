# Context API
## Criando contexto
* Primeiramente vamos ter que *criar o Context*
* O arquivo deve sempre ter a *primeira letra maiúscula* no nome, e geralmente termina em Context: `SomeContexr.js`
* A convenção é deixar na *pasta context* em src
* Onde vamos utilizar o valor do contexto, *o arquivo precisa ser importado*

## Criando Provider
* O Provider vai *delimitar onde o contexto é utilizado*
* Vamos criar uma espécie de componente com a *prop children*
* E este Provider deve *encapsular os demais componentes* em que precisamos consultar ou alterar o valor
* Geralmente ele fica em *App.js* ou em *index.js*
* Agora poderemos *compartilhar o valor do contexto* em todos os componentes

## Alterando o contexto
* Para alterar o valor do contexto *precisamos criar um componente que utilize a função da mudança de contexto*
* Esta mudança ocorrerá no COntext e *poderá ser consumida por todos os componentes* que recebem o contexto
* E assim finalizamos o *ciclo* da Context API