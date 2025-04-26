SQL Injection is a web security vulnerability that allows an attacker to interfere with the queries an application makes to its database. It usually happens when untrusted input is directly embedded into a SQL query string, allowing attackers to manipulate the query.

Standard SQL Injection Example in PostgreSQL:
    const userInput = "'; DROP TABLE users; --";
    const query = `SELECT * FROM users WHERE email = '${userInput}'`;
Resulting SQL:
    SELECT * FROM users WHERE email = ''; DROP TABLE users; --'; <!-- if user enters "'; DROP TABLE users; --" in the input field -->

This would delete the users table, if executed. That’s SQL injection — executing arbitrary SQL code by breaking out of the query context.
