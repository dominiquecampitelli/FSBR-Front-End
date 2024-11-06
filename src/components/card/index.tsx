import React from "react";

import { Content } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Card({ children }: Props) {
  return <Content>{children}</Content>;
}
