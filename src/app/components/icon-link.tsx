import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { Theme, styledStrong } from "cherry-styled-components/src/lib";

interface IconLinkProps {
  children?: React.ReactNode;
  $bgColor: string;
  $label?: string;
  theme?: Theme;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const StyledLink = styled.a<IconLinkProps>`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => (theme.isDark ? theme.colors.dark : theme.colors.primary)};
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) =>
        theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
    }
  }
`;

export const StyledIcon = styled.div<IconLinkProps>`
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  background: ${({ $bgColor }) => $bgColor};
  display: flex;
  flex-wrap: wrap;
  transform: scale(1);
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background: ${({ $bgColor }) => lighten(0.1, $bgColor)};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  & svg {
    margin: auto;
  }
`;

const StyledLabel = styled.span<IconLinkProps>`
  padding: 5px 0 0;
  display: block;
  font-weight: 700;
  ${({ theme }) => styledStrong(theme)};
`;

function IconLink({ ...props }: IconLinkProps) {
  return (
    <StyledLink href={props.href} target="_blank" $bgColor={props.$bgColor}>
      <StyledIcon $bgColor={props.$bgColor}>{props.children}</StyledIcon>
      {props.$label && <StyledLabel $bgColor={props.$bgColor}>{props.$label}</StyledLabel>}
    </StyledLink>
  );
}

export { IconLink };
