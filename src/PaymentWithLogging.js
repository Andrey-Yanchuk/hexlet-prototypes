// PaymentWithLogging.js
// Это класс Декоратор для логов и другого вывода информации, если кратко, это обертка с доп. информацией для других классов
export class PaymentWithLogging {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }
  pay(amount) {
    console.log("Начинаем оплату...");
    this.paymentMethod.pay(amount);
    console.log("Статус:", this.paymentMethod.getStatus());
  }
  getStatus() {
    return this.paymentMethod.getStatus();
  }
}
