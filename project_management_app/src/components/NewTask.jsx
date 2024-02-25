import { useState } from "react";

export default function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
      if(enteredTask.trim() === '') {
          return;
      }
    // call onAdd and forward enteredTask value(value entered by user to onAdd)
    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-4 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button className="text-stone-700 hover:text-stone-750" onClick={handleClick}>Add Task</button>
    </div>
  );
}
