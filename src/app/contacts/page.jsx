import ContactSection from '@/components/Contacts'
import GlobalAchievements from "@/components/Global";
import React from 'react'

function page() {
  return (
    <div className=" overflow-hidden" style={{ scrollBehavior: "smooth" }}>
    
    <div className="snap-center">
        <ContactSection/>
      </div>

      <div className="snap-center">
        <GlobalAchievements/>
      </div>

    </div>
  )
}

export default page