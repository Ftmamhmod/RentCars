import { Footer } from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Testimonials from "./../Testimonials/Testimonials";
import ChooseUs from "./../ChooseUs/ChooseUs";
import Search from "./../Search/Search";
import Work from "./../Work/Work";
import CarsList from "../Cars/CarsList";

export default function Layout() {
  return (
    <>
      <Home />
      <Search />
      <CarsList />
      <Work />
      <ChooseUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
