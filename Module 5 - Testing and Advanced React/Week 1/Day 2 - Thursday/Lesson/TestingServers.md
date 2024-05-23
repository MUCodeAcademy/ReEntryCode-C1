# Testing Servers

Testing servers is quite similar to testing a webpage, the main difference is that there is no page to render. Essentially, we will mock our request to the database/websocket, and mock the return value as well. Here is an example of testing a /register endpoint:

```js
// Supertest is a library that makes testing endpoints WAY easier. It's not required, but it's significantly less code if you use it.
const request = require('supertest');
const app = require('./server');

describe('Server', () => {
    it('should register a new user', async () => {
        // Make a request to our app
        const res = await request(app)
            // Mock the post request 
            .post('/register')
            // Data we want to send
            .send({ username: 'testuser', password: 'testpassword' })
            // (Optional) Expect the content type of the returned data to be text
            .expect('Content-Type', /text/)
            // (Optional) Expect it to be a 201 status code (assuming your server sends a 201 satus code back)
            .expect(201);

        // Expect the response to be "User registered successfully"
        expect(res.text).toBe('User registered successfully');
    });
});
```