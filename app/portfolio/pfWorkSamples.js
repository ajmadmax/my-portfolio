"use client";

import { useState } from "react";
import "../css/worksamplespf.css";

export default function PfWorkSamples() {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentImageSet, setCurrentImageSet] = useState([]);
  const [popupImage, setPopupImage] = useState(null);

  const imageSets = {
    desktop: ["/assets/worksamples/desktop_1.jpg",
              "/assets/worksamples/desktop_2.jpg",
              "/assets/worksamples/desktop_3.jpg",
              "/assets/worksamples/desktop_4.jpg",
              "/assets/worksamples/desktop_5.jpg",
              "/assets/worksamples/desktop_6.jpg",
             "/assets/worksamples/desktop_7.jpg"],
    mobile: ["/assets/worksamples/mobile_1.jpg", "/assets/worksamples/mobile_2.jpg",
             "/assets/worksamples/mobile_3.jpg", "/assets/worksamples/mobile_4.jpg",
             "/assets/worksamples/mobile_5.jpg", "/assets/worksamples/mobile_6.jpg",
             "/assets/worksamples/mobile_7.jpg", "/assets/worksamples/mobile_8.jpg",
             "/assets/worksamples/mobile_9.jpg", "/assets/worksamples/mobile_10.jpg",
             "/assets/worksamples/mobile_11.jpg", "/assets/worksamples/mobile_12.jpg",
             "/assets/worksamples/mobile_13.jpg", "/assets/worksamples/mobile_14.jpg",
             "/assets/worksamples/mobile_15.jpg", "/assets/worksamples/mobile_16.jpg",
             "/assets/worksamples/mobile_17.jpg", "/assets/worksamples/mobile_18.jpg" ],
  };

  const openSlideshow = (images) => {
    setCurrentImageSet(images);
    setShowSlideshow(true);
  };

  const closeSlideshow = () => {
    setShowSlideshow(false);
    setCurrentImageSet([]);
  };

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div>
      {!showSlideshow ? (
        <div className="imageContainer">
            <p>click on the images to open gallery</p>
          <figure className="imageBox" onClick={() => openSlideshow(imageSets.desktop)}>
            <img src="/assets/worksamples/desktop_1.jpg" alt="Desktop View" className="image" />
            <figcaption className="caption">Desktop View</figcaption>
          </figure>
          <figure className="imageBox" onClick={() => openSlideshow(imageSets.mobile)}>
            <img src="/assets/worksamples/mobile_1.jpg" alt="Mobile View" className="image" />
            <figcaption className="caption">Mobile View</figcaption>
          </figure>
        </div>
      ) : (
        <div className="slideshowContainer">
          <button className="backButton" onClick={closeSlideshow}>
            Back
          </button>
          <div className="slideshow">
            {currentImageSet.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="slideImage"
                onClick={() => openPopup(image)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Popup Section */}
      {popupImage && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <img src={popupImage} alt="Popup View" className="popupImage" />
          </div>
          <button className="popupCloseButton" onClick={closePopup}>
              Close
          </button>
        </div>
      )}
    </div>
  );
}

