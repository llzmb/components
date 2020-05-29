import React from 'react';
import PropTypes from 'prop-types';

const MapsStop = React.memo(
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
        d="M16.806 2c.684 0 1.306.218 1.773.685l2.768 2.679c.466.436.653 1.028.653 1.62 0 .53-.187 1.152-.653 1.588l-2.768 2.679c-.498.498-1.09.749-1.773.749H12v7h3.033c.528 0 .964.474.964.941 0 .623-.436 1.059-.964 1.059H6.946c-.53 0-.934-.436-.934-1.059 0-.467.405-.941.934-.941h3.048L10 12H4.582C3.12 12 2 10.877 2 9.444V4.523C2 3.121 3.12 2 4.582 2h12.224zm-.156 2H4.955c-.622 0-.933.305-.933.897V9.07c0 .592.31.935.933.935H16.65c.498 0 .84-.125 1.15-.467l1.867-1.9c.218-.218.333-.436.333-.686 0-.218-.115-.436-.333-.654l-1.866-1.837C17.459 4.118 17.148 4 16.65 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
MapsStop.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
MapsStop.defaultProps = {
  title: null,
  titleId: null,
};
export default MapsStop;
