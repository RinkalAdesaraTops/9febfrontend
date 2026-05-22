import axios from "axios";
import React, { useEffect, useState } from "react";

const Apicrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
      axios
        .put("http://localhost:3000/users/"+id, data)
        .then(() => console.log("Data updated.."));
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => console.log("Data inserted.."));
    }
    disp();
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAlldata(res.data));
  };
  useEffect(() => {
    console.log("use effect called...");
    disp();
  }, []);
  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => console.log("Data deleted.."));
    disp();
  };
  const editData = (id) => {
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
    setId(id);
  };
  return (
    <div>
      <h3>Api Example</h3>

      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        Age:
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        Salary:
        <input
          type="text"
          name="salary"
          onChange={handleChange}
          value={data.salary}
        />
        <br />
        <br />
        <input type="submit" value="Save Data" />
        <br />
        <br />
      </form>
      <br />
      <br />
      <table border={"2"}>
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
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Apicrud;
