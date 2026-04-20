import { PaymentMethod } from "./PaymentMethod.js";
export class CryptoPayment extends PaymentMethod {
    constructor(wallet) {
        super();
        this.wallet = wallet;
        this.status = 'pending';
    }
    pay(amount) {
        console.log(`Оплата ${amount} с карты ${this.wallet}`);
        this.status = 'success';
    }
    getStatus() {
        return this.status;
    }
}