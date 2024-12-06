"use client";

import "../css/contactLinks.css";

export default function PfContactMe() {
  const links = [
    {
      icon: "/assets/email.svg", // Path to the SVG file
      label: "Email",
      action: () => window.location.href = "mailto:ajaykumarjella98@gmail.com",
    },
    {
      icon: "/assets/phone.svg",
      label: "Phone",
      action: () => window.location.href = "tel:+19017072469",
    },
    {
      icon: "/assets/github.svg",
      label: "GitHub",
      action: () => window.open("https://github.com/ajmadmax", "_blank"),
    },
    {
      icon: "/assets/linkedin.svg",
      label: "LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/ajay-jella-7b98491a0/", "_blank"),
    },
  ];

  return (
    <div className="contact-container">
      {links.map((link, index) => (
        <div
          key={index}
          className="contact-item"
          onClick={link.action}
          style={{ cursor: "pointer" }}
        >
          <img src={link.icon} alt={link.label} className="contact-icon" />
          <p className="contact-label">{link.label}</p>
        </div>
      ))}
    </div>
  );
}
