import React from 'react'

const MemorySection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* IMAGE SECTION */}
        <div className="col-md-6 text-center">
          <img 
            src="/images/memory.jpg" 
            alt="memories"
            className="img-fluid rounded"
            style={{ height: "250px", objectFit: "cover", width: "90%" }}
          />
        </div>

        {/* TEXT SECTION */}
        <div className="col-md-6 mt-4 mt-md-0 ">
          <h2 
            className="fw-bold ms-4"
            style={{ color: 'rgba(28, 83, 77, 1)', fontSize: "1.5rem" }}
          >
            MEMORABLE TRAVELS
          </h2>
          
          <p 
            className="mt-3 ms-4"
            style={{ color: 'grey', fontSize: "1rem", lineHeight: "1.6" }}
          >
            Discover unforgettable destinations and unique experiences  
            that create lasting memories for every traveler. Explore unforgettable 
            destinations and one-of-a-kind experiences that leave every traveler with lasting memories. 
          </p>
          <div className='d-flex align-items-center ms-4'>

  <h2 
    className="fw-bold mt-2 "
    style={{ color: 'rgba(28, 83, 77, 1)', fontSize: "1rem" }}
  >
    100+<br/>
    Satisfication Trip
  </h2>

  {/* GREY LINE */}
  <div 
    style={{
      width: "2px",
      height: "40px",
      backgroundColor: "lightgrey",
      margin: "0 20px"
    }}
  ></div>

  <h2 
    className="fw-bold mt-2 "
    style={{ color: 'rgba(28, 83, 77, 1)', fontSize: "1rem" }}
  >
    100+<br/>
    Satisify Clients
  </h2>

</div>

         

          {/* <button 
            className="btn mt-3 px-4"
            style={{
              borderColor: 'rgba(47, 173, 158, 1)',
              color: 'rgba(47, 173, 158, 1)',
              fontSize: "1rem",
              padding: "8px 18px",
            }}
          >
            Explore
          </button> */}
        </div>

      </div>
    </div>
  )
}

export default MemorySection
