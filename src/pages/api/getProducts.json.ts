import { faker } from "@faker-js/faker";
import type { Product } from "@vars/constants";

function createRandomProduct(): Product {
  return {
    _id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    upc: faker.commerce.isbn(),
    images: [
      {
        title: faker.lorem.words(),
        description: faker.lorem.sentence(),
        url: faker.image.url(),
      },
      {
        title: faker.lorem.words(),
        description: faker.lorem.sentence(),
        url: faker.image.url(),
      },
      {
        title: faker.lorem.words(),
        description: faker.lorem.sentence(),
        url: faker.image.url(),
      },
    ],
    category: faker.commerce.department(),
    price: faker.commerce.price(),
  };
}

export async function GET() {
  faker.seed(98765);
  const products = Array.from({ length: 20 }, createRandomProduct);

  return new Response(JSON.stringify(products, null, 2));
}
