export default function Address({ obj, setAddresses, addresses, setFormObj }) {
  const editHandler = () => {
    let temp = addresses.map((ob) => {
      if (ob.id === obj.id) {
        ob.edit = true;
      } else {
        ob.edit = false;
      }
      return ob;
    });

    setAddresses(temp);
    setFormObj(obj);
    console.log(obj.edit);
  };
  const deleteHandler = (id) => {
    let temp = addresses.filter((el) => el.id !== id);
    setAddresses(temp);
  };
  return (
    <div>
      <div className="address text-left">
        <h5 className="heading-5">{obj.name}</h5>
        <p className="p-md">Ph:{obj.ph}</p>
        <p className="p-md">
          {obj.address1}, {obj.address2} {obj.city}
        </p>
        <p className="p-md">
          {obj.state} [{obj.pincode}]
        </p>
        <div className="u-margin-bottom-small"></div>
        <div className="flex">
          <a
            onClick={() => editHandler()}
            href="#"
            className="btn btn-primary btn-sm"
          >
            Edit
          </a>
          <a
            onClick={() => deleteHandler(obj.id)}
            className="btn btn-secondary btn-sm"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
