import createClient from 'openapi-fetch';
import { paths } from './lotek.api';

const client = createClient<paths>({
	baseUrl: process.env.BACKEND_URL || 'http://localhost:3000',
});

export default client;

