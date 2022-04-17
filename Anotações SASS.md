# **<center><font size=10 color="lightblue">SASS</font></center>**

## O que é o SASS?

* ## **Syntactically Awesome StyleSheets**

* ## Um pré-processador CSS que irá dar poder aos estilos

* ## Compila estrutura de código _**<kbd><font color="cyan">.scss</font></kbd>**_ ou _**<kbd><font color="cyan">.sass</font></kbd>**_ para _**<kbd><font color="cyan">.css</font></kbd>**_

***

## Para que serve o SASS?

* ## Simplificar e organizar CSS

* ## Manutenção

* ## Rapidez e reuso de código

* ## Maior compatibilidade com múltiplos navegadores

* ## Programar: Variáveis, Funções, Repetições, IF/Else...

***

## Utilização:

* ## Para começar a utilizar o SASS, basta criar um arquivo com a extensão ".scss". Este arquivo gerará um outro arquivo, desta vez de extensão ".css", o qual deverá ser importado pela página HTML.

***

# <center>**_Importação de arquivos usando SASS_**

* ## Qual é a utilidade de importar arquivos de StyleSheets?

    * ### Componentização das folhas de estilo.

    * ### Redução de comprimento de arquivos únicos

    * ### Uma vez que cada arquivo .scss corresponde a uma parte do estilo geral, a manutenção se torna mais fácil e tangível.

* ## Para um arquivo _**<kbd><font color="cyan">.scss</font></kbd>**_ ser importado, seu nome deve seguir o seguinte modelo:

    > ### _exemplo.scss

* ## Agora, para importar este arquivo, usa-se a seguinte sintaxe no arquivo _**<kbd><font color="cyan">.scss</font></kbd>**_ principal:

    ```scss
    @import 'exemplo'
    ```

    * ### Note-se que o nome do arquivo importado é utilizado sem a underline ( _ ) e também sem sua extensão (.scss).

***

# <center>**_Encadeamento/Indentação_**

* ## Em arquivos SASS, é possível encadear seletores, gerando escopos.

* ## Exemplo: Um container que possui texto branco, porém cujos parágrafos possuam texto azul.

    * ### Em CSS
  
        ```css
        .container {
            color: white;
        }

        .container p {
            color: blue;
        }
        ```

    * ### Com o SASS (.scss)

        ```scss
        .container {
            color: white;

            p {
                color: blue;
            }
        }
        ```

    ### Note-se que o arquivo .scss gerará o exato mesmo resultado do exemplo .css, porém podendo ser escrito de forma mais lúdica.

    ***

***

# <center>**_Variáveis_**

* ## O SASS declara variáveis da mesma forma que o CSS tradicional, iniciado por um sinal de "$".

    ```scss
    $text-color: #ccc;

    body {
        color: $text-color;
    }
    ```

* ## A indentação de arquivos _**<kbd><font color="cyan">.scss</font></kbd>**_ gera escopos, ou seja, variáveis criadas dentro de um escopo não podem ser usadas num escopo acima do dele.

    * ## Exemplo correto:

        ```scss
        .container {
            $bgColor: #1d1e20;
            background: $bgColor;
        }
        ```
    
    * ## Exemplo incorreto:

        ```scss
        .container {
            $bgColor: #1d1e20;
        }

        body {
            background: $bgColor;
        }
        ```

*** 

# <center>**_Mixins_**

* ## Trata-se de uma estrutura que permite guardar um trecho de código que poderá ser reutilizado, como uma função.

* ## Sua estrutura é semelhante à de uma função em javascript [ **_função( ) {  }_** ]

* ## Utiliza-se a keyword **_@mixin_** para definir o mixin e a keyword **_@include_** para utilizá-lo.

* ## Exemplo: 

    ```scss 
    @mixin box-shadow() {
        $cor: orange;
        $alpha: 0.6;

        box-shadow: 2px 2px 4px -2px rgba($cor, $alpha)
    }

    .container {
        @include box-shadow;
        background-color: white;
        width: 100px;
        height: 200px;
    }
    ```