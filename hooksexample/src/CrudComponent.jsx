import React, { useCallback, useState } from "react";
import Display from "./Display";

const CrudComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [alldata, setAllData] = useState([]);
  const handleChange = (e) => {
    console.log("handlechange called..");

    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = useCallback((e) => {
    e.preventDefault();
    console.log("save data func called..");
    setAllData([...alldata, data]);
  },[data]);
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="" onChange={handleChange} />
        <br />
        <br />
        Age:
        <input type="number" name="age" id="" onChange={handleChange} />
        <br />
        <br />
        <input type="submit" value="Save Data" />
      </form>
      <br />
      <br />
      <Display alldata={alldata} />
      {/* memoized/freeze/prevent function  */}
      {/* memoized/freeze/prevent value  */}
    </div>
  );
};
export default CrudComponent;
