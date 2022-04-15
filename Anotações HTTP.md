# **<center><font size=10 color="orange"  color="lightblue">Protocolo HTTP</font></center>**

## **_<font color="cyan">HyperText Transfer Protocol</font>_**

### Protocolo de Transferência de HiperTexto

## **Visão Geral**

* ### Permite troca de informações e dados na internet

* ### Uma troca de mensagens

* ### HTML, CSS, Scripts, Imagens, Video

* ### Uma chamada para cada um desses recursos

***

## Como é feita a comunicação?

## <font size=6>**Browser -> Request -> Servidor**</font>

## <font size=6>**Servidor -> Response -> Browser**</font>

***

* ## <font color="orange">[**RECURSO**]</font>

    * ## Local a que enviarei o pedido

    * ## Usa-se uma URL para acessar o recurso

    * ## Exemplos:

        - ### **https://google.com/**

        - ### **http://localhost:3000/posts?q=oracle**

* ## <font color="orange">[**MESSAGE**]</font>

    * ## **Pedido** (**request**)

        * ### Methods

            * #### Definição do tipo do pedido

            * #### Qual ação deseja-se realizar no servidor

            * #### Exemplos: 

                - **Get** : pegar um _recurso_

                - **Post** : criar um _recurso_

        * ### Headers

        * ### Body

        ***

    * ## **Resposta** (**response**)

        * ### Status code

            - #### Resposta do servidor sobre o estado do pedido/resposta

            - #### Exemplos: **200** ; **301** ; **404** ; **500**

        * ### Headers

        * ### Body

        *** 

    * ## **Request** / **Response**

        * ### Headers

            - #### Campos informativos

            - #### Propriedade: Valor

            - #### Exemplos:

                - #### Content-Type: application/json

                - #### User-Agent: Chrome

                - #### Request URL: www.google.com

        * ### Body (Pode ser que exista **ou não**)

            - #### HTML

            - #### Conteúdo

            - #### JSON

        ***

## Exemplo de **REQUEST MESSAGE**

> GET /index.html HTTP/1.1 <br>
> User-Agent: Mozilla/4.0 <br>
> Accept: text/html

***

## Exemplo de **RESPONSE MESSAGE**

> HTTP/1.1 200 OK <br>
> Server: Express <br>
> Content-type: text/html <br>
> 
> `<html>...</html> `



***

# <center><font size=10 color="orange">_Conceitos do HTTP_</font>

* ## **_<font color="orange">Simples</font>_**

    * ### Legível

    * ### Qualquer pessoa

* ## **_<font color="orange">Cliente-servidor</font>_**

    * ### Requisição/resposta

    * ### É como pedir um lanche **(cliente)**: o lanche **(recurso)** será preparado e servido **(servidor)**.

* ## **<font color="orange">_Stateless_</font>**

    * ### Não guarda informações

    * ### Não existe relação entre conexões diferentes

    * ### É como jogar uma moeda. Tirar coroa não significa que sempre dará coroa.

    * ### Sessões: 

        - ### Permite guardar informações para usar na próxima conexão

        - ### Cookies

        - ### Storages

* ## **<font color="orange">_Extensível_</font>**

  * ### Através do cabeçalho, pode-se realizar diversas trocas de informações entre o cliente-servidor, conforme a necessidade

  * ### Headers: Informações para comunicação	

  * ### Body: Corpo do pedido ou da resposta

***

# <center><font size=10 color="orange">_Integrantes do protocolo_</font>

## <font color="orange">[**CLIENTE**]</font>

* ## Quem é o cliente?

    * ### User agent

        - ### Browser

        - ### cURL

    * ### Entidade que dá inicio à comunicação

* ## Pedidos 

    * ### Feitos através de ações do cliente (métodos HTTP)

        - ### **GET**

        - ### **POST**

        - ### **PUT**

        - ### **DELETE**

***

## <font color="orange">[**SERVIDOR**]</font>

* ## Se apresenta como uma máquina

* ## Preparado para ouvir e processar 

* ## Vários servidores em um computador

* ## Resposta

    * ### Headers

        - ### Status Code

            * #### 404

            * #### 500

    * ### Body

***

## <font color="orange">[**PROXIES**]</font>

* ## Representantes

* ## Fica entre o cliente e o servidor

* ## Ajudam a fazer o transporte de dados

* ## Diversas funções:

    * ### Cache

    * ### Filtro (como um antivírus ou controle parental)

    * ### Load balancing (distribuição da carga)

    * ### Autenticação

    * ### Autorização

***

# <center><font size=10 color="orange">_URI_</font>

* ## **Conceito: <font color="orange">Uniform Resource Identifier</font>** (identificador uniforme de recurso)

    - ## Identificar um recurso

    - ## A identificação é dada pelo **_Nome_** ou **_Localização_**

    - ## Exemplos:

        * ## Você é um Recurso

        * ## Seu nome

        * ## Sua localização
 
    *** 

* ## **<font color="orange">Resource</font>** (recurso)

    - ## O alvo do pedido

    - ## Qualquer coisa identificavel / Entidade

        * ## Digital

            - ### Email

            * ### Usa-se o protocolo mailto: "mailto:email@dominio.com"

        * ## Abstrata

            - ### Sessão 

            - ### Autorização

        * ## Física

            - ### Produtos

            - ### Usuários

        * ## Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso. 
  
***

>    ### É possível localizar um recurso pelo **Locator** (URL) ou pelo seu **Name**

***

* ## **<font color="orange">Locator</font>** (URL)

    - ## **<font color="orange">Uniform Resource Locator</font>** (localizador uniforme de recurso)

    - ## **_Toda URL é uma URI, mas nem toda URI é uma URL._**

    - ## Componentes

        * ### Obrigatórios:

            - ### Protocolo

            - ### Domínio

        * ### Opcionais:

            - ### Subdomínio

            - ### Path (caminho)

            - ### Parâmetros

            - ### Porta

            - ### Âncora   

    - ## Exemplos:

        * ### https://www.rocketseat.com.br/blog

        * ### https://www.youtube.com/watch?v=vpYct2npKD8

        * ### http://localhost:3333/index.html#algumlugar   (**3333** é um exemplo de porta; **#algumlugar** é um exemplo de âncora)

***

* ## **<font color="orange">Name</font> (URN)** 

    * ## **<font color="orange">Uniform Resource Name</font>**

    * ## Geralmente iniciado por "**_urn:_**"

    * ## Exemplos:

        - ### **urn:ibsn:0451450523**

        - ### **urn:oasis:names:specification:docbook:dtd:xml:4.1.2**

***

# <center><font size=10 color="orange">_HTTP MESSAGES_</font>

* ## **Mensagens**

    * ### HTTP/1.1

        * #### Legível

        * #### Texto

    * ### HTTP/2

        * #### Estrutura binária

        * #### Otimizações

        * #### Mesma maneira que a versão 1.1

    ***

* ## **<font color="orange">[Request]</font>**



    ***

* ## **<font color="orange">[Response]</font>**