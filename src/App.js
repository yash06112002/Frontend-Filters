import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import Papa from "papaparse";
import "./styles/App.css";

import Table from "./components/Table";
import SelectList from "./components/SelectList";

const App = () => {
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([])
  const [listData, setListData] = useState([])

  const list = useSelector((state) => state)

  useEffect(() => {
    const fetchData = async () => {

      fetch("/dataset_large.csv")
        .then((response) => response.text())
        .then((csvData) => {
          const parsedData = Papa.parse(csvData, { header: true }).data.splice(0, 200);
          const attributes = Object.keys(parsedData[0]).filter(item => item !== 'number')

          parsedData.forEach(item => {
            attributes.forEach(attribute => {
              item[attribute] = Number.parseInt(item[attribute])
            })
          })
          setData(parsedData)
          setTableData(parsedData)
          setListData(parsedData)
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (list.list1.length === 0 && list.list2.length === 0 && list.list3.length === 0) {
      setTableData(data)
      setListData(data)
    }
    else {
      const attributes = Object.keys(data[0]).filter(item => item !== 'number')
      const newTableData = data.filter(item => {
        let flag = true
        attributes.forEach((attribute, index) => {
          if (list[`list${index + 1}`].length !== 0 && !list[`list${(index + 1)}`].includes(item[attribute])) {
            flag = false
          }
        })
        return flag
      })

      let newListData = newTableData.filter(item => {
        let flag = true
        attributes.forEach((attribute, index) => {
          if (list.lastUpdated !== (index + 1) && list[`list${index + 1}`].length !== 0 && !list[`list${(index + 1)}`].includes(item[attribute])) {
            flag = false
          }
        })
        return flag
      })
      setListData(newListData)
      setTableData(newTableData)
    }
  }, [list, data])


  return (
    <>
      <div className="list_container">
        {Array.from(Array(3).keys()).map((item, index) => (
          <span key={index}>
            <SelectList number={index + 1} listData={listData} />
          </span>
        ))}
      </div>
      <Table data={tableData} />
    </>
  );
};

export default App;
