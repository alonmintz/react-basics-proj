import { AppHeader } from "./cmps/AppHeader.jsx";
import { Home } from "./pages/Home.jsx";

//todo: change the whole app CSS

export function RootCmp() {
  return (
    <section className="app main-layout">
      <AppHeader />
      <main>
        <Home />
      </main>
    </section>
  );
}
