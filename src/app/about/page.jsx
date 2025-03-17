import AboutUs from '@/components/AboutUs'
import TeamSection from '@/components/Team'
import GlobalAchievements from "@/components/Global";
import React from 'react'
import SimpleMissionVision from '@/components/Mission';

function page() {
  return (
    <div className=" overflow-hidden" style={{ scrollBehavior: "smooth" }}>
    
    <div className="snap-center">
        <AboutUs/>
      </div>

      <div className="snap-center">
        <SimpleMissionVision/>
      </div>


      <div className="snap-center">
        <TeamSection/>
      </div>

      <div className="snap-center">
        <GlobalAchievements/>
      </div>
    </div>
  )
}

export default page