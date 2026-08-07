import Copyright from "@/components/footers/Copyright";
import FooterAlt from "@/components/footers/FooterAlt";
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
export const metadata = {
  title: "Mars Developers — AI-Powered SaaS Product Studio",
  description:
    "We design, build and ship AI-powered SaaS products. Mars Developers is your end-to-end partner for SaaS MVPs, web apps and AI integrations.",
};
export default function Home() {
  return (
    <>
      {" "}
      <div className="tmp-white-version">
        <Header />
        <Hero />
        <Services isLight />
        <Facts />
        <Skills />
        <ExtraServices />
        <EducationAlt />
        <Brands />
        <Portfolio isLight />
        <ExtraSkills />
        <Testimonials />
        <Contact />
        <Blogs isLight />
        <FooterAlt />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
