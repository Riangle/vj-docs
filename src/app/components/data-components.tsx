"use client";
import { resetButton, Theme } from "cherry-styled-components/src/lib";
import styled from "styled-components";

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
