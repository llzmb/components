import React from 'react';
import PropTypes from 'prop-types';

const MapsPlace = React.memo(
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
        d="M6 21c0-.531.469-1 1-1h10c.531 0 1 .469 1 1s-.469 1-1 1H7c-.531 0-1-.469-1-1zm6-19c3.406 0 6 2.563 6 5.625 0 1.156-.344 2.281-1.094 3.438l-4.062 6.468c-.219.313-.531.469-.844.469-.344 0-.625-.156-.844-.469l-4.062-6.437C6.375 9.938 6 8.78 6 7.625 6 4.562 8.563 2 12 2zm.031 2C9.75 4 8 5.594 8 7.594c0 .75.25 1.531.781 2.375L12 15l3.219-5.031c.219-.313.781-1.188.781-2.344C16 5.594 14.281 4 12.031 4zM10 8c0-1.094.906-2 2-2 1.094 0 2 .906 2 2 0 1.094-.906 2-2 2-1.094 0-2-.906-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
MapsPlace.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
MapsPlace.defaultProps = {
  title: null,
  titleId: null,
};
export default MapsPlace;
