import pinIcon from "../../assets/icons/table/pin.png";

import { BaseButton } from "../form";
const Table = ({tableData,data}) => {

  return (
    <div className="">
      <div className="shadow-md max-w-full overflow-scroll-x rounded-t-xl">
        <table className="min-w-full w-[1200px] rounded-t-xl ">
          <thead className="w-full">
            <tr className="bg-grayColor">
              {tableData &&
                tableData.names.map((el, idx) => {
                  return (
                    <th
                      key={idx}
                      scope="col"
                      className={`${
                        el.name !== "" ? "border-l" : ""
                      }  cursor-pointer    py-3 whitespace-nowrap  text-[12px] font-medium text-gray-700 uppercase `}
                    >
                      <div className="flex items-center justify-start px-2 gap-2">
                        <span>{el.name}</span>
                        {/* Sorting Icon */}
                        {el.icon && (
                          <img src={el.icon} alt="order" className="w-6 h-6" />
                        )}
                      </div>
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody className="bg-white ">
            {data.map((el) => {
              return (
                <tr key={el} className="border-b-2 border-grayColor">
                  <td className="px-2   text-sm font-medium text-gray-900 max-w-[220px]">
                    618395
                  </td>
                  <td className="px-2 max-w-[220px]  text-sm text-gray-700 ">
                    طلب إيقاف مؤقت لتنفيذ الأعمال
                  </td>
                  <td className="px-2 max-w-[220px]  text-sm text-gray-700 ">
                    شعبة السجلات والوثائق
                  </td>
                  <td className="px-2 max-w-[220px]   text-sm text-gray-700">
                    داخلي
                  </td>
                  <td className="px-2 max-w-[220px]   text-sm text-gray-700">
                    11-12-2023
                  </td>
                  <td className="px-2 max-w-[220px]   text-sm text-gray-700">
                    2
                  </td>
                  <td className="px-2 max-w-[220px]   text-sm text-gray-700 ">
                    <div className="flex justify-center items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 ml-2"></span>
                      <span>عاجل</span>
                    </div>
                  </td>
                  <td className="px-2 max-w-[220px]   text-sm">
                    <div className="flex justify-start items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox w-4 h-4 text-[#BFAE8F] rounded border-[#D9D9D9] focus:ring-[#BFAE8F] focus:ring-offset-0 cursor-pointer"
                      />
                    </div>
                  </td>
                  <td className="px-2 max-w-[220px]   text-sm font-medium ">
                    <div className="flex justify-center items-center">
                      <BaseButton text="عرض التفاصيل" type="details" />
                    </div>
                  </td>
                  <td className="px-2 max-w-[220px]   text-sm font-medium text-gray-700">
                    <div className="flex justify-center items-center py-1">
                      <span className="p-2 rounded-xl h-12 w-12 bg-grayColor cursor-pointer flex justify-center items-center">
                        <img src={pinIcon} alt="pin" className="w-6 h-6" />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
