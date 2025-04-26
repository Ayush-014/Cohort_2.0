import { Client } from 'pg'

export default async function getClient() {
    const client = new Client({
        connectionString: "postgresql://postgressql_puii_user:Q0VSr2AVOid5tNmPqf4DBdukvRppDvHf@dpg-d058itk9c44c738g3240-a.oregon-postgres.render.com/postgressql_puii",
        ssl: {
            rejectUnauthorized: false,
        },
    });
    await client.connect();
    return client;
}