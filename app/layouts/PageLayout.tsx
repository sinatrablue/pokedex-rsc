import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <main className="mx-24 flex flex-col items-start gap-10 py-12">
      <Outlet />
    </main>
  );
};
