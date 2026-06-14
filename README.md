[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24098116&assignment_repo_type=AssignmentRepo)

# P2-Challenge-2 (Client Side)

> Deployment :

> Deployment :

# API Documentation

## Base URL

```txt
{{BASE_URL}}
```

```txt
https://api.p2.gc01aio.foxhub.space
```

---

# Public APIs

Public APIs can be accessed without authentication.

---

## Get All Categories

### Endpoint

```http
GET /apis/pub/products/categories
```

---

## Get All Products

Retrieve all published products.

### Endpoint

```http
GET /apis/pub/products/products
```

### Query Parameters

```txt
?page=1
?limit=12
?q=dress
?sort=ASC
?i=electronics
```

### Search Example

```http
GET /apis/pub/products/products?q=new
```


---

## Get Product Detail

Retrieve a single product by id.

### Endpoint

```http
GET /apis/pub/products/products/:id
```

### Example

```http
GET /apis/pub/products/products/1
```

---

# CMS APIs

# Authentication

## Login

Login to CMS using a registered account.

### Endpoint

```http
POST /login
```

### Request Body

```json
{
  "email": "userla@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "access_token": "<access_token>"
}
```

---

## Register Staff

Register a new staff account.

### Endpoint

```http
POST /add-user
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Request Body

```json
{
  "username": "staff",
  "email": "staff@mail.com",
  "password": "123456",
  "phoneNumber": "08123456789",
  "address": "Bandung"
}
```

### Notes

* Only authenticated users can access this endpoint.
* Admin can create new staff accounts.

---

## Products

### Get All Products

Retrieve all products with pagination, search, filter, and sorting.

### Endpoint

```http
GET /apis/products/products
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Query Parameters

```txt
?page=1
?limit=8
?q=shirt
?sort=ASC
```

---

### Create Product

Create a new product.

### Endpoint

```http
POST /apis/products/products
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Request Body

```json
{
  "name": "Pastel Dress",
  "description": "Comfortable pastel dress",
  "price": 250000,
  "stock": 10,
  "imgUrl": "https://image-url.com",
  "categoryId": 1
}
```

---

### Get Product Detail

Retrieve a single product by id.

### Endpoint

```http
GET /apis/products/products/:id
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Example

```http
GET /apis/products/products/1
```

---

### Update Product

Update an existing product.

### Endpoint

```http
PUT /apis/products/products/:id
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Example

```http
PUT /apis/products/products/1
```

### Request Body

```json
{
  "name": "Pastel Dress Updated",
  "description": "Updated description",
  "price": 300000,
  "stock": 15,
  "imgUrl": "https://image-url.com",
  "categoryId": 1
}
```

---

### Upload Product Image

Update product image.

### Endpoint

```http
PATCH /apis/products/products/:id
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Example

```http
PATCH /apis/products/products/254
```

### Request Body

Form Data

```txt
file: image.jpg
```

---

### Delete Product

Delete a product.

### Endpoint

```http
DELETE /apis/products/products/:id
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Example

```http
DELETE /apis/products/products/1
```

---

## Categories

### Get All Categories

Retrieve all product categories.

### Endpoint

```http
GET /apis/products/categories
```

### Headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

---
