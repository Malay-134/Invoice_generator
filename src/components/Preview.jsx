import React from "react";

const Preview = ({ previewDetails, closePreview }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start">
      <div className="bg-white p-6 rounded-md shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <p>
          <strong>Item:</strong> {previewDetails.item}
        </p>
        <p>
          <strong>Price:</strong>
          {parseInt(previewDetails.price) +
            parseInt(previewDetails.price * 18) / 100}
        </p>
        <p>
          <strong>Description:</strong> {previewDetails.des}
        </p>
        <p>
          <strong>Company Name:</strong> {previewDetails.companyName}
        </p>
        <p>
          <strong>Bill No:</strong> {previewDetails.billNo}
        </p>
        <p>
          <strong>Owner:</strong> {previewDetails.owner}
        </p>
        <p>
          <strong>Date:</strong> {previewDetails.date}
        </p>
        <button
          onClick={closePreview}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Preview;
