import { useState, useCallback } from 'react';
import copyToClipboard from '../utils/copyToClipboard';
import useTimeout from './useTimeout';

const useClipboard = ({ duration = 1000 } = {}) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text) => {
    copyToClipboard(text);
    setCopied(true);
  }, []);

  useTimeout(() => setCopied(false), copied ? duration : null);

  return [copied, copy];
};

export default useClipboard;
