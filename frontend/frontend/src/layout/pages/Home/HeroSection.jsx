import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
      <div
  className="d-flex align-items-end position-relative"
  style={{
    height: "90vh",
    width: "90%",
    margin: "0 auto",
    backgroundImage: 'url("/images/home.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "16px",
    padding: "40px",
    overflow: "hidden",
  }}
>
  {/* Dark Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(to top, rgba(54, 53, 53, 0.7), rgba(68, 66, 66, 0.2))",
    }}
  ></div>

  {/* Content */}
  <div className="text-start text-light position-relative" style={{ maxWidth: "550px" }}>
    
    {/* Heading */}
    <h1 className="fw-bold display-4 lh-1">
      ESCAPE <br />
      <span style={{ color: "rgba(45, 184, 168, 1)" }}>TO PARADISE</span>
    </h1>

    {/* Text */}
    <p className="fs-3 mt-3 text-light opacity-75">
      Discover your perfect getaway destination.
    </p>

    {/* Buttons */}
    <div className="mt-4 d-flex gap-3 flex-wrap">
      <Link
        to="/explore"
        className="btn btn-lg fw-bold px-4 shadow"
        style={{
          backgroundColor: "rgba(28, 83, 77, 1)",
          color: "white",
          borderRadius: "30px",
        }}
      >
        Explore Now
      </Link>

      <Link
        to="/contact"
        className="btn btn-outline-light btn-lg fw-bold px-4"
        style={{ borderRadius: "30px" }}
      >
        Contact Us
      </Link>
    </div>

  </div>
</div>

      {/*  */}
      <div className="container w-100 w-lg-80 mx-auto mt-5 p-4 " >

  <div className="row text-center text-lg-start align-items-center justify-content-center">

    {[
      "100+ Satisfaction Trip",
      "100+ Satisfied Clients",
      "50+ Destinations",
      "24/7 Customer Support"
    ].map((item, index) => (
      <div key={index} className="col-6 col-md-3 d-flex
       flex-column flex-lg-row align-items-center justify-content-center mb-4 mb-lg-0">

        {/* Text */}
        <h2 className="fw-bold mb-2 mb-lg-0 " style={{ color: 'rgba(28, 83, 77, 1)', fontSize: "1rem" }}>
          {item.split(" ")[0]}<br />{item.split(" ").slice(1).join(" ")}
        </h2>

        {/* Divider (only on large screens, with space) */}
        {index !== 3 && (
          <div 
            className="d-none d-lg-block mx-auto"
            style={{
              width: "2px",
              height: "40px",
              backgroundColor: "lightgrey",
              marginLeft: "15px",
              marginRight: "15px", // maintain space on both sides
            }}
          ></div>
        )}

      </div>
    ))}

  </div>

</div>


    </div>
  )
}

export default HeroSection
