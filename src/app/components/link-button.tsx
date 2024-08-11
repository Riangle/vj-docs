import Link from "next/link";
import styled from "styled-components";
import { theme as localTheme, ButtonProps, buttonStyles } from "cherry-styled-components/src/lib";

interface LinkButtonProps extends ButtonProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const StyledLinkButton = styled(Link)<LinkButtonProps>`
  ${({ theme, $variant, $size, $outline, $fullWidth, disabled }) =>
    buttonStyles(theme, $variant, $size, $outline, $fullWidth, disabled)}
`;

function LinkButton({ $variant = "primary", theme = localTheme, ...props }: LinkButtonProps) {
  return (
    <StyledLinkButton $variant={$variant} {...props}>
      {props.children}
    </StyledLinkButton>
  );
}

export { LinkButton };
