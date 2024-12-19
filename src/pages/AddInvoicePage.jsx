import React from "react";
import AddBtn from "../components/AddBtn";

const AddInvoicePage = ({
  details,
  deletDetail,
  handleChange,
  handleSubmit,
}) => {
  return (
    <>
      <AddBtn
        details={details}
        deletDetail={deletDetail}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddInvoicePage;
