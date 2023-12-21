# WhatsApp API by devnolife

This is a simple WhatsApp API built using Node.js and the `whatsapp-web.js` library. It allows you to check whether a phone number is registered on WhatsApp and send a custom message to a registered user.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/devnolife/adminWa.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd adminWa
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Usage

1. **Run the server:**

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:8080`.

2. **Open your browser and visit [http://localhost:8080](http://localhost:8080) to check if the server is running.**

## Endpoints

### 1. Check if a number is registered on WhatsApp

   - **Endpoint:** `/api/whatsapp/check-number/:number`
   - **Method:** GET
   - **Parameters:**
     - `:number` - The phone number to check.
   - **Response:**
     - `200 OK` - The number is registered.
     - `422 Unprocessable Entity` - The number is not registered.
     - `500 Internal Server Error` - An error occurred.

### 2. Send a custom message to a registered user

   - **Endpoint:** `/api/whatsapp/send-message/:number/:name`
   - **Method:** POST
   - **Parameters:**
     - `:number` - The phone number to send the message to.
     - `:name` - The name to include in the message.
   - **Response:**
     - `200 OK` - The message was sent successfully.
     - `422 Unprocessable Entity` - The number is not registered.
     - `500 Internal Server Error` - An error occurred.

## Additional Information

- The server also provides a default route at `/` that returns a welcome message.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.