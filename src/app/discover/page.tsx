import { Navigation } from '@/components/layout/navigation'
import { GumroadButton } from '@/components/shared/gumroad-button'
import { ParallaxCoin } from '@/components/shared/parallax-coin'

export default function DiscoverPage() {
  return (
    <div className="bg-gray min-h-screen">
      <Navigation />
      
      {/* Educational Disclaimer */}
      <div className="bg-yellow border-b-2 border-black p-4 text-center">
        <p className="text-black font-medium">
          📚 Educational Template: This is a Next.js & Tailwind CSS version of Gumroad&apos;s Ruby on Rails project built for learning purposes. 
          Not affiliated with or endorsed by Gumroad.
        </p>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gray min-h-screen">
        <header className="grid grid-cols-1 bg-gray">
          <div className="relative flex items-center justify-center bg-gray px-8 py-40 lg:px-[8vw] md:py-[14rem] overflow-hidden">
            {/* Animated Parallax Coins */}
            <ParallaxCoin
              src="/images/about/coin-1.svg"
              alt="Floating coin 1"
              className="top-[10%] left-[5%] w-20 h-10 lg:w-32 lg:h-16"
              parallaxIntensity={0.03}
              scrollIntensity={-0.02}
            />
            <ParallaxCoin
              src="/images/about/coin-2.svg"
              alt="Floating coin 2"
              className="top-[20%] right-[8%] w-16 h-16 lg:w-20 lg:h-20"
              parallaxIntensity={0.05}
              scrollIntensity={-0.03}
            />
            <ParallaxCoin
              src="/images/about/coin-3.svg"
              alt="Floating coin 3"
              className="top-[40%] left-[8%] w-20 h-10 lg:w-28 lg:h-14"
              parallaxIntensity={0.04}
              scrollIntensity={-0.025}
            />
            <ParallaxCoin
              src="/images/about/coin-4.svg"
              alt="Floating coin 4"
              className="top-[60%] right-[10%] w-18 h-18 lg:w-24 lg:h-24"
              parallaxIntensity={0.02}
              scrollIntensity={-0.015}
            />
            <ParallaxCoin
              src="/images/about/coin-5.svg"
              alt="Floating coin 5"
              className="bottom-[20%] left-[12%] w-24 h-12 lg:w-32 lg:h-16"
              parallaxIntensity={0.06}
              scrollIntensity={-0.035}
            />

            <div className="flex flex-col max-w-screen-lg items-center gap-6 text-center z-10">
              <h1 className="leading-none text-6xl md:text-7xl lg:text-8xl">
                Educational<br className="sm:hidden" /> <span className="whitespace-nowrap">Template</span>
              </h1>
              <div className="text-xl max-w-md lg:text-2xl lg:max-w-3xl">
                This is a Next.js & Tailwind CSS recreation of Gumroad&apos;s Ruby on Rails project. 
                Built for learning modern web development techniques and design patterns.
              </div>
            
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[384px] sm:max-w-none sm:w-auto mx-auto">
                <div className="w-full sm:w-auto">
                  <GumroadButton 
                    href="https://github.com/antiwork/gumroad"
                    variant="dark" 
                    size="lg"
                    className="text-xl px-8"
                  >
                    View Source Code
                  </GumroadButton>
                </div>
                <form action="/features" method="get" className="relative w-full sm:w-auto">
                  <label htmlFor="features-search" className="sr-only">Explore features</label>
                  <input
                    id="features-search"
                    type="text"
                    name="query"
                    placeholder="Explore features ..."
                    className="bg-gray px-8 pr-20 mr-8 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black/60 w-full sm:w-64 text-xl h-14 lg:h-16 border border-dark-gray"
                  />
                  <button
                    type="submit"
                    aria-label="Search"
                    className="bg-white p-2 rounded-md absolute mr-3 right-0 top-1/2 -translate-y-[50%] border border-dark-gray"
                  >
                    <svg className="w-6 h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>

              <div className="text-base">
                <p className="text-dark-gray/50">
                  Contribute or fork on <a href="https://github.com/antiwork/gumroad" target="_blank" rel="noopener noreferrer" className="underline hover:text-black inline-flex items-center gap-1 ml-1">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
      </section>
    </div>
  )
}