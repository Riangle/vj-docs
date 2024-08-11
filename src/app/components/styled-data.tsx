"use client";
import { Theme } from "cherry-styled-components/src/lib";
import styled, { css } from "styled-components";

export const StyledDataTag = styled.span<{ theme: Theme; $color?: "default" | "warning" }>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  background: ${({ theme, $color }) =>
    $color === "warning" ? theme.colors.warning : theme.colors.tertiary};
  color: ${({ theme }) => (theme.isDark ? theme.colors.dark : theme.colors.light)};
  font-size: ${({ theme }) => theme.fontSizes.small.xs};
  position: relative;
  font-weight: 500;
  padding: 5px 10px;
  margin: auto 0;
  overflow: hidden;

  &:has(button) {
    padding: 5px 35px 5px 10px;
  }
`;

export const gridDecoration = css`
  position: relative;
  display: block;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100vw;
    max-width: 100vw;
    background: url("/grid.svg") no-repeat center center;
    ${({ theme }) => theme.isDark && 'background: url("/grid-w.svg") no-repeat center center;'}

    z-index: 1;
    background-size: 100%;
    height: 357px;
    left: 50%;
    top: 50%;
    aspect-ratio: 1440 / 357;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;
