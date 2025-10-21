import type { Route } from "./+types/listing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Listing - Pokédex-RSC" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function ServerComponent() {
  return <div>listing page</div>;
}
