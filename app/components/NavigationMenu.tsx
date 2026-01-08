import { Moon, Sun } from "lucide-react";
import { Link } from "react-router";
import { useThemeStore } from "../stores";
import { Switch } from "./ui/switch";

export const NavigationMenu = () => {
  const links = [
    {
      label: "Home",
      to: "/",
    },
    { label: "Listing", to: "/pokemons" },
    // { label: "Search", to: "/search" },
  ];
  const { isDark, setIsDark } = useThemeStore();

  return (
    <>
      <div className="flex justify-center gap-24 py-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="hover:text-primary/80 text-sm leading-3 tracking-wider uppercase"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="absolute top-3 right-2 flex items-center gap-1">
        <Moon height={16} />
        <Switch
          checked={!isDark}
          onClick={() => {
            setIsDark(!isDark);
          }}
        />
        <Sun height={16} />
      </div>
    </>
  );
};
