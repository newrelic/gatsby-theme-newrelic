import React, { useState } from 'react';
import {
  Layout,
  Callout,
  Surface,
  AnimatedCard,
  Button,
  Link,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import PropsDisplay from '../components/PropsDisplay';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import findComponentData from '../utils/findComponentData';

const Surfaces = ({ data, location }) => {
  const componentsData = data.allJson.edges;
  const calloutData = findComponentData('Callout', componentsData);
  const surfaceData = findComponentData('Surface', componentsData);
  const animatedCardData = findComponentData('AnimatedCard', componentsData);

  const [animatedCardFlip, setAnimatedCardFlip] = useState(false);

  return (
    <Layout.Main
      css={css`
        width: 100%;
      `}
      location={location}
    >
      <Layout.Content>
        <h1>Surfaces</h1>

        <PropsDisplay componentInfo={calloutData}>
          <Callout title="Hello world!" variant={Callout.VARIANT.IMPORTANT}>
            This is a callout.
          </Callout>
        </PropsDisplay>
        <PropsDisplay componentInfo={surfaceData}>
          <Surface
            base={Surface.BASE.PRIMARY}
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            This is a surface.
          </Surface>
          <Surface
            base={Surface.BASE.PRIMARY}
            interactive
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            This is an interactive surface.
          </Surface>
          <Surface
            base={Surface.BASE.SECONDARY}
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            This is a surface with the "SECONDARY" base.
          </Surface>
          <Surface base={Surface.BASE.PRIMARY} as={Link} to="/surfaces">
            This is a surface with the "as" tag set to &#123;Link&#125;.
          </Surface>
        </PropsDisplay>
        <PropsDisplay componentInfo={animatedCardData}>
          <AnimatedCard
            css={css`
              height: 150px;
              margin-bottom: 0.5rem;
            `}
            flipped={animatedCardFlip}
          >
            <AnimatedCard.Front>
              <p>This is the front of the flipping version.</p>
              <Button
                variant={Button.VARIANT.PRIMARY}
                onClick={() => setAnimatedCardFlip(true)}
              >
                Click to Flip!
              </Button>
            </AnimatedCard.Front>
            <AnimatedCard.Back>
              <p>And this is the back!</p>
              <Button
                variant={Button.VARIANT.PRIMARY}
                onClick={() => setAnimatedCardFlip(false)}
              >
                Click to Flip!
              </Button>
            </AnimatedCard.Back>
          </AnimatedCard>
          <AnimatedCard
            css={css`
              height: 100px;
            `}
          >
            <AnimatedCard.Hover>
              <p>This is the hover version. Hover over me!</p>
              <p>The text changes when hovered!</p>
            </AnimatedCard.Hover>
          </AnimatedCard>
        </PropsDisplay>
      </Layout.Content>
    </Layout.Main>
  );
};

Surfaces.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query SurfacesQuery {
    allJson(
      filter: { displayName: { in: ["Callout", "Surface", "AnimatedCard"] } }
    ) {
      edges {
        node {
          description
          displayName
          props {
            description
            name
            required
            type
          }
        }
      }
    }
  }
`;

export default Surfaces;
