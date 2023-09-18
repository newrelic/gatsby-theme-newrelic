import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import Button from './Button';
import MDXCallout from './MDXCallout';
import Collapser from './Collapser';
import Icon from './Icon';
import InlineCode from './InlineCode';
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
  code: (props) => <code>{props.children}</code>,
  pre: (props) => <MDXCodeBlock {...props.children.props} />,
  Button,
  ButtonLink: (props) => <Button {...props} as={Link} />,
  Callout: MDXCallout,
  Collapser,
  CollapserGroup: MDXCollapserGroup,
  Icon,
  InlineCode,
  Link,
  SideBySide,
  Steps: TutorialSection,
  Step: TutorialStep,
  table: MDXTable,
  Video: MDXVideo,
};

const MDX = ({ children, components }) => {
  return (
    <MDXProvider components={{ ...defaultComponents, ...components }}>
      {children}
    </MDXProvider>
  );
};

MDX.propTypes = {
  children: PropTypes.object.isRequired,
  components: PropTypes.object,
};

export default MDX;
