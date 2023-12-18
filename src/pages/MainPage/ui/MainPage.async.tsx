import { lazy } from 'react';

const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error
      setTimeout(() => { resolve(import('./MainPage')); }, 1500);
    })
);

export default MainPageAsync;
