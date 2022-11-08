import { React, useState } from 'react';
import {
  Layout,
  CustomTextInput,
  SelectInLine,
  SearchInput,
  SignupModal,
  Button,
  Link,
  Collapser,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import PropsDisplay from '../components/PropsDisplay';
import { graphql } from 'gatsby';
import findComponentData from '../utils/findComponentData';

const InteractiveExamples = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const componentsData = data.allJson.edges;
  const customTextInputData = findComponentData('CustomTextInput', componentsData);
  const selectInlineData = findComponentData('SelectInline', componentsData); 
  // const searchInputData = findComponentData('SearchInput', componentsData);
  // const buttonData = findComponentData('Button', componentsData);
  const signupModalData = findComponentData('SignupModal', componentsData);
  const linkData = findComponentData('Link', componentsData);
  console.log(selectInlineData);

  return (
    <Layout.Main
      css={css`
        width: 100%;
      `}>
      <Layout.Content>
        <h1>INTERACTIVE COMPONENTS</h1>
        <PropsDisplay componentInfo={customTextInputData}>
          <CustomTextInput label={"Input Label"} value={"Displaying Sample Text"}>This is a custom text input</CustomTextInput>
          <CustomTextInput
            placeholder={"Displaying Placeholder Text"}
            label={"Input Label"} >This is a custom text input</CustomTextInput>
        </PropsDisplay>
        {/* <PropsDisplay componentInfo={searchInputData}>
          <SearchInput>This is the Search Input</SearchInput>
        </PropsDisplay> */}
        {/* <PropsDisplay componentInfo={buttonData}>
          <Button variant={Button.VARIANT.PRIMARY}></Button>
        </PropsDisplay> */}
        {/* <div className="primary-btns" css={css`
                  margin-bottom: 0.5rem;`}>
          <Button css={css`
                    margin-right: 1rem;
                    width: 125px;
                  `} variant={Button.VARIANT.PRIMARY}>Primary Button</Button>
          <Button css={css`
                    margin-right: 1rem;
                    width: 110;
                  `} variant={Button.VARIANT.PRIMARY} size={Button.SIZE.SMALL}>Small Primary</Button>
          <Button css={css`
                    margin-right: 1rem;
                  `} variant={Button.VARIANT.PRIMARY} size={Button.SIZE.EXTRA_SMALL}>Extra Small Primary</Button>
        </div>
        <div className="normal-btns" css={css`
                  margin-bottom: 0.5rem;`}>
          <Button css={css`
                    margin-right: 1rem;
                    width: 125px;
                  `} variant={Button.VARIANT.NORMAL}>Normal Button</Button>
          <Button css={css`
                    margin-right: 1rem;
                    width: 110;
                  `} variant={Button.VARIANT.NORMAL} size={Button.SIZE.SMALL}>Small Normal</Button>
          <Button css={css`
                    margin-right: 1rem;
                  `} variant={Button.VARIANT.NORMAL} size={Button.SIZE.EXTRA_SMALL}>Extra Small Normal</Button>
        </div> */}
        {/* <div className="outline-btns" css={css`
                  margin-bottom: 0.5rem;`}>
          <Button css={css`
                    margin-right: 1rem;
                    width: 125px;
                  `} variant={Button.VARIANT.OUTLINE}>Outline Button</Button>
          <Button css={css`
                    margin-right: 1rem;
                    width: 110;
                  `} variant={Button.VARIANT.OUTLINE} size={Button.SIZE.SMALL}>Small Normal</Button>
          <Button css={css`
                    margin-right: 1rem;
                  `} variant={Button.VARIANT.OUTLINE} size={Button.SIZE.EXTRA_SMALL}>Extra Small Normal</Button>
        </div>
        <div className="link-btns" css={css`
                  margin-bottom: 0.5rem;`}>
          <Button css={css`
                    margin-right: 1rem;
                    width: 125px;
                  `} variant={Button.VARIANT.LINK}>Link Button</Button>
          <Button css={css`
                    margin-right: 1rem;
                    width: 110;
                  `} variant={Button.VARIANT.LINK} size={Button.SIZE.SMALL}>Small Link</Button>
          <Button css={css`
                    margin-right: 1rem;
                  `} variant={Button.VARIANT.LINK} size={Button.SIZE.EXTRA_SMALL}>Extra Small Link</Button>
        </div> */}
        {/* <div           css={css`
              padding-bottom: 2rem;
              `}>
          <Collapser 
            title="Props"
            id="Props"
            defaultOpen={false}>
            <div css={css`
                    padding-bottom: 0.5rem;
                  `}>
              <div><b>variant</b></div>
              <span>Type: ?</span>
              <div css={css`
                      color: red;
                    `}>
                <i>Required</i>
              </div>
            </div>
            <div css={css`
                    padding-bottom: 0.5rem;
                  `}>
              <div><b>size</b></div>
              <p>Type: ?</p>
            </div>
            <div css={css`
                    padding-bottom: 0.5rem;
                  `}>
              <div><b>disabled</b></div>
              <p>Type: bool</p>
            </div>
            </Collapser>
          </div> */}

        <PropsDisplay componentInfo={signupModalData}>
          <Button variant={Button.VARIANT.PRIMARY} onClick={() => setShowModal(true)}>Display Sign Up Modal</Button>
          <SignupModal isOpen={showModal} onClose={() => setShowModal(false)}>This is the Signup Modal</SignupModal>
        </PropsDisplay>
        <div css={css`
                  margin-bottom: 2em;
                  `}>
          </div>
        <PropsDisplay componentInfo={linkData}>
        <Link to={"https://newrelic.com/"}>Link to newrelic.com</Link><br></br>
          <div css={css`
                    padding-bottom: 0.5rem;
                  `}></div>
        <Link displayExternalIcon={true} to={"https://newrelic.com/"}>Link to newrelic.com with External Icon</Link>
        </PropsDisplay>
      </Layout.Content>
    </Layout.Main>
  );
};

// export const pageQuery = graphql`
//   query InteractivesQuery {
//     allJson(
//       filter: {
//         displayName: {
//           in: [
//             "CustomTextInput"
//             "SelectInLine"
//             "SerachInput"
//             "SignupModal"
//             "Button"
//             "Link"
//           ]
//         }
//       }
//     ) {
//       edges {
//         node {
//           description
//           displayName
//           props {
//             description
//             name
//             required
//             type
//           }
//         }
//       }
//     }
//   }
// `;

export default InteractiveExamples;
