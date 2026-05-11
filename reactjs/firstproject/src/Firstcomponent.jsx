const Firstcomponent = ()=>{
    let a=10
    var b=20
    const name="abc"
    const dispName = ()=>{
        alert("Hello")
    }
    const getName=(a)=>{
        alert("Name is "+a)
    }
    return (
        <div>
            <h3>First component created by me...</h3>
            <h4>Addition is {a+b}</h4>
            <h4>Name is -- {name}</h4>
            <button onClick={dispName}>Add</button>
            <button onClick={()=>getName("test")}>Display</button>
        </div>
    )
}
export default Firstcomponent
// function Firstcomponent(){

// }