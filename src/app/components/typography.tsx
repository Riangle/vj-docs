"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "cherry-styled-components/src/lib";

interface TypographyProps {
  theme?: Theme;
  children?: React.ReactNode;
  $fontSize: string;
  $lineHeight: string;
  $fontWeight: string;
  $fontFamily?: string;
}

const StyledTypography = styled.span<TypographyProps>`
  display: inline-block;
  font-size: ${({ $fontSize }) => $fontSize};
  line-height: ${({ $lineHeight }) => $lineHeight};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  ${({ $fontFamily }) => $fontFamily && `font-family: ${$fontFamily}`};

  & p {
    font-size: ${({ $fontSize }) => $fontSize};
    line-height: ${({ $lineHeight }) => $lineHeight};
    font-weight: ${({ $fontWeight }) => $fontWeight};
  }
`;

function Typography({ ...props }: TypographyProps) {
  return <StyledTypography {...props}>{props.children}</StyledTypography>;
}

export { Typography };
