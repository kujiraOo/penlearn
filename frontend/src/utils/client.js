const request = async (...args) => {
  const response = await fetch(...args);

  if (!response.ok) {
    const { status, statusText } = response;

    console.error(`request failed ${status} ${statusText}`);

    return null;
  }

  return response.json();
};

const get = (path) => request(`/api/${path}`)

export const getRandomNumbers = () => get('random-numbers');
