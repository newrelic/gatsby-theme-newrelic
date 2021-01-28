import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import transformKeys from '../utils/transformKeys';
import constantize from '../utils/constantize';

const videoPlatforms = {
  youtube: (id) => `//www.youtube.com/embed/${id}?modestbranding=1`,
  wistia: (id) => `//fast.wistia.net/embed/iframe/${id}`,
};

const Video = ({ id, type, title, className, width }) => (
  <div
    className={className}
    css={css`
      max-width: ${width};
    `}
  >
    <div
      css={css`
        position: relative;
        padding-top: 56.25%; // 16:9
        height: 0;
      `}
    >
      <iframe
        src={videoPlatforms[type](id)}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title={title}
        frameBorder="0"
        allowFullScreen
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  </div>
);

Video.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(videoPlatforms)).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
};

Video.TYPE = transformKeys(videoPlatforms, constantize);

export default Video;
