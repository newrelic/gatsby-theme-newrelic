import React from 'react';
import useThemeTranslation from '../../hooks/useThemeTranslation';
import SplitProps from './splitProps';

const SplitDefault = ({
  treatmentName,
  children,
  chosenTreatment,
  onClick,
  isReady,
  config,
  instrumentation,
  translate = true,
}) => {
  const { t } = useThemeTranslation();

  return (
    !isReady ||
    (treatmentName === chosenTreatment && (
      <>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onClick,
            instrumentation,
            children: translate
              ? t(child.props.children)
              : child.props.children,
            ...config,
          })
        )}
      </>
    ))
  );
};

SplitDefault.propTypes = SplitProps;

export default SplitDefault;
