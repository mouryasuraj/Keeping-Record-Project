import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});

  const [data, setData] = useState([]);

  const addData = () => {
    if (form.name === "" || form.email === "" || form.mobile === "") {
      alert("Please fill all the fields");
    } else {
      setData([...data, form]);
      setForm(form);
    }
  };

  const removeItem = (index) => {
    const arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      {/* /* Header */}
      <Header />
      {/* Form Started */}
      <div className="textField">
        <Stack spacing={2} direction="column">
          <div>
            <Stack spacing={2} direction="row">
              <TextField
                id="outlined-basic"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                label="Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                label="Email"
                variant="outlined"
              />
            </Stack>
          </div>
          <TextField
            id="outlined-number"
            label="Mobile Number"
            type="number"
            value={form.mobile}
            onChange={(e) => setForm({...form, mobile: e.target.value})}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            onClick={addData}
            className="addBtn"
            color="success"
            variant="contained"
          >
            Add
          </Button>
        </Stack>
      </div>
      {/* Form Ended */}

      {/* Display Show Data Started */}
      <div className="DataDisplay">
        <div className="HeadingName">
          <div className="head">
            <h4>Name</h4>
          </div>
          <div className="head">
            <h4>Email</h4>
          </div>
          <div className="head">
            <h4>Mobile</h4>
          </div>
          <div className="head">
            <h4>Remove</h4>
          </div>
        </div>
        {data.map((e, index) => {
          return (
            <div className="dataDisplay">
              <div className="head">{e.name}</div>
              <div className="head">{e.email}</div>
              <div className="head">{e.mobile}</div>
              <div className="head">
                <RemoveCircleIcon
                  onClick={() => removeItem(index)}
                  className="removeIcon"
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Display Show Data Ended */}
    </div>
  );
}

export default App;
