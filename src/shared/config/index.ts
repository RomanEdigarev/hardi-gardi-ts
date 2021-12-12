const getEnvVar = (key: string): string => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is undefined`);
  }
  return process.env[key] || "";
};
export const API_URL = getEnvVar(
  process.env.NODE_ENV === "production"
    ? "VUE_APP_BASE_URL_PROD"
    : "VUE_APP_BASE_URL_DEV"
);
export const IMG_URL = getEnvVar(
  process.env.NODE_ENV === "production"
    ? "VUE_APP_BASE_URL_IMG_PROD"
    : "VUE_APP_BASE_URL_IMG"
);
export const TOKEN = getEnvVar("VUE_APP_TOKEN");
