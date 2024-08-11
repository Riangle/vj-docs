"use client";
import React from "react";
import styled from "styled-components";
import { mq } from "cherry-styled-components/src/lib";

interface MinHeightProps {
  children: React.ReactNode;
}

const StyledMinHeight = styled.div`
  min-height: calc(100svh - 80px);
  overflow: clip;

  ${mq("lg")} {
    min-height: calc(100svh - 100px);
  }
`;

function MinHeight({ children }: MinHeightProps) {
  return <StyledMinHeight>{children}</StyledMinHeight>;
}
export { MinHeight };
