import React from "react"
import partner1 from "../components/assets/images/cmu.jpeg"
import partner2 from "../components/assets/images/beam.jpg"

export const Partners = () => {
  return (
    <>
    <section className="partners py-16" sytle={{paddingBottom: "20px"}}>
      <div className="container">
        <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
          <h1 className="text-3xl font-semibold text-black">
            <span className="border-b-2 border-black pb-2">Educational Partners</span>
            </h1>
        </div>
        <div className="partners-container flex justify-center gap-8">
          <div className="partner-item">
            <div className="partner-box">
              <img src={partner1} alt="Partner 1" className="partner-image" />
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-box">
              <img src={partner2} alt="Partner 2" className="partner-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

