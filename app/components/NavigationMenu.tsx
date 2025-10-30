import { Link } from "react-router";

export const NavigationMenu = () => {
  const links = [
    {
      label: "Home",
      to: "/",
    },
    { label: "Listing", to: "/pokemons" },
    // { label: "Search", to: "/search" },
  ];

  return (
    <div className="flex justify-center gap-24 py-4">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-sm leading-3 tracking-wider uppercase hover:cursor-pointer hover:text-neutral-300"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
