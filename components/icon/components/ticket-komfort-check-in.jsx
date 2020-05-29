import React from 'react';
import PropTypes from 'prop-types';

const TicketKomfortCheckIn = React.memo(
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
        d="M13 21c.75 0 1.563-.094 2.313-.313a.976.976 0 00.718-.968c0-.532-.437-1-.968-1-.25 0-1.126.281-2.063.281-3.875 0-7-3.125-7-7s3.125-7 7-7c1 0 1.875.281 2.063.281.53 0 .968-.468.968-1a.976.976 0 00-.718-.968A8.415 8.415 0 0013 3c-5 0-9 4.031-9 9s4 9 9 9zm0-6c.25 0 .469-.031.688-.281l7-7.031a.97.97 0 00.28-.688A.98.98 0 0020 6a.99.99 0 00-.719.281L13 12.625l-2.281-2.281a1.091 1.091 0 00-.75-.313c-.531 0-.969.469-.969 1 0 .25.094.5.313.719l2.968 2.969A.99.99 0 0013 15z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketKomfortCheckIn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketKomfortCheckIn.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketKomfortCheckIn;
