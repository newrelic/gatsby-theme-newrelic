import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import createTessen from '../utils/createTessen';

const useTessen = () => {
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

  const tessen = useMemo(() => createTessen(config), [config]);
  return tessen;
};

export default useTessen;
