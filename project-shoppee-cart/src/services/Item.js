/**
 * A class to handle itens
 */
export default class Item {
    /**
     * @param {string} name Iten's name
     * @param {number} price Iten's price
     * @param {number} quantity Iten's quantity
     */
    constructor(name, price, quantity) {
        // Validações básicas para garantir a integridade dos dados
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error("Item name must be a non-empty string.");
        }
        if (typeof price !== 'number' || price < 0) {
            throw new Error("Item price must be a non-negative number.");
        }
        if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 1) {
            throw new Error("Item quantity must be a positive integer.");
        }

        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    /**
     * @desc calculate the Iten's subtotal
     * @returns {number}
     */
    get subtotal() {
        return this.price * this.quantity;
    }
}