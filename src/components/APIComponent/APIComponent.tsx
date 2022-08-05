import React, { useState, useEffect } from "react";
import axios from "axios";

const APIComponent = () => {
  const [data, setData] = useState<{
    name: string;
  }>();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const { data } = await axios.get("/api");
      if (isMounted) {
        setData(data);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <section>
      {data && <div role="contentinfo">{`Name is ${data.name}.`}</div>}
    </section>
  );
};

export default APIComponent;
