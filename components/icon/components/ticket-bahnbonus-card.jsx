import React from 'react';
import PropTypes from 'prop-types';

const TicketBahnbonusCard = React.memo(
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
        d="M19.5 5C20.875 5 22 6.125 22 7.5v9c0 1.375-1.125 2.5-2.5 2.5h-15A2.507 2.507 0 012 16.5v-9C2 6.125 3.125 5 4.5 5h15zM7.031 7H4.5c-.281 0-.5.219-.5.5v9c0 .281.219.5.5.5h6a1.614 1.614 0 01-.531-1.188c0-.937.75-1.624 1.656-1.624A1.614 1.614 0 0112.719 17H19.5c.281 0 .5-.219.5-.5v-9c0-.281-.219-.5-.5-.5h-8.781a2.4 2.4 0 01.562 1.563C11.281 9.905 10.22 11 8.875 11 7.5 11 6.437 9.875 6.437 8.531c0-.562.22-1.094.594-1.531zm4.719 4c0-1.719 1.375-3.125 3.094-3.125 1.719 0 3.094 1.406 3.094 3.125a3.08 3.08 0 01-3.094 3.094A3.08 3.08 0 0111.75 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketBahnbonusCard.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketBahnbonusCard.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketBahnbonusCard;
