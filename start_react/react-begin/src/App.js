import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((current) => {
      return current + 1;
    });
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  //최초 1회 실행
  useEffect(() => {
    console.log("i run only once");
  }, []);

  //keyword가 변경 될 때마다 실행
  useEffect(() => {
    console.log("i run when 'keyword' changed");
  }, [keyword]);

  //counter가 변경 될 때마다 실행
  useEffect(() => {
    console.log("i run when 'counter' changed");
  }, [counter]);

  //keyword or counter가 변경 될 때마다 실행
  useEffect(() => {
    console.log("i run when 'keyword' or 'counter' changed");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
