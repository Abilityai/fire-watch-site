import siteJson from "@/content/site.json";
import homeJson from "@/content/home.json";

export const siteConfig = siteJson;
export const home = homeJson;

export type SiteConfig = typeof siteJson;
export type Home = typeof homeJson;
