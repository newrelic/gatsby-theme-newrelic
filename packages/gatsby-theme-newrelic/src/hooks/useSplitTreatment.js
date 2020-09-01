import { useTreatments } from '@splitsoftware/splitio-react';

const useSplitTreatment = (name) => {
  const treatments = useTreatments([name]);

  return treatments[name].treatment;
};

export default useSplitTreatment;
