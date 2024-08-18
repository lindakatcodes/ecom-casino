import { defineDb, defineTable, column } from "astro:db";

const Products = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    upc: column.text(),
    category: column.text(),
    price: column.text(),
    images: column.text(),
  },
});

export default defineDb({
  tables: { Products },
});
