import { Container } from "cherry-styled-components/src/lib";
import { OG_IMAGE, TITLE } from "@/app/utils/constants";

export const metadata = {
  title: "Error - " + TITLE,
  openGraph: {
    title: "Error - " + TITLE,
    images: OG_IMAGE,
  },
};

export default function ErrorPage() {
  return <Container>Sorry, something went wrong!</Container>;
}
