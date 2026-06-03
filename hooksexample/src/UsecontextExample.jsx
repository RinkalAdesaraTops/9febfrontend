import React,{createContext, useContext, useState} from "react";
const userdata = createContext()
const UsecontextExample = () => {
    const [name,setName] = useState("Test")
  return (
    <div>
      <h3>COmponent-1 called..</h3>
      <h4>Name is -- {name}</h4>
      <userdata.Provider value={name}>
        <Component2/>
      </userdata.Provider>
    </div>
  );
};
const Component2 = () => {
  return (
    <div>
      <h3>COmponent-2 called..</h3>
      <Component3 />
    </div>
  );
};
const Component3 = () => {
  return (
    <div>
      <h3>COmponent-3 called..</h3>
      <Component4 />
    </div>
  );
};
const Component4 = () => {
    let getname = useContext(userdata)
  return (
    <div>
      <h3>COmponent-4 called..</h3>
      <h4>Final name is -- {getname}</h4>
    </div>
  );
};

export default UsecontextExample;
