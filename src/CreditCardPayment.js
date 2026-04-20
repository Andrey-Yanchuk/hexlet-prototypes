import { PaymentMethod } from "./PaymentMethod.js";
export class CreditCardPayment extends PaymentMethod {
    constructor(cardNumber, cvv) {
        super(); // super() вызывает конструктор родительского класса
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.status = 'pending';
    }
    pay(amount) {
        console.log(`Оплата ${amount} с карты ${this.cardNumber}`);
        this.status = 'success';
    }
    getStatus() {
        return this.status;
    }
}