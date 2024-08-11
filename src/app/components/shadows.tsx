"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "cherry-styled-components/src/lib";

interface ShadowsProps {
  theme?: Theme;
  $size: "xs" | "sm" | "md" | "lg" | "xl";
}

const StyledShadows = styled.span<ShadowsProps>`
  display: block;
  min-width: 60px;
  min-height: 60px;
  height: 60px;
  width: 100%;
  background: ${({ theme }) => (theme.isDark ? theme.colors.grayLight : theme.colors.light)};
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  box-shadow: ${({ theme, $size }) => theme.shadows[$size]};
`;

function Shadows({ ...props }: ShadowsProps) {
  return <StyledShadows {...props} />;
}

export { Shadows };
