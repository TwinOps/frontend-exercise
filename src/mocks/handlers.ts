import { rest } from 'msw';

export const handlers = [
  rest.get('/api/v1/fruits', async (request, response, context) => {
    return response(
      context.delay(100),
      context.status(200),
      context.json([
        { id: 'a', value: 'apple' },
        { id: 'o', value: 'orange' },
        { id: 'g', value: 'grape' },
        { id: 'p', value: 'pear' },
      ]),
    );
  }),
];
