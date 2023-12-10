import "./App.css";
import SideBar from "./components/sideBar";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
function App() {
  return (
    <div className="App">
      <SideBar activeStep={1} />
      {/* <StepOne></StepOne> */}
      {/* <StepTwo></StepTwo> */}
      {/* <StepThree></StepThree> */}
      <StepFour></StepFour>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <sideBar></sideBar> */}
    </div>
  );
}

export default App;
