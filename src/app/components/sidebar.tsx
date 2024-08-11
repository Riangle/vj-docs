"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Theme, mq, resetButton, styledStrong, Space } from "cherry-styled-components/src/lib";
import { docsIntroNav, docsJobCreationNav, docsIntegrationsNav } from "@/app/navs/documentation";
import { rgba } from "polished";

interface Props {
  theme?: Theme;
  $isActive?: boolean;
}

const StyledSidebar = styled.nav<Props>`
  position: fixed;
  overflow-y: auto;
  max-height: 100svh;
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
  z-index: 99;
  top: 0;
  left: 0;
  height: 100%;
  padding: 130px 20px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  transform: translateY(30px);

  ${mq("lg")} {
    width: 155px;
    left: calc(50% - 477px);
    top: 0;
    background: transparent;
    padding: 40px 20px 40px 0;
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }

  ${mq("xl")} {
    width: 230px;
    left: calc(50% - 570px);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    `}
`;

const StyledSidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledStrong = styled.strong<{ theme: Theme }>`
  font-weight: 600;
  ${({ theme }) => styledStrong(theme)};
`;

const StyledSidebarListItem = styled.li`
  clear: both;
`;

const StyledSidebarListItemLink = styled(Link)<Props>`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.strong.xs};
  line-height: 2.1;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 0 0 20px;
  display: flex;
  transition: all 0.3s ease;
  border-left: solid 1px ${({ theme }) => theme.colors.grayLight};

  ${mq("lg")} {
    font-size: ${({ theme }) => theme.fontSizes.strong.lg};
    line-height: 2.1;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.info};
    }
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
			color: ${theme.colors.dark};
			border-color: ${theme.colors.info};
			font-weight: 600;
	`};
`;

const StyleMobileBar = styled.button<Props>`
  ${resetButton};
  position: sticky;
  top: 20px;
  font-size: ${({ theme }) => theme.fontSizes.strong.lg};
  line-height: ${({ theme }) => theme.fontSizes.strong.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background: ${({ theme }) =>
    theme.isDark ? rgba(theme.colors.grayLight, 0.7) : rgba(theme.colors.light, 0.7)};
  color: ${({ theme }) => (theme.isDark ? theme.colors.dark : theme.colors.primary)};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 100px;
  margin: 0 0 20px 0;
  z-index: 100;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: calc(100vw - 40px);

  ${mq("lg")} {
    display: none;
  }

  ${({ $isActive }) => $isActive && `position: fixed; `};
`;

const StyledMobileBurger = styled.span<Props>`
  display: block;
  margin: auto 0;
  width: 18px;
  height: 18px;
  position: relative;
  overflow: hidden;
  background: transparent;
  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 3px;
    border-radius: 3px;
    background: ${({ theme }) => (theme.isDark ? theme.colors.dark : theme.colors.primary)};
    transition: all 0.3s ease;
  }

  &::before {
    top: 3px;
  }

  &::after {
    bottom: 3px;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::before {
        transform: translateY(5px) rotate(45deg);
      }

      &::after {
        transform: translateY(-4px) rotate(-45deg);
      }
    `};
`;

const StyleMobileLabelTitle = styled.span`
  display: flex;
  margin: auto 0 auto 10px;
`;

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const allDocs = [...docsIntroNav, ...docsJobCreationNav, ...docsIntegrationsNav];
  const pathname = usePathname();
  const current = allDocs.find((obj) => obj.url === pathname);

  return (
    <>
      <StyleMobileBar
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        $isActive={isMobileMenuOpen}
      >
        <StyledMobileBurger $isActive={isMobileMenuOpen} />
        {current ? <StyleMobileLabelTitle>{current.title}</StyleMobileLabelTitle> : ""}
      </StyleMobileBar>

      <StyledSidebar $isActive={isMobileMenuOpen}>
        <StyledSidebarList>
          <StyledSidebarListItem>
            <StyledStrong>Getting Started</StyledStrong>
            <Space $size={20} />
          </StyledSidebarListItem>
          {docsIntroNav.map((item, index) => {
            return (
              <StyledSidebarListItem key={index}>
                <StyledSidebarListItemLink
                  href={item.url}
                  $isActive={pathname === item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </StyledSidebarListItemLink>
              </StyledSidebarListItem>
            );
          })}
          <StyledSidebarListItem>
            <Space $size={20} />
            <StyledStrong>Job Ad Creation</StyledStrong>
            <Space $size={20} />
          </StyledSidebarListItem>
          {docsJobCreationNav.map((item, index) => {
            return (
              <StyledSidebarListItem key={index}>
                <StyledSidebarListItemLink
                  href={item.url}
                  $isActive={pathname === item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </StyledSidebarListItemLink>
              </StyledSidebarListItem>
            );
          })}
          <StyledSidebarListItem>
            <Space $size={20} />
            <StyledStrong>Integrations</StyledStrong>
            <Space $size={20} />
          </StyledSidebarListItem>
          {docsIntegrationsNav.map((item, index) => {
            return (
              <StyledSidebarListItem key={index}>
                <StyledSidebarListItemLink
                  href={item.url}
                  $isActive={pathname === item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </StyledSidebarListItemLink>
              </StyledSidebarListItem>
            );
          })}
        </StyledSidebarList>
      </StyledSidebar>
    </>
  );
}

export { Sidebar };
