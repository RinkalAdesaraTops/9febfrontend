import React from 'react'

const Usercrud = () => {
  return (
    <div>
      <form action="#">
        Name:
        <input type="text" name="name" id="name" /><br /><br />
        Age:
        <input type="number" name="age" id="age" /><br /><br />
        Salary:
        <input type="number" name="salary" id="salary" /><br /><br />
        <input type="submit" value="SaveData"/><br /><br />               
      </form>
      <br /><br />
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
            
        </tbody>

      </table>
    </div>
  )
}

export default Usercrud
