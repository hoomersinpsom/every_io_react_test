import React from "react";

type PropTypes = {
  name: string;
  children: React.ReactNode;
};

export default function Column({ name, children }: PropTypes) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h4>{name}</h4>
          {children}
        </div>
      </div>
    </div>
  );
}
