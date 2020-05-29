import React from 'react';
import PropTypes from 'prop-types';

const CommunicationFeedback = React.memo(
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
        d="M18.995 2A3.026 3.026 0 0122 5.005v10c0 1.643-1.361 2.98-3.005 2.98H7.962a.956.956 0 00-.704.283l-3.568 3.45a.94.94 0 01-.68.282C2.492 22 2 21.6 2 20.99V5.006A3.026 3.026 0 015.005 2h13.99zm0 2.019H5.005a.963.963 0 00-.986.986v13.709l1.854-1.808c.54-.493 1.197-.822 1.902-.845h11.22c.564 0 .986-.446.986-1.01V5.006a.963.963 0 00-.986-.986zM12 6c.558 0 1 .462 1 1.015v2.516c0 .577-.419.969-1 .969-.558 0-1-.415-1-.97V7.016C11 6.531 11.349 6 12 6zm.024 7.925c.633 0 1.173-.493 1.173-1.15 0-.61-.54-1.127-1.173-1.127-.61 0-1.15.516-1.15 1.127 0 .657.54 1.15 1.15 1.15z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationFeedback.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationFeedback.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationFeedback;
