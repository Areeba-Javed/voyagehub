import React from "react";

const Adventure = () => {
  const items = [
    {id:1, title: "Mount Fuji, Japan", image: "./images/coursal1.jpg", desc:"Mount Fuji with a traditional pagoda, representing Japan." },
    {id:2, title: "Kocatepe Mosque, Turkey", image: "./images/coursal2.jpg", desc:"Largest and most iconic mosques in Ankara." },
    {id:3, title: "Barcelona Cathedral, Spain", image: "./images/coursal3.jpg", desc:"Gothic Quarter of Barcelona, Spain." },
    {id:4, title: "Dolomites, Italy", image: "./images/coursal7.avif", desc:"Group hiking in rocky mountains." },
    {id:5, title: "Tulum, Mexico", image: "./images/coursal8.avif", desc:"Street with 'Follow That Dream' sign." },
    {id:6, title: "Swiss Alps", image: "./images/coursal9.avif", desc:"Hikers on green ridges with dramatic cliffs." },
    {id:7, title: "American pine forest", image: "./images/coursal10.avif", desc:"A forest hiking trail." },
    {id:8, title: "Kuala Lumpur, Malaysia", image: "./images/coursal6.jpg", desc:"City skyline with two tall towers." },
    {id:9, title: "Switzerland, France", image: "./images/coursal12.avif", desc:"Paragliding over snowy mountains." },
    {id:10, title: "Alpine valleys", image: "./images/coursaln.avif", desc:"Jeep driving near tall mountains." },
    {id:11, title: "South American falls", image: "./images/coursal11.avif", desc:"Large waterfall." },
    {id:12, title: "Cappadocia, Turkey", image: "./images/coursal13.avif", desc:"Hot air balloons over rocky desert landscape." },
  ];

  return (
    <div className="w-100">
      {/* Banner Section */}
      <div
  className="container position-relative d-flex align-items-center justify-content-center text-center"
  style={{
    width: "90%",
    height: "75vh",
    borderRadius: "22px",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(/images/aboutus.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
  }}
>
  <div className="px-4">
    <span
      className="text-warning text-uppercase fw-semibold d-block mb-2"
      style={{ letterSpacing: "2px" }}
    >
      Explore the World
    </span>

    <h1
      className="fw-semibold text-white mb-3"
      style={{ fontSize: "2.8rem" }}
    >
      Adventure Awaits
    </h1>

    <p
      className="text-light mb-4"
      style={{
        maxWidth: "600px",
        fontSize: "1.05rem",
        margin: "0 auto",
      }}
    >
      Discover breathtaking destinations and unforgettable travel experiences
      designed for explorers at heart.
    </p>

    <button className="btn btn-warning px-4 py-2 fw-medium">
      Explore Trips
    </button>
  </div>
</div>


      {/* Image Gallery Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Our Adventures</h2>

        <div className="row g-4">
          {items.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              {/* Card */}
              <div
                className="rounded shadow d-flex flex-column justify-content-end text-white"
                style={{
                  height: "250px",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1,
                  }}
                ></div>

                {/* Text */}
                <div style={{ position: "relative", zIndex: 2, padding: "10px" }}>
                  <h4 className="fw-bold mb-1">{item.title}</h4>
                  <p className="mb-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adventure;
