import {
  docsIntroNav,
  docsJobCreationNav,
  docsIntegrationsNav,
  docsAccountManagementNav,
} from "@/app/navs/documentation";

export async function GET(request: Request) {
  const docsNav = [
    ...docsIntroNav,
    ...docsJobCreationNav,
    ...docsIntegrationsNav,
    ...docsAccountManagementNav,
  ];
  return Response.json(docsNav);
}
