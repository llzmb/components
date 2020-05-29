import React from 'react';
import PropTypes from 'prop-types';

const ActionHelp = React.memo(
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
        d="M12 2a9.99 9.99 0 0110 10 9.99 9.99 0 01-10 10A9.99 9.99 0 012 12 9.99 9.99 0 0112 2zm0 2c-4.406 0-8 3.594-8 8 0 4.406 3.594 8 8 8 4.438 0 8-3.594 8-8 0-4.406-3.594-8-8-8zM9.502 7.531c0-1 1.468-1.312 2.718-1.312 1.813 0 3.125 1.093 3.125 2.781 0 2.906-2.625 2.719-2.625 4.063 0 .468-.343.968-.968.968a.973.973 0 01-.969-.969c0-2.656 2.625-2.312 2.625-4.062 0-.625-.563-.844-1.125-.844-.781 0-1.406.375-1.906.344-.5-.031-.907-.438-.875-.969zm1.048 9.25c0 .719.594 1.282 1.281 1.282.688 0 1.282-.563 1.282-1.282 0-.687-.594-1.25-1.282-1.25-.687 0-1.281.563-1.281 1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionHelp.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionHelp.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionHelp;
