"use client";
import React from "react";
import styled from "styled-components";
import {
  Theme,
  styledText,
  Container,
  Space,
  styledH1,
  Flex,
} from "cherry-styled-components/src/lib";
import { LinkButton } from "@/app/components/link-button";
import { gridDecoration } from "@/app/components/styled-data";

const StyledIntro = styled.h1<{ theme: Theme }>`
  max-width: 900px;
  margin: auto;
  ${({ theme }) => styledH1(theme)};
  font-weight: 800;
  ${gridDecoration};
`;

const StyledParagraph = styled.p<{ theme: Theme }>`
  max-width: 700px;
  margin: auto;
  ${({ theme }) => styledText(theme)};
`;

const StyledBringOnTop = styled.span<{ theme: Theme }>`
  position: relative;
  z-index: 10;
`;

function NotFound() {
  return (
    <StyledBringOnTop>
      <Container $textAlign="center">
        <Space $size={40} />
        <StyledIntro>404 Not Found</StyledIntro>
        <StyledParagraph>
          The page you are looking for is currently exploring a black hole. While we wait for it to
          return, why not enjoy some cosmic tunes or explore our docs like a star chart?
        </StyledParagraph>
        <Flex $justifyContent="center" $gap={20}>
          <LinkButton href="/">Docs</LinkButton>
          <LinkButton href="https://www.videojobs.io" $outline>
            Home
          </LinkButton>
        </Flex>
        <Space $size={100} />
      </Container>
    </StyledBringOnTop>
  );
}

export { NotFound };
