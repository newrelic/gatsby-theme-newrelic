import { css } from '@emotion/react';
import transformKeys from '../utils/transformKeys';
import constantize from '../utils/constantize';

const videoPlatforms = {
  youtube: (id: string) => `//www.youtube.com/embed/${id}?modestbranding=1`,
  wistia: (id: string) => `//fast.wistia.net/embed/iframe/${id}`,
};

interface VideoProps {
  id: string;
  type: keyof typeof videoPlatforms;
  title?: string;
  className?: string;
  width?: string;
}

const Video = ({ id, type, title, className, width }: VideoProps) => (
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

// TODO: transformKeys needs typing
Video.TYPE = transformKeys(videoPlatforms, constantize);

export default Video;
