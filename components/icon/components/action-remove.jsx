import React from 'react';
import PropTypes from 'prop-types';

const ActionRemove = React.memo(
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
        d="M12.012 2C17.512 2 22 6.489 22 11.988A10.05 10.05 0 0111.988 22C6.488 22 2 17.511 2 12.012A9.975 9.975 0 0112.012 2zm-.014 1.998c-4.424 0-8 3.572-8 7.99 0 4.419 3.576 8.014 8 8.014 4.423 0 8-3.595 8-8.014a7.989 7.989 0 00-8-7.99zm5.018 7.005c.542 0 .989.447.989.988a1 1 0 01-.989 1.012H6.993a1 1 0 01-.988-1.012c0-.541.447-.988.988-.988h10.023z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionRemove.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionRemove.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionRemove;
