import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import createNRBrowserAgent from '../utils/createNRBrowserAgent';

const useNRBrowserAgent = () => {
  const {
    newRelicThemeConfig: { tessen: config },
  } = useStaticQuery(graphql`
    query {
      newRelicThemeConfig {
        tessen {
          product
          subproduct
        }
      }
    }
  `);

  const nrBrowserAgent = useMemo(() => createNRBrowserAgent(config), [config]);
  return nrBrowserAgent;
};

export default useNRBrowserAgent;
