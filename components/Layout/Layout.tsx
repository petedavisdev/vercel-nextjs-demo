import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
