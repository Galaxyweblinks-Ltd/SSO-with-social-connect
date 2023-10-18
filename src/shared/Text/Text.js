import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './Text.module.scss';

/**
 * Name: Text
 * Desc: Render Text
 * @param {string} text
 * @param {node} children
 * @param {string} className
 * @param {string} color
 * @param {string} fontFamily
 * @param {string} fontSize
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
