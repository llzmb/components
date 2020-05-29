import React from 'react';
import PropTypes from 'prop-types';

const NavigationFullscreenExit = React.memo(
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
        d="M9.031 21C8.531 21 8 20.594 8 19.969V16H4c-.531 0-1-.469-1-1.031 0-.531.469-.969 1-.969h5a.98.98 0 011 .969v5C10 20.53 9.562 21 9.031 21zM16 19.969c0 .625-.531 1.031-1.031 1.031-.531 0-.969-.469-.969-1.031v-5A.98.98 0 0115 14h5c.531 0 1 .438 1 .969C21 15.53 20.531 16 20 16h-4v3.969zM14.969 3c.5 0 1.031.406 1.031 1.031V8h4c.531 0 1 .469 1 1.031 0 .531-.469.969-1 .969h-5a.98.98 0 01-1-.969v-5C14 3.47 14.438 3 14.969 3zM8 4.031C8 3.406 8.531 3 9.031 3c.531 0 .969.469.969 1.031v5A.98.98 0 019 10H4c-.531 0-1-.438-1-.969C3 8.47 3.469 8 4 8h4V4.031z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationFullscreenExit.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationFullscreenExit.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationFullscreenExit;
