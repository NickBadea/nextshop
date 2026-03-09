export default function manifest() {
  return {
    name: "NextShop",
    short_name: "NextShop",
    description: "Mobilier profesional pentru magazine retail",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}