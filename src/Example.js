import React from "react";
import { useState, useEffect } from "react";
const Example = () => {
  const [user, setUser] = useState([]);
  const [inputval, setInputval] = useState();
  const [data, setData] = useState(2); //variable and function
  //const [state,dispatch]=useReducer(reducer,{count:0,showtxt:true})
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const change = () => {
    setData(data * 3);
    setShowText(!showtext);
  };
  const updatevalue = (event) => {
    const newval = event.target.value;
    setInputval(newval);
  };
  const [showtext, setShowText] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  let user1 = {
    name: "Shiva",
    age: "22",
    message: function () {
      console.log(`${this.name} is ${this.age} years old.`);
    },
  };

  user1.message();
  let getName = function () {
    console.log(this.name);
  };

  let user2 = {
    name: "John wick",
    age: 45,
  };

  getName.call(user2);
  return (
    <>
      <div>Fetch api example</div>
      <main>
        <h1>User List</h1>
        <table border={1}>
          <tr>
            <th>S.no:</th>
            <th>First column</th>
          </tr>
          {user &&
            user.length > 0 &&
            user.map((userObj, index) => (
              <tr>
                <td>{index}</td>
                <td key={userObj.id}>{userObj.name}</td>
              </tr>
            ))}
        </table>
      </main>
      <div>
        <center>
          {data}
          <br></br>
          <button className="btn btn-primary" onClick={change}>
            Click here
          </button>
        </center>
      </div>
      <div>
        <center>
          <input placeholder="Enter something.." onChange={updatevalue}></input>
          {inputval}
        </center>
      </div>
      <div>{showtext && <p>Hello ppl !</p>}</div>
    </>
  );
};
export default Example;
