import {useDispatch} from "react-redux";
import {v4 as uuid} from "uuid";
import {addContact} from "../../redux/contactsSlice";

const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = {
      id: uuid(), name, number
    };

    form.reset();

    dispatch(addContact(newContact));
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" required/>
        <input type="text" placeholder="Number" name="number" required/>
        <button type="submit">Add</button>
      </form>
  );
};

export default ContactEditor;