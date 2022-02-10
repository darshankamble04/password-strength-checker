import './App.css';

function App() {
  const toggleChange = (e) => {
    var strings = e.target.value;
    console.log(strings.length)
    var character = '';
    for (let i=0; i <= strings.length; i++) {
      character = strings.charAt(i);
      if (!isNaN(character * 1)) {
        console.log('character is numeric');
      } else {
        if (character == character.toUpperCase()) {
          console.log('upper case true');
        }
        if (character == character.toLowerCase()) {
          console.log('lower case true');
        }
        else{
          console.log("Not found")
        }
      }
    }
  }
  return (
    <form className="form" action="">
      {/* <div>
        <label style={{ paddingRight: "20px" }} >Password</label>
        <input  autoFocus type="text" />
      </div> */}
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Password</label>
        </div>
        <div class="col-auto">
          <input onChange={toggleChange} className="form-control" />
        </div>

      </div>
      <div className="checkPoints my-3 d-grid flex-column">
        <span className="">Password requirements : </span>
        <span className="point detect my-1 mx-4 d-flex align-items-center"> <span className="material-icons mx-1 fw-bolder">done</span> At Least one CAPITAL letter</span>
        <span className="point my-1 mx-4 d-flex align-items-center"> <span className="material-icons mx-1">noise_control_off</span> At least one small letter</span>
        <span className="point my-1 mx-4 d-flex align-items-center"> <span className="material-icons mx-1">noise_control_off</span> At least one number</span>
        <span className="point my-1 mx-4 d-flex align-items-center"> <span className="material-icons mx-1">noise_control_off</span> Include at least one of the following special characters: {`!#$%&*+/=>?@][^_ '~{|}`}</span>
        <span className="point my-1 mx-4 d-flex align-items-center"> <span className="material-icons mx-1">noise_control_off</span> Be at least 8 charactors</span>
      </div>
    </form>
  );
}

export default App;
