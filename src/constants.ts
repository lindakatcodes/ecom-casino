export interface Product {
  _id: string;
  name: string;
  description: string;
  upc: string;
  images: Array<ImageItem>;
  category: string;
  price: string;
}

export interface ImageItem {
  title: string;
  description: string;
  url: string;
}
