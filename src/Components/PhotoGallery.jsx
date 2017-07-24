import React from 'react';
import PropTypes from 'prop-types';

const PhotoGallery = ({ photos: {
  name,
  url,
} }) => (
  <article>
    <h2>Photos!</h2>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        {/* First Carousel item needs to be 'active' */}
        <div className="carousel-item active">
          <img className="d-block img-fluid" src="..." alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="..." alt="Second slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </article>
);

PhotoGallery.propTypes = {
  photos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
/*
  Sample of incoming photo objects
{
  "uuid": "3f35e6dc-b0c6-4bf5-abe5-908626b649ab",
  "name": "1024px-Teliris_VL_Modular.jpg",
  "url": "https://sparkhire-dev.s3.amazonaws.com/company/e9aafdd9-d9f3-455e-b495-58d087415857/files/3f35e6dc-b0c6-4bf5-abe5-908626b649ab/3f35e6dc-b0c6-4bf5-abe5-908626b649ab.jpg",
},

*/
export default PhotoGallery;
