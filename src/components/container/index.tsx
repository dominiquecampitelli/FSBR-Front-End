import React from "react";

import { Content } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <Content>{children}</Content>;
}
