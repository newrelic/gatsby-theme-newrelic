import useDeepMemo from './useDeepMemo';
import formatCode from '../utils/formatCode';

const useFormattedCode = (code, options) => {
  return useDeepMemo(() => {
    try {
      return options.disable ? code.trim() : formatCode(code, options).trim();
    } catch (e) {
      return code.trim();
    }
  }, [code, options]);
};

export default useFormattedCode;
