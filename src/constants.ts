export interface Product {
  _id: string;
  name: string;
  description: string;
  upc: string;
  images: Array<{
    title: string;
    description: string;
    url: string;
  }>;
  category: string;
  price: string;
}
