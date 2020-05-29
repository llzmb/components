import React from 'react';
import PropTypes from 'prop-types';

const ActionCalender = React.memo(
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
        d="M15.012 4c.635 0 .988.492.988.988V6h1.506A2.48 2.48 0 0120 8.494v9.012A2.48 2.48 0 0117.506 20H6.494A2.48 2.48 0 014 17.506V8.494A2.495 2.495 0 016.494 6H8V4.988C8 4.494 8.372 4 8.996 4A.983.983 0 0110 4.988V6h4V4.988c0-.494.306-.988 1.012-.988zM18 12.024H6v5.482c0 .282.212.494.494.494h11.012a.483.483 0 00.494-.494v-5.482zM17.506 8H6.494A.483.483 0 006 8.494V10h12V8.494A.483.483 0 0017.506 8zM6.988 15.004a1 1 0 112 0 .992.992 0 01-.996.996 1 1 0 01-1.004-.996zm4 0c0-.557.47-1.004 1.02-1.004a1 1 0 110 2c-.553 0-1.02-.442-1.02-.996zm4.024 0a1 1 0 112 0 1 1 0 01-1.004.996.992.992 0 01-.996-.996z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionCalender.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionCalender.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionCalender;
