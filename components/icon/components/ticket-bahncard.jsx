import React from 'react';
import PropTypes from 'prop-types';

const TicketBahncard = React.memo(
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
        d="M18.995 5A3.006 3.006 0 0122 8v8c0 1.668-1.361 3-3.005 3H5.005A3.006 3.006 0 012 16V8c0-1.668 1.362-3 3.005-3h13.99zm-.008 1.997H5.004c-.563 0-1.009.446-1.009 1.009v7.981c0 .564.446 1.01 1.01 1.01h13.982c.563 0 1.008-.446 1.008-1.01V8.006c0-.563-.445-1.01-1.008-1.01zm-3.02 1.221c.376 0 .822.047 1.22.118.33.07.588.399.588.751v.024a.75.75 0 01-.892.728 4.724 4.724 0 00-.845-.07c-1.409 0-1.808.775-1.808 2.255 0 1.409.376 2.207 1.784 2.207.305 0 .587-.023.892-.093.47-.094.892.234.892.704v.047c0 .33-.211.611-.516.705a5.017 5.017 0 01-1.362.188c-2.37 0-3.544-1.34-3.544-3.735 0-2.42 1.244-3.829 3.591-3.829zm-7.3.165c1.455 0 2.441.516 2.441 1.855 0 .846-.376 1.245-1.197 1.55 1.056.212 1.596.729 1.596 1.786 0 1.456-1.127 2.067-2.887 2.067H6.577a.757.757 0 01-.75-.752V9.134c0-.423.351-.751.75-.751h2.09zm-.024 4.204H7.587v1.55h.939c.798 0 1.22-.187 1.22-.798 0-.493-.281-.752-1.103-.752zm-.07-2.701h-.986v1.174h.939c.587 0 .868-.188.868-.61 0-.4-.258-.564-.821-.564z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketBahncard.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketBahncard.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketBahncard;
