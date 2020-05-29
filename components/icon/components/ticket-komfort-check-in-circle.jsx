import React from 'react';
import PropTypes from 'prop-types';

const TicketKomfortCheckInCircle = React.memo(
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
        d="M13 21c.75 0 1.563-.094 2.313-.313a.976.976 0 00.718-.968c0-.532-.437-1-.968-1-.25 0-1.126.281-2.063.281-3.875 0-7-3.125-7-7s3.125-7 7-7c1 0 1.875.281 2.063.281.53 0 .968-.468.968-1a.976.976 0 00-.718-.968A8.415 8.415 0 0013 3c-5 0-9 4.031-9 9s4 9 9 9z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketKomfortCheckInCircle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketKomfortCheckInCircle.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketKomfortCheckInCircle;