import React, { useState } from 'react';

const App = (props) => {
  // const initialState = {
  //   name: '',
  //   price: 1000
  // };

  // const [name, setName] = useState(initialState.name);
  // const [price, setPrice] = useState(initialState.price);


  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }


  return (
    <div>
      <h1>Multiple State</h1>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>{props.name}，{props.price}円にReset</button>

      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

// デフォルトでpropsの値を持たせることも
App.defaultProps = {
  name: 'Sample',
  price: 1000
};

export default App;
