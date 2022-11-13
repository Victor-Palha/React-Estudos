# Projeto DMBlog
* Um Projeto utilizando firebase para construção de um web-app
## Integrando Firebase
* Instale o pacote do firebase `npm i firebase`
* Dentro do projeto do [firebase](https://firebase.google.com/?hl=pt) copia o script e cola em uma pasta chamada `firebase` dentro da pasta `src` do projeto e dentro da pasta firebase crie um arquivo chamado de `config.js`, lá cole o script. O caminho deve ser `src/firebase/config.js`.
* Depois dentro do `config.js` vamos importar o serviço para chamar o banco de dados `import { getFirestore } from "firebase/firebase"`, depois inicializamos o serviço e exportamos ele.
```js
    const app = initializeApp(firebaseConfig);
    //Chamando banco de Dados
    const db = getFirestore(app)

    export {db}
```

