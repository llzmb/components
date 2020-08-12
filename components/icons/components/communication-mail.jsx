import React from 'react';
import PropTypes from 'prop-types';

const CommunicationMail = React.memo(
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
        d="M19.979 5c1.13 0 1.99.909 1.99 1.99v9.038A2.972 2.972 0 0118.971 19H4.997A2.972 2.972 0 012 16.028V6.99C2 5.91 2.884 5 4.014 5H19.98zM4.014 8.218v7.81c0 .54.442.983.983.983h14a.99.99 0 001.007-.983V8.267l-5.87 5.847c-.623.62-1.352.98-2.113.98-.737 0-1.434-.317-2.02-.902L4.014 8.218zm14.418-1.229H5.61l5.67 5.702c.197.198.469.296.716.296a.879.879 0 00.641-.246l5.794-5.752z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationMail.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationMail.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationMail;