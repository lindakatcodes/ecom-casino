import { faker } from "@faker-js/faker";

interface Product {
  _id: string;
  productname: string;
  productdescription: string;
  upc: string;
  images: Array<{
    title: string;
    description: string;
    url: string;
  }>;
  category: string;
  price: string;
}

function createRandomProduct(): Product {
  return {
    _id: faker.string.uuid(),
    productname: faker.commerce.productName(),
    productdescription: faker.commerce.productDescription(),
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
