import { Navigation } from '@/components/layout/navigation'
import { GumroadButton } from '@/components/shared/gumroad-button'
import Image from 'next/image'

export default function PricingPage() {
  return (
    <div className="bg-gray min-h-screen">
      <Navigation />
      
      {/* Hero Section - Matching Gumroad's _header.html.erb exactly */}
      <header className="relative flex flex-col items-center justify-center h-auto border-b border-black bg-orange text-center gap-20 px-8 pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-28 lg:pb-36">
        <div className="flex flex-col max-w-screen-sm gap-8 lg:gap-10 lg:max-w-screen-md">
          <div className="text-xl md:text-2xl">Pricing</div>
          <h1 className="text-5xl font-medium md:text-6xl leading-tight lg:text-8xl">Simple, transparent pricing</h1>
          <div className="text-xl md:text-2xl">We believe in transparent pricing that helps you grow. No hidden fees, no monthly charges.</div>
        </div>

        {/* Decorative Pricing Coins - Matching Gumroad's exact positioning */}
        <div className="pointer-events-none absolute inset-0 overflow-visible parallax-up">
          <div className="absolute -left-8 top-48 z-[1] w-28 lg:left-auto lg:right-[10vw] lg:top-80">
            <Image src="/images/pricing/pricing-coin-4.svg" alt="Decorative pricing coin 4" width={110} height={55} />
          </div>
          <div className="absolute right-0 top-24 z-[1] w-48 lg:-right-8 lg:-bottom-16 lg:top-auto">
            <Image src="/images/pricing/pricing-coin-5.svg" alt="Decorative pricing coin 5" width={192} height={96} />
          </div>
          <div className="absolute -bottom-56 sm:-bottom-48 left-1/2 z-[1] w-24 -translate-x-1/2 md:-bottom-64 md:w-36 lg:-bottom-96 lg:w-44">
            <Image src="/images/pricing/pricing-coin-6.svg" alt="Decorative pricing coin 6" width={176} height={88} className="h-auto w-full" />
          </div>
          <div className="invisible absolute left-[10vw] top-56 z-[1] w-56 overflow-visible lg:visible">
            <Image src="/images/pricing/pricing-coin-2.svg" alt="Decorative pricing coin 2" width={224} height={112} />
          </div>
          <div className="invisible absolute -left-4 top-56 z-[1] w-32 overflow-hidden lg:visible">
            <Image src="/images/pricing/pricing-coin-1.svg" alt="Decorative pricing coin 1" width={128} height={64} />
          </div>
          <div className="invisible absolute -bottom-24 -left-8 z-[1] w-56 overflow-hidden lg:visible">
            <Image src="/images/pricing/pricing-coin-3.svg" alt="Decorative pricing coin 3" width={224} height={112} />
          </div>
        </div>
      </header>

      {/* Pricing Cards Section - Matching Gumroad's exact structure */}
      <div className="flex flex-col border-b border-black overflow-hidden lg:flex-row">
        <div className="bg-purple flex items-center justify-center text-center lg:w-1/2 px-4 py-16 md:p-24 xl:p-32 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-xl space-y-12 md:space-y-8">
            <div className="space-y-8">
              <h3 className="font-medium text-5xl lg:text-6xl">
                10% + $0.50
              </h3>
              <p className="text-xl lg:text-2xl">
                Per transaction for all sales through your profile or direct links to your customers.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-green flex items-center justify-center text-center lg:w-1/2 px-4 py-16 md:p-16 xl:p-32">
          <div className="max-w-xl space-y-12 md:space-y-8">
            <div className="space-y-8">
              <h3 className="font-medium text-5xl lg:text-6xl">
                30%
              </h3>
              <p className="text-xl lg:text-2xl">
                Per transaction when new customers find and buy from you through our discover marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Management Section - Matching Gumroad's _section_header.html.erb */}
      <div className="px-8 pb-24 pt-20 md:px-12 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-7 text-left md:items-center md:text-center">
            <div className="text-lg font-medium lg:text-xl">Tax management</div>
            <h2 className="text-5xl font-medium md:text-6xl lg:text-7xl xl:text-8xl">We&apos;re a Merchant <br /> of Record</h2>
            <div className="max-w-3xl text-lg md:text-2xl lg:leading-10 xl:text-3xl">Since January 1, 2025, Gumroad handles ALL your tax obligations. Yes, you read that right – we manage sales tax collection and remittance worldwide.</div>
          </div>
        </div>
      </div>

      <div className="border-b border-black"></div>

      {/* Tax Management Two-Column - Matching Gumroad exactly */}
      <div className="flex flex-col border-b border-black overflow-hidden lg:flex-row">
        <div className="bg-pink h-auto lg:w-1/2 lg:border-r border-b lg:border-b-0">
          <div className="relative">
            <Image
              src="/images/features/features-4.svg"
              alt="Illustration showing payment integrations"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="bg-black text-white py-16 px-8 flex items-center justify-center sm:p-12 md:p-16 lg:w-1/2 xl:p-24">
          <div className="max-w-2xl space-y-12 md:space-y-8">
            <div className="space-y-4">
              <h3 className="font-medium text-3xl lg:text-4xl xl:text-5xl text-purple">
                What this means for you
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Build your creative business with confidence. We&apos;re taking care of all tax complexity worldwide, so you can focus on what you do best: creating.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 pl-0 text-lg md:grid-cols-2">
              <li className="flex items-center">
                <span className="mr-2">→</span>
                No more tax headaches - we handle everything
              </li>
              <li className="flex items-center">
                <span className="mr-2">→</span>
                Simplified global selling - we manage international tax compliance
              </li>
              <li className="flex items-center">
                <span className="mr-2">→</span>
                More time for creating - less time dealing with paperwork
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section Header - Matching Gumroad */}
      <div className="mx-auto my-16 max-w-6xl px-8 md:my-24 md:px-28 md:text-center lg:my-32">
        <h2 className="text-5xl font-medium md:text-6xl lg:text-7xl">
          Frequently asked questions
        </h2>
      </div>

      {/* FAQ Items - Matching Gumroad's accordion structure */}
      <div className="mx-auto mb-16 px-8 md:px-28">
        <FAQItem
          question="What can I sell on Gumroad?"
          answer="Digital products, e-books, courses, tutorials, and memberships—almost anything! Creators in just about every industry use (and love) Gumroad, from digital artists, writers, musicians and other creative-types to business-minded entrepreneurs and tech gurus like our SaaS creators. A better question is, &quot;What can&apos;t I sell on Gumroad?&quot;"
        />
        <FAQItem
          question="What can't I sell on Gumroad?"
          answer="Outside of physical goods, things like illegal or illicit goods or services, securities & financial instruments, credit repair, gambling & lotteries, harassment & extremist content, copyright infringement & piracy, or obscene or adult content are not permitted on Gumroad."
        />
        <FAQItem
          question="How do I get paid?"
          answer="Gumroad&apos;s goal is to help creators make a living doing what they love, so we make it as simple as possible to get paid. How we pay creators, whether through direct deposit or PayPal, varies by country."
        />
        <FAQItem
          question="What are the fees?"
          answer="Unlike other platforms, Gumroad doesn&apos;t charge you a monthly fee. Instead, our fees are deducted as a small percentage of every sale, so we only make money when you do."
        />
        <FAQItem
          question="Can I use Gumroad for memberships?"
          answer="Yes!<br><br>Whether it&apos;s for a podcast, online course, or SaaS subscriptions, Gumroad makes it easy to manage memberships."
        />
        <FAQItem
          question="What's changing with taxes?"
          answer="We&apos;re becoming your merchant of record, which means Gumroad will automatically handle all sales tax collection and remittance worldwide. You won&apos;t need to manage any tax settings or applications - we&apos;ll take care of everything."
        />
        <FAQItem
          question="What do I need to do to prepare for this change?"
          answer="Nothing! The transition will happen automatically on January 1, 2025. Our updated Terms of Service will reflect these changes. You can continue selling as usual."
        />
        <FAQItem
          question="What about international sales?"
          answer="We&apos;ll handle all tax obligations for your global sales automatically. You don&apos;t need to worry about VAT, GST, or any other international tax requirements."
        />
        <FAQItem
          question="What happens to my tax collection settings?"
          answer="All tax settings will be automatically disabled in your dashboard. This includes both the state tax settings in your creator profile and any product-specific tax settings. You won&apos;t need to manage these anymore since we&apos;ll handle all tax collection automatically."
        />
        <FAQItem
          question="Will Gumroad collect taxes everywhere?"
          answer="We&apos;ll collect taxes in regions where we have tax obligations as a merchant of record. This varies by location, and we&apos;ll automatically handle the appropriate tax collection for each sale."
        />
      </div>

      {/* Call to Action Section - Matching Gumroad's _section_cta.html.erb */}
      <div className="flex flex-col items-center justify-center text-center border-t border-black bg-pink gap-8 px-8 py-16 lg:px-[4vw] lg:py-24 lg:gap-16">
        <h2 className="text-4xl font-medium sm:text-5xl lg:text-7xl">
          Share your work. <br /> Someone out there needs it.
        </h2>
        <GumroadButton
          href="/register"
          variant="light"
        >
          Start selling
        </GumroadButton>
      </div>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div className="flex justify-between items-center py-6 sm:py-12 md:py-16 border-t border-black cursor-pointer" data-accordion-trigger>
          <div className="flex items-center w-full gap-[4vw] md:gap-[12vw]">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 32 32">
                <line x1="8" y1="16" x2="24" y2="16" stroke="black" strokeWidth="2"/>
                <line x1="16" y1="8" x2="16" y2="24" stroke="black" strokeWidth="2" className="transition-transform duration-300"/>
              </svg>
            </div>
            <h3 className="text-2xl md:text-4xl font-medium">{question}</h3>
          </div>
        </div>
        <div className="overflow-hidden transition-all duration-300 max-h-0" data-accordion-content>
          <div className="pl-[calc(3rem+4vw)] md:pl-[calc(3rem+12vw)] pb-16">
            <p className="text-xl md:text-2xl max-w-6xl" dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      </div>
    </div>
  )
}