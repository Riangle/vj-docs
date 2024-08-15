"use client";
import { resetButton, Theme } from "cherry-styled-components/src/lib";
import styled, { css } from "styled-components";
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
