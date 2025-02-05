import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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
import Walkthrough from './Walkthrough';
import Tabs from './Tabs';

const defaultComponents = {
  a: (props) => <MDXLink {...props} displayExternalIcon />,
  code: MDXCodeBlock,
  pre: (props) => props.children,
  Button,
  ButtonLink: (props) => <Button {...props} as={Link} />,
  Callout: MDXCallout,
  Collapser,
  CollapserGroup: MDXCollapserGroup,
  Icon,
  InlineCode,
  Link,
  SideBySide,
  Steps: Walkthrough,
  Step: Walkthrough.Step,
  table: MDXTable,
  Video: MDXVideo,
  Tabs: Tabs,
  TabsBar: Tabs.Bar,
  TabsBarItem: Tabs.BarItem,
  TabsPageItem: Tabs.Page,
  TabsPages: Tabs.Pages,
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
