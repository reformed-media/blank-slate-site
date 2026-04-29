import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { captureUTMs, trackEvent, trackPageView } from "@/lib/tracking";

const SERVICE_PATHS = new Set([
  "/services/ppf",
  "/services/ceramic",
  "/services/paint-correction",
  "/portfolio",
]);

const isTrackedContentPath = (pathname: string): boolean => {
  if (SERVICE_PATHS.has(pathname)) return true;
  if (pathname.startsWith("/portfolio/")) return true;
  return false;
};

const useTracking = (): void => {
  const location = useLocation();
  const capturedRef = useRef(false);

  useEffect(() => {
    if (!capturedRef.current) {
      captureUTMs();
      capturedRef.current = true;
    }
  }, []);

  useEffect(() => {
    trackPageView();
    if (isTrackedContentPath(location.pathname)) {
      trackEvent("ViewContent", {
        content_name: location.pathname,
        content_category: "service-page",
        value: 0,
        currency: "USD",
      });
    }
  }, [location.pathname]);
};

export default useTracking;