import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Button from './Button';
import MDXCallout from './MDXCallout';
import Collapser from './Collapser';
import Icon from './Icon';
import InlineCode from './InlineCode';
import Lightbox from './Lightbox';
import Link from './Link';
import MDXCodeBlock from './MDXCodeBlock';
import MDXCollapserGroup from './MDXCollapserGroup';
import MDXLink from './MDXLink';
import MDXTable from './MDXTable';
import MDXVideo from './MDXVideo';
import SideBySide from './SideBySide';
import TutorialStep from './TutorialSteps/TutorialStep';
import TutorialSection from './TutorialSteps/TutorialSection';

const defaultComponents = {
  a: MDXLink,
  code: MDXCodeBlock,
  pre: (props) => props.children,
  Button,
  ButtonLink: (props) => <Button {...props} as={Link} />,
  Callout: MDXCallout,
  Collapser,
  CollapserGroup: MDXCollapserGroup,
  Icon,
  img: (props) =>
    console.log('hiiiiiiiii', props) ||
    props.style ||
    props.variant === 'TechTile' ? (
      <img
        width={props.width ? props.width : 'inherit'}
        src={props.src}
        alt={props.alt ? props.alt : 'Docs site'}
        title={props.title}
        style={
          props.style
            ? { ...props.style, margin: '0 0.25rem' }
            : { margin: '0 0.25rem' }
        }
      />
    ) : (
      <Lightbox>
        <img
          width={props.width ? props.width : 'auto'}
          src={props.src}
          alt={props.alt ? props.alt : 'Docs site'}
          title={props.title}
          style={
            props.style
              ? {
                  ...props.style,
                  borderRadius: '0.25rem',
                  maxWidth: '100%',
                  margin: '0 0.25rem',
                }
              : {
                  borderRadius: '0.25rem',
                  maxWidth: '100%',
                  margin: '0 0.25rem',
                }
          }
        />
      </Lightbox>
    ),

  InlineCode,
  Link,
  SideBySide,
  Steps: TutorialSection,
  Step: TutorialStep,
  table: MDXTable,
  Video: MDXVideo,
};

const MDX = ({ body, components }) => {
  return (
    <MDXProvider components={{ ...defaultComponents, ...components }}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  );
};

MDX.propTypes = {
  body: PropTypes.string.isRequired,
  components: PropTypes.object,
};

export default MDX;
