import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import AddressContainer from "./AddressContainer";
export default function App() {
  const [form, setForm] = useState(false);
  const initAdd = {
    id: uuidv4(),
    name: "",
    ph: "",
    address1: "",
    address2: "",
    pincode: "",
    city: "",
    state: "",
    edit: false
  };
  const [formObj, setFormObj] = useState(initAdd);
  const [addresses, setAddresses] = useState([
    {
      id: uuidv4(),
      name: "Aryan Chaudhary",
      ph: 1234567891,
      address1: "E-125",
      address2: "Sector-95",
      pincode: 100100,
      city: "Noida",
      state: "Uttar Pradesh",
      edit: false
    }
  ]);
  const addNewAddr = () => {
    for (let i = 0; i < addresses.length; i++) {
      addresses[i].edit = false;
    }
    setFormObj(initAdd);
    setForm(!form);
  };
  const checkEditable = () => {
    for (let i = 0; i < addresses.length; i++) {
      if (addresses[i].edit === true) {
        return true;
      }
    }
    return false;
  };
  return (
    <div className="App">
      <div>
        <h4 className="heading-3 bold-1 text-left">Manage Address</h4>
        <div className="u-margin-bottom-medium"></div>
        <a className="btn btn-primary btn-md" onClick={addNewAddr}>
          Add a new address
        </a>
        <div className="u-margin-bottom-small"></div>
        {form && !checkEditable() && (
          <Form
            setForm={setForm}
            formObj={formObj}
            setFormObj={setFormObj}
            setAddresses={setAddresses}
            editObj={formObj}
            addresses={addresses}
          />
        )}
        <div className="u-margin-bottom-small"></div>
        <AddressContainer
          setForm={setForm}
          formObj={formObj}
          setAddresses={setAddresses}
          addresses={addresses}
          setFormObj={setFormObj}
        />
      </div>
    </div>
  );
}
