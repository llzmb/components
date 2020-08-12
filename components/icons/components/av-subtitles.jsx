import React from 'react';
import PropTypes from 'prop-types';

const AvSubtitles = React.memo(
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
        d="M19.5 5C20.875 5 22 6.125 22 7.5v9c0 1.375-1.125 2.5-2.5 2.5h-15A2.507 2.507 0 012 16.5v-9C2 6.125 3.125 5 4.5 5zm0 2h-15c-.281 0-.5.219-.5.5v9c0 .281.219.5.5.5h15c.281 0 .5-.219.5-.5v-9c0-.281-.219-.5-.5-.5zM6 14c0 .563.438 1 1 1h5c.531 0 1-.438 1-1 0-.563-.469-1-1-1H7c-.563 0-1 .438-1 1zm9 0c0 .563.469 1 1.031 1h.938C17.53 15 18 14.562 18 14c0-.563-.469-1-1.031-1h-.938C15.47 13 15 13.438 15 14z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvSubtitles.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvSubtitles.defaultProps = {
  title: null,
  titleId: null,
};
export default AvSubtitles;