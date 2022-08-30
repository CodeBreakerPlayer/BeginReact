import { useState, useEffect } from "react";

//React.StricMode로 인하여 함수가 2번 실행되는 문제 발생
function Hello() {
  useEffect(() => {
    console.log("Hi!");
    return () => {
      console.log("Bye!");
    };
  }, []);
  return <h1>Hello</h1>;
}

function AppCleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((current) => {
      return !current;
    });
  };

  return (
    <div>
      {showing === true ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default AppCleanUp;
