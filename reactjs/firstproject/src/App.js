import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Thirdcomponent from './Thirdcomponent';
import BootstrapExample from './BootstrapExample';
import MaterialUiExample from './MaterialUiExample';
import StyleComponentExample from './StyleComponentExample'

function App() {
  let name="abcd"
  let age=26
  let data = [10,20,30,40]
  return (
    // fragment react
    // 1)<React.Fragment></React.Fragment>
    //2) <Fragment></Fragment>
    <>
      <h3>First React Project</h3>
      <StyleComponentExample />
      {/* <MaterialUiExample /> */}
      {/* <Thirdcomponent />
      <BootstrapExample /> */}
      {/* <Firstcomponent /> */}
      {/* <Secondcomponent myname={name} age={age} mydata={data}/> */}
    </>
  );
}

export default App;
