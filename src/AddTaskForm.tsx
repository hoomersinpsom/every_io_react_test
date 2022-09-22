import React, { useState } from "react";

type PropTypes = {
  onAddTask: Function;
};

export default function AddTaskForm({ onAddTask }: PropTypes) {
  const [text, setText] = useState<string>("");

  function handleSubmit(e: any) {
    e.preventDefault();
    onAddTask(text);
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="btn-group btn-group-sm">
        <input
          type="text"
          className="form-control"
          value={text}
          required
          onChange={({ target }) => setText(target.value)}
        />
        <button className="btn btn-dark">Add</button>
      </div>
    </form>
  );
}
