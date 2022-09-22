import React from "react";

type PropTypes = {
  text: string;
  slug: string;
  index: number;
  disableButton?: string;
  onUpdateTask: Function;
};

export default function Task(props: PropTypes) {
  function handleUpdateTask(e: any, direction: number) {
    e.preventDefault();
    props.onUpdateTask(props.slug, direction, props.index);
  }

  return (
    <div className="card mb-3">
      <div className="btn-group btn-group-sm">
        <button
          disabled={props.disableButton === "prev"}
          className="btn btn-dark"
          onClick={(e) => handleUpdateTask(e, -1)}
        >
          &lt;
        </button>
        <button
          disabled={props.disableButton === "next"}
          className="btn btn-dark"
          onClick={(e) => handleUpdateTask(e, 1)}
        >
          &gt;
        </button>
      </div>
      <div className="card-body bg-light">
        <p className="mb-0">{props.text}</p>
      </div>
    </div>
  );
}
