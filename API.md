# **<center><font size="10" color="lightblue">API</font></center>**

## **Application Programming Interface**

* ### Permite a interação entre sistemas, como uma ponte entre eles. Fornece uma comunicação entre sistemas de diferentes tipos e linguagens.

* ### Imagina-se um restaurante hipotético. O cliente se senta à mesa **(frontend)** e faz um pedido _(request)_ ao garçom **(API)**, que o levará até a cozinha **(backend)**, e trará de volta o pedido pronto _(response)_.

    ### Exemplo real:
    
    ![Imagem Exemplo 1 Real API's](ex_api.png)
    ![Imagem Exemplo 2 Real API's](ex_api2.png)

***

## **<font size=5 color="orange">[JSON]</font>**

* ### JSON, um acrônimo de **JavaScript Object Notation**, é um formato compacto de troca de dados simples e rápida entre sistemas.

* ### É através do JSON que as API's estabelecem a troca de informações entre sistemas.

* ### Arquivos <kbd><font color="cyan">.json</font></kbd> independem de linguagem, ou seja, são usadas de forma mais global.

* ### Sua sintaxe é semelhante à de um objeto convencional

* ### Uma das poucas diferenças em relação a um objeto comum é que as chaves do objeto necessitam de aspas e não podem ter espaços

* ### Arquivos JSON não podem terminar em vírgula

    ## **<font color="orange">JSON no código</font>**


    ```json
    {
        "nome": "Kaik Barreto",
        "cidade": "Rio de Janeiro",
        "ddd": 21,
        "livros_favoritos": [
            "Admirável Mundo Novo",
            "Um Estranho Sonhador",
            "O Tatuador de Auschwitz"
        ],
        "hobbies": {
            "semana": "Estudar programação",
            "fim_de_semana": "Assistir animes"
        }
    }
    ```

***

## **<font size=6 color="orange">[Métodos HTTP]</font>**

* ## **<font color="orange">GET</font>**

    * ### A API fornece informações

* ## **<font color="orange">POST</font>**

    * ### A API recebe informações que devem ou não ser registradas

* ## **<font color="orange">DELETE</font>**

    * ### A API recebe identificadores de registros que devem ser apagados

* ## **<font color="orange">PUT</font>**

    * ### A API recebe informações para update de um ou mais registros

* ## **<font color="orange">PATCH</font>**

    * ### A API recebe informações para update de um registro

***

## **<font size=6 color="orange">[API no Backend com Express e Node]</font>**

* ### Inicialização: <kbd><font color="cyan">npm i express</font></kbd>

    * ### Num arquivo index.js, iniciamos o servidor na porta 3000:

        ```javascript
        const express = require('express')
        const app = express()
        app.listen('3000')
        ```
    
## **<font color="orange">[GET]</font>**

* ## Inserindo rotas

    ```javascript
    // Imprimindo um Hello world na porta 3000
    app.route('/').get((req, res) => res.send("Hello World"))
    ```

    ***

## **<font color="orange">[POST]</font>**

* ## Utiliza-se um middleware para especificar o tipo de arquivo

    ```javascript
    const express = require('express')
    const app = express()
    app.listen('3000')

    // middleware
    app.use(express.json())

    // imprimindo o corpo da requisição no console
    app.route('/').post((req, res) => console.log(req.body))
    ```

***

## **<font color="orange">[PUT]</font>**

* ## Editar informações



***

## **<font color="orange">[DELETE]</font>**

