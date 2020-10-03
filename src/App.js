import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // 引数を入れる場合
  const increment2 = () => {
    setCount(previousCount => previousCount + 1)
  }
  const decrement2 = () => {
    setCount(previousCount => previousCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const double = () => {
    setCount(count * 2)
  }

  const oneThird = () => {
    // 三の倍数の時だけ3で割る
    // if(count % 3 === 0){
    //   setCount(count / 3)
    // }
    setCount( previousCount => {
      if(previousCount % 3 === 0){
        return previousCount / 3
      }else{
        return previousCount
      }
    })
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>Increment2</button>
      <button onClick={decrement2}>Decrement2</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>Double</button>
      <button onClick={oneThird}>3の倍数の時だけ3で割る</button>
    </div>
  );
}

export default App;
