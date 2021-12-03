import React from 'react';
import useThemeTranslation from '../../hooks/useThemeTranslation';
import SplitProps from './splitProps';

const SplitTreatment = ({
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
  const isTreatmentOn = treatmentName === chosenTreatment;

  return (
    isReady &&
    isTreatmentOn &&
    children && (
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
    )
  );
};

SplitTreatment.propTypes = SplitProps;

export default SplitTreatment;
