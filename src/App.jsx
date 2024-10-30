import { useState } from "react";
import { data } from "./data";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function App() {
  const [isClickedMultiAccordionsId, setIsClickedMultiAccordionsId] = useState(
    []
  );
  const [isClickedSingleAccordionsId, setIsClickedSingleAccordionsId] =
    useState(null);
  const [isSingleAccordion, setIsSingleAccordion] = useState(false);

  function handleMultiClick(id) {
    setIsClickedSingleAccordionsId(null);
    setIsClickedMultiAccordionsId([...isClickedMultiAccordionsId, id]);
    if (isClickedMultiAccordionsId.includes(id)) {
      setIsClickedMultiAccordionsId(
        isClickedMultiAccordionsId.filter((el) => el !== id)
      );
    }
  }

  function handleSingleClick(id) {
    setIsClickedMultiAccordionsId([]);
    setIsClickedSingleAccordionsId(id);
    if (isClickedSingleAccordionsId === id) {
      setIsClickedSingleAccordionsId(null);
    }
  }

  return (
    <>
      <div className="accordions">
        {data.map((acc) => (
          <div key={acc.id} className="accordion">
            <h2
              className="name"
              onClick={() =>
                isSingleAccordion
                  ? handleSingleClick(acc.id)
                  : handleMultiClick(acc.id)
              }
            >
              {acc.name}
              {isSingleAccordion ? (
                isClickedSingleAccordionsId === acc.id ? (
                  <IoIosArrowUp></IoIosArrowUp>
                ) : (
                  <IoIosArrowDown></IoIosArrowDown>
                )
              ) : isClickedMultiAccordionsId.includes(acc.id) ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </h2>
            {isSingleAccordion
              ? isClickedSingleAccordionsId === acc.id && (
                  <p className="title">{acc.title}</p>
                )
              : isClickedMultiAccordionsId.includes(acc.id) && (
                  <p className="title">{acc.title}</p>
                )}
          </div>
        ))}
      </div>
      <div className="switch-container">
        <h1>Current: {isSingleAccordion ? "Single" : "Multi"}</h1>
        <button
          className="switch"
          onClick={() => setIsSingleAccordion(!isSingleAccordion)}
        >
          Switch to {isSingleAccordion ? "Multi" : "Single"}
        </button>
      </div>
    </>
  );
}
