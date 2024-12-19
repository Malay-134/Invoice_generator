import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddInvoicePage from "./pages/AddInvoicePage";
import ListPage from "./pages/ListPage";
import Preview from "./components/Preview";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [details, setDetails] = useState({
    item: " ",
    price: " ",
    des: " ",
    owner: "",
    companyName: "",
    companyNumber: "",
    companyEmail: "",
    companyAddress: "",
    billNo: "",
    date: "",
  });
  const [detailLists, setDetailLists] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [previewDetails, setPreviewDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setDetailLists((prevList) =>
        prevList.map((item, index) => (index === editIndex ? details : item))
      );
      setEditIndex(null);
    } else {
      setDetailLists((prevList) => [...prevList, details]);
    }

    setDetails({
      item: "",
      price: "",
      des: "",
      owner: "",
      companyName: "",
      companyNumber: "",
      companyEmail: "",
      companyAddress: "",
      billNo: "",
      date: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const deletDeatailsFromList = (index) => {
    const updatedTasks = detailLists.filter((detail, i) => i !== index);
    setDetailLists(updatedTasks);
  };

  const deletDetail = () => {
    setDetails((prevState) => ({ ...prevState, item: "", price: "", des: "" }));
  };

  const editInformation = (index) => {
    setDetails(detailLists[index]);
    setEditIndex(index);
  };

  const handlePreview = (index) => {
    setPreviewDetails(detailLists[index]);
  };
  const closePreview = () => {
    setPreviewDetails(null);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/invoice"
            element={
              <AddInvoicePage
                details={details}
                deletDetail={deletDetail}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/list"
            element={
              <ListPage
                detailLists={detailLists}
                editInformation={editInformation}
                deletDeatailsFromList={deletDeatailsFromList}
                handlePreview={handlePreview}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {previewDetails && (
        <Preview previewDetails={previewDetails} closePreview={closePreview} />
      )}
    </>
  );
}

export default App;
