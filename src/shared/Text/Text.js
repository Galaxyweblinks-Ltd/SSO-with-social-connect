import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './Text.module.scss';

/**
 * Text Component
 * Renders text with customizable styles.
 *
 * @param {string} text - The text content to be rendered.
 * @param {ReactNode} children - Additional elements or components nested inside the Text component.
 * @param {string} className - Additional CSS class for styling.
 * @param {string} color - Text color.
 * @param {string} fontFamily - Font family for the text.
 * @param {string} fontSize - Font size for the text.
 */

const Text = ({
  text,
  children,
  className,
  color,
  fontFamily,
  fontSize,
  as: Component,
  ...rest
}) => {
  const textStyle = classnames(
    style.textWrapper,

    {
      [className]: !!className,
      [style[`${color}Color`]]: !!color,
      [style[fontFamily]]: !!fontFamily,
      [style[fontSize]]: !!fontSize,
    }
  );
  return (
    <Component className={textStyle} {...rest}>
      {text || children}
    </Component>
  );
};

Text.defaultProps = {
  as: 'span',
  color: 'lightBlack',
  fontFamily: 'regular',
  fontSize: 'lg',
  className: '',
  children: '',
  text: '',
};

Text.propTypes = {
  as: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Text;
