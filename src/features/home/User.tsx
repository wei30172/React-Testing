import React from "react";

type Props = {
  email: string;
};

const User = ({ email }: Props) => {
  return (
    <section className="flex">
      <p role="contentinfo">, user - {email}</p>
    </section>
  );
};

export default User;
