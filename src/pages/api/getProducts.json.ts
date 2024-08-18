import { db, Products } from "astro:db";

export async function GET() {
  const products = await db.select().from(Products);
  return new Response(JSON.stringify(products));
}
