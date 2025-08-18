import React, { useState } from "react";
import '../css/Team.css';

const TeamSection = () => {
  const [activeProfile, setActiveProfile] = useState("ayush");

  const teamMembers = [
    {
      id: "ayush",
      name: "Ayush Kumar",
      role: "Founder & CEO",
      img: "images/ayush.jpg",
      avatar: "images/m1-icon.png",
      description: `Ayush Kumar is the visionary force behind FlexiRide. As both Founder and CEO, 
      he leads with passion, guiding the company's mission to offer flexible, affordable, 
      and modern transportation solutions across India.`,
    },
    {
      id: "jyoti",
      name: "Jyoti Kumari",
      role: "Operations Head",
      img: "images/jyoti.jpg",
      avatar: "images/m2-icon.png",
      description: `Jyoti Kumari is the backbone of FlexiRide's operations. As Operations Head, 
      she ensures the smooth functioning of daily processes, manages logistics, coordinates staff, 
      and maintains service quality across all our locations. Her organizational excellence keeps 
      FlexiRide running like a well-oiled engine.`,
    },
    {
      id: "rajan",
      name: "Rajan Kumar Saha",
      role: "Tech Lead",
      img: "images/rajan.jpg",
      avatar: "images/m3-icon.png",
      description: `Rajan Kumar Saha leads the technological backbone of FlexiRide. As Tech Lead, 
      he oversees web and mobile platform development, user experience improvements, security, 
      and tech innovation. His technical vision powers the seamless booking experience our users love.`,
    },
  ];

  return (
    <section id="team" className="py-5" data-aos="zoom-out-right">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Our Team</h2>
        <p className="lead mb-5">
          Meet the passionate minds behind FlexiRide — dedicated to redefining
          how India rides.
        </p>

        {/* Avatars */}
        <div className="mb-4 d-flex justify-content-center gap-3">
          {teamMembers.map((member) => (
            <img
              key={member.id}
              src={member.avatar}
              alt={member.name}
              width="100"
              height="100"
              onClick={() => setActiveProfile(member.id)}
              className={`rounded-circle shadow team-avatar ${
                activeProfile === member.id ? "border border-primary p-1" : ""
              }`}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        {/* Profiles */}
        {teamMembers.map((member) =>
          activeProfile === member.id ? (
            <div
              key={member.id}
              className="team-profile row align-items-center mt-4"
            >
              <div className="col-md-5 text-center mb-4 mb-md-0">
                <img
                  src={member.img}
                  alt={member.name}
                  className="img-fluid rounded shadow border border-5 border-light"
                />
              </div>
              <div className="col-md-7 text-start">
                <h3 className="fw-bold">{member.name}</h3>
                <p className="text-muted mb-2">{member.role}</p>
                <p className="text-secondary">{member.description}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default TeamSection;
