import React from "react";

import "./styles.css";

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <div className="screen-size">{children}</div>;
}
