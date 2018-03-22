# Server Blog TDD

List of API Server routes:

|           Route         |  HTTP   |             Description               |
| ----------------------- | ------- | ------------------------------------- |
| /api/users/signup       | POST    | Register a new user                   |
| /api/users/signin       | POST    | Login user                            |
| /api/article            | POST    | Create a article                      |
| /api/article            | GET     | Get all the article                   |
| /api/article/:id        | GET     | Get a article by id                   |
| /api/article/:id        | PUT     | Update a article                      |
| /api/article/:id        | DELETE  | Delete a article                      |


### Usage
With only npm:
```
npm install
npm run test
npm run dev
```

### Access
Access API Server  `http://localhost:3003`  
Or `http://seorangeksa.com:3003`