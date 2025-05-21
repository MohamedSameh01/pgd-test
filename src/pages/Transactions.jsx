import { useCallback, useState,useEffect } from "react";
import { ordenaryData, secretData } from "../utils/data";
import { Card, TransactionSwicher } from "../components/transactions/index";
import { Frame } from "../components/ui/index";
const Transactions = () => {

  const [selectedData, setSelectedData] = useState(ordenaryData);
  const [selectedDataString, setSelectedDataString] = useState("ordenaryData");

  const handleSwichOrdenary=useCallback(()=>{
    setSelectedDataString("ordenaryData")
    
  },[])
  const handleSwichSecret=useCallback(()=>{
    setSelectedDataString("secretData")
    
  },[])
  useEffect(()=>{
    if(selectedDataString==="ordenaryData"){
      setSelectedData(ordenaryData)
    }
    else{
      
      setSelectedData(secretData)
    }
  },[selectedDataString])
  
  return (
    <Frame className={"mt-4  flex flex-col gap-3"}>
      <TransactionSwicher selectedDataString={selectedDataString} handleSwichOrdenary={handleSwichOrdenary} handleSwichSecret={handleSwichSecret}   />
      {/* Cards container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {selectedData.map((card, idx) => (
          <Card card={card} key={idx} />
        ))}
      </div>
    </Frame>
  );
};

export default Transactions;
