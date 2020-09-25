import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/business/");
      const testFetch = await res.json();
      setData(testFetch);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data?.results?.map((item: { title: any; name: any }) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </>
  );
};
export default App;
