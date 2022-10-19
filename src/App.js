import { useState } from 'react';
// import { Bookmark } from 'react-bookmark';
import './App.css';
import Loader from './components/loader/Loader';



function App() {

  const [pwLength, setPwLength] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleChange = (e) => {
    const password = e.target.value;
    let flag1 = 1;
    let flag2 = 1;
    let flag3 = 1;
    let flag4 = 1;
    let flag5 = 1;

    if (password.match(/[0-9]/)) {
      setIsNumber(true)
      flag5 = 0;
    }
    if (password.match(/[a-z]/)) {
      setIsLowercase(true)
      flag2 = 0;
    }
    if (password.match(/[A-Z]/)) {
      setIsUppercase(true)
      flag1 = 0;
    }
    if (password.match(/([!,#,$,%,&,*,+,/,=,>,?,@,^,_,',~,])/)) {
      setIsSymbol(true);
      flag4 = 0;
    }
    if (password.length >= 8) {
      setPwLength(true)
      flag3 = 0;
    }
    
    if (flag1 === 1) {
      setIsUppercase(false)
    }
    if (flag2 === 1) {
      setIsLowercase(false)
    }
    if (flag3 === 1) {
      setPwLength(false)
    }
    if (flag4 === 1) {
      setIsSymbol(false)
    }
    if (flag5 === 1) {
      setIsNumber(false)
    }

    setIsDisabled(pwLength && isUppercase && isLowercase && isNumber && isSymbol)
  }

  return (
    <div className='Ccontainer'>
      {/* <div className={`${isLoad ? "d-none" : ""}`}>
        <Loader />
      </div> */}
      {/* <Bookmark className="coolClass" href="/cool/path" title="My Cool Website" /> */}
      <form onLoad={()=>{console.log("load")}} className="form" action="">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input onChange={toggleChange} autoFocus className="form-control" />
          </div>

        </div>
        <div className="checkPoints my-3 d-grid flex-column">
          <span className="">Password requirements : </span>

          <span className={`point ${isUppercase ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isUppercase ? "done" : "noise_control_off"}</span> AtLeast one CAPITAL letter</span>
          <span className={`point ${isLowercase ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isLowercase ? "done" : "noise_control_off"}</span> Atleast one small letter</span>
          <span className={`point ${isNumber ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isNumber ? "done" : "noise_control_off"}</span> Atleast one number</span>
          <span className={`point ${isSymbol ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isSymbol ? "done" : "noise_control_off"}</span> Atleast one of the following special characters: {`!#$%&*+/=>?@][^_ '~{|}`}</span>
          <span className={`point ${pwLength ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{pwLength ? "done" : "noise_control_off"}</span> Atleast 8 characters</span>

        </div>
        <button type="button" disabled={isDisabled} class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
