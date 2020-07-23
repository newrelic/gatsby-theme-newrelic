import useDeepMemo from './useDeepMemo';
import formatCode from '../utils/formatCode';

const useFormattedCode = (code, options) => {
  return useDeepMemo(() => {
    try {
      return formatCode(code, options);
    } catch (e) {
      return code;
    }
  }, [code, options]);
};

export default useFormattedCode;
