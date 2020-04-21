import React, { useState, useEffect } from "react";
import data from "./__data.json";

const App = () => {
  const [isAllSelected, setisAllSelected] = useState(false);
  const [checkList, setcheckList] = useState([]);

  useEffect(() => {
    setcheckList(data);
  }, []);

  const handleChangeCheckBox = (checkName, isChecked) => {
    let isAllChecked = checkName === "all" && isChecked;
    let isAllUnChecked = checkName === "all" && !isChecked;
    const statusChecked = isChecked;

    const checkListX = checkList.map((item) => {
      if (isAllChecked || item.city === checkName) {
        return Object.assign({}, item, {
          statusChecked,
        });
      } else if (isAllUnChecked) {
        return Object.assign({}, item, {
          statusChecked: false,
        });
      }

      return item;
    });

    const isAllSelected =
      checkListX.findIndex((item) => item.statusChecked === false) === -1 ||
      isAllChecked;

    setcheckList(checkListX);
    setisAllSelected(isAllSelected);
  };

  const optionBy = checkList
    .map((e) => e["city"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => checkList[e])
    .map((e) => checkList[e]);

  const optionCheckbox = optionBy.map((item, index) => {
    return (
      <label key={index}>
        <input
          name={item.name}
          type="checkbox"
          value={item.city}
          checked={item.statusChecked || false}
          onChange={(e) => handleChangeCheckBox(item.city, e.target.checked)}
        />
        {item.city}
      </label>
    );
  });

  return (
    <>
      <div>
        <label>
          <input
            name="select-all"
            type="checkbox"
            value="ALL"
            checked={isAllSelected}
            onChange={(e) => handleChangeCheckBox("all", e.target.checked)}
          />
          All
        </label>
        <br />
        <div>{optionCheckbox}</div>
        <br />
        <label htmlFor="">
          <input
            name="select-all"
            type="button"
            value="ALL"
            checked={isAllSelected}
            onclick={(e) => handleChangeCheckBox("all", e.target.checked)}
          />
          Clear
        </label>
      </div>
      <hr />
      <pre className="precode">{JSON.stringify(checkList, null, 3)}</pre>
      {/* 
      {checkList
        .filter(item => item.checked)
        .map((item, index) => {
          return (
            <div key={index}>
              <strong>{item.city}</strong>
            </div>
          );
        })} */}
    </>
  );
};

export default App;
