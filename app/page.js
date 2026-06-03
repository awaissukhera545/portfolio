import Copyright from "@/components/footers/Copyright";
import Header from "@/components/headers/Header";
import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/common/Contact";
import EducationAlt from "@/components/common/EducationAlt";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/common/Portfolio";
import Services from "@/components/common/Services";
import ExtraServices from "@/components/common/ExtraServices";
import Skills from "@/components/common/Skills";
import ExtraSkills from "@/components/common/ExtraSkills";
import Testimonials from "@/components/homes/home-1/Testimonials";
import CommonComponents from "@/components/common/CommonComponents";
import Footer from "@/components/footers/Footer";


export const metadata = {
  title:
    "MARS Developers",
  description:
    "This is my personal portfolio and solely created website MARS Developers.",
};
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Facts />
      <Skills />
      <ExtraServices />
      <EducationAlt />
      <Brands />
      <Portfolio />
      <ExtraSkills />
      <Testimonials />
      <Contact />
      <Blogs />
      <Footer />
      <Copyright />
      <CommonComponents />
    </>
  );
}