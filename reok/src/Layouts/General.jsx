import Navbar from "components/Navbar";
import Footer from "components/Footer";

const General = ({ children }) => {
  return (
    <div className="General">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default General;
