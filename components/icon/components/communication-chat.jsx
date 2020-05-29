import React from 'react';
import PropTypes from 'prop-types';

const CommunicationChat = React.memo(
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
        d="M18.995 2C20.615 2 22 3.22 22 4.793v10.188c0 1.597-1.22 3.005-2.817 3.005H7.94c-.188 0-.423.047-.587.211L3.69 21.718a.957.957 0 01-.68.282C2.5 22 2 21.5 2 21V5c0-1.677 1.37-3 3-3h13.995zM4.985 3.995C4.447 3.995 4 4.5 4 5v13.643l1.854-1.83c.47-.423 1.08-.799 1.69-.799L19 16c.54 0 1-.484 1-1V5c0-.493-.484-1-1-1L4.986 3.995zM17 11c.565 0 1 .437 1 1s-.482 1-1 1l-10.012-.005c-.565 0-.988-.446-.988-1.01 0-.563.506-.985 1-.985h10zm.012-4A1 1 0 0117 9L6.988 8.995C6.423 8.995 6 8.6 6 8s.506-1 1-1h10.012z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationChat.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationChat.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationChat;
