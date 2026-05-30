import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default (props) => {
  return (
    <>
      <Navbar />
      <main class="min-h-screen bg-gray-50">{props.children}</main>
      <Footer />
    </>
  );
};
