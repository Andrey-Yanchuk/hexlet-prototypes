// src/paymentProcessor
// Задание по теме: Иерархия типов
import { CreditCardPayment } from "./src/CreditCardPayment.js";
import { PayPalMethod } from "./src/PayPalMethod.js";
import { CryptoPayment } from "./src/CryptoPayment.js";
import { PaymentWithLogging } from "./src/PaymentWithLogging.js";
// Задание по теме: Наследование
import { PairedTag } from "./src/PairedTag.js";
import { SingleTag } from "./src/SingleTag.js";
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
];
processPayments(payments, 100);
/*-----------------------------------------------------*/
// Пример, где наследование плохая идея, потому что retry это поведение, а не вид оплат и это не отношение "частное-общее"
// class RetryPayment extends PayPalPayment { ... }
/*-----------------------------------------------------*/
// Пример, где лучше композиция вместо наследования
// Почему композиция лучше здесь, потому-что добавляет поведение без изменения иерархии, можно комбинировать: логирование, retry, кэширование, не ломает контракт базового типа
const payment = new PaymentWithLogging(new CreditCardPayment("1234", "123"));
payment.pay(100);
/*-----------------------------------------------------*/
// Задание по теме: Наследование
const h1 = new PairedTag("h1", "title");
const hr = new SingleTag("hr");
console.log(h1.getName()); // h1
console.log(hr.getName()); // hr
console.log(h1.toString()); // <h1>title</h1>
console.log(hr.toString()); // <hr>
/*-----------------------------------------------------*/
// Задание по теме: Функции как объекты
const sum = (a, b) => a + b;
console.log(typeof sum); // function
console.log(sum instanceof Object); // true
console.log(sum.length); // 2
console.log(sum.call(null, 3, 4)); // 7
console.log(sum.apply(null, [3, 4])); // 7
function NodeFuncDecl(name) {
  this.name = name;
}
const node = new NodeFuncDecl("div");
console.log(node.name); // div
// const ArrowNode = (name) => {
//   this.name = name;
// };
// console.log(new ArrowNode('span')); // TypeError: ArrowNode is not a constructor
/*-----------------------------------------------------*/
// Задание по теме: Позднее связывание
const user = {
  name: "Andrew",
  getName() {
    return this.name;
  },
};
console.log(user.getName()); // Andrew
const fn = user.getName;
// console.log(fn()); // TypeError: Cannot read properties of undefined(reading 'name')
const bound = user.getName.bind(user);
console.log(bound()); // Andrew
console.log(fn.call(user)); // Andrew
/*-----------------------------------------------------*/
// Задание по теме: Прототипы
function User(name) {
  this.name = name;
}
User.prototype.getName = function getName() {
  return this.name;
};
const user1 = new User("Yan");
const user2 = new User("Mark");
console.log(user1.getName()); // Yan
console.log(user2.getName()); // Mark
console.log(Object.hasOwn(user1, "getName")); // false
console.log(Object.hasOwn(user2, "getName")); // false
// Свойство .prototype, есть только у функций-конструкторов, через Object.getPrototypeOf, мы получаем ссылку на этот прототип у объектов, потому что сам объект не имеет свойство .prototype
console.log(Object.getPrototypeOf(user1) === User.prototype); // true
console.log(Object.getPrototypeOf(user2) === User.prototype); // true
user1.getName = function getName() {
  return `User: ${this.name}`;
};
console.log(user1.getName());
console.log(user2.getName());
console.log(Object.hasOwn(user1, "getName")); // true
console.log(Object.hasOwn(user2, "getName")); // false
/*-----------------------------------------------------*/
