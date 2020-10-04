import React, { useEffect, useState } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);

  const reset = () => { setState(props) }

  // state.price => priceとするには？
  const {name, price} = state

  // useEffect(関数,　[])
  // useEffect(() => {f}, )
  // componentDidUpdateと同じようなもの
  useEffect(() => {
    console.log('componentDidUpdate')
  })

  // componentDidMount -> 第2引数に[]を追加
  useEffect(() => {
    console.log('componentDidMount')
  }, [])

  // nameが書き換えられたときに追加
  // componentDidMount -> 第2引数に[name]を追加
  useEffect(() => {
    console.log('call back for only adding name')
  }, [name])

  const renderPeriod = () => {
    console.log('render period')
    return 'Called renderPeriod'
  }


  return (
    <div>
      <h1>Multiple State</h1>
      {renderPeriod()}
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={reset}>{props.name}，{props.price}円にReset</button>

      {/* ...state, 変更されるもののみ渡す． */}
      <input type="text" value={name} onChange={e => setState({...state, name: e.target.value})} />
    </div>
  );
}

// デフォルトでpropsの値を持たせることも
App.defaultProps = {
  name: 'Sample',
  price: 1000
};

export default App;
