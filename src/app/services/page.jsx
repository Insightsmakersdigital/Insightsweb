import ServicesPage from '@/components/Service'
import React from 'react'

function page() {
  return (
    <div className=" overflow-hidden" style={{ scrollBehavior: "smooth" }}>
    
    <div className="snap-center">
        <ServicesPage/>
      </div>

    </div>
  )
}

export default page