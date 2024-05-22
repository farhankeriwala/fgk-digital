import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-full flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
