import type { Metadata } from 'next';
import { Pricing } from '@/components/marketing';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for teams of all sizes.',
};

export default function PricingPage() {
  return (
    <div className="py-10">
      <Pricing />
      <section className="container py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Can I try before I buy?</h3>
              <p className="text-muted-foreground">
                Yes! All paid plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect
                immediately.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">What happens if I exceed my limits?</h3>
              <p className="text-muted-foreground">
                We&apos;ll notify you when you&apos;re approaching your limits. You can either
                upgrade your plan or purchase additional capacity.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee. If you&apos;re not satisfied, contact
                us for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
