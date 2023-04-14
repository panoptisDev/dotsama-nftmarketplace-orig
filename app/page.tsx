import Launchpad from "@/components/LaunchPad/LaunchPad";
import LiveBidding from "@/components/LiveBidding/LiveBidding";
import Banner from "../components/Banner/Banner";
import HotCollections from "@/components/HotCollections/HotCollections";
import Discover from "@/components/Discover/Discover";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="mx-5 md:mx-10">
        <div className="">
          <Banner />
          <Launchpad />
          <LiveBidding />
          <div className="pb-24">
            <HotCollections />
          </div>
          <Discover />
        </div>
      </div>
      <Blog />
      {/* <Footer /> */}
      {/* <Navbar /> */}
    </div>
  );
}
