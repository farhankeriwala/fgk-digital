import { MdOutlineCheck } from "react-icons/md";
import { handleQuotationEnquiry } from "../utilities";
import { websiteFeatures } from "../constants";
const PricingSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold font-Lato tracking-tight text-matteBlack sm:text-4xl">
            Step 0
          </h2>
          <p className="mt-4 font-Nunito text-lg leading-8 text-zinc-600">
            Get your custom website built within weeks and watch your business
            grow.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-zinc-200 sm:mt-16 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold font-Lato tracking-tight text-zinc-900">
              The Simple Solution
            </h3>
            <p className="mt-6 text-base font-Nunito leading-7 text-zinc-600">
              Your business deserves a modern website. We will build a fully
              responsive website within weeks, helping your brand establish an
              online presence fast and efficiently.
            </p>
            <div className="mt-10 flex items-center gap-x-8">
              <h4 className="flex-none text-sm font-Lato font-semibold leading-6 text-orange-600">
                What your business could get
              </h4>
              <div className="h-px flex-auto bg-zinc-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 sm:grid-cols-2 sm:gap-6"
            >
              {websiteFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-2">
                  <MdOutlineCheck
                    className="h-6 w-5 flex-none text-green-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl h-full bg-zinc-50 py-10 text-center ring-1 ring-inset ring-zinc-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-zinc-600">
                  Need a quotation?
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-zinc-900">
                    £0.00
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-zinc-600">
                    GBP
                  </span>
                </p>
                <button
                  onClick={() => handleQuotationEnquiry()}
                  className="mt-10 block w-full rounded-full bg-orange-600 px-4 py-2 text-center text-sm font-semibold text-matteWhite shadow-sm hover:bg-orange-500 hover:scale-110 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Book Now
                </button>
                <small className="mt-6 text-xs leading-5 text-zinc-600"></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
