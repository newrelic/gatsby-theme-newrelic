global.___loader = {
  enqueue: jest.fn(),
};

// Polyfill Web Crypto API for jsdom test environments that don't expose it globally
if (typeof crypto === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nodeCrypto = require('crypto');
  global.crypto = {
    randomUUID: () => nodeCrypto.randomUUID(),
    getRandomValues: (buffer) => {
      nodeCrypto.randomFillSync(buffer);
      return buffer;
    },
  };
}
