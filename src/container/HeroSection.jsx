import { MdOutlineRocketLaunch } from "react-icons/md";
import { handleQuotationEnquiry } from "../utilities";
const HeroSection = () => {
  return (
    <main className="w-full h-[90vh] px-8 lg:px-32 xl:px-44 2xl:px-52 flex flex-col items-center justify-center gap-12 my-2">
      <h1 className="leading-relaxed font-Lato font-medium text-center text-matteBlack text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
        Innovative <span className="text-orange-600">Design</span>, Seamless
        <span className="text-orange-600"> Development</span>
      </h1>
      <p className="leading-relaxed font-Nunito font-normal text-center text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Welcome to FGK Digital, where creativity and technology unite to deliver
        stunning digital solutions.
      </p>
      <p className="leading-relaxed font-Nunito font-normal text-center text-matteBlack text-3xl">
          It&apos;s time to get your business recognised!
        </p>
        <button
          onClick={() => handleQuotationEnquiry()}
          className="px-8 py-2 border-2 border-matteWhite rounded-full bg-orange-600 flex items-center justify-center gap-2 font-Lato font-normal text-matteWhite text-xl hover:scale-110 hover:shadow-lg transition-all duration-300"
        >
          Schedule a FREE Quotation <MdOutlineRocketLaunch />
        </button>
    </main>
  );
};

export default HeroSection;
