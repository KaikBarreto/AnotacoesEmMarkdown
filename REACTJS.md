# **<center><font size=10 color="lightblue">REACT</font></center>**

* ## Consiste numa biblioteca de JavaScript para a criação de interfaces de usuário (UI's).

* ## Utiliza bastante o paradigma de **_programação funcional_** 

***

* ## **<font color=orange size=5>[Criando projeto]</font>**

    * ### Para a criação do diretório do projeto em ReactJS, pode ser usado no terminal o comando <kbd>npx create-react-app</kbd> ou então usando a ferramenta Vite, mais eficiente:

        > ### <font color=cyan>npm create vite@latest nome-do-projeto --template react</font>

    * ### Após isso, é necessário instalar as dependências do projeto com um:

        > ### <font color=cyan>npm install</font>

    ***

* ## **<font color=orange size=5>[Executando projeto]</font>**

    * ### Para executar o projeto criado, utiliza-se o comando:

        > ### <font color=cyan>npm run dev</font>

    ***

* ## **<font color=orange size=5>[JSX]</font>**

    * ### Trata-se da sintaxe utilizada por aplicações ReactJS para criar as interfaces de forma declarativa

    * ### É sempre uma **função**, cujo retorno é um componente **HTML** a ser renderizado

    * ### Exemplo (navbar.jsx):

        ```jsx
        function Navbar() {
            return (
                <nav>
                    <p>Exemplo</p>
                </nav>
            )
        }
        export default Navbar
        ```

    * ### Também é possível renderizar componentes de forma declarativa, ou seja, como uma tag HTML, uma vez que os tenha importado:

        ```jsx
        import Navbar from './Navbar'

        function Header() {
            return (
                <Navbar />
                <p>lorem ipsum</p>
            )
        }
        export default Header
        ```

    * ### Arquivos JSX não precisam ser importados com sua extensão ".jsx"

        ```jsx
        import Navbar from './navbar'
        ```

    * ### Para definir uma classe no retorn HTML do JSX, o react utiliza-se de "className" no lugar do convencional "class":

        ```jsx
        function Home() {
            return (
                <div className="nomeDaClasse">
                    Lorem Ipsum 
                </div>
            )
        }
        ```

    ***

* ## **<font color=orange size=5>[Estrutura de pastas e arquivos]</font>**

    * ### Os arquivos possuem uma estrutura flexível, porém com uma base comum:

    <center>

    ![Imagem estrutura de pastas React](./img/react-folder-structure.png)

    </center>

    * ### O diretório **src** também pode receber outros diretórios para imagens, componentes, estilos etc.:

    <center>

    ![Imagem estrutura de pastas React 2](img/react-folder-structure2.png)

    </center>

    ***

* ## **<font color=orange size=5>[Fragment]</font>**

    * ### Trata-se de uma pequena regra sobre como deve ser o retorno dos componentes <kbd><font color=cyan>.jsx</font></kbd>

    * ### Expressões JSX pode ter apenas um único elemento filho. (Uma tag vazia ou uma div encapsulando todo o resto  servem)

    * ### <font color=lime>Certo:</font>

        ```jsx
        function Home() {

            return (
                <>
                    <h1>Lista de presença</h1>
                    <input type="text" />
                    <button>Adicionar</button>
                </>
            )
        }

        export default Home
        ```

    ***

* ## **<font color=orange size=5>[Importando CSS]</font>**

    * ### <font color=ligblue>CSS</font>

        ### global.css

        ```css
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        ```
    
    * ### <font color=tomato>JSX</font>

        ### main.jsx

        ```jsx
        import React from 'react'
        import ReactDOM from 'react-dom/client'

        import './styles/global.css'

        import Home from './pages/Home'

        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <Home />
            </React.StrictMode>
        )
        ```


    ***

* ## **<font color=orange size=5>[Separando CSS]</font>**

    * ### Refatorando um pouco a estrutura de arquivos dentro das pastas do projeto em React, é possível separar os estilos de cada componente.

    <center>

    ![Pastas React Componentes](./img/react-folder-components.png)

    </center>

    * ### O arquivo que antes era Home.jsx passa a ser de um diretório chamado Home e se chamar index.jsx, assim, não é necessário alterar importações. Uma vez que na pasta Home o componente **index.jsx** importa os estilos de **styles.css**, o componente Home será exportado já com estes estilos.

    ***

* ## **<font color=orange size=5>[Componentes]</font>**

    * ### O uso da componentização está diretamente associado à boa manutenção do código, uma vez que, com os elementos separados, é fácil a visualização e alteração de comportamento de cada elemento de uma aplicação.

    * ### Ao utilizarem-se partes fragmentadas de uma aplicação, torna-se possível a reutilização de componentes, como, por exemplo, um rodapé que se repete em múltiplas (quiçá todas) páginas da aplicação.

    * ### **Exemplo:** 

        ### Componente

        ```jsx
        function Card() {
            return (
                <div className="card">
                    <strong>Kaik Barreto</strong>
                    <small>10:15:24</small>
                </div>
            )
        }

        export default Card
        ```

        ### Reutilização do component **_Card_** (3x)

        ```jsx
        import Card from  '../../components/Card'

        function Home() {
            return (
                <div>
                    <Card />
                    <Card />
                    <Card />
                </div>
            )
        }
        export default Home
        ```

    ***

* ## **<font color=orange size=5>[Propriedades/Parâmetros]</font>**

    * ### Componentes JSX (que são funções) podem receber parâmetros, dinamizando a declaração de um componente na aplicação.

    * ### Exemplo: Imprimir na tela um cartão com nome e data, os quais serão recebidos como parâmetros/propriedades.

        ***

        ### <font color=cyan>Criação do componente dinâmico</font>

        ```jsx
        import './styles.css'

        function Card(props) {
            return (
                <div className="card">
                    <strong>{props.name}</strong>
                    <small>{props.time}</small>
                </div>
            )
        }

        export default Card
        ```

        * ### A keyword **props** permite que as propriedades sejam ilimitadas, cujos nomes venham após **<font color=lime>"props."</font>**
            
        ***

        ### <font color=cyan>Utilização dinâmica do componente, atribuindo valores na declaração do componente</font>

        ```jsx
        import Card from  '../../components/Card'

        function Home() {

        return (
            <div>
                <Card name="Kaik Barreto" time="10:55:25" />
                <Card name="João Feliciano" time="11:00:10" />
            </div>
        )
        }

        export default Home
        ```

        ***

    * ### **Também é possível passar propriedades/parâmetros específicos no componente**

        ### <font color=cyan>Criação do componente dinâmico</font>

        ```jsx
        function Card({ name, time }) {
            return (
                <div>
                    <strong>{name}</strong>
                    <small>{time}</small>
                </div>
            )
        }
        ```
        ***

        ### <font color=cyan>Utilização dinâmica do componente, atribuindo valores na declaração do componente</font>

        ```jsx
        import Card from  '../../components/Card'
        function Home() {
        return (
            <div>
                <Card name="Fulano" time="08:50:38" />
            </div>
        )
        }
        export default Home

        ```

    ***

* ## **<font color=orange size=5>[Estado/State]</font>**

    * ### Trata-se de onde se guardam os dados, o estado do componente

    * ### A diferença do **Estado/State** para uma variável comum é que o estado, ao ser alterado, renderiza novamente o componente

    * ### O estado possui 2 elementos em forma de vetor/array: o primeiro é o conteúdo/valor do estado e o segundo é uma função que atualiza o valor do estado pelo parâmetro recebido:

        ```jsx
        const [nome, setNome] = useState()

        setNome("Kaik") // nome se torna Kaik
        setNome("João") // nome se torna João
        ```
    
    * ### O método **useState()** pode receber como argumento um valor inicial para o estado

        * #### Exemplo, um nome que é atualizado baseado no estado, porém que começa sendo Kaik

            ```jsx
            const [idade, setIdade] = useState(29) 
            // idade começa como 29
            setIdade(30) // idade se torna 30
            ```

    * ### Por exemplo, pode-se guardar o valor de um input e atualizá-lo a cada vez que for alterado

        ```jsx
        import React, { useState } from 'react'
        import Card from '../../components/Card'

        function Home() {
            const [personName, setPersonName] = useState()

            function handleNameChange(name) {
                setPersonName(name)
            }

            return (
                <div className="container">
                    <h1>Nome: {personName}</h1>
                    <input
                        type="text"
                        placeholder="Digite o nome..."
                        onChange={e => handleNameChange(e.target.value)} />
                </div>
            )
        }
        export default Home
        ```

        * ### * Note-se que a importação <font color=lime>[import React, { useState } from 'react']</font> é indispensável para a utilização do estado

        * ### Resultado: O "{personName} do H1 será atualizado para o valor do input a cada vez que ele for alterado.


    ***

* ## **<font color=orange size=5>[Imutabilidade]</font>**

    * ### É o princípio que os estados do ReactJS respeitam

    * ### Faz parte do paradigma de **programação funcional**

    * ### **_O conteúdo não deve ser alterado, mas sim substituído_**

        * #### Esse conceito torna a aplicação mais performática

        * #### Por isso não se atualiza o valor do estado diretamente, mas sim utiliza-se uma função para substituí-lo

        * ### **Exemplo:**

            ### <font color=lime>**Certo**</font>

            ```jsx
            const [cityName, setCityName] = useState()

            setCityName("Nova York") // substituição do valor
            // cityName torna-se Nova York
            ```

            ### <font color=red>**Errado**</font>

            ```jsx
            const [cityName, setCityName] = useState()

            cityName = "Nova York" // atualização do valor
            ```
        
    ***

* ## **<font color=orange size=5>[Key Prop]</font>**

    * ### Ao utilizar uma estrutura de repetição **_[.map(), .forEach() etc.]_** para gerar componentes dinâmicos, há a necessidade de acrescentar uma propriedade chamada "key", que seja única, ou seja, que não se repita.

    * ### A necessidade da atribuição desta propriedade é para que o react use esta chave para identificar os elementos da lista corretamente

    * ### **Exemplo:**

        ```jsx
        {
            people.map(person => (
                <Card
                    key={person.time}
                    name={person.name}
                    time={person.time} 
                />
                )
            )
        }
        ```

        * ### Neste exemplo, a chave é o próprio horário, que, neste caso, não se repetirá entre as gerações de componentes

    ***

* ## **<font color=orange size=5>[Hooks]</font>**

    * ### Geralmente seus nomes começam com <font color=lime>**use**</font> e então o nome do **Hook**. 

        * #### Ex.: **[<font color=lime>useState, useEffect</font>]**

    * ### Eles permitem que usem-se o state e outros recursos do React sem escrever uma classe

    ***

* ## **<font color=orange size=5>[useEffect]</font>**

    * ### É um Hook utilizado para 

    * ### **Sintaxe**:

        * ### recebe como parâmetros uma função **_(corpo)_** e um array **_(dependências)_**

            ```jsx
            useEffect(() => {
                // corpo
            }, []) // array de dependências
            ```
    * ### **Exemplo de uso:** 

        ```jsx
        
        ```

    ***

* ## **<font color=orange size=5>[Consumindo API]</font>**

    ***

* ## **<font color=orange size=5>[useEffect Async]</font>**