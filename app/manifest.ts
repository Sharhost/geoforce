import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GeoForce",
    short_name: "GeoForce",
    start_url: "/",
    display: "standalone",
    background_color: "#08080A",
    theme_color: "#FF2D2D",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}