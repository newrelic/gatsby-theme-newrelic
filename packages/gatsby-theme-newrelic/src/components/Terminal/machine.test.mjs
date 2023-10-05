import Prism from 'prismjs';
import { interpret } from 'xstate';

import machine from '../Terminal/machine.mjs';
import normalizeTokens from './normalizeTokens.mjs';
import translateLines from './utils/translateLines.mjs';

test('state machine advances one line at a time and completes', () => {
  const onTransition = jest.fn();
  const text = `const obj = {
  someProperty: 'someValue',
  anotherProperty: 42
}`;
  const tokens = Prism.tokenize(text, Prism.languages.js);
  const normalizedTokens = normalizeTokens(tokens);
  const lines = translateLines(normalizedTokens, text);

  const terminalService = interpret(
    machine.withContext({
      lines,
      lineNumber: 0,
    })
  )
    .onTransition(onTransition)
    .start();
  terminalService.send('INIT');
  terminalService.send('BEGIN_TYPING');
  terminalService.send('PRESS_ENTER');
  terminalService.send('PRESS_ENTER');
  terminalService.send('PRESS_ENTER');
  terminalService.send('PRESS_ENTER');
  const snapshot = terminalService.getSnapshot();

  expect(snapshot.done).toBe(true);
  expect(onTransition).toHaveBeenCalledTimes(7);
});
