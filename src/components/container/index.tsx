import React from "react";

import { ScreenSize } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <ScreenSize>{children}</ScreenSize>;
}
