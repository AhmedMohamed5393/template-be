import { DocumentBuilder } from "@nestjs/swagger";
export const config = new DocumentBuilder()
                        .setTitle("ECommerce API")
                        .setDescription("Backend System for E-Commerce service")
                        .setVersion("0.0.1")
                        .addCookieAuth('optional-session-id')
                        .addTag("")
                        .build();
export const customerExample = { name: "Ahmed Mohamed", email: "ahmed.mohamed@modeso.ch", password: "hamada5393", phone: "01204830301" };
export const orderExample = {
    address: "15 Muritania st. El Mandara Bahary, Alexandria, Egypt",
    store: "store1",
    totalPrice: 500,
    totalAmount: 4,
    items: [
      {
        name: "product1",
        unit: "EGP",
        amount: 3,
        price: 100
      },
      {
        name: "product2",
        unit: "EGP",
        amount: 1,
        price: 200
      }
    ],
    customerId: "61d9b4ec473aaa27a25455a4",
};