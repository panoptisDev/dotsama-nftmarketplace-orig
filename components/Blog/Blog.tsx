export default function Blog() {
  return (
    <div className="bg-[url('../public/assets/images/blog/banner_bg.png')] bg-no-repeat bg-cover flex justify-center items-center px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-6 gap-4 text-white">
        <div className="col-span-6 text-center mb-10">
          <h1 className="text-3xl md:text-5xl">Getting Started</h1>
          <p className="mt-5 text-base md:text-xl">
            Here are some featured articles for you to start trading NFTs on
            Dotsama.
          </p>
        </div>

        <div className="bg-[url('../public/assets/images/blog/news_thumb01.png')] bg-no-repeat bg-cover rounded-2xl col-span-6 md:col-span-2 h-[350px] md:h-[450px] 2xl:h-[500px] px-5 grid grid-cols-1 items-end py-10">
          <div className="glassEffect p-2 md:p-6 rounded-2xl border-4 border-purple-600">
            <div className="grid grid-cols-2 divide-x-2 text-center mb-3">
              <h3>Admin</h3>
              <h3>Date</h3>
            </div>
            <hr className="border-2 border-purple-600" />
            <p className="mt-3">
              Top 5 Most Popular NFT Games world most powerful?
            </p>
          </div>
        </div>
        <div className="bg-[url('../public/assets/images/blog/news_thumb02.png')] bg-no-repeat bg-cover rounded-2xl col-span-6 md:col-span-2 h-[350px] md:h-[450px] 2xl:h-[500px] px-5 grid grid-cols-1 items-end py-10">
          <div className="glassEffect p-2 md:p-6 rounded-2xl border-4 border-purple-600">
            <div className="grid grid-cols-2 divide-x-2 text-center mb-3">
              <h3>Admin</h3>
              <h3>Date</h3>
            </div>
            <hr className="border-2 border-purple-600" />
            <p className="mt-3">
              NFT’s, rare digital items worlds crypto collectable
            </p>
          </div>
        </div>
        <div className="bg-[url('../public/assets/images/blog/news_thumb03.png')] bg-no-repeat bg-cover rounded-2xl col-span-6 md:col-span-2 h-[350px] md:h-[450px] 2xl:h-[500px] px-5 grid grid-cols-1 items-end py-10">
          <div className="glassEffect p-2 md:p-6 rounded-2xl border-4 border-purple-600">
            <div className="grid grid-cols-2 divide-x-2 text-center mb-3">
              <h3>Admin</h3>
              <h3>Date</h3>
            </div>
            <hr className="border-2 border-purple-600" />
            <p className="mt-3">
              Crypto enthusiasts on a single platform to create
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
