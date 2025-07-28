import Item from "./Item.js";

export default class Cart {
    constructor() {
        
        this.cartItems = [];
        this.wishList = [];
    }

    /**
     * @desc Adiciona um item ao carrinho. Se o item já existir, incrementa sua quantidade.
     * @param {Item} item - A instância do Item a ser adicionada.
     */
    add(item) {
        if (!(item instanceof Item)) {
            
            throw new Error("Error adding the item. Must be an instance of Item.");
        }

        
        const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);

        if (existingItem) {
            
            existingItem.quantity += item.quantity;
        } else {
           
            this.cartItems.push(item);
        }
    }

    /**
     * @desc Remove um item completamente do carrinho.
     * @param {string} itemName - O nome do item a ser removido.
     * @returns {boolean} - Retorna true se o item foi removido, false caso contrário.
     */
    removeItem(itemName) {
        const itemIndex = this.cartItems.findIndex(item => item.name === itemName);

        if (itemIndex > -1) {
            this.cartItems.splice(itemIndex, 1); 
            return true;
        }
        return false; 
    }

    /**
     * @desc Reduz a quantidade de um item. Se a quantidade se tornar zero ou menos, o item é removido.
     * @param {string} itemName - O nome do item.
     * @param {number} amountToReduce - A quantidade a ser reduzida.
     */
    reduceItemQuantity(itemName, amountToReduce = 1) {
        const item = this.cartItems.find(cartItem => cartItem.name === itemName);

        if (item) {
            item.quantity -= amountToReduce;
            if (item.quantity < 1) {
                this.removeItem(itemName);
            }
        }
    }

    /**
     * @desc Calcula o preço total do carrinho.
     * @returns {number} - O valor total.
     */
    getTotalPrice() {
        
        return this.cartItems.reduce((total, item) => total + item.subtotal, 0);
    }

    /**
     * @desc Adiciona um item à lista de desejos.
     * @param {Item} item - A instância do Item a ser adicionada.
     */
    addToWishList(item) {
        if (!(item instanceof Item)) {
            throw new Error("Error adding the item. Must be an instance of Item.");
        }
       
        this.wishList.push(item);
    }

    /**
     * @desc Exibe o conteúdo do carrinho de forma legível no console.
     * Este método é um bom exemplo de onde o console.log é apropriado.
     */
    displayCart() {
        console.log("---------- 🛒 SEU CARRINHO 🛒 ----------");
        if (this.cartItems.length === 0) {
            console.log("Seu carrinho está vazio.");
            console.log("----------------------------------------");
            return;
        }

        this.cartItems.forEach(item => {
            console.log(`- Item: ${item.name}`);
            console.log(`  Preço: R$ ${item.price.toFixed(2)}`);
            console.log(`  Qtd: ${item.quantity}`);
            console.log(`  Subtotal: R$ ${item.subtotal.toFixed(2)}`);
            console.log("--------------------");
        });

        console.log(`TOTAL DO CARRINHO: R$ ${this.getTotalPrice().toFixed(2)}`);
        console.log("----------------------------------------");
    }
}