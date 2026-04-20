import { CreditCardPayment } from "./CreditCardPayment.js";
import { PayPalMethod } from "./PayPalMethod.js";
import { CryptoPayment } from "./CryptoPayment.js";

const processPayments = (payments, amount) => {
    payments.forEach((payment) => {
        payment.pay(amount);
        console.log(payment.getStatus());
    });
};
const payments = [
    new CreditCardPayment("1234-5678", "123"),
    new PayPalMethod("user@mail.ru"),
    new CryptoPayment("0xABC123"),
]
processPayments(payments, 100);