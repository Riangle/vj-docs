"use client";
import { resetButton, Theme } from "cherry-styled-components/src/lib";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { interactiveStyles } from "@/app/components/box";

export const StyledDataArrowButton = styled.button<{ theme: Theme; $isActive: boolean }>`
  ${resetButton};
  display: flex;
  gap: 5px;
  min-width: fit-content;

  & .avatar,
  & .clickable {
    box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
  }

  & svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (hover: hover) {
    &:hover {
      & .lucide-chevron-down {
        & path {
          stroke: ${({ theme }) => theme.colors.primaryDark};
        }
      }

      & .avatar,
      & .clickable {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  &:focus {
    & .avatar,
    & .clickable {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    }
  }

  &:active {
    & .avatar,
    & .clickable {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
    }
  }

  & svg {
    margin: auto 0;
  }
`;

export const StyledDataUserAvatar = styled.span<{ theme: Theme }>`
  display: inline-flex;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  background: ${({ theme }) => theme.colors.light};
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary};

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  & svg {
    pointer-events: none;
    margin: auto;
    transition: none;
  }
`;

export const StyledDataDropdownButton = styled.button<{
  theme: Theme;
  $isActive?: boolean;
  $dotted?: boolean;
  $isAbsolute?: boolean;
  $top?: number;
  $right?: number;
}>`
  ${resetButton};
  display: flex;
  gap: 5px;
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.light};
  margin: auto;
  min-width: fit-content;

  &.m-0 {
    margin: 0;
  }

  ${interactiveStyles}

  ${({ $isAbsolute }) =>
    $isAbsolute &&
    css`
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 98;
    `}

  ${({ $top }) =>
    $top &&
    css`
      top: ${$top}px;
    `}

  ${({ $right }) =>
    $right &&
    css`
      right: ${$right}px;
    `}

  ${({ $isActive, $dotted }) =>
    $isActive &&
    css`
      border: solid 1px ${({ theme }) => ($dotted ? theme.colors.info : theme.colors.primary)};
    `}

  ${({ $dotted }) =>
    $dotted &&
    css`
      border-style: dotted;
    `};
`;

export const StyledDataCreateButton = styled.button<{ theme: Theme }>`
  ${resetButton};
  background: ${({ theme }) => theme.colors.light};
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.primary};
  transform: scale(1);
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.xs};
    }
  }

  &:focus:not([disabled]) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
    transform: scale(0.95);
  }
`;

export const StyledDataDropdown = styled.ul<{
  theme: Theme;
}>`
  display: block;
  list-style: none;
  top: 100%;
  right: 0;
  list-style: none;
  transition: all 0.3s ease;
  min-width: 200px;
  text-align: left;
  box-shadow: ${({ theme }) => theme.shadows.md};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  overflow: hidden;
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  transition: all 0.3s ease;
`;

export const StyledDataDropdownItem = styled.li<{ theme: Theme }>`
  display: flex;
  width: 100%;
  text-align: left;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayLight};
  padding: 0 !important;
  margin: 0 !important;

  &::before,
  &::after {
    display: none !important;
    content: none !important;
  }

  &:last-of-type,
  &:only-of-type {
    border-bottom: none;
  }

  & form {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  & a,
  & button:not([class]),
  & .logout-button {
    ${resetButton};
    width: 100%;
    text-align: left;
    padding: 12px 20px;
    font-weight: 600;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.text.lg};
    text-decoration: none;
    transition: all 0.3s ease;
    border-radius: 0;
    background: transparent;
    display: flex;
    gap: 10px;
    height: auto;
    min-height: 45px;

    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) =>
          rgba(theme.isDark ? theme.colors.primaryDark : theme.colors.primaryLight, 0.1)};
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }

    &:active,
    &:focus {
      box-shadow: none;
    }

    * {
      margin: auto 0;
    }

    &:focus {
      background-color: ${({ theme }) =>
        rgba(theme.isDark ? theme.colors.primaryDark : theme.colors.primaryLight, 0.15)};
    }

    &:active {
      background-color: ${({ theme }) =>
        rgba(theme.isDark ? theme.colors.primaryDark : theme.colors.primaryLight, 0.2)};
    }
  }

  & button {
    border: none;

    & svg {
      margin: -2px -5px;
    }
  }
`;
