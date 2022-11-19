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

## Criando componente de Navbar e Footer
* Primeiro vamos criar uma pasta para os components `src/components`.
* Depois da pasta criada vamos criar o component navbar `src/components/Navbar.js` e criar o style dele `Navbar.module.css`.
* Depois de criar a Navbar vamos repetir o processo para criar um Footer na pasta components `src/components/Footer.js` e `Footer.module.css`.
* Após a criação da Navbar e do Footer vamos importar eles no `App.js`.
```js
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
```
* OBS: Não esqueçam de importar os components
* Depois de importar os components, vamos dar funcionalidades para eles, primeiro a Navbar:
```js
import React from 'react'
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">
            DM <span>Blog</span>
        </NavLink>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
```
* Depois o Footer:
```js
import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer>
      <h3>Um Blog para DMs!</h3>
      <p>DM Blog &copy; 2022</p>
    </footer>
  )
}

export default Footer
```
* De quebra, vamos ir em App.js e colocar uma div e dar um estilo no `App.css`
* `src/App.js`
```js
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

* `src/App.css`

```css
.container {
  min-height: 60vh;
  margin-bottom: 5em;
}
```
## Criando formulário de cadastro
* Vamos criar uma página de login dentro da pasta `pages` e uma página de registro também na pasta `pages`
* Depois de criado as páginas, vamos criar seus respectivos arquivos *CSS*
* Com isso criado vamos ir para `src/pages/Register/Register.js` para criar o formulário.
```js
import React from 'react'
import styles from "./Register.module.css"

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se!</h1>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder='Nome de usuário'/>
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder='E-mail do usuário'/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder='Insira sua senha' />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password" name="confirmPassword" required placeholder='Confirme a sua senha' />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
```
* Depois de criar o formulário podemos fazer nosso CSS da maneira que quisermos, como vamos ter muitos forms durante a aplicação, os estilos foram feitos em `src/index.css` para o CSS global.

## States do form de cadastro
* Vmos utilizar o Hook `useStates` para salvar os dados e fazer uma validação simples para comparação de senhas.
```js
import React, { useState } from 'react'
import styles from "./Register.module.css"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    setError("")
    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!")
      return
    }
    console.log(user)
  }
  return (
    <div className={styles.register}>
      <h1>Cadastre-se!</h1>
      <p>Faça seu cadastro e poste suas histórias!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          type="text" 
          name="displayName" required 
          placeholder='Nome de usuário' 
          value={displayName} 
          onChange={(e)=>setDisplayName(e.target.value)}/>
        </label>
        <label>
          <span>E-mail:</span>
          <input 
          type="email" 
          name="email" required 
          placeholder='E-mail do usuário' 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha:</span>
          <input 
          type="password" 
          name="password" required 
          placeholder='Insira sua senha' 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input 
          type="password" 
          name="confirmPassword" required 
          placeholder='Confirme a sua senha' 
          value={confirmPassword} 
          onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </label>
        <button className='btn'>Cadastrar</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register
```
* Depois de criar os States vamos criar uma função chamada de `handleSubmit` para validar os dados do input do usuário, usando o `onChange` para isso.

## Criando Hook de autenticação
* Vamos criar uma pasta em `src` para criarmos Hooks.
* O hook que criaremos vai se chamar `useAuthentication.js`.
* Dentro do hook que criamos vamos importar algumas funções para registrar o usuário.
```js
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import {useState, useEffect} from 'react'
```
* Agora com as funções importadas, vamos criar o Hook propriamente dito como sendo uma função que já está sendo exportada e chamada de `useAuthentication`.
```js
export const useAuthentication = ()=>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }
}
```

## Registrando usuário no sistema
* Nesse momento vamos utilizar ainda o Hook `useAuthentication` que criamos anteriormente e vamos adicionar mais algumas funções para que ele funcione.
* O hook completo pode ser encontrado em `src/hooks/useAuthentication`
* Para resumir, precisamos usar um Try e Catch para registrar o usuario.
```js
try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)
            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage
            if(error.message.includes("PASSWORD")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado"
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setError(systemErrorMessage)
            setLoading(false)
        }
```
* Depois precisaremos fazer um useEffect para evitar memory leak
```js
useEffect(()=>{
        return () => setCancelled(true)
    }, [])
```
* Por fim precisaremos retornar as informações e funções para serem usadas no Front-end
```js
return{
        auth,
        createUser,
        error,
        loading
    }
```
## Contexto de autenticação
* Vamos criar uma pasta para criarmos um contexto em `src` e criaremos o contexto chamado `AuthContext.js`
* Nesse arquivos vamos criar o contexto e o Provider e exportaremos
* Depois de criarmos e exportarmos o Provider, vamos importar no `App.js` onde o Provider vai encapsular o nosso `BrowserRouter`
* `AuthContext.js`
```js
import { useContext, createContext } from "react";

const AuthContext = createContext()

export function AuthProvider({children, value}){
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuthValue(){
    return useContext(AuthContext)
}
```
