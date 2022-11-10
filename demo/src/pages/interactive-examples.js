import { React, useState } from 'react';
import {
  Layout,
  CustomTextInput,
  SignupModal,
  Button,
  Link,
  SearchInput,
  SelectInLine,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { docgenJson } from '../../types';
import PropsDisplay from '../components/PropsDisplay';
import findComponentData from '../utils/findComponentData';

const InteractiveExamples = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const componentsData = data.allJson.edges;

  const selectInlineData = findComponentData('SelectInline', componentsData);
  const searchInputData = findComponentData('SearchInput', componentsData);
  const buttonData = findComponentData('Button', componentsData);
  const signupModalData = findComponentData('SignupModal', componentsData);
  const linkData = findComponentData('Link', componentsData);
  const customTextInputData = findComponentData(
    'CustomTextInput',
    componentsData
  );

  return (
    <Layout.Main
      css={css`
        width: 100%;
      `}
    >
      <Layout.Content>
        <h1>Interactive Components</h1>
        <PropsDisplay componentInfo={customTextInputData}>
          <CustomTextInput label="Input Label" value="Sample Text" />
        </PropsDisplay>
        <div
          css={css`
            margin-bottom: 3em;
          `}
        />
        <PropsDisplay componentInfo={selectInlineData}>
          <SelectInLine label="Selection Label">
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="third">third</option>
          </SelectInLine>
        </PropsDisplay>
        <div
          css={css`
            margin-bottom: 3em;
          `}
        />
        <PropsDisplay componentInfo={searchInputData}>
          <SearchInput
            css={css`
              margin-bottom: 0.5rem;
            `}
            value="Large Search Input"
            size={SearchInput.SIZE.LARGE}
          />
          <SearchInput
            css={css`
              margin-bottom: 0.5rem;
            `}
            value="Medium Search Input (default)"
          />
          <SearchInput
            value="Small Search Input"
            size={SearchInput.SIZE.SMALL}
          />
        </PropsDisplay>
        <div
          css={css`
            margin-bottom: 3em;
          `}
        />
        <PropsDisplay componentInfo={buttonData}>
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.PRIMARY}
          >
            Primary Button
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.PRIMARY}
            size={Button.SIZE.SMALL}
          >
            Small Primary
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.PRIMARY}
            size={Button.SIZE.EXTRA_SMALL}
          >
            Extra Small Primary
          </Button>
          <br />
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.NORMAL}
          >
            Normal Button
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.NORMAL}
            size={Button.SIZE.SMALL}
          >
            Small Normal
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.NORMAL}
            size={Button.SIZE.EXTRA_SMALL}
          >
            Extra Small Normal
          </Button>
          <br />
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.OUTLINE}
          >
            Outline Button
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.OUTLINE}
            size={Button.SIZE.SMALL}
          >
            Small Outline
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              margin-bottom: 0.5rem;
              width: 125px;
            `}
            variant={Button.VARIANT.OUTLINE}
            size={Button.SIZE.EXTRA_SMALL}
          >
            Extra Small Outline
          </Button>
          <br />
          <Button
            css={css`
              margin-right: 1rem;
              width: 125px;
            `}
            variant={Button.VARIANT.LINK}
          >
            Link Button
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              width: 125px;
            `}
            variant={Button.VARIANT.LINK}
            size={Button.SIZE.SMALL}
          >
            Small Link
          </Button>
          <Button
            css={css`
              margin-right: 1rem;
              width: 125px;
            `}
            variant={Button.VARIANT.LINK}
            size={Button.SIZE.EXTRA_SMALL}
          >
            Extra Small Link
          </Button>
        </PropsDisplay>
        <div
          css={css`
            margin-bottom: 2em;
          `}
        />
        <PropsDisplay componentInfo={signupModalData}>
          <Button
            variant={Button.VARIANT.PRIMARY}
            onClick={() => setShowModal(true)}
          >
            Display Sign Up Modal
          </Button>
          <SignupModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </PropsDisplay>
        <div
          css={css`
            margin-bottom: 2em;
          `}
        />
        <PropsDisplay componentInfo={linkData}>
          <Link to="https://newrelic.com/">Link to newrelic.com</Link>
          <br />
          <div
            css={css`
              padding-bottom: 0.5rem;
            `}
          />
          <Link displayExternalIcon to="https://newrelic.com/">
            Link to newrelic.com with External Icon
          </Link>
        </PropsDisplay>
      </Layout.Content>
    </Layout.Main>
  );
};

InteractiveExamples.propTypes = {
  data: docgenJson,
};

export const pageQuery = graphql`
  query InteractivesQuery {
    allJson(
      filter: {
        displayName: {
          in: [
            "CustomTextInput"
            "SelectInline"
            "SearchInput"
            "SignupModal"
            "Button"
            "Link"
          ]
        }
      }
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

export default InteractiveExamples;
