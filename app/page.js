import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/common/Portfolio2";
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Skills from "@/components/common/Skills";
import Skills2 from "@/components/common/Skills2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import CommonComponents from "@/components/common/CommonComponents";
import Footer3 from "@/components/footers/Footer3";


export const metadata = {
  title:
    "MARS Developers",
  description:
    "This is my personal portfolio and solely created website MARS Developers.",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <Services />
      <Facts />
      <Skills />
      <Services2 />
      <Education />
      <Brands />
      <Portfolio />
      <Skills2 />
      <Testimonials />
      <Contact />
      <Blogs />
      <Footer3 />
      <Copyright />
      <CommonComponents />
    </>
  );
}
