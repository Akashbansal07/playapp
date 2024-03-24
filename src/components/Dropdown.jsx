import React from 'react';

function Dropdown({ items }) {
  return (
    <div
      className="absolute top-full left-0 mt-1 py-2 w-40 bg-zinc-900 text-white rounded shadow-md z-10"
    >
      <ul className="divide-y divide-zinc-600 text-zinc-300">
        {items.map((item, index) => (
          <li key={index} className="py-1 px-3 hover:bg-sky-400 rounded hover:text-zinc-900 ">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
