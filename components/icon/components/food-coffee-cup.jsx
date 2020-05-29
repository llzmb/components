import React from 'react';
import PropTypes from 'prop-types';

const FoodCoffeeCup = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      width="24"
      height="24"
      className="dbx-icon"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M18.016 11.009A2.988 2.988 0 0121 13.99a2.993 2.993 0 01-2.984 3.007h-1.01v.986A4.03 4.03 0 0112.985 22H6.996C4.785 22 3 20.192 3 17.984v-6.975zm-3.008 1.996H4.998v4.979c0 1.104.892 1.996 1.997 1.996h5.992c1.104 0 2.02-.892 2.02-1.996v-4.98zm3.008 0h-1.01V15h1.01c.54 0 .987-.446.987-1.01a.993.993 0 00-.987-.986zM5.984 7.979a.998.998 0 101.997 0V5.983a.993.993 0 00-.986-.987.998.998 0 00-1.01.987v1.996zm3.008 0a.998.998 0 101.997 0v-3.97c0-.54-.446-1.009-.986-1.009-.564 0-1.01.47-1.01 1.01v3.969zm3.008 0a.998.998 0 101.997 0V6.006a.998.998 0 10-1.997 0V7.98z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FoodCoffeeCup.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FoodCoffeeCup.defaultProps = {
  title: null,
  titleId: null,
};
export default FoodCoffeeCup;
