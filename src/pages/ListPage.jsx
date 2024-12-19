import React from "react";
import List from "../components/List";

const ListPage = ({
  detailLists,
  editInformation,
  deletDeatailsFromList,
  handlePreview,
}) => {
  return (
    <>
      <List
        detailLists={detailLists}
        editInformation={editInformation}
        deletDeatailsFromList={deletDeatailsFromList}
        handlePreview={handlePreview}
      />
    </>
  );
};

export default ListPage;
