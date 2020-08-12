import React from 'react';
import PropTypes from 'prop-types';

const NavigationArrowDown = React.memo(
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
        d="M12.003 3.997c-.563 0-1 .438-1 1v11.594L6.72 12.31a.998.998 0 00-.718-.313c-.438 0-1 .375-1 1.032 0 .25.093.5.28.687l6 6a.975.975 0 00.612.276l.108.005c.25.032.515-.077.718-.28l6-6c.188-.188.282-.47.282-.688 0-.563-.47-1.032-1-1.032a.981.981 0 00-.72.313l-4.28 4.281V4.997c0-.562-.438-1-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationArrowDown.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationArrowDown.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationArrowDown;