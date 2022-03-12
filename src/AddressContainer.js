import Address from "./Address";
import Form from "./Form";
export default function AddressContainer({
  formObj,
  setFormObj,
  addresses,
  setAddresses,
  setForm
}) {
  return (
    <div className="address-container">
      {addresses.map((obj) => {
        return (
          (!obj.edit && (
            <Address
              key={obj.id}
              addresses={addresses}
              obj={obj}
              setFormObj={setFormObj}
              setAddresses={setAddresses}
            />
          )) ||
          (obj.edit && (
            <Form
              setForm={setForm}
              formObj={formObj}
              setFormObj={setFormObj}
              setAddresses={setAddresses}
              editObj={obj}
              addresses={addresses}
            />
          ))
        );
      })}
    </div>
  );
}
