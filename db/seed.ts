import { db, Products } from "astro:db";
import { faker } from "@faker-js/faker";
import type { Product, ImageItem } from "@vars/constants";

function createRandomProduct(): Product {
  return {
    id: faker.string.uuid(),
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

function generateProducts() {
  faker.seed(98765);
  return Array.from({ length: 20 }, createRandomProduct);
}

export default async function seed() {
  const seedData = generateProducts();
  const productList = [];
  seedData.forEach((product) => {
    const productData = {
      id: product.id,
      name: product.name,
      description: product.description,
      upc: product.upc,
      category: product.category,
      price: product.price,
      images: JSON.stringify(product.images),
    };

    productList.push(productData);
  });

  await db.insert(Products).values(productList);
}
