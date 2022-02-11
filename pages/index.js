import Slideshow from "../components/Slideshow/Slideshow.component";
import Services from "../components/Services/Services.component";
import Forum from "../components/Forum/Forum.component";
import Contact from "../components/Contact/Contact.component";
import Footer from "../components/Footer/Footer.component";

export default function Home() {
  return (
    <>
      <Slideshow />
      <Services />
      <Forum />
      <Contact />
      <Footer />
    </>
  );
}
