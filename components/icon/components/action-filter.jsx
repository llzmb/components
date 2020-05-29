import React from 'react';
import PropTypes from 'prop-types';

const ActionFilter = React.memo(
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
        d="M8.031 12.969c1.719 0 3.375 1.218 3.844 3.031h9.094c.562 0 1 .469 1 1 0 .562-.438 1-1 1h-9.063c-.437 1.75-2 2.969-3.875 2.969-1.844 0-3.437-1.188-3.875-2.969H3c-.531 0-1-.438-1-1 0-.531.469-1 1-1h1.156c.469-1.75 2.063-3.031 3.875-3.031zM8 15c-1.125 0-2 .938-2 2 0 1.125.906 2 2 2 1.094 0 2-.875 2-2 0-1.094-.906-2-2-2zm8.031-12a4.044 4.044 0 013.875 3H21c.563 0 1 .469 1 1 0 .563-.438 1-1 1h-1.094c-.437 1.75-2 3-3.875 3-1.812 0-3.437-1.219-3.875-3H3c-.563 0-1-.438-1-1 0-.531.438-1 1-1h9.156c.469-1.75 2.063-3 3.875-3zM16 5c-1.094 0-2 .906-2 2 0 1.094.906 2 2 2 1.094 0 2-.875 2-2 0-1.094-.906-2-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionFilter.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionFilter.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionFilter;