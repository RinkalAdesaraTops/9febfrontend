import React, { useState } from "react";

const Usercrud = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [id, setId] = useState("");
  const [alldata, setAllData] = useState([]);
  const addAge = (e) => {
    setAge(e.target.value);
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      //update
      let res = alldata.map((i,index)=>{
                  if(index==id){
                    i.name = name
                    i.age = age
                    i.salary = salary
                  }
                  return i
      })
    } else {
      //insert
      setAllData([
        ...alldata,
        {
          name: name,
          age: age,
          salary: salary,
        },
      ]);
    }
    setId('')
    setName('')
    setAge('')
    setSalary('')
  };
  const delData = (id) => {
    // 0 1 2 4 =  3
    let res = alldata.filter((i, index) => index != id);
    setAllData(res);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setName(res.name);
    setAge(res.age);
    setSalary(res.salary);
    setId(id);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        Age:
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={addAge}
        />
        <br />
        <br />
        Salary:
        <input
          type="number"
          name="salary"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="SaveData" />
        <br />
        <br />
      </form>
      <br />
      <br />
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

export default Usercrud;
