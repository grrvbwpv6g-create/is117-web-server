
const app = require('../index');

test('home page returns the correct response', async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}/`);
    const text = await response.text();

    expect(response.status).toBe(200);
    expect(text).toBe('Hello, IS117! Your web server is working.');
  } finally {
    server.close();
  }
});

test('about page returns the correct response', async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}/about`);
    const text = await response.text();

    expect(response.status).toBe(200);
    expect(text).toBe('A web server receives a request and sends a response.');
  } finally {
    server.close();
  }
});

test('missing page returns a 404 response', async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}/missing-page`);
    const text = await response.text();

    expect(response.status).toBe(404);
    expect(text).toBe('Page not found.');
  } finally {
    server.close();
  }
});
