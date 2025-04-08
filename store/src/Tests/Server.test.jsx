import request from 'supertest';
import app from '../../server.js';

describe('Server', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/register')
            .send({ username: 'TestUser', password: 'TestPassword' });

        expect(response.body.message).toBe('Register Successful');
    });
});