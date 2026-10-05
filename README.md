# Inventory Management System

REST API for managing product inventory using Node.js, Express.js and MongoDB.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY

Install dependencies:

npm install

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run development server:

npm run dev

## APIs

### Create Product

POST /products

### Get Products

GET /products

### Purchase Product

POST /products/purchase

### Restock Product

POST /products/restock

### Product History

GET /products/:productId/history

## Business Rules

- Product name must be unique
- Price must be greater than zero
- Stock cannot be negative
- Purchase quantity must be greater than zero
- Restock quantity must be greater than zero
- Purchase cannot exceed available stock
- Every purchase creates a transaction
- Every restock creates a transaction