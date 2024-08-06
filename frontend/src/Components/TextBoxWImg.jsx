import React from 'react';
import PropTypes from 'prop-types';

const TextBoxWImg = ({ title, content, image , bgcolor}) => {
  return (
    <div className= {` ${bgcolor} p-6 rounded-lg w-96 h-64` }>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
      <img src={image} className="w-32 h-30 ml-auto" alt="sectionImage" />
    </div>
  );
};

TextBoxWImg.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TextBoxWImg;