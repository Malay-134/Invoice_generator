import React from "react";

const Buttons = ({ handleSubmit }) => {
  return (
    <div className="flex flex-col gap-3 items-center p-5">
      <button
        onClick={handleSubmit}
        className="border px-4 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        SAVE
      </button>
      <button className="border px-8 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer">
        EDIT
      </button>
      <button className="border px-1 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer">
        DOWNLOAD
      </button>
    </div>
  );
};

export default Buttons;
