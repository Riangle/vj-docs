"use client";
import React from "react";
import styled from "styled-components";
import { mq, styledSmall, Col, Grid } from "cherry-styled-components/src/lib";
import { usePathname } from "next/navigation";
import { Theme } from "cherry-styled-components/src/lib";
import { TITLE } from "../utils/constants";

function DocsFooter() {
  const year = new Date().getFullYear();
  const StyledFooter = styled.footer<{ theme: Theme }>`
    border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
    margin-top: 20px;
    padding: 20px 0 0;
    ${({ theme }) => styledSmall(theme)};

    ${mq("lg")} {
      margin-top: 40px;
      padding: 40px 0 0;
    }
  `;
  const StyledParagraph = styled.p<{ theme: Theme }>`
    color: ${({ theme }) => (theme.isDark ? theme.colors.grayDark : theme.colors.gray)};
  `;
  const StyledLink = styled.a<{ theme: Theme }>`
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }

    ${mq("lg")} {
      text-align: right;
    }
  `;

  return (
    <StyledFooter>
      <Grid $xsCols={1} $lgCols={3}>
        <Col $lgSpan={2}>
          <StyledParagraph>
            Copyright © {year} {TITLE}. All rights reserved.
          </StyledParagraph>
        </Col>
        <StyledLink
          href={`https://github.com/Riangle/vj-docs/edit/main/src/app${usePathname()}/page.mdx`}
          target="_blank"
        >
          Edit this page on GitHub
        </StyledLink>
      </Grid>
    </StyledFooter>
  );
}

export { DocsFooter };
