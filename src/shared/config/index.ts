const getEnvVar = (key: string): string => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is undefined`);
  }
  return process.env[key] || "";
};

export const API_URL = getEnvVar("VUE_APP_BASE_URL");
export const TOKEN = getEnvVar("VUE_APP_TOKEN");
