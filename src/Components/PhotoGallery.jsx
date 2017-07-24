import React from 'react';
import PropTypes from 'prop-types';

const PhotoGallery = () => (
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
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </article>
);

// PhotoGallery.propTypes = {
//   projectnumber: PropTypes.number.isRequired,
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     captions: PropTypes.array.isRequired,
//     explanation: PropTypes.string.isRequired,
//     images: PropTypes.array.isRequired,
//     link: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PhotoGallery;
