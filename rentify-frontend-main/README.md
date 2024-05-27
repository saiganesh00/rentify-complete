# Rentify - Where Renting Meets Simplicity

Welcome to Rentify, your premier destination for hassle-free renting. This full-stack web application is designed to streamline the rental process for both property owners (sellers) and tenants (buyers). Rentify aims to make finding and listing rental properties as effortless as possible.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Authentication
- **Register and Login**: Users can register as either a buyer or a seller and log in with their credentials.
- **JWT Authentication**: Secure authentication using JSON Web Tokens.

### Property Management
- **Add Properties**: Sellers can add new properties with detailed information.
- **Update and Delete Properties**: Sellers can update or delete their listed properties.
- **View Properties**: Buyers can view all available properties and filter them based on various criteria.
- **Express Interest**: Buyers can express interest in properties and get seller details.

### Additional Features
- **Form Validation**: Ensures all required fields are correctly filled out.
- **Email Notifications**: Sends email notifications to sellers when a buyer expresses interest in a property.
- **Likes**: Buyers can like properties, and the like count is tracked live.

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.
- **React Router**: For navigation and routing.

### Backend
- **Node.js**: For the server-side runtime environment.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For the database.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For secure authentication.
- **Bcrypt**: For password hashing.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB installed and running.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/rentify.git
   cd rentify
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory and add the following environment variables:

   ```
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

   Start the backend server:

   ```bash
   npm start
   ```

3. **Frontend Setup:**

   ```bash
   cd frontend
   npm install
   ```

   Start the frontend development server:

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login a user and get a token.

### Properties

- **GET** `/api/properties`: Get all properties.
- **POST** `/api/properties`: Add a new property.
- **GET** `/api/properties/:id`: Get a property by ID.
- **PUT** `/api/properties/:id`: Update a property by ID.
- **DELETE** `/api/properties/:id`: Delete a property by ID.

## Project Structure

```
rentify/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── auth/
    │   │   ├── layout/
    │   │   ├── properties/
    │   ├── context/
    │   ├── pages/
    │   ├── App.jsx
    │   └── index.js
    └── tailwind.config.js
```

## Contributing

We welcome contributions to improve Rentify. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Rentify! We hope it makes your rental process smooth and efficient. If you have any questions or feedback, please feel free to reach out.
