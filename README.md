# URL Shortener Application Setup
[Live Demo](https://tiny-url-api.vercel.app/)
## Prerequisites

Before setting up the application, make sure you have the following installed:

- Docker
- Node.js

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jamesnight1994/tiny-url-api.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd tiny-url-api
    ```

3. **Create a `.env` file at the root of the project folder with the following contents:**

    ```plaintext
    APP_DOMAIN=http://localhost:3000
    DATABASE_URL="postgresql://a24:password@postgres:5432/url_shortener?schema=public"
    POSTGRES_DB=url_shortener
    POSTGRES_USER=a24
    POSTGRES_PASSWORD=password
    ```

4. **Start the PostgreSQL server:**

    ```bash
    docker-compose up postgres
    ```

5. **Start the Node.js application:**

    ```bash
    docker-compose up app
    ```

6. **Once both containers are up and running, navigate to the URL [http://localhost:3000/](http://localhost:3000/) in your web browser.**

## Usage

- After setting up the application, you'll find a documented endpoint at `/url/shorten` which you can use to shorten URLs.
- Paste the resulting response on your browser

## Troubleshooting

- If the application does not start successfully, try restarting the containers using Docker Desktop Application.
