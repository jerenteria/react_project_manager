import Input from "./Input";
import { useRef } from "react";
import Modal from './Modal';

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value; // get entered val of input
    const enteredDescription = description.current.value; // get entered val of input
    const enteredDueDate = dueDate.current.value; // get entered val of input

    // VALIDATION
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show modal
      modal.current.open();
      return; // if we do have invalid input 'return' so that user is unable to submit form
    }

    // make the form an object which will be passed to handleProjectData in app.js which will be expecting an object to be taken in
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} button="Close">
        <h2>Invalid Input</h2>
        <p>You entered invalid data</p>
        <p>Please make sure you provide valid data</p>
      </Modal>
      <div className="w-[35-rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
