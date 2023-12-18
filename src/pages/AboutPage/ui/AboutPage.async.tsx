import { lazy } from 'react';

const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error
      setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
    })
);

export default AboutPageAsync;
