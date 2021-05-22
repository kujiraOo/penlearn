import table from './components/table.js';
import button from './components/button.js';
import { getRandomNumbers } from './client.js';
import flexContainer from './components/flex-container.js';
import { div } from './components/helpers.js';

const createComponent = (parent, component) => {
  let state = null;
  let el = null;
  let currentEffect = 0;
  let currentState = 0;

  const effects = [];
  const states = [];

  const useEffect = (effect) => {
    const done = effects[currentEffect];

    if (!done) {
      effect();
      effects[currentEffect] = true;
    }

    console.log(currentEffect);

    currentEffect++;
  };


  const useState = (initialState) => {
    const stateIndex = currentState;

    if (!states[stateIndex]) {
      states[stateIndex] = initialState;
    }

    const setState = (newState) => {
      states[stateIndex] = newState;

      render();
    };

    currentState++;

    return [states[stateIndex], setState];
  };

  const render = () => {
    if (el) el.remove();

    el = component({ state, useEffect, useState });

    currentEffect = 0;
    currentState = 0;
  
    parent.appendChild(el);
  
    return el;
  };

  return { render }
}

const App = ({ useState, useEffect }) => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const onClick = () => setRandomNumbers([{ wow: 'wow', pbp: 1 }]);

  useEffect(async () => {
    const newRandomNumbers = await getRandomNumbers();

    setRandomNumbers(newRandomNumbers);
  });

  return div(
    table(randomNumbers),
    flexContainer(
      button('Random number!', onClick)
    )
  )
}

const init = () => {
  const rootElement = document.getElementById('root');

  const app = createComponent(rootElement, App);

  app.render();
}

init();
