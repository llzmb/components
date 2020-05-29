import React from 'react';
import PropTypes from 'prop-types';

const SeatTable = React.memo(
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
        d="M10.033 9c1.154 0 2.096.934 2.331 2.179l.517 2.825 3.654.004c.447 0 .848.307.966.754l1.507 5.987c.142.613-.33 1.249-.966 1.249-.47 0-.895-.33-.989-.754L15.757 16h-3.722c-.494 0-.895-.354-.986-.833l-.658-3.66c-.047-.235-.235-.508-.563-.508h-.423a.997.997 0 01-.997-1c0-.542.447-1 .989-1h.636zM2 4.013A1 1 0 012.99 3C4.802 3 6 4.272 6 6.25v2.663l1.63 8.127c.119.589.635.96 1.224.96h4.157c.542 0 .99.5.99 1.042 0 .566-.448.958-.99.958H8.855c-1.555 0-2.873-1.052-3.18-2.56L4.069 9.456a3.256 3.256 0 01-.07-.66V6.251c0-.872-.35-1.249-1.01-1.249A.995.995 0 012 4.013zM10.002 3a2 2 0 012.003 2.002 2 2 0 01-2.003 2.003A2 2 0 018 5.002 2 2 0 0110.002 3zm11.016 7c.565 0 .982.435.982 1v3.005A.98.98 0 0121 15a.99.99 0 01-.995-.995v-2.003H17A1 1 0 0116 11c0-.565.435-1 1-1h4.018z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
SeatTable.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SeatTable.defaultProps = {
  title: null,
  titleId: null,
};
export default SeatTable;
