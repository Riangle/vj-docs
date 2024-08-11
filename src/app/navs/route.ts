import { docsIntroNav, docsJobCreationNav, docsIntegrationsNav } from "@/app/navs/documentation";
export async function GET(request: Request) {
  const docsNav = [...docsIntroNav, ...docsJobCreationNav, ...docsIntegrationsNav];
  return Response.json(docsNav);
}
