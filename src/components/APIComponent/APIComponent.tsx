import React, { useState, useEffect } from "react";

const APIComponent = () => {
  const [data, setData] = useState<{
    name: string;
  }>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  });
  return (
    <section>
      {data && <div role="contentinfo">{`Name is ${data.name}.`}</div>}
    </section>
  );
};

export default APIComponent;
