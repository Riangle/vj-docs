"use client";
import { Theme, styledSmall } from "cherry-styled-components/src/lib";
import React from "react";
import styled, { css } from "styled-components";

interface TableProps {
  children?: React.ReactNode;
  theme?: Theme;
  $code?: boolean;
}

const StylesTable = styled.table<TableProps>`
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  width: 100%;
  text-align: left;
`;

const StylesTableRow = styled.tr<TableProps>`
  margin: 0;
  padding: 0;
`;

const StylesTableHead = styled.th<TableProps>`
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayLight};
  padding: 10px 0;
  ${({ theme }) => styledSmall(theme)};

  ${({ $code, theme }) =>
    $code &&
    css`
      color: ${theme.colors.info};
      font-family: ${theme.fonts.mono};
    `}
`;

const StylesTableData = styled.td<TableProps>`
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayLight};
  padding: 10px 10px 10px 0;
  color: ${({ theme }) => theme.colors.grayDark};
  ${({ theme }) => styledSmall(theme)};

  ${({ $code, theme }) =>
    $code &&
    css`
      font-weight: 600;
      color: ${theme.colors.info};
      font-family: ${theme.fonts.mono};
    `}
`;

function Table({ ...props }: TableProps) {
  return <StylesTable {...props}>{props.children}</StylesTable>;
}

function TableRow({ ...props }: TableProps) {
  return <StylesTableRow {...props}>{props.children}</StylesTableRow>;
}

function TableHead({ ...props }: TableProps) {
  return <StylesTableHead {...props}>{props.children}</StylesTableHead>;
}

function TableData({ ...props }: TableProps) {
  return <StylesTableData {...props}>{props.children}</StylesTableData>;
}

export { Table, TableRow, TableHead, TableData };
