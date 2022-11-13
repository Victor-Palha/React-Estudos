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

## Configurando React Router
* Instalando pacote `npm i react-router-dom`.
* Depois de instalar vamos fazer a configuração no `App.js`.
* `import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"` - Dentro do `App.js` vamos fazer a config do router
```js
    import './App.css';
    import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"

    function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route/>
            </Routes>
        </BrowserRouter>
        </div>
    );
    }

    export default App;
```
* Depois de fazer a configuração base, vamos criar em `src` a pasta `pages` e dentro de pages criar pastas relativas as página do projeto, sendo elas `src/pages/Home` e `src/pages/About`.
* Dentro dessas páginas crie um componente para servir como página. `src/pages/Home/Home.js` e `src/pages/About/About.js`.
* Depois de criar os arquivos, crie os css no estilo module e importe para os componentes.
* Depois do css criado e das páginas configuradas, vamos voltar para `App.js` e terminar de configurar as rotas.
* Seu App.js deve ficar assim:
```js
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```