import { Navigation } from '@/components/layout/navigation'
import { GumroadButton } from '@/components/shared/gumroad-button'
import Image from 'next/image'

export default function FeaturesPage() {
  return (
    <div className="bg-gray min-h-screen">
      <Navigation />
      
      {/* Hero Section - Matching Gumroad's _header.html.erb exactly */}
      <header className="relative flex flex-col items-center justify-center h-auto border-b border-black bg-yellow text-center gap-20 px-8 pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-28 lg:pb-36">
        <div className="flex flex-col max-w-screen-sm gap-8 lg:gap-10 lg:max-w-screen-md">
          <div className="text-xl md:text-2xl">Product features</div>
          <h1 className="text-5xl font-medium md:text-6xl lg:text-8xl">Built for new beginnings</h1>
          <div className="text-xl md:text-2xl">Gumroad is a powerful, but simple, e-commerce platform that puts a wide selection of tools at your fingertips. Now you can sell the digital services you want—books, memberships, courses, and more—right to your audience.</div>
        </div>

        {/* Workflow Circle - Exactly matching Gumroad's structure */}
        <div className="override hidden relative mx-auto h-96 w-full max-w-6xl overflow-hidden border-y border-black bg-pink p-8 rounded-full border lg:block">
          <div className="relative z-10 flex h-full flex-col justify-between border border-black bg-pink rounded-full px-8">
            <div className="-mt-3 justify-between px-32 flex">
              <div className="flex h-6 items-center bg-pink pr-6 gap-x-3">
                <img src="/images/features/arrowhead-right.svg" alt="" className="h-6 w-6 -translate-x-3 -translate-y-px" />
                <div className="text-xl xl:text-2xl">Open Account</div>
              </div>
              <div className="flex h-6 items-center bg-pink pr-6 gap-x-3">
                <img src="/images/features/arrowhead-right.svg" alt="" className="h-6 w-6 -translate-x-3 -translate-y-px" />
                <div className="text-xl xl:text-2xl">Add Product</div>
              </div>
              <div className="flex h-6 items-center bg-pink pr-6 gap-x-3">
                <img src="/images/features/arrowhead-right.svg" alt="" className="h-6 w-6 -translate-x-3 -translate-y-px" />
                <div className="text-xl xl:text-2xl">Start Selling</div>
              </div>
            </div>
            <div className="flex justify-around space-x-4">
              <img src="/images/features/drawing-and-painting.svg" alt="" className="w-auto h-auto" />
              <img src="/images/features/design-and-tech.svg" alt="" className="w-auto h-auto" />
              <img src="/images/features/books-and-writing.svg" alt="" className="w-auto h-auto" />
              <img src="/images/features/games.svg" alt="" className="w-auto h-auto" />
            </div>
            <div className="-mb-3 justify-between px-32 flex">
              <div className="flex h-6 items-center bg-pink pl-6 gap-x-3">
                <div className="text-xl xl:text-2xl">Repeat</div>
                <img src="/images/features/arrowhead-right.svg" alt="" className="h-6 w-6 translate-x-3 translate-y-px" style={{transform: 'rotate(180deg)'}} />
              </div>
              <div className="flex h-6 items-center bg-pink pl-6 gap-x-3">
                <div className="text-xl xl:text-2xl">Get paid</div>
                <img src="/images/features/arrowhead-right.svg" alt="" className="h-6 w-6 translate-x-3  translate-y-px rotate-180" />
              </div>
            </div>
          </div>
        </div>
        {/* Floating Receipt Illustrations - Matching Gumroad exactly */}
        <div className="pointer-events-none absolute inset-0 overflow-visible z-10">
          <Image
            src="/images/features/feature-receipt-1.svg"
            alt="Feature receipt illustration 1"
            className="absolute -left-16 top-0 h-32 w-32 lg:left-24 lg:top-32 lg:h-56 lg:w-56"
          />
          <Image
            src="/images/features/feature-receipt-2.svg"
            alt="Feature receipt illustration 2"
            className="override hidden absolute top-1/2 -left-12 h-56 w-56 lg:block"
          />
          <Image
            src="/images/features/feature-receipt-3.svg"
            alt="Feature receipt illustration 3"
            className="absolute -left-24 bottom-0 h-32 w-32 lg:left-20 lg:-bottom-24 lg:h-56 lg:w-56"
          />
          <Image
            src="/images/features/feature-receipt-11.svg"
            alt="Feature receipt illustration 1"
            className="absolute -right-24 bottom-0 h-32 w-32 lg:right-64 lg:-bottom-24 lg:h-48 lg:w-48"
          />
          <Image
            src="/images/features/feature-receipt-5.svg"
            alt="Feature receipt illustration 5"
            className="override hidden absolute top-1/2 right-16 h-48 w-48 lg:block"
          />
          <Image
            src="/images/features/feature-receipt-4.svg"
            alt="Feature receipt illustration 4"
            className="absolute -right-20 top-0 h-32 w-32 lg:right-32 lg:top-32 lg:h-48 lg:w-48"
          />
        </div>
      </header>

      {/* Customizable Options Section - Matching Gumroad's _section_header.html.erb */}
      <div className="px-8 pb-24 pt-20 md:px-12 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-7 text-left md:items-center md:text-center">
            <div className="text-lg font-medium lg:text-xl">Customizable Options</div>
            <h2 className="text-5xl font-medium md:text-6xl lg:text-7xl xl:text-8xl">Your store, your way</h2>
            <div className="max-w-3xl text-lg md:text-2xl lg:leading-10 xl:text-3xl">Gumroad plays well with others. Set up your store on our <br className="hidden override md:inline" />platform, or easily embed it on your existing site.</div>
          </div>
        </div>
      </div>

      {/* Split Layout - Store Customization */}
      <div className="flex flex-col overflow-hidden border-y border-black lg:flex-row">
        <div className="flex items-center justify-center border-b border-black bg-orange p-8 py-16 sm:p-12 md:p-16 lg:order-2 lg:w-1/2 lg:border-b-0 lg:border-l xl:p-32">
          <div className="relative">
            <img src="/images/features/home-feature-4.svg" alt="Illustration showing customizable store options" className="h-auto w-full" data-parallax />
            <img src="/images/features/thumbsup.svg" alt="Thumbs up icon" className="absolute -bottom-28 -left-10 w-24 transform-gpu md:-bottom-24 md:-left-32 md:w-44" data-parallax />
          </div>
        </div>
        <div className="flex items-center justify-center bg-black p-8 py-16 text-white sm:p-12 md:p-16 lg:w-1/2 xl:p-32">
          <div className="max-w-2xl space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Create a home here
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                No site? No problem. Use our flexible page editor to build a storefront and customize your site&apos;s colors, and more.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Use your own website, too
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Already have a site? Link it to ours under a custom domain.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Power-up your page
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                You can easily embed our payment platform and &apos;follow&apos; button on your existing site.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Carousel - Matching Gumroad's exact carousel structure */}
      <div className="relative overflow-hidden" data-carousel>
        <div className="flex transition-transform duration-300 ease-in-out" data-carousel-slides>
          <div className="flex w-full flex-none">
            <div className="flex w-full flex-none">
              <div className="relative w-full overflow-hidden border-t border-black">
                <div className="flex bg-yellow">
                  <div className="relative max-w-lg p-8 py-16 sm:p-12 md:p-16 lg:max-w-3xl lg:p-24">
                    {/* Decorative floating sticker */}
                    <img src="/images/features/easy.svg" alt="Easy sticker with handwritten text" className="absolute -top-8 -right-8 w-20 transform-gpu md:-top-12 md:-right-12 md:w-28" data-parallax />
                    <div className="space-y-8 lg:space-y-16">
                      <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                        &ldquo;I like to move fast and break shit. Gumroad allows me to quickly experiment with new ideas, without the headache of managing a complicated store.&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <Image src="/images/creators/user1-full.png" alt="Nick Greenawalt" className="w-16 h-16 rounded-full" />
                        <div>
                          <div className="text-xl font-semibold">Nick Greenawalt</div>
                          <div className="text-lg">Sells motion design tutorials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden items-center justify-center bg-yellow p-8 py-16 sm:p-12 md:p-16 lg:flex lg:w-1/2 xl:p-32">
                    <div className="relative">
                      <Image src="/images/creators/user1-full.png" alt="Nick Greenawalt" className="h-auto w-full max-w-sm" />
                      {/* Floating decorative element for visual accent */}
                      <img src="/images/features/price-tag.svg" alt="Decorative accent" className="absolute -bottom-16 -right-8 w-20 transform-gpu rotate-12" data-parallax />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex w-full flex-none">
            <div className="flex w-full flex-none">
              <div className="relative w-full overflow-hidden border-t border-black">
                <div className="flex bg-yellow">
                  <div className="relative max-w-lg p-8 py-16 sm:p-12 md:p-16 lg:max-w-3xl lg:p-24">
                    {/* Decorative price tag sticker */}
                    <img src="/images/features/price-tag.svg" alt="Decorative price tag sticker with handwritten text" className="absolute -bottom-6 -left-8 w-32 transform-gpu md:-bottom-8 md:-left-12 md:w-40" data-parallax />
                    <div className="space-y-8 lg:space-y-16">
                      <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                        &ldquo;Gumroad lets creators be creators. It handles payments, affiliates, discounts, etc, so that you can stick to what you know best.&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <Image src="/images/creators/steph-full.png" alt="Steph Smith" className="w-16 h-16 rounded-full" />
                        <div>
                          <div className="text-xl font-semibold">Steph Smith</div>
                          <div className="text-lg">Sells informational courses</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden items-center justify-center bg-yellow p-8 py-16 sm:p-12 md:p-16 lg:flex lg:w-1/2 xl:p-32">
                    <div className="relative">
                      <Image src="/images/creators/steph-full.png" alt="Steph Smith" className="h-auto w-full max-w-sm" />
                      {/* Floating decorative element for visual accent */}
                      <img src="/images/features/clapping.svg" alt="Decorative accent" className="absolute -top-8 -left-8 w-16 transform-gpu -rotate-12" data-parallax />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex w-full flex-none">
            <div className="flex w-full flex-none">
              <div className="relative w-full overflow-hidden border-t border-black">
                <div className="flex bg-yellow">
                  <div className="relative max-w-lg p-8 py-16 sm:p-12 md:p-16 lg:max-w-3xl lg:p-24">
                    {/* Decorative clapping hands sticker */}
                    <img src="/images/features/clapping.svg" alt="Decorative clapping hands sticker celebrating success" className="absolute -top-6 -right-6 w-24 transform-gpu md:-top-10 md:-right-10 md:w-32" data-parallax />
                    <div className="space-y-8 lg:space-y-16">
                      <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                        &ldquo;I love Gumroad because it can&apos;t be any simpler. I upload a file, set a price, and I can start selling on the internet. The money I make from my sales lands directly in my bank account every Friday.&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <Image src="/images/creators/daniel-full.png" alt="Daniel Vassallo" className="w-16 h-16 rounded-full" />
                        <div>
                          <div className="text-xl font-semibold">Daniel Vassallo</div>
                          <div className="text-lg">Sells entrepreneurial courses and kitchen tools</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden items-center justify-center bg-yellow p-8 py-16 sm:p-12 md:p-16 lg:flex lg:w-1/2 xl:p-32">
                    <div className="relative">
                      <Image src="/images/creators/daniel-full.png" alt="Daniel Vassallo" className="h-auto w-full max-w-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex w-full flex-none">
            <div className="flex w-full flex-none">
              <div className="relative w-full overflow-hidden border-t border-black">
                <div className="flex bg-yellow">
                  <div className="relative max-w-lg p-8 py-16 sm:p-12 md:p-16 lg:max-w-3xl lg:p-24">
                    {/* Decorative easy sticker for fourth testimonial */}
                    <img src="/images/features/easy.svg" alt="Easy sticker with handwritten text" className="absolute -bottom-8 -left-8 w-24 transform-gpu md:-bottom-12 md:-left-12 md:w-32 rotate-12" data-parallax />
                    <div className="space-y-8 lg:space-y-16">
                      <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                        &ldquo;Gumroad has been a key driver of my journey to build a community around my product. It makes it much easier to sell digital products online and provides sellers with a lot of features.&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <Image src="/images/creators/user2-full.png" alt="Setu Choudhary" className="w-16 h-16 rounded-full" />
                        <div>
                          <div className="text-xl font-semibold">Setu Choudhary</div>
                          <div className="text-lg">Sells Cinema4D material packs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden items-center justify-center bg-yellow p-8 py-16 sm:p-12 md:p-16 lg:flex lg:w-1/2 xl:p-32">
                    <div className="relative">
                      <Image src="/images/creators/user2-full.png" alt="Setu Choudhary" className="h-auto w-full max-w-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 hidden override sm:block" data-carousel-prev>
          <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.47288 18.165C7.2307 13.2867 4.32451 10.3806 -0.000161092 9.99999L-0.000160928 8.13038C4.32451 7.74981 7.2307 4.87823 7.47288 -1.73273e-06L10.6904 0.691946C10.5174 2.45641 9.8947 4.01329 8.85678 5.43179C7.78426 6.81568 6.57334 7.58483 5.18944 8L27.293 8L27.293 10L5.18944 9.99999C6.57334 10.4152 7.78426 11.3147 8.85678 12.7332C9.8947 14.1517 10.5174 15.7086 10.6904 17.4384L7.47288 18.165Z" fill="currentColor"/>
          </svg>
        </button>
        
        <button className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 hidden override sm:block" data-carousel-next>
          <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
            <path d="M7.47288 18.165C7.2307 13.2867 4.32451 10.3806 -0.000161092 9.99999L-0.000160928 8.13038C4.32451 7.74981 7.2307 4.87823 7.47288 -1.73273e-06L10.6904 0.691946C10.5174 2.45641 9.8947 4.01329 8.85678 5.43179C7.78426 6.81568 6.57334 7.58483 5.18944 8L27.293 8L27.293 10L5.18944 9.99999C6.57334 10.4152 7.78426 11.3147 8.85678 12.7332C9.8947 14.1517 10.5174 15.7086 10.6904 17.4384L7.47288 18.165Z" fill="currentColor"/>
          </svg>
        </button>
        
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button className="h-4 w-4 rounded-full border border-black border-solid bg-black override" data-carousel-indicator data-slide="0"></button>
          <button className="h-4 w-4 rounded-full border border-black border-solid" data-carousel-indicator data-slide="1"></button>
          <button className="h-4 w-4 rounded-full border border-black border-solid" data-carousel-indicator data-slide="2"></button>
          <button className="h-4 w-4 rounded-full border border-black border-solid" data-carousel-indicator data-slide="3"></button>
        </div>
      </div>

      {/* Payment Integrations Section - Matching Gumroad's _section_header.html.erb */}
      <div className="px-8 pb-24 pt-20 md:px-12 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-7 text-left md:items-center md:text-center">
            <div className="text-lg font-medium lg:text-xl">Payment Integrations</div>
            <h2 className="text-5xl font-medium md:text-6xl lg:text-7xl xl:text-8xl">Money, incoming</h2>
            <div className="max-w-3xl text-lg md:text-2xl lg:leading-10 xl:text-3xl">Once you get set up, it&apos;s easy to ring the register.<br className="hidden override md:inline" /> Here&apos;s how you can sell and get paid, fast.</div>
          </div>
        </div>
      </div>

      {/* Payment Features - Split Layout 1 */}
      <div className="flex flex-col overflow-hidden border-t border-black lg:flex-row">
        <div className="flex items-center justify-center border-b border-black bg-purple p-8 py-16 sm:p-12 md:p-16 lg:w-1/2 lg:border-b-0 lg:border-r xl:p-32">
          <div className="relative max-w-xl">
            <img src="/images/features/features-3.svg" alt="Illustration showing payment integrations" className="h-auto w-full" data-parallax />
          </div>
        </div>
        <div className="flex items-center justify-center bg-black p-8 py-16 text-white sm:p-12 md:p-16 lg:w-1/2 xl:p-32">
          <div className="max-w-2xl space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                Create simple memberships
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Give customers access to a library of content for as long as they&apos;re subscribed.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                Set up subscriptions
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Let customers pay over time—monthly, quarterly, biannually, yearly, and more.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                The sky&apos;s the limit
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Give your audience the chance to pay what they want for your product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Features - Split Layout 2 */}
      <div className="flex flex-col overflow-hidden border-t border-black lg:flex-row">
        <div className="flex items-center justify-center border-b border-black bg-purple lg:order-2 lg:w-1/2 lg:border-b-0 lg:border-l">
          <div className="relative">
            <img src="/images/features/features-4.svg" alt="Illustration showing payment integrations" className="h-auto w-full" data-parallax />
          </div>
        </div>
        <div className="flex items-center justify-center bg-black p-8 py-16 text-white sm:p-12 md:p-16 lg:w-1/2 xl:p-32">
          <div className="max-w-2xl space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                Say ¥£$ to different currencies
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Increase your sales opportunities by accepting payments from a global audience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                Don&apos;t sweat VAT
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                We collect VAT as required and send it to the EU. You don&apos;t need to do a thing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* License Keys & DRM Section */}
      <div className="flex flex-col overflow-hidden border-y border-black lg:flex-row-reverse">
        <div className="flex items-center justify-center border-b border-black bg-purple p-8 py-16 sm:p-12 md:p-16 lg:order-2 lg:w-1/2 lg:border-b-0 lg:border-r xl:p-32">
          <div className="relative max-w-xl">
            <img src="/images/features/features-5.svg" alt="Illustration showing license keys" className="h-auto w-full" data-parallax />
          </div>
        </div>
        <div className="flex items-center justify-center bg-black p-8 py-16 text-white sm:p-12 md:p-16 lg:w-1/2 xl:p-32">
          <div className="max-w-2xl space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                Generate license keys
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Selling software? We can create your license keys, so you can get back to beta.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                Sell multiple versions
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Allow buyers to pick from PDF, ePub, and Mobi. Even charge more for lossless audio.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-purple lg:text-4xl xl:text-5xl">
                Protect your work
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                We can create lightweight DRM to help keep customers honest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Platform Section - Matching Gumroad's _section_header.html.erb */}
      <div className="px-8 pb-24 pt-20 md:px-12 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-7 text-left md:items-center md:text-center">
            <div className="text-lg font-medium lg:text-xl">Comprehensive Platform</div>
            <h2 className="text-5xl font-medium md:text-6xl lg:text-7xl xl:text-8xl">From start to finesse</h2>
            <div className="max-w-3xl text-lg md:text-2xl lg:leading-10 xl:text-3xl">We&apos;ve spent years building an end-to-end platform <br className="hidden override md:inline" />so you can start selling in seconds.</div>
          </div>
        </div>
      </div>

      {/* Platform Features - Split Layout 1 */}
      <div className="flex flex-col overflow-hidden border-t border-black lg:flex-row">
        <div className="flex items-center justify-center border-b border-black bg-orange p-8 py-16 sm:p-12 md:p-16 lg:w-1/2 lg:border-b-0 lg:border-r xl:p-32">
          <div className="relative">
            <img src="/images/features/features-6.svg" alt="Illustration showing various creator tools and features" className="h-auto w-full" data-parallax />
            <img src="/images/features/easy.svg" alt="Easy sticker with handwritten text" className="absolute -right-10 -top-10 w-32 transform-gpu parallax-coins md:w-36" data-parallax />
            <img src="/images/features/price-tag.svg" alt="Decorative price tag sticker with handwritten text" className="absolute -bottom-10 -left-10 w-40 transform-gpu parallax-coins md:w-48" data-parallax />
          </div>
        </div>
        
        <div className="flex items-center justify-center bg-black p-8 py-16 text-white sm:p-12 md:p-16 lg:w-1/2 xl:p-32">
          <div className="max-w-2xl space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Tools to get going fast
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Create a profit-making machine in no time with our flexible page editor or easily embed a &apos;Follow&apos; button onto your existing site.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Sell anything
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                We don&apos;t limit your ideas. Whether it&apos;s a digital download, eBook, course, or monthly membership, we make sure it checks out.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Bring your friends
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Already have fans? Easily import your existing email list—and export your followers and customers at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics & Growth Section */}
      <div className="flex flex-col overflow-hidden border-t border-black lg:flex-row">
        <div className="relative flex items-center justify-center bg-yellow lg:order-2 lg:w-1/2">
          <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" role="presentation" aria-hidden="true"></div>
          <div className="relative p-8 sm:p-12 md:p-16 xl:p-32">
            <div className="relative max-w-2xl">
              <img src="/images/features/sales-graph.svg" alt="Interactive graph showing sales analytics and growth metrics" className="h-auto w-full" data-parallax />
              <img src="/images/features/clapping.svg" alt="Decorative clapping hands sticker celebrating success" className="absolute -bottom-24 -right-8 w-32 transform-gpu sm:-bottom-20 sm:-right-20 sm:w-52 md:-bottom-24 md:-right-24 lg:-bottom-24 lg:-right-24" data-parallax />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center bg-black p-8 py-16 text-white sm:p-12 md:p-16 lg:w-1/2 xl:p-32">
          <div className="max-w-2xl space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Be ready when they are
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                All payments are secure and smooth, so your customers can read, listen, or watch their purchase immediately.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Make decisions with your data
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Dive deeper into your sales with analytics that can help you improve your products and messaging.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-orange lg:text-4xl xl:text-5xl">
                Grow your audience
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl">
                Post new updates, send email broadcasts, and use powerful automated workflows to connect and grow your audience.
              </p>
            </div>
          </div>
        </div>
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