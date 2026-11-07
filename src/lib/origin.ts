const configuredUrl = process.env.SITE_URL;
export const siteUrl = configuredUrl
  ? new URL(configuredUrl.replace(/\/+$/, "") + "/")
  : undefined;
