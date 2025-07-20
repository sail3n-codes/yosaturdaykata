import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-center mb-12">
      <div className="join text-center">
        <button className="join-item btn bg-base-100">1</button>
        <button className="join-item btn bg-base-100">2</button>
        <button className="join-item btn btn-disabled  bg-base-100">...</button>
        <button className="join-item btn bg-base-100">9</button>
        <button className="join-item btn bg-base-100">10</button>
      </div>
    </div>
  );
}
