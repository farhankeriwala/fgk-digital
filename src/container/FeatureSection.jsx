import { features } from "../constants";
const FeatureSection = () => {
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center p-2 flex flex-col gap-3">
          <h2 className="text-xl font-Lato font-semibold leading-7 text-orange-600">
            Scale your business
          </h2>
          <p className="mt-2 text-4xl font-Lato font-bold tracking-normal text-zinc-900 sm:text-5xl">
            Everything you need for an outstanding online presence
          </p>
          <p className="mt-6 font-Nunito text-xl leading-8 text-zinc-600">
            We don&apos;t use inefficient tools, instead by leveraging cutting-edge technologies and industry practices we create exceptional websites tailored to your business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
            {features.map((feature) => (
              <div key={feature.name} className="font-Lato font-normal relative pl-16">
                <dt className="text-base font-semibold leading-7 text-zinc-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                    <img
                    src={feature.icon}
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-Lato font-semibold">{feature.name}</p>
                </dt>
         
                <dd className="mt-2 font-Nunito text-base leading-7 text-zinc-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
