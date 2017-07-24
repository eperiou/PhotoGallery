import React from 'react';
import PropTypes from 'prop-types';

const PhotoGallery = ({ photos }) => (
  <article>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">

      {/* Indicators, the first needs to be 'active'*/}

      <ol className="carousel-indicators">
        {photos.map((photo, ind) => (
          ind === 0 ? (
            <li key={photo.name} data-target="#myCarousel" data-slide-to={ind} className="active" />
          ) : (
            <li key={photo.name} data-target="#myCarousel" data-slide-to={ind} />
          )
        ))}
      </ol>

      {/*
        * The carousel's first item has to be  'active'
        */}
      <div className="carousel-inner">
        {photos.map((photo, ind) => (
          ind === 0 ? (
            <div className="item active">
              <img src={photo.url} alt={photo.name} key={photo.name} />
            </div>
          ) : (
            <div className="item">
              <img src={photo.url} alt={photo.name} key={photo.name} />
            </div>
          )
        ))}
      </div>
      {/* <!-- Left and right controls --> */}
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </article>
);

  /*
  * Typing for incoming Data
  */

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};
PhotoGallery.defaultProps = {
  photos: [],
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
