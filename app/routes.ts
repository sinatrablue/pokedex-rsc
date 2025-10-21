import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    index: true,
    file: "routes/home.tsx",
  },
  {
    path: "/listing",
    file: "routes/listing.tsx",
  },
] satisfies RouteConfig;
