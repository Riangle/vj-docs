"use client";
import React from "react";
import { Flex, Theme, styledH5, styledStrong } from "cherry-styled-components/src/lib";
import styled, { css } from "styled-components";
import Link from "next/link";
import { StyledIcon } from "./icon-link";

interface StyledBoxProps {
  $title: string;
  $text?: string;
  $icon?: any;
  $iconLink?: any;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  theme?: Theme;
  children?: React.ReactNode;
}

export const interactiveStyles = css`
  transition: all 0.3s ease;
  border: solid 1px transparent;
  box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primary};

  @media (hover: hover) {
    &:hover {
      border: solid 1px ${({ theme }) => theme.colors.primary};
    }
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }

  &:active {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

const StyledBox = styled(Link)<StyledBoxProps>`
  cursor: pointer;
  flex: 1;
  margin: 0;
  padding: 20px;
  display: block;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  ${interactiveStyles}
  border: solid 1px ${({ theme }) => theme.colors.grayLight};

  & strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (hover: hover) {
    &:hover {
      & strong {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }
`;

const StyledSmallerBox = styled(StyledBox)`
  padding: 12px 20px 12px 70px;
  position: relative;
  overflow: clip;
`;

const StyledTitle = styled.strong<StyledBoxProps>`
  color: ${({ theme }) => (theme.isDark ? theme.colors.dark : theme.colors.primary)};
  ${({ theme }) => styledH5(theme)};
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;

  & svg {
    vertical-align: middle;
    width: 16px;
    margin: auto 5px auto 0;
  }
`;

const StyledSmallerTitle = styled(StyledTitle)`
  ${({ theme }) => styledStrong(theme)};
`;

const StyledText = styled.span<StyledBoxProps>`
  color: ${({ theme }) => (theme.isDark ? theme.colors.grayDark : theme.colors.dark)};
  margin: 0;
  padding: 10px 0 0 0;
  display: block;
`;

const StyledIconLocal = styled(StyledIcon)`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  border-radius: 0;
`;

function Box({ ...props }: StyledBoxProps) {
  if (props.$iconLink) {
    return (
      <Flex $gap="none" $wrap="nowrap">
        <StyledSmallerBox
          href={props.href}
          target={props.target}
          $title={props.$title}
          $text={props.$text}
        >
          <StyledIconLocal href={props.href} target={props.target} $bgColor="#000000">
            {props.$iconLink}
          </StyledIconLocal>
          <StyledSmallerTitle {...props}>
            {props.$icon && props.$icon}
            {props.$title}
          </StyledSmallerTitle>
          {props.$text && <StyledText {...props}>{props.$text}</StyledText>}
        </StyledSmallerBox>
      </Flex>
    );
  }

  return (
    <StyledBox href={props.href} target={props.target} $title={props.$title} $text={props.$text}>
      <StyledTitle {...props}>
        {props.$icon && props.$icon}
        {props.$title}
      </StyledTitle>
      {props.$text && <StyledText {...props}>{props.$text}</StyledText>}
    </StyledBox>
  );
}

export { Box };
