import React from 'react';
import PropTypes from 'prop-types';

const ActionVisibility = React.memo(
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
        d="M12 5c3.688 0 6.406 2.188 9.781 6.375A.955.955 0 0122 12a.955.955 0 01-.219.625C18.406 16.844 15.688 19 12 19c-3.469 0-5.938-1.688-9.781-6.375A.955.955 0 012 12c0-.219.063-.438.219-.625C5.594 7.187 8.313 5 12 5zm0 2c-2.531 0-4.688 1.406-7.719 5C7.22 15.5 9.25 16.906 12 17c2.531 0 4.688-1.406 7.719-5C16.78 8.5 14.75 7.094 12 7zm0 2a3 3 0 11-.002 6.002A3 3 0 0112 9zm0 2c-.563 0-1 .469-1 1 0 .563.438 1.031 1 1.031.563 0 1-.469 1-1.031 0-.531-.438-1-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionVisibility.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionVisibility.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionVisibility;