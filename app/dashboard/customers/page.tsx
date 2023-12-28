import { sql } from '@vercel/postgres';
 
// async function loaddata(){
//     const likes = 100;
//     const { rows, fields } =
//       await sql`SELECT invoices.amount, customers.name
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE invoices.amount = 666`;
//       return rows;
// }
export default function Page(){
    // console.log('data',loaddata());
return <p>Customers Page</p>
}