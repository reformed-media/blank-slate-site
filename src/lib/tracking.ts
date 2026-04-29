declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export {};

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
] as const;

type UTMKey = (typeof UTM_KEYS)[number];
type UTMRecord = Record<UTMKey, string>;

const COOKIE_MAX_AGE = 2592000; // 30 days

const setCookie = (key: string, value: string) => {
  try {
    document.cookie = `${key}=${encodeURIComponent(value)}; max-age=${COOKIE_MAX_AGE}; path=/`;
  } catch {
    // ignore
  }
};

const getCookie = (key: string): string => {
  try {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`));
    return match ? decodeURIComponent(match.slice(key.length + 1)) : "";
  } catch {
    return "";
  }
};

export const captureUTMs = (): void => {
  try {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        try {
          window.sessionStorage.setItem(key, value);
        } catch {
          // ignore
        }
        setCookie(key, value);
      }
    });
  } catch {
    // ignore
  }
};

export const getStoredUTMs = (): UTMRecord => {
  const result = {} as UTMRecord;
  UTM_KEYS.forEach((key) => {
    let value = "";
    try {
      value = window.sessionStorage.getItem(key) || "";
    } catch {
      value = "";
    }
    if (!value) value = getCookie(key);
    result[key] = value || "";
  });
  return result;
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, any>,
): void => {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", eventName, params);
    }
  } catch {
    // no-op
  }
};

export const trackPageView = (): void => {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  } catch {
    // no-op
  }
};