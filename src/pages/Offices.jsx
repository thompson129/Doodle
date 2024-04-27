import React from "react"
import { offices } from "../components/assets/data/dummydata"

export const Offices = () => {
  return (
    <>
      <section className='offices'>
        <div className='w-4/5 m-auto'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>
              Our Offices
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {offices.map((office, index) => (
              <div key={index} className="office">
                <div className="office-image-wrapper">
                  <img src={office.photo} alt={`Office ${index + 1}`} className="office-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="office-info">
                  <h2 className="text-xl font-semibold mb-2">{office.name}</h2>
                  <p className="text-white-600 mb-2">{office.address}</p>
                  <a href={office.mapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
