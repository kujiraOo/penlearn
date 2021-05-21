import * as randomNumbers from './components/random-numbers.js';
import { html } from './components/helpers.js';
import table from './components/table.js';
import { getRandomNumbers } from './client.js';

console.log('Random Wars!');

const app = async () => {
  const rootElement = document.getElementById('root');

  const randomNumbers = await getRandomNumbers();

  if (randomNumbers) {
    rootElement.appendChild(table(randomNumbers));
  }
}

app();
