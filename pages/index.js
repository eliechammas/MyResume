import { useContext } from "react"; // ec 27.08.2024 redirect contact button
import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Qualifications from "../src/components/sections/Qualifications";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import Context from "../src/context/context";

const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);

const bio = `<p>
I am a software developer, currently living in Germany. <br />
Lebanon is my country of origin. <br />
I have a wide expertise in translating business requirements into technical solutions ensuring quality,
usability, security, and scalability with more than 15+ years of professional experience. <br />
I speak english, french and arabic fluently. <br />
I am on my way to master the german language.
</p>`;

const Index = () => {

    const { changeNav, nav } = useContext(Context);

    return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-1-colors.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
                      style={{ backgroundImage: "url(images/ec_profile.jpg)", backgroundSize: "contain", backgroundPosition: "right", backgroundColor: "rgb(254 254 253)" }}
                  />

          {/* profile titles */}
          <div className="title">Elie Chammas</div>
          {/*<div className="subtitle">Software Developer</div>*/}
          <div className="subtitle subtitle-typed">
            <TypingAnimation />
          </div>
          {/* profile socials */}
          <div className="social">
                      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eliechammas/">
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/eliechammas">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
              <span className="fa fa-youtube" />
            </a>
                      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/elie.chammas.75/">
                <span className="fa fa-facebook" />
            </a>
            {/*<a*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer"*/}
            {/*  href="https://stackoverflow.com/"*/}
            {/*>*/}
            {/*  <span className="fa fa-stack-overflow" />*/}
            {/*</a>*/}
          </div>
          {/* profile buttons */}
           <div className="lnks">
            <a href="https://echammasstorageaccount.blob.core.windows.net/myprofile/CV_Elie_Chammas.pdf" className="lnk" target="_blank">
                <span className="text">Download CV</span>
            </a>
            <a href={`#${'contacts'}`} className="lnk discover"  onClick={() => changeNav('contacts')}>
                <span className="text">Contact Me</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          {/*<Services />*/}
          <Qualifications />
          <Skills />
          {/*<Pricing />*/}
          {/*<FunFact />*/}
          {/*<Clients />*/}
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index;
