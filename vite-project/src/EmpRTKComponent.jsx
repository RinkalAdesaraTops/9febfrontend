import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delFun, insFun, updFun } from "./redux/UserAction";
import { addFun, deleteFun, updateFun } from "./RTK/EmpReducer";

const EmpRTKComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const alldata = useSelector((state) => state.Emp.data);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    dispatch(addFun(data));
    // if (id !== "") {
    //     dispatch(updateFun({id,data}))
    // } else {
    //   dispatch(addFun(data));
    // }
    setData({
      name: "",
      age: "",
      salary: ""
    });
   
  };
  const updateData = ()=>{
    dispatch(updateFun({id,data}))
     setData({
      name: "",
      age: "",
      salary: ""
    });
    setId("");
  }
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setData(res);
    setId(id);
  };
  return (
    <div>
      <h1>User CRUD - Redux Example</h1>
      <form action="#" method="post" onSubmit={(id!=='')?updateData:saveData}>
        Name:
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        Age:
        <input
          type="number"
          name="age"
          id=""
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        Salary:
        <input
          type="number"
          name="salary"
          id=""
          onChange={handleChange}
          value={data.salary}
        />
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>
      <table border={"1"}>
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
                  <button onClick={() => dispatch(deleteFun(index))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default EmpRTKComponent;
