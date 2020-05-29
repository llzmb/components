import React from 'react';
import PropTypes from 'prop-types';

const AvVolumeMute = React.memo(
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
        d="M11.028 5c.564 0 .972.469.972 1v12c0 .563-.408 1-.972 1-.188 0-.439-.031-.564-.156L6.2 15.969H4.477c-1.38 0-2.477-1.094-2.477-2.5V10.5C2 9.094 3.097 8 4.477 8H6.2l4.263-2.844c.157-.093.376-.156.564-.156zM9.994 7.875L7.047 9.813a.941.941 0 01-.564.187H4.477a.461.461 0 00-.47.469v3c0 .281.187.5.47.5h2.006c.188 0 .407.094.564.187l2.947 1.969v-8.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvVolumeMute.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvVolumeMute.defaultProps = {
  title: null,
  titleId: null,
};
export default AvVolumeMute;
