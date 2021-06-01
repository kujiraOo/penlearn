const request = async ({ url, body, method }) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    const { status, statusText } = response;

    console.error(`request failed ${status} ${statusText}`);

    return null;
  }

  return response.json();
};

const get = (path) => request({ 
  method: 'GET',
  url: `/api/${path}`,
});

const post = (path, body) => request({
  method: 'POST',
  url: `/api/${path}`,
  body,
});

export const getRandomNumbers = () => get('random-numbers');

export const addRandomNumber = () => post('random-numbers', {
  min: 50,
  max: 100,
});
