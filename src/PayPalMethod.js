import { PaymentMethod } from "./PaymentMethod.js";
export class PayPalMethod extends PaymentMethod {
  constructor(email) {
    super();
    this.email = email;
    this.status = "pending";
  }
  pay(amount) {
    console.log(`Оплата ${amount} с карты ${this.email}`);
    this.status = "success";
  }
  getStatus() {
    return this.status;
  }
}
