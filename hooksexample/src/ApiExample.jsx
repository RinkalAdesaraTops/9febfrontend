import React, { useEffect, useState } from "react";
import useMyApi from "./useMyApi";

const ApiExample = () => {
    const [user] = useMyApi("https://jsonplaceholder.typicode.com/users")
    const [post] = useMyApi("https://jsonplaceholder.typicode.com/posts")
//   const [user, setUser] = useState([]);
//   const [post, setPost] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => setPost(json));

//     fetch("https://jsonplaceholder.typicode.com/users") 
//       .then((response) => response.json())
//       .then((json) => setUser(json));
//   }, []);
  return (
    <>
    <h3>User Information</h3>
    <table border={'2'}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
};

export default ApiExample;
