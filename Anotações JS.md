fffont# __ANOTAÇÕES CURSO JAVASCRIPT__

## **Comandos var/let/const: declaração de variável**

* ### Number | converter pra numero
* ### parseInt | converter pra inteiro
* ### parseFloat | converter para Real
* ### String | converter para string 



***

## Estrutura Condicional Simples 

```javascript
if (condição1) {
    ação1()
}
else if (condição2) {
    ação2()
}
else {
    ação3()
}
```

***

## **Condição Múltipla/Switch Case**:

```javascript
switch (expressão) {
    case valor1:
        ação1()
        break

    case valor2:
        ação2()
        break

    case valor3:
        ação3()
        break

    default:
        ação4()
        break

}

(BREAK OBRIGATORIO)
```

***

## **Estrutura de Repetição**:

* ### **Teste Lógico no Início**

```javascript
while (condição=True) {
    realizarAção()
}
```

* ### **Exemplo**: 

    ```javascript
    var c = 1
    while (c <= 5) {
        console.log(`Passo ${c}`)
    }
    ```

* ### **Teste Lógico no Final**

```javascript
do {
    realizarAção()
} while (condição=True)
```
* ### **Exemplo**:

    ```javascript
    var c = 1
    do {
        console.log(`Passo ${c}`)
        c++
    } while (c <= 5)
    ```

### **Estrutura de repetição com variável de controle**

```javascript
for (inicio; teste; incremento) {
    realizarAção()
}
    ex: 
        for (var c=1; c <= 10; c++) {
            console.log(c)
        }
```

***

 ## **VETORES/ARRAYS EM JAVASCRIPT**

### Vetor/Array = Lista = [ ]

* ### Composto por elementos, os quais possuem keys (índices) e valores (conteúdo).

    ```javascript
    array.indexOf(valor) 
    ```

* ### Retorna o índice do array que possui o elemento 'valor'

***

## **OBJETOS EM JAVASCRIPT**

* ### Objetos são variáveis que contém propriedades e métodos 
    
* ### **Exemplo**:

```javascript
dados = {
    nome:'Kaik', 
    idade: 16, 
    sexo: 'M', 
    nacionalidade:'Brasileiro',
    tossir: function() => {console.log("Cough Cough!")}
}

console.log(dados.) //  <= Retorna 'Kaik'
dados.tossir() // Retorna 'Cough Cough!'
```

***

## **FUNÇÕES COM PARÂMETROS E RETORNO**

```javascript
function parimp(n) {    //função
    if (n % 2 == 0) {   // ação
        return 'PAR!'
    } else {
        return 'ÍMPAR!' // retorno
    }
}
let resultado = parimp(11)  // chamada, retorno = "ÍMPAR!"
```

***

## **CONDIÇÃO TERNÁRIA**

```javascript
(boolean) ? valor 1 : valor 2

(condição) seVerdadeiro retorna valor1 seFalso retorna valor 2
```

***

##  **THROW - TRY/CATCH** 

* ### **throw** = usado na função para exportar um erro.

* ### **try** = bloco onde será chamada a função que pode conter um erro

* ### **catch** = bloco onde o erro será recebido e utilizado

* ### **Exemplo**:

```javascript
function sayMyName(name) {
    
    if(name === '') { // Validação
        throw "Nome não digitado" // O que será "jogado"
    }

    console.log(name)
}

try {
    sayMyName('')
} catch(e) { // Capta o que foi jogado pelo throw
    console.log(e) // Imprime o que foi captado 
}
```    
***

# <center><font color="orange">**Estrutura de dados com JavaScript**</font></center>

* ## O que é Estrutura de dados?

    * ### É uma maneira de organizar e ordenar informações como textos, números, booleanos etc. e registrá-los na memória do computador.

        ```javascript
        // Array
        [1, 2, 3] // elementos 1, 2, 3

        // Object
        { name: "Fulano", idade: 20 } // elementos name: "Fulano", idade: 20
        ```
## **<font color="pink">Gerenciando dados</font>**

### **_Estrutura de dados tem a ver com a gestão das informações da aplicação._**

### Para esse **gerenciamento**, podemos dividir em **3** etapas:

1. ### Modelar a estrutura;

2. ### Dar vida à estrutura (instanciar essa estrutura);

3. ### Criar as funcionalidades dessa estrutura
    * ### Exemplo: inserir, excluir, buscar, exibir, contar...

## <font color="orange">**Arrays**</font>

### Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.

### Uma das estruturas mais básicas, simples de criar e utilizar.

```javascript
    ['a', 10, 'd', true] // total de 4 elementos
//    0   1    2    3     Index
```

### <font color="orange">**Características**</font>

* ### Acesso pelo índex

* ### Respeita a ordem de inserção dos elementos

* ### Aceita valores duplicados

* ### Dependendo do tamanho dos Arrays, para encontrar e/ou deletar um elemento, será necessário um uso maior de performance.

### <font color="orange">**Arrays no JavaScript**</font>

* ### São dinâmicos (todas as características já são definidas em sua declaração)

* ### Você poderá ter dados de diferentes tipos misturados dentro de um Array. Strings, numbers, booleans, objects, functions e até outros Arrays.

* ### Existem muitos métodos (funções) já implementados 

    * ### <font color="pink">push( ), pop( ), find( ), filter( )</font>

### <font color="orange">**Arrays no código**</font>

```javascript
const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"]

// A indexação (index) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// Acessar o tamanho do array
console.log(pilotos.length) // 4

// iterável
for(let piloto of pilotos) {
    console.log(piloto) 
} // Imprime, linha a linha, o nome de cada piloto.

// Adicionar elementos no array
pilotos.push("Alonso") // Agora a lista de pilotos conta com"Alonso na última posição

// Encontrar um elemento
const Senna = pilotos.find(piloto => piloto === 'Senna')
console.log(Senna) // Senna
```

## <font color="orange">**Matriz**</font>

### **_Matrix ou vetor multidimensional_**

### Nada mais é do que um Array que contém outros Arrays

* ### Podem ter muitos níveis, hierarquicamente.

```javascript
const students = [["Joseph", 23, "MG"], ["Briana", 22, "SP"], ["Priscilla", 23, "PR"]] 
// students = matriz

console.log(students[0][1]) // 23  (idade de Joseph (students[0]) )
```

## <font color="orange">**Stack**</font>

### **Tradução: Pilha**

### Como uma pilha de livros.

* ### Linear, um após o outro

* ### O último a entrar na pilha é o primeiro a sair

## <font color="orange">**Stack no código**</font>

### **Métodos fundamentais:**

* ### **push()**: adicionar um elemento à pilha

* ### **pop()**: remover o elemento do topo da pilha

* ### **peek()**: obter o elemento do topo da pilha

### **Outros métodos poderão ser implementados, como <font color="magenta">size()</font> para mostrar o tamanho da pilha**

```javascript
// Passo 1: modelando
class Stack() {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0)  return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }
    
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}
// Passo 2: Utilizando
const stack = new Stack()

// adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures')) // ["learning", "data", "structures"]

console.log(stack.peek()) // "structures"
```

## <font color="orange">**Queue**</font>

### **Tradução: Fila**

* ### **Linear**
  
* ### **Conceitos:**

    * ### **FIFO [First In First Out]:**

      * ### O primeiro a entrar na fila é o primeiro a sair

    * ### **Front (Frente)**

      * ### é a referência do primeiro elemento a entrar na fila

    * ### **Back (Fundo)**

      * ### é a referência do último elemento a entrar na fila

    * ### **Enqueue**

      * ### entrando na fila

    * ### **Dequeue**

      * ###  saindo da fila

## <font color="orange">**Queue no código**</font>

### **Métodos Fundamentais**

* ### **enqueue()**: adicionar um elemento ao final da fila **_(Back)_**

* ### **dequeue()**: remover o primeiro elemento a entrar na fila **_(front)_**
  
### Outros métodos poderão ser implementados, como **<font color="cyan">size()</font>** para mostrar o tamanho da fila ou **<font color="cyan">front()</font>** para pegar o primeiro elemento da fila.

```javascript
// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }
    
    dequeue(item) {
        this.data.shift()
        console.log(`${item} saiu da fila!`)
    
    }
}

// Passo 2: Utilizando
const fila = new Queue()

console.log(fila) // []

fila.enqueue("Mariana") // Mariana chegou na fila! =>   ["Mariana"]
fila.enqueue("João") // João chegou na fila! =>   ["Mariana", "João"]
fila.enqueue("Ariel") // Ariel chegou na fila! =>   ["Mariana", "João", "Ariel"]

fila.dequeue() // Mariana saiu da fila! =>   ["João", "Ariel"]
fila.dequeue() // João saiu da fila! =>   ["Ariel"]
fila.dequeue() // Ariel saiu da fila! =>   []
```

***

# <font color="orange"><center>**Programação Orientada a Objetos** _(POO)_<center></font>

### aka (Also known as) **Object-oriented  Programing** _(OOP)_ 

### O Termo refere-se a um <font color="cyan">Paradigma de desenvolvimento</font>

* ### Uma maneira de resolver um problema, um modo de pensar 

* ### Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporal para criação de softwares.

## <font color="orange">**Qual a utilidade do paradigma de orientação a objetos?**</font>

* ### Aplicação de padrões de projetos;

* ### Organização do código;

* ### Melhor entendimento do código, pensando nele como um conjunto de objetos;

* ### Reutilização de código;

* ### Separar a complexidade, abstrair e expor de forma mais simples o código;

* ### Classificar as rotinas e trechos do código



# <center>**<font color="orange">Conceitos da POO</font>**</center>

## [**<font color="magenta">OBJETOS</font>**]

* ### **Todo objeto possui:**

    * ### Propriedades e Funcionalidades;

    * ### Estado e Comportamentos;

    * ### Atributos e Métodos

* ### **Exemplo:**

    * ### Uma caneta é um objeto: possui Propriedades (peso, cor da tinta etc.), Funcionalidades (escrever, rolar etc.), Estado (vazia, cheia, tampada, destampada et cetera).
  
***

## [**<font color="magenta">CLASSES</font>**]

* ### As classes na orientação a objetos funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

    * ### **Exemplo: Máquina de biscoitos**

        * ### Instâncias

        * ### Nesta analogia, a **_classe_** seria a máquina de biscoitos, que recebe ingredientes e prepara os biscoitos e os **_objetos_** são os biscoitos.

## <font color="orange">**Classes e objetos no JavaScript**</font>

* ### Syntactical sugar

* ### Prototype

* ### Os objetos em JavaScript são uma cadeia de protótipos, herdando as características e métodos de seus protótipos

    * ### **Exemplo:** Uma característica do tipo string de um objeto possui as características e métodos do protótipo string, como comprimento, entre outros.

* ## **Encapsulamento**

    * ### Dirigir carro vs conhecer o motor do carro

    * ### Significa colocar numa cápsula;

    * ### Agrupamento de funções e variáveis;

    * ### Esconder detalhes de implementação;

    * ### Camada de segurança para os atributos e métodos

* ## **Encapsulamento no código**

```javascript
// Código Estrutural

let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()

// Código Orientado a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    
    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

//  criar o objeto

let poligono = new Poligono(50, 60)
console.log(poligono) // retorno: {"altura": 50, "largura": 60}
console.log(poligono.area) // retorno: 3000   (50 * 60)
```

## <center>**_<font color="orange">Programação Estruturada vs Orientação a Objetos</font>_**</center>

## **Programação Estruturada**

1. ### Processa a entrada e manipulação dos dados, até a saída

2. ### Uso de sequências, estruturas de repetição e condições

3. ### Uso de uma rotina maior, ou sub-rotinas

4. ### Não existem restrições às variáveis

***

## **Programação Orientada a Objetos**

1. ### Surge para trazer um cuidado ao uso estruturado

    * ### **Não elimina por completo o uso estruturado**

2. ### Conceitos como Objetos e Classes

3. ### Cuidados com variáveis e rotinas (Encapsulamento)

4. ### Melhor reutilização de código (Herança)

***

## **[<font color="magenta">Herança</font>]**

* ### Pais e filhos (hereditariedade)

* ### Objetos podem herdar ou estender características base

* ### Uma cópia de atributos e métodos de outra classe

## **<font color="orange">Herança no JavaScript</font>**

```javascript
class Veiculo {
    rodas: 4
    
    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super()    // puxar atributos e métodos do pai
        this.rodas(2)
    }
} // A classe Moto é uma classe filha de Veiculo, onde Moto possui todas as características e funcionalidades de Veiculo, porém alterando a caracteristica "rodas" para 2.
```