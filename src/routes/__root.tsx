import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
