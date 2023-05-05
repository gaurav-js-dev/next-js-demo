import dynamic from 'next/dynamic';

import styles from './index.module.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Cannot find module
const BuyButton = dynamic<{ children: string; onClick: () => void }>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Cannot find module
  async () => import('checkout/buy-button'),
  {
    ssr: false,
  }
);

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>
      <BuyButton onClick={() => alert('Hello, Module Federation!')}>
        Add to Cart
      </BuyButton>
    </div>
  );
}
