// import "../../styles/flex.scss";
import "./CustomTable.css";
import React from "react";
import { useState, useEffect } from "react";
// import arrow from "../../Assets/UpArrow.png";

const CustomTable = ({ columns, data, onRowClick, rowPerPage }) => {
  const [sort, setSort] = useState({ isAssending: true, by: "" });
  const [tableData, setTableData] = useState([]);
  const [currentPointer, setCurrentPointer] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const length = data.length;
  const totalPages = Math.ceil(length / rowPerPage);

  useEffect(() => {
    const tempData = [];
    for (let i = 0; i < length; i++) {
      tempData.push(data[i]);
      if (i + 1 == rowPerPage) {
        break;
      }
    }
    setTableData(tempData);
  }, []);

  useEffect(() => {
    if (sort.by) {
      const tempD = [...tableData];
      if (sort.isAssending) {
        tempD.sort((a, b) => {
          if (a[sort.by]?.toLowerCase() > b[sort.by]?.toLowerCase()) return 1;
          if (a[sort.by]?.toLowerCase() < b[sort.by]?.toLowerCase()) return -1;
          return 0;
        });
      } else {
        tempD.sort((a, b) => {
          if (a[sort.by]?.toLowerCase() > b[sort.by]?.toLowerCase()) return -1;
          if (a[sort.by]?.toLowerCase() < b[sort.by]?.toLowerCase()) return 1;
          return 0;
        });
      }
      setTableData(tempD);
      console.log(sort, tempD);
    }
  }, [sort]);

  console.log(currentPointer);

  return (
    <div className="px-130 py-30">
      <table className="w-100">
        <thead>
          <tr>
            {Object.keys(columns).map((key) => (
              <th
                key={key}
                className="py-10 text-center cursor-pointer"
                onClick={() =>
                  setSort({ isAssending: !sort.isAssending, by: key })
                }
              >
                {columns[key]}{" "}
                {sort.by == key && (
                  <img
                    src="../../Assets/UpArrow.png"
                    height={12}
                    width={15}
                    alt="arrow"
                    className={`${!sort.isAssending && "rotate-180"}`}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d, i) => (
            <tr
              className={`${i % 2 == 0 ? "bg-white" : "bg-light-gray"} px-40`}
              key={i}
              onClick={() => onRowClick(d)}
            >
              {Object.keys(columns).map((key, i) => {
                return (
                  <td key={i} className="py-12 text-center text-14">
                    {d[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-30 text-right">
        <span
          className={`text-16 font-semibold px-20 py-20 ${
            currentPointer == 0 && "opacity-40"
          }`}
          onClick={() => setCurrentPointer((prev) => prev - rowPerPage)}
        >
          &lt;
        </span>
        <span
          className={`text-16 font-semibold px-20 py-20 ${
            currentPointer >= data.length && "opacity-40"
          }`}
          onClick={() => setCurrentPointer((prev) => prev + rowPerPage)}
        >
          &gt;
        </span>
        <p>
          data shown : {(pageNo - 1) * rowPerPage + 1} to {pageNo * rowPerPage}
        </p>
        <p>Total Pages: {totalPages}</p>
      </div>
    </div>
  );
};

export default CustomTable;
