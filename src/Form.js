import { v4 as uuidv4 } from "uuid";
export default function Form({
  setForm,
  formObj,
  setFormObj,
  setAddresses,
  editObj,
  addresses
}) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("New");
    console.log(formObj);
    setAddresses([...addresses, formObj]);
    setFormObj({
      id: uuidv4(),
      name: "",
      ph: "",
      address1: "",
      address2: "",
      pincode: "",
      city: "",
      state: "",
      edit: false
    });
    setForm((e) => !e);
  };
  const closeForm = () => {
    setForm((e) => !e);
  };
  const closeEditForm = () => {
    let temp = addresses.map((obj) => {
      return { ...obj, edit: false };
    });
    setAddresses(temp);
  };
  const UpdateHandler = (e) => {
    e.preventDefault();
    let temp = addresses.map((ob) => {
      if (editObj.id === ob.id) {
        return {
          ...ob,
          name: formObj.name,
          ph: formObj.ph,
          address1: formObj.address1,
          address2: formObj.address2,
          pincode: formObj.pincode,
          city: formObj.city,
          state: formObj.state,
          edit: false
        };
      }
      return ob;
    });
    console.log("edit");
    setAddresses(temp);
    setFormObj({
      id: uuidv4(),
      name: "",
      ph: "",
      address1: "",
      address2: "",
      pincode: "",
      city: "",
      state: "",
      edit: false
    });
  };
  return (
    <div>
      <form
        className="flex-col form"
        onSubmit={
          !editObj.edit ? (e) => submitHandler(e) : (e) => UpdateHandler(e)
        }
      >
        <label className="text-left p-md" for="fname">
          Name:
        </label>
        <br />
        <input
          value={formObj.name}
          onChange={(e) => setFormObj({ ...formObj, name: e.target.value })}
          type="text"
          class="basic-input input-sm"
        />
        <label className="text-left p-md" for="fname">
          Phone Number:
        </label>
        <br />
        <input
          value={formObj.ph}
          onChange={(e) => setFormObj({ ...formObj, ph: e.target.value })}
          type="number"
          class="basic-input input-sm"
        />
        <label className="text-left p-md" for="fname">
          Address Line 1:
        </label>
        <br />
        <input
          value={formObj.address1}
          onChange={(e) => setFormObj({ ...formObj, address1: e.target.value })}
          type="text"
          class="basic-input input-sm"
        />
        <label className="text-left p-md" for="fname">
          Address Line 2:
        </label>
        <br />
        <input
          value={formObj.address2}
          onChange={(e) => setFormObj({ ...formObj, address2: e.target.value })}
          type="text"
          class="basic-input input-sm"
        />

        <label className="text-left p-md" for="fname">
          Pincode
        </label>
        <br />
        <input
          value={formObj.pincode}
          onChange={(e) => setFormObj({ ...formObj, pincode: e.target.value })}
          type="text"
          class="basic-input input-sm"
        />

        <label className="text-left p-md" for="fname">
          City:
        </label>
        <br />
        <input
          value={formObj.city}
          onChange={(e) => setFormObj({ ...formObj, city: e.target.value })}
          type="text"
          class="basic-input input-sm"
        />
        <label className="text-left p-md" for="fname">
          State:
        </label>
        <br />
        <input
          value={formObj.state}
          onChange={(e) => setFormObj({ ...formObj, state: e.target.value })}
          type="text"
          class="basic-input input-sm"
        />
        <div className="u-margin-bottom-small"></div>

        {editObj.edit ? (
          <div className="flex">
            <input className="btn btn-primary" type="submit" value="Update" />
            <a onClick={closeEditForm} className="btn btn-secondary btn-md">
              Cancel
            </a>
          </div>
        ) : (
          <div className="flex">
            <input className="btn btn-primary" type="submit" value="Submit" />
            <a onClick={closeForm} className="btn btn-secondary btn-md">
              Cancel
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
