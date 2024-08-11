"use client";
import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import Link from "next/link";
import { mq, Container, Flex, resetButton } from "cherry-styled-components/src/lib";
import { rgba } from "polished";
import { Theme } from "cherry-styled-components/src/lib";
import { ThemeContext } from "@/app/components/theme-provider";
import { Search } from "@/app/components/search";
import { IconGitHub, IconMoon, IconSun } from "@/app/components/icons";
import { Logo } from "@/app/components/logo";
import { theme as themeLight, themeDark } from "@/app/theme";
import { StyledDataTag } from "@/app/components/styled-data";

const StyledHeader = styled.header<{ theme: Theme }>`
  background: ${({ theme }) =>
    theme.isDark ? rgba(theme.colors.grayLight, 0.7) : rgba(theme.colors.light, 0.7)};
  border-radius: 100px;
  max-width: calc(100% - 40px);
  margin: 20px auto 0;
  position: sticky;
  top: 20px;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  ${mq("lg")} {
    margin: 40px auto 0;
    max-width: 640px;
  }

  & a {
    display: inline-flex;
  }
`;

const StyledBg = styled.span<{ theme: Theme }>`
  width: 100vw;
  height: 100svh;
  background: url("/gradient.svg") no-repeat;
  background-position: bottom;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 1;
  pointer-events: none;
`;

const StyledNav = styled.nav<{ theme: Theme }>`
  display: flex;
  gap: 20px;
  margin: auto 0;
`;

const StyledLink = styled(Link)<{ theme: Theme }>`
  display: inline-flex;
  vertical-align: middle;
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: auto 0;
  transition: all 0.3s ease;
  gap: 5px;

  & .tag {
    transform: scale(0.8);
  }

  & img,
  & svg path {
    transition: all 0.3s ease;
  }

  & .logo {
    width: 120px;
    height: auto;

    ${mq("lg")} {
      width: 148px;
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
      color: ${({ theme }) => theme.colors.primaryDark};

      & svg:not(.logo) {
        & path {
          fill: ${({ theme }) =>
            theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
        }
      }
    }
  }

  & svg:not(.logo) {
    & path {
      fill: ${({ theme }) => (theme.isDark ? theme.colors.dark : theme.colors.primary)};
    }
  }

  &:active {
    transform: scale(0.97);

    & svg,
    & img {
      transform: scale(0.95);
    }
  }
`;

const StyledThemeToggle = styled.button<{ theme: Theme }>`
  ${resetButton}
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  position: relative;
  margin: auto 0;
  transform: scale(1);

  & svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateY(0);
    margin: auto;
    transition: all 0.3s ease;

    &.light {
      ${({ theme }) =>
        theme.isDark &&
        `opacity: 0;
			transform: translate(-50%, -50%) translateY(10px);`}
    }

    &.dark {
      ${({ theme }) =>
        !theme.isDark &&
        `opacity: 0;
			transform: translate(-50%, -50%) translateY(10px);`}
    }
  }

  & svg[stroke] {
    stroke: ${({ theme }) => theme.colors.info};
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;

function Header() {
  const theme: Theme = useTheme() as Theme;
  const { setTheme } = useContext(ThemeContext);
  return (
    <>
      <StyledBg />
      <StyledHeader>
        <Container $lgPadding={20}>
          <Flex $justifyContent="space-between" $wrap="nowrap">
            <StyledLink href="/" aria-label="VIDEOJOB Docs Logo">
              <Logo className="logo" /> <StyledDataTag className="tag">DOCS</StyledDataTag>
            </StyledLink>
            <StyledNav>
              <StyledLink href="https://videojobs.io" aria-label="VIDEOJOBS Home">
                Home
              </StyledLink>
              <StyledThemeToggle
                aria-label="Toggle Theme"
                onClick={() => {
                  if (theme.isDark) {
                    setTheme(themeLight);
                    localStorage.theme = "light";
                    document.documentElement.setAttribute("data-theme", "light");
                  } else {
                    setTheme(themeDark);
                    localStorage.theme = "dark";
                    document.documentElement.setAttribute("data-theme", "dark");
                  }
                }}
              >
                <IconMoon className="dark" />
                <IconSun className="light" />
              </StyledThemeToggle>
            </StyledNav>
          </Flex>
        </Container>
      </StyledHeader>
    </>
  );
}

export { Header };
