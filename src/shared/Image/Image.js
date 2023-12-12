import PropTypes from 'prop-types';
import style from './Image.module.scss';

/**
 * Image Component
 * Renders an image with optional name, class, and alt text.
 *
 * @param {string} src - The source URL of the image.
 * @param {string} name - Optional name or identifier for the image.
 * @param {string} className - Additional CSS class for styling.
 * @param {string} alt - Alternative text for accessibility and when the image cannot be loaded.
 */

const Image = ({ src, name, className = '', alt, ...rest }) => {
  return (
    <figure className={style.imgFigure}>
      <img
        src={src}
        name={name}
        className={className}
        alt={alt || name}
        {...rest}
      ></img>
    </figure>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
