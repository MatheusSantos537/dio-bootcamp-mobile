Simulador de Carrinho de Compras 🛒
Este é um projeto simples em Node.js puro que simula as funcionalidades básicas de um carrinho de compras. Foi desenvolvido para praticar os conceitos de Programação Orientada a Objetos (POO) com JavaScript, utilizando classes, módulos ES (import/export) e boas práticas de desenvolvimento.

✨ Funcionalidades
Adicionar itens: Permite adicionar instâncias da classe Item ao carrinho.

Gerenciamento de Quantidade: Verifica se um item já existe no carrinho e, em caso afirmativo, apenas incrementa sua quantidade em vez de adicionar um produto duplicado.

Remover itens: Remove um item completamente do carrinho com base no seu nome.

Reduzir Quantidade: Diminui a quantidade de um item. Se a quantidade chegar a zero, o item é removido automaticamente.

Cálculos Dinâmicos: Calcula o subtotal para cada item e o valor total do carrinho.

Exibição Formatada: Mostra o conteúdo do carrinho de forma clara e organizada diretamente no console.

Tratamento de Erros: Lança e captura exceções para operações inválidas, como tentar adicionar um objeto que não é uma instância de Item.

🛠️ Tecnologias Utilizadas
Node.js

JavaScript (ES6+ com Módulos ES)

📋 Pré-requisitos
Antes de começar, você vai precisar ter o Node.js instalado em sua máquina (versão 14 ou superior recomendada para suporte a ES Modules).

🚀 Como Executar
Clone o repositório ou baixe os arquivos
Copie os arquivos index.js, Cart.js, Item.js e package.json para um diretório em seu computador.

Abra o terminal
Navegue até a pasta onde você salvou os arquivos.

Execute o script principal
Rode o seguinte comando no seu terminal:

Bash

node index.js
O console irá exibir uma simulação passo a passo das operações do carrinho, desde a criação e adição de itens até a remoção e o cálculo final dos preços.

📁 Estrutura do Código
O projeto está organizado da seguinte forma:

/
├── Cart.js         # Define a classe Cart, com toda a lógica de gerenciamento do carrinho.
├── Item.js         # Define a classe Item, que representa um produto.
├── index.js        # Ponto de entrada da aplicação, onde a simulação é executada.
└── package.json    # Arquivo de configuração do projeto.
Item.js: Representa a estrutura de um item, contendo name, price, quantity e um getter para o subtotal.

Cart.js: O coração do projeto. Gerencia a lista de itens, implementando os métodos add(), removeItem(), getTotalPrice(), etc.

index.js: O script "orquestrador". Ele importa as classes Cart e Item, cria instâncias e chama os métodos para demonstrar o funcionamento do sistema.

📄 Licença
Este projeto está sob a licença MIT.