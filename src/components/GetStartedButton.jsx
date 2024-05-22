import { handleQuotationEnquiry } from "../utilities";
const GetStartedButton = () => {
  return (
    <div>
      <button
        onClick={() => handleQuotationEnquiry()}
        className="border border-matteBlack px-8 py-1 rounded-full hover:bg-matteBlack hover:text-matteWhite transition-colors duration-200"
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStartedButton;
