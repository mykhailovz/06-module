import { useState } from 'react';

function Counter({value = 0}) {
  const [counter, setCounter] = useState(value);

  return (
    <div>
      <h1>Counter component</h1>
      <div>
        <p>counter value is: <span data-testid='counter-value'>{counter}</span></p>
        <button data-testid='increase' type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setCounter(counter + 1)}>+</button>
        <button data-testid='decrease' type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
