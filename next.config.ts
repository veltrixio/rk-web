import type { NextConfig } from "next";
import { siteUrl } from "./src/lib/origin";

const config: NextConfig = {
  agentRules: false,
  output: "export",
  basePath: siteUrl?.pathname.replace(/\/$/, "") ?? "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default config;
