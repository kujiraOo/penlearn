import table from './components/table.js';
import button from './components/button.js';
import { getRandomNumbers } from './client.js';
import flexContainer from './components/flex-container.js';
import { div } from './components/helpers.js';

const App = (parent) => {
  let state = { randomNumbers: [{}] };
  let el = null;

  const render = ({ onClick }) => {
    const { randomNumbers } = state;

    const el = div(
      table(randomNumbers),
      flexContainer(
        button('Random number!', onClick)
      )
    );
  
    parent.appendChild(el);
  
    return el;
  };
  
  const updateState = (newState) => { 
    state = newState;
  
    if (el) el.remove();
  
    el = render({
      state,
      onClick: () => updateState({ randomNumbers: [{ wow: 'wow', pbp: 1 }] }),
    });
  };

  getRandomNumbers().then((newRandomNumbers) => updateState({ randomNumbers: newRandomNumbers }));


  return {
    render,
    updateState,
  }
}



const init = async () => {
  const rootElement = document.getElementById('root');

  App(rootElement);
}

init();
