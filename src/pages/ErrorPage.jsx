import { useRouteError } from "react-router-dom";
import Header from "../container/Header";
import Footer from "../container/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Header />
      <main className="flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
          <h1 className="font-Nunito font-medium text-dangerRed text-center text-7xl sm:text-8xl md:text-9xl">
            Oops!
          </h1>
          <p className="font-Nunito font-normal text-matteBlack text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <p className="font-Nunito font-normal text-secondaryGray text-center text-2xl">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
