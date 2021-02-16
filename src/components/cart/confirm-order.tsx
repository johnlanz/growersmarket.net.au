import { useCart } from '@lib/hooks/use-cart';
import { useCheckoutUrl } from '@lib/hooks/use-checkout-url';
import Link from 'next/link';

import { ProductSummary } from './product-summary';

function ConfirmOrder({ authUser }): React.ReactElement {
  const checkout = useCheckoutUrl();
  const cart = useCart();
  return (
    <>
      <h2 className="mt-8 text-xl font-bold text-green-dark">
        {authUser.firebaseUser.displayName}&rsquo;s Order Details
      </h2>

      <dl className="mt-4 space-y-4">
        <div>
          <dt className="inline font-bold">Delivery or Pick Up? </dt>
          <dd className="inline">Delivery</dd>
        </div>
        <div>
          <dt className="inline font-bold">Delivering Zone: </dt>
          <dd className="inline">Wauchope</dd>
        </div>
        <div>
          <dt className="inline font-bold">Delivery Date: </dt>
          <dd className="inline">Friday, 15th March</dd>
        </div>
      </dl>
      <h2 className="mt-16 text-xl font-bold text-green-dark">
        Your Shopping Cart
      </h2>
      <ProductSummary />
      <h2 className="mt-16 text-xl font-bold text-green-dark">Total Costs</h2>
      <dl className="grid mt-16 gap-y-2">
        <div className="flex justify-between">
          <dt className="font-bold">Subtotal:</dt>
          <dd>${Number(cart?.totalPrice || 0).toFixed(2)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-bold">Shipping:</dt>
          <dd>Calculated at checkout</dd>
        </div>
      </dl>
      <div className="flex justify-between mt-16">
        <Link href="/">
          <a className="inline-flex items-center space-x-2 cta text-green-dark bg-yellow">
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 -ml-3"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Continue Shopping
          </a>
        </Link>

        <a
          href={checkout}
          className="inline-flex items-center space-x-2 cta text-green-dark bg-yellow"
        >
          Checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 -mr-3"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export { ConfirmOrder };