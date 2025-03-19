
import AboutSection from "@/components/AboutSectiion";
import ExcellencePath from "@/components/ExcellencePath";
import GlobalAchievements from "@/components/Global";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import LogoSlider from "@/components/LogoSlider";
import MissionVisionSection from "@/components/Mission";
import WorksNew from "@/components/Portfolio";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";




export default function Home() {
  return (
    <div className=" overflow-hidden" style={{ scrollBehavior: "smooth" }}>


      <LoadingScreen>
      
      <div className="snap-center">
        <Hero/>
      </div>

      <div className="snap-center">
        <LogoSlider/>
      </div>
     

      <div className="snap-center">
        <AboutSection/>
      </div>

      <div className="snap-center">
        <MissionVisionSection/>
      </div>

      <div className="snap-center">
        <ExcellencePath/>
      </div>

      
      <div className="snap-center">
        <ProcessTimeline/>
      </div>

      <div className="snap-center">
        <WorksNew/>
      </div>

      <div className="snap-center">
        <Testimonials/>
      </div>

      <div className="snap-center">
        <GlobalAchievements/>
      </div>

      </LoadingScreen>

    </div>
  );
}
