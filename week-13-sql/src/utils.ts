// import dotenv from 'dotenv';
import { Client } from 'pg';

// // Load environment variables
// dotenv.config({ path: '../.env' }); // Adjust path since .env is in project root

export async function getClient() {
  const client = new Client({
    connectionString: "postgresql://postgressql_puii_user:Q0VSr2AVOid5tNmPqf4DBdukvRppDvHf@dpg-d058itk9c44c738g3240-a.oregon-postgres.render.com/postgressql_puii"
,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  return client;
}


// import { Client } from 'pg';

// export async function getClient() {
//     const client = new Client("//postgressql_puii_user:Q0VSr2AVOid5tNmPqf4DBdukvRppDvHf@dpg-d058itk9c44c738g3240-a/postgressql_puii");
//     await client.connect();
//     return client;
// }