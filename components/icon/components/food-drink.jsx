import React from 'react';
import PropTypes from 'prop-types';

const FoodDrink = React.memo(
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
        d="M15 22h3.26c.96 0 1.74-.797 1.74-1.759v-7.925c0-.96-.195-1.922-.57-2.837L18.4 6.877a5.565 5.565 0 01-.398-2.134v-.75C18.002 2.89 17.135 2 16.058 2h-2.13C12.872 2 12 2.914 12 3.993v.75c0 .727-.11 1.454-.392 2.125l-.328.775c-.259.634.234 1.386.938 1.386.399 0 .798-.259.938-.634l.305-.776c.376-.939.536-1.89.536-2.9V4H16v.72c0 1.008.183 1.96.558 2.9l1.032 2.583c.271.683.412 1.41.412 2.137V20H15c-.562 0-1 .437-1 1 0 .54.438 1 1 1zM4.986 11l7.024.022c.538 0 1.052.422.982 1.125l-1.028 8.987c-.047.492-.49.866-.98.866H6.035a.969.969 0 01-.98-.866L4.006 12.1a.966.966 0 01.98-1.1zm1.128 2l.224 2.02H7.98a.996.996 0 110 1.993H6.573l.36 3.013h3.162l.818-7.024-4.8-.002z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FoodDrink.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FoodDrink.defaultProps = {
  title: null,
  titleId: null,
};
export default FoodDrink;
