import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
const FirebaseCRud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  useEffect(() => {
    const q = query(collection(db, "userdata"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setAlldata(todosArray);
    });
    return () => unsub();
  }, []);
  const saveData = async (e) => {
    e.preventDefault();
    if (id !== "") {
        await updateDoc(doc(db,"userdata",id),data)
    } else {
      await addDoc(collection(db, "userdata"), data);
    }
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  const delData = async (id) => {
    await deleteDoc(doc(db, "userdata", id));
  };
  const editData = async (id) => {
    let res = await getDoc(doc(db, "userdata", id));
    setData(res.data());
    setId(id);
  };
  return (
    <div>
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

export default FirebaseCRud;
