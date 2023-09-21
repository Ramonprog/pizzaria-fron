import { APP_ROUTES } from "./app-routers";

export function checkIsPublic(asPath: string) {
  const appPublicRoutes = Object.values(APP_ROUTES.public);
  const isPublic = appPublicRoutes.includes(asPath);
  return isPublic;
}
