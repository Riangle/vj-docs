"use client";
import React from "react";
import styled from "styled-components";
import { Theme, theme } from "cherry-styled-components/src/lib";

interface PreviewTileProps {
  $title: string;
  $subTitle: string;
  $rightTitle: string;
  $rightSubTitle: string;
  $bgColor?: string;
  $isLonger?: boolean;
  $mq?: string;
  $fullWidth?: boolean;
  children?: React.ReactNode;
  theme?: Theme;
}

const StyledPreviewTile = styled.div<PreviewTileProps>`
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-wrap: wrap;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  overflow: clip;
  box-shadow: ${({ theme }) => theme.shadows.xs};
  position: relative;
`;

const StyledCenterContainer = styled.div<PreviewTileProps>`
  display: flex;
  margin: auto;
  width: 100%;
  height: ${({ $isLonger }) => ($isLonger ? "180px" : "150px")};
  background: ${({ theme, $bgColor }) => ($bgColor && $bgColor) || theme.colors.light};
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayLight};

  & > *,
  & h1 {
    margin: auto;
    display: inline-flex;
  }
`;

const StyledCenter = styled.div<PreviewTileProps>`
  margin: auto;
  text-align: center;

  max-width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "calc(100% - 40px)")};
`;

const StyledContent = styled.div<PreviewTileProps>`
  padding: 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};

  & span {
    display: block;

    &.highlight {
      padding: 5px 0 0 0;
      color: ${({ theme }) => theme.colors.info};
      font-family: ${({ theme }) => theme.fonts.mono};
    }
  }
`;

const StyledMQ = styled.span<{ theme: Theme }>`
  display: block;
  font-size: ${theme.fontSizes.small.xs};
  line-height: ${theme.lineHeights.small.xs};
  background: ${({ theme }) => theme.colors.light};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  color: ${({ theme }) => theme.colors.grayDark};
  text-align: center;
  font-weight: 600;
  padding: 2px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

function PreviewTile({ ...props }: PreviewTileProps) {
  return (
    <StyledPreviewTile {...props}>
      {props.$mq && <StyledMQ>{props.$mq}</StyledMQ>}
      <StyledCenterContainer {...props}>
        {props.children && <StyledCenter {...props}>{props.children}</StyledCenter>}
      </StyledCenterContainer>
      <StyledContent {...props}>
        <strong>{props.$title}</strong>
        <span className="highlight">{props.$subTitle}</span>
      </StyledContent>
    </StyledPreviewTile>
  );
}

export { PreviewTile };
