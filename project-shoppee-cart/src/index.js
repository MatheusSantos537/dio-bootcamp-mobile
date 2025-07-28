/**logica central */
import Cart from './Cart.js';
import Item from './Item.js';

// --- Ponto de Entrada da Aplicação ---
function main() {
    console.log("Bem-vindo ao sistema de carrinho da Shopee!\n");

    try {
        // 1. Criando uma nova instância do Carrinho
        const myCart = new Cart();

        // 2. Criando instâncias de Itens
        const foneBluetooth = new Item("Fone Bluetooth TWS", 89.90, 1);
        const tecladoMecanico = new Item("Teclado Mecânico RGB", 250.00, 1);
        const mouseGamer = new Item("Mouse Gamer 8000DPI", 120.50, 2); 

        // 3. Adicionando itens ao carrinho
        console.log("Adicionando itens ao carrinho...\n");
        myCart.add(foneBluetooth);
        myCart.add(tecladoMecanico);
        myCart.add(mouseGamer);

        // 4. Exibindo o carrinho
        myCart.displayCart();

        // 5. Adicionando um item que já existe (deve apenas aumentar a quantidade)
        console.log("\nAdicionando mais um 'Fone Bluetooth TWS'...");
        const outroFone = new Item("Fone Bluetooth TWS", 89.90, 1);
        myCart.add(outroFone);
        myCart.displayCart();

        // 6. Reduzindo a quantidade de um item
        console.log("\nReduzindo a quantidade de 'Mouse Gamer 8000DPI' em 1...");
        myCart.reduceItemQuantity("Mouse Gamer 8000DPI", 1);
        myCart.displayCart();

        // 7. Removendo um item completamente
        console.log("\nRemovendo 'Teclado Mecânico RGB' do carrinho...");
        const removed = myCart.removeItem("Teclado Mecânico RGB");
        if (removed) {
            console.log("Item removido com sucesso!");
        }
        myCart.displayCart();

        // 8. Tentando adicionar um objeto inválido para testar o erro
        console.log("\nTentando adicionar um item inválido...");
        try {
            const itemInvalido = { name: "Produto Falso", price: 10 };
            myCart.add(itemInvalido);
        } catch (error) {
            console.error(`ERRO CAPTURADO: ${error.message}\n`);
        }

    } catch (error) {
        console.error("Ocorreu um erro geral na aplicação:", error.message);
    }
}


main();