import React, { useState } from "react";

import Task from "./Task";
import Column from "./Column";
import AddTaskForm from "./AddTaskForm";

const DEFAULT_COLUMNS = [
  {
    name: "To Do",
    slug: "todo",
    items: [],
  },
  {
    name: "In Progress",
    slug: "inProgress",
    items: [],
  },
  {
    name: "Done",
    slug: "done",
    items: [],
  },
];

type StatusColumn = {
  name: string;
  slug: string;
  items: Array<string>;
};

export function ChallengeComponent() {
  const [columns, setColumns] = useState<Array<StatusColumn>>(DEFAULT_COLUMNS);

  function handleAddTask(text: string) {
    const ind = columns.findIndex((task) => task.slug === "todo");
    const newColumns = [...columns];
    newColumns[ind].items.push(text);
    setColumns(newColumns);
  }

  function handleUpdateTask(slug: string, direction: number, index: number) {
    const currentTaskIndex = columns.findIndex((task) => task.slug === slug);
    const newColumns = [...columns];
    const text = newColumns[currentTaskIndex].items[index];
    newColumns[currentTaskIndex].items.splice(index, 1);
    newColumns[currentTaskIndex + direction].items.push(text);
    setColumns(newColumns);
  }

  function getDisabledButton(i: number) {
    if (i === 0) return "prev";
    if (i === columns.length - 1) return "next";
  }

  return (
    <div className="container py-3">
      <div className="row">
        {columns.map((column, i) => (
          <Column name={column.name} key={i}>
            {column.items.map((text, taskIndex) => (
              <Task
                disableButton={getDisabledButton(i)}
                onUpdateTask={handleUpdateTask}
                text={text}
                key={taskIndex}
                index={taskIndex}
                slug={column.slug}
              />
            ))}
          </Column>
        ))}
      </div>
      <hr />
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
}
