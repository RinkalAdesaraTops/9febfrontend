import React, { useState } from "react";

const Empcomponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");
  const handleChange = (e) => {
    let { name, value } = e.target;
    // let n = e.target.name
    // let v = e.target.value
    setData({
      ...data,
      [name]: value,
      // [n]:v
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
      let res = alldata.map((i, index) => {
        if (index == id) {
          i = data;
        }
        return i;
      });
      setAlldata(res)
    } else {
      setAlldata([...alldata, data]);
    }
    setData({
      name: "",
      age: "",
      salary: ""
    });
    setId("");
  };
  const delData = (id) => {
    // 0 1 2 4 =  3
    let res = alldata.filter((i, index) => index != id);
    setAlldata(res);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setData(res);
    setId(id);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input type="text" name="name" onChange={handleChange} value={data.name}/>
        <br />
        <br />
        Age:
        <input type="text" name="age" onChange={handleChange} value={data.age}/>
        <br />
        <br />
        Salary:
        <input type="text" name="salary" onChange={handleChange} value={data.salary} />
        <br />
        <br />
        <input type="submit" value="Save Data" />
        <br />
        <br />
      </form>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Empcomponent;
