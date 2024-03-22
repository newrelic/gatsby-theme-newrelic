import { mkdir, writeFile } from 'fs/promises';

if (process.env.BUILD_LANG !== 'en') {
  await mkdir('./public').catch(() => null);
  writeFile('./public/_redirects', '', 'utf-8');
  console.log('`BUILD_LANG` is not `en`, writting empty _redirects file');
  process.exit();
}

let redirectsAndRewrites = [
  `/* https://theme-rewrite-test-2.netlify.app/:splat  200!`,
];

await mkdir('./public').catch(() => null);
writeFile('./public/_redirects', redirectsAndRewrites, 'utf-8');
