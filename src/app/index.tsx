import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/product/");
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
      <form action="http://127.0.0.1:8000/admin">
        <input type="submit" value="Go to admin" />
      </form>
      {data?.results?.map(
        (item: { code: string; name: string; is_linked: boolean }) => (
          <div key={item.name}>{item.is_linked && item.name}</div>
        )
      )}
    </>
  );
};
export default App;
