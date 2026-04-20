// src/paymentProcessor
// Задание по теме: Иерархия типов
import { CreditCardPayment } from "./CreditCardPayment.js";
import { PayPalMethod } from "./PayPalMethod.js";
import { CryptoPayment } from "./CryptoPayment.js";
import { PaymentWithLogging } from "./PaymentWithLogging.js";
/*-----------------------------------------------------*/
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
/*-----------------------------------------------------*/
// Пример, где наследование плохая идея, потому что retry это поведение, а не вид оплат и это не отношение "частное-общее"
// class RetryPayment extends PayPalPayment { ... }
/*-----------------------------------------------------*/
// Пример, где лучше композиция вместо наследования
// Почему композиция лучше здесь, добавляет поведение без изменения иерархии, можно комбинировать: логирование, retry, кэширование, не ломает контракт базового типа
const payment = new PaymentWithLogging(new CreditCardPayment("1234", "123"));
payment.pay(100);