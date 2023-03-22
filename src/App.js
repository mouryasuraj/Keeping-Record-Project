import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState([]);

  const addData=()=>{
    setData({
      name, email, mobile
  });
  };
  console.log(data)
  return (
    <div className="App">
      <Header />
      <div className="textField">
        <Stack spacing={2} direction="column">
          <div>
            <Stack spacing={2} direction="row">
              <TextField id="outlined-basic" value={name} onChange={(e)=> setName(e.target.value)} label="Name" variant="outlined" />
              <TextField id="outlined-basic" value={email} onChange={(e)=> setEmail(e.target.value)}  label="Email" variant="outlined" />
            </Stack>
          </div>
          <TextField
            id="outlined-number"
            label="Mobile Number"
            type="number"
            value={mobile} 
            onChange={(e)=> setMobile(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button onClick={addData} className="addBtn" color="success" variant="contained">
            Add
          </Button>
        </Stack>
      </div>
    </div>
  )
};

export default App;
