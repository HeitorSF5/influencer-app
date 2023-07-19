# Influencer App
App using Angular, Express.js and MySQL. It contains:
  - Database CRUD through frontend interface
  - Filters for reading Influencers
  - Login functionality with authorization token return
  - Authorization required for app access
  - Encrypted passwords in the database with MD5 Hash + Secret
  - Unitary tests for Http requests and data integrity
  - MVC/MSC Architecture
  - REST API

---

## How to:
I **strongly** recommend you read and follow these steps in order:

<details>
  <summary>
    <strong>🌐 Environment Setup</strong>
  </summary> <br>
    
  - Front-End's **frontend/src/environment/environment.ts** : You need to `export` a `const` object that constains a key called `baseApiUrl` and whose value is an appropriate host url such as `http://localhost:3333`
  
  - Back-End's **.env.EXAMPLE** : Rename it to just `.env` and then add your own values to connect to the database
  ---
</details>

<details>
  <summary>
    <strong>🧩 Installing Dependencies</strong>
  </summary> <br>
  
  - From the **root** directory, simply run:
    - `npm run install`: Installs all dependencies in both **Front End** and **Back End**.
  ---
</details>

<details>
  <summary>
    <strong>🏁 Running The App</strong>
  </summary>
  
  - From the **root** directory, simply run:
    - `npm run start`: This is will initalize both Frontend and Backend at the same time
  ---
</details>

<details>
  <summary>
    <strong>🔐 Credentials</strong>
  </summary>
  
  - **Admin**
    - username: `binah`
    - password: `blacktea`
    - Authorization: Able to Create, Read, Update and Delete any entry. 
  
  - **User**
    - username: `gregor`
    - password: `bugman`
    - Authorization: Able to Create and Read entries. Some buttons will be disabled to reflect restricted permissions.  
  ---
</details>

<details>
  <summary>
    <strong>📃 Database structure:</strong>
  </summary>
  
  - The Database is comprised of two tables:

    - `users`
      - `id`: Numeric PK Auto Incremental
      - `username`: VarChar Unique
      - `password`: VarChar
    
    - `influencers`
      - `id`: Numeric PK Auto Incremental
      - `name`: VarChar
      - `handle`: VarChar
      - `platform`: VarChar
      - `category`: VarChar
      - `subCount`: VarChar
</details>

<details>
  <summary>
    <strong>✅ To do:</strong>
  </summary>

  - Store database fetch to `localstorage` for `influencer array`
  - Pagination for database fetch of `influencer array`
  - Unitary tests for component integrity beyond just Http requests
  - New column for database `priviliges` that dictates access type (Admin, User, etc)
  - Data validation schemas for the Backend's Service layer
  - Better error handling by the Frontend when receiving Http responses (currently just catching it and ignoring it)
  - Multiple filters active at once
  - A switch for Numeric Filter to swap between `>` and `<` searches (currently only `>`)
  - Better colors
  ---
</details>
