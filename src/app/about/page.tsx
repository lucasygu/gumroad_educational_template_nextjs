import { Navigation } from '@/components/layout/navigation'
import { GumroadButton } from '@/components/shared/gumroad-button'
import { TestimonialCard } from '@/components/shared/testimonial-card'
import { ParallaxCoin } from '@/components/shared/parallax-coin'
import { GumheadAnimation } from '@/components/shared/gumhead-animation'
// Using direct Tailwind classes to match Gumroad exactly
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-gray min-h-screen">
      <Navigation />
      
      {/* Educational Disclaimer */}
      <div className="bg-yellow border-b-2 border-black p-4 text-center">
        <p className="text-black font-medium">
          📚 Educational Template: This is a Gumroad-inspired design built for learning purposes. 
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
                Go from<br className="sm:hidden" /> <span className="whitespace-nowrap">0 to $1</span>
              </h1>
              <div className="text-xl max-w-md lg:text-2xl lg:max-w-3xl">
                Anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It&apos;s that easy.
              </div>
            
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[384px] sm:max-w-none sm:w-auto mx-auto">
                <div className="w-full sm:w-auto">
                  <GumroadButton 
                    href="/register"
                    variant="dark" 
                    size="lg"
                    className="text-xl px-8"
                  >
                    Start selling
                  </GumroadButton>
                </div>
                <form action="/discover" method="get" className="relative w-full sm:w-auto">
                  <label htmlFor="marketplace-search" className="sr-only">Search marketplace</label>
                  <input
                    id="marketplace-search"
                    type="text"
                    name="query"
                    placeholder="Search marketplace ..."
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

      {/* Feature Cards Section */}
      <div className="flex flex-col bg-gray max-w-6xl mx-auto px-4 gap-8 md:-mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col md:relative bg-white border border-dark-gray/50 rounded-3xl p-8 lg:basis-2/3 h-auto md:h-[30rem]">
            <div className="order-1 md:order-none">
              <p className="text-4xl text-balance">
                Sell anything
              </p>
              <p className="text-lg md:absolute md:bottom-8 md:left-8 md:w-1/2 mt-4 md:mt-0">
                Video lessons, subscriptions, digital downloads, memberships, and physical products. If you can think it, you can sell it.
              </p>
            </div>
            <div className="w-[484px] order-2 md:order-none md:absolute md:top-[-4rem] md:right-[-0.5rem] mt-4 md:mt-0">
              <Image
                src="/images/about/ukulele.png"
                alt="Sell anything feature illustration"
                width={484}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col md:relative overflow-hidden bg-white border border-dark-gray/50 rounded-3xl p-8 lg:basis-1/3 h-auto md:h-[30rem]">
            <div className="order-1 md:order-none">
              <p className="text-4xl mb-4 text-balance">Make your own road</p>
              <p className="text-lg mb-4">
                Whether you need more balance, flexibility, or just a different gig, we make it easy to chart a new path.
              </p>
            </div>
            <div className="order-2 md:order-none md:absolute md:bottom-0 md:left-0 mt-8 md:mt-0">
              <Image
                src="/images/about/make-your-road.svg"
                alt="Make your own road feature illustration"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="overflow-hidden flex flex-col justify-between bg-white border border-dark-gray/50 rounded-3xl p-8 lg:basis-1/3 h-auto md:h-[30rem]">
            <p className="text-4xl mb-8 md:mb-0 text-balance">Sell to anyone</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="h-7 flex-none flex items-center justify-center">
                  <Image src="/icons/outline-check-circle-about.svg" alt="Check" width={24} height={24} className="w-5 h-5" />
                </div>
                <p className="text-lg text-balance">Go from 0 to $1 and automated workflows.</p>
              </div>
              <div className="flex gap-4">
                <div className="h-7 flex-none flex items-center justify-center">
                  <Image src="/icons/outline-check-circle-about.svg" alt="Check" width={24} height={24} className="w-5 h-5" />
                </div>
                <p className="text-lg text-balance">Let your customers pay in their own currency.</p>
              </div>
              <div className="flex gap-4">
                <div className="h-7 flex-none flex items-center justify-center">
                  <Image src="/icons/outline-check-circle-about.svg" alt="Check" width={24} height={24} className="w-5 h-5" />
                </div>
                <p className="text-lg text-balance">Choose between one-time, recurring, or fixed-length payments in your currency of choice.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:relative bg-white border border-dark-gray/50 rounded-3xl p-8 lg:basis-2/3 h-auto md:h-[30rem]">
            <div className="order-1 md:order-none">
              <p className="text-4xl text-balance">
                Sell anywhere
              </p>
              <p className="text-lg md:absolute md:bottom-8 md:left-8 md:w-[18rem] mt-4 md:mt-0">
                Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. Seamlessly connect your Gumroad account to thousands of apps in your current stack.
              </p>
            </div>
            <div className="w-[389px] order-2 md:order-none md:absolute md:top-[2rem] md:right-[-2rem] mt-8 md:mt-0">
              <Image
                src="/images/about/sell-anywhere.png"
                alt="Sell to anyone feature illustration"
                width={389}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-9">
          <div className="bg-white border border-dark-gray/50 rounded-3xl p-8 md:p-14 flex-1">
            <div className="flex flex-col md:relative">
              <div className="order-2 md:order-none">
                <Image
                  src="/images/about/side-project-1.svg"
                  alt="Side project 1"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-none md:absolute md:top-[-1rem] md:left-0 sm:md:left-[-2rem] bg-white rounded-2xl px-6 sm:px-8 py-4 border border-black mb-4 md:mb-0">
                <p className="text-xl font-medium m-0">Instead of building a company...</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-dark-gray/50 rounded-3xl p-8 flex-1">
            <div className="flex flex-col md:relative">
              <div className="order-2 md:order-none">
                <Image
                  src="/images/about/side-project-2.svg"
                  alt="Side project 2"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover mx-auto"
                />
              </div>
              <div className="order-1 md:order-none md:absolute md:bottom-1 bg-white rounded-2xl px-6 sm:px-6 py-4 border border-black mb-4 md:mb-0">
                <p className="text-xl font-medium m-0">...start selling a side project!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  <div className="relative bg-gray py-24 lg:py-32">
    <div className="px-8 lg:px-[4vw]">
      <div className="max-w-4xl mx-auto text-center text-4xl mb-20 lg:mb-24 lg:leading-tight lg:text-5xl">
        You know all those great ideas you have?
      </div>
    </div>
    <div className="relative max-w-6xl mx-auto mb-12 h-80 bg-orange p-8 border-y border-black lg:border lg:rounded-full">
      <div className="absolute w-56 h-56 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-20 lg:w-80 lg:h-80">
        <GumheadAnimation className="w-full h-full" />
      </div>
      <div className="relative flex h-full flex-col justify-between rounded-2xl border border-black bg-orange z-10 lg:px-8 lg:rounded-full">
        <div className="override hidden px-4 md:flex justify-between -mt-3 lg:px-40">
          <div className="flex h-6 items-center bg-orange pr-6 lg:gap-x-10">
            <Image src="/images/about/arrowhead-right.svg" alt="Right arrow" width={24} height={24} className="h-6 w-6 -translate-x-3" />
            <div className="lg:text-2xl">The Gumroad Way</div>
          </div>
          <div className="flex h-6 items-center bg-orange pr-6 lg:gap-x-10">
            <Image src="/images/about/arrowhead-right.svg" alt="Right arrow" width={24} height={24} className="h-6 w-6 -translate-x-3" />
            <div className="lg:text-2xl">Start Small</div>
          </div>
        </div>
        <div className="override hidden px-4 md:flex justify-between -mb-3 lg:flex lg:px-40">
          <div className="flex h-6 items-center bg-orange pl-6 lg:gap-x-10">
            <div className="lg:text-2xl">Get Better Together</div>
            <Image src="/images/about/arrowhead-right.svg" alt="Left arrow" width={24} height={24} className="h-6 w-6 translate-x-3 rotate-180" />
          </div>
          <div className="flex h-6 items-center bg-orange pl-6 lg:gap-x-10">
            <div className="lg:text-2xl">Learn Quickly</div>
            <Image src="/images/about/arrowhead-right.svg" alt="Left arrow" width={24} height={24} className="h-6 w-6 translate-x-3 rotate-180" />
          </div>
        </div>
        <div className="override flex h-6 items-center bg-orange absolute top-0 -ml-2 pr-3 -mt-3 left-1/2 -translate-x-1/2 lg:hidden">
          <Image src="/images/about/arrowhead-right.svg" alt="Right arrow" width={16} height={16} className="h-4 w-4 -translate-x-2 -translate-y-px" />
          <div className="whitespace-nowrap lg:text-2xl">The Gumroad Way</div>
        </div>
        <div className="override flex h-6 items-center bg-orange absolute right-0 pr-3 origin-center rotate-90 top-1/2 -translate-y-1/2 translate-x-1/2 lg:hidden">
          <Image src="/images/about/arrowhead-right.svg" alt="Right arrow" width={16} height={16} className="h-4 w-4 -translate-x-2 -translate-y-px" />
          <div className="whitespace-nowrap lg:text-2xl">Start Small</div>
        </div>
        <div className="override flex h-6 items-center bg-orange absolute bottom-0 -ml-2 pl-3 -mb-3 left-1/2 -translate-x-1/2 lg:hidden">
          <div className="whitespace-nowrap lg:text-2xl">Get Better Together</div>
          <Image src="/images/about/arrowhead-right.svg" alt="Left arrow" width={16} height={16} className="h-4 w-4 translate-x-2 translate-y-px rotate-180" />
        </div>
        <div className="override flex h-6 items-center bg-orange absolute left-0 pr-3 origin-center -rotate-90 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:hidden">
          <Image src="/images/about/arrowhead-right.svg" alt="Right arrow" width={16} height={16} className="h-4 w-4 -translate-x-2 -translate-y-px" />
          <div className="whitespace-nowrap lg:text-2xl">Learn Quickly</div>
        </div>
      </div>
    </div>
    <div className="max-w-4xl mx-auto text-center flex flex-col gap-4 px-8">
      <h2 className="text-4xl lg:text-5xl lg:leading-tight">
        We want you to try them, lots of them, and find out what works.
      </h2>
      <p className="text-xl max-w-2xl mx-auto">
        You don&apos;t have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.
      </p>
      <div className="w-full mt-4">
        <GumroadButton 
          href="/features"
          variant="dark" 
          size="lg"
          className="text-xl px-8"
        >
          Find out how
        </GumroadButton>
      </div>
    </div>
  </div>

  <div className="relative bg-gray w-full">
    <div className="flex flex-col justify-center gap-8 px-8 text-center py-20 md:items-center md:gap-16 md:pt-40">
      <h1 className="text-left md:text-center text-7xl sm:text-7xl md:text-9xl lg:text-9xl leading-tight font-medium">
        $3,129,297
      </h1>
      <div className="text-left md:text-center text-2xl md:text-3xl max-w-screen-sm">
        The amount of income earned by Gumroad digital entrepreneurs last week.
      </div>
    </div>
  </div>

  <div className="grid override grid-cols-1 lg:grid-cols-2 bg-gray max-w-6xl mx-auto px-4 gap-x-8 gap-y-12">
    <TestimonialCard
      quote="I launched MaxPacks as an experimental side gig; but within 2 years those Procreate brushes were earning more than my 6-figure salary in CG. Leaving in favor of Gumroad enabled me to explore other aspects of my art, develop new hobbies, and finally prioritize my personal life."
      avatarPath="/images/creators/max-full.png"
      name="Max Ulichney"
      description="Sells Procreate brush packs"
    />
    <TestimonialCard
      quote="For years, I had a goal to develop 'passive' income streams, but struggled to make that a reality. Last year, I started selling informational products on Gumroad and since then have made $10k+ per month building products that I love."
      avatarPath="/images/creators/steph-full.png"
      name="Steph Smith"
      description="Sells content tutorials"
    />
    <TestimonialCard
      quote="Originally, I took pre-orders for my Trend Reports on Gumroad. But I received... exactly $0. So I changed tactics: I made half of my report free, and the other half paid. Today, 99% of Trends.VC revenue is recurring in the form of annual and quarterly subscriptions."
      avatarPath="/images/creators/dru-full.png"
      name="trendsvc"
      description="Sells business insights and expertise"
    />
    <TestimonialCard
      quote="I love Gumroad because it can't be any simpler. I upload a file, set a price, and I can start selling on the internet. The money I make from my sales lands directly in my bank account every Friday."
      avatarPath="/images/creators/daniel-full.png"
      name="Daniel Vassallo"
      description="Sells business insights and expertise"
    />
  </div>

  <div className="flex flex-col gap-16 py-16 lg:py-64 lg:gap-24">
        <div className="flex flex-col justify-center px-6 lg:px-12 gap-6 mx-auto text-center max-w-5xl mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl">
            Unlimited possibilities
          </h2>
          <p className="text-xl md:text-2xl">
            Discover the best-selling products and creators on Gumroad-Style Template
          </p>
        </div>

        {/* Discovery Marquee - Exact Gumroad Implementation */}
        <div className="group flex flex-wrap gap-x-4 gap-y-6 justify-center" role="list">
          {/* Row 1 */}
          <div className="flex w-[200%] animate-none">
            {[
              { name: "blender", path: "3d", icon: "/images/discover/animation.svg" },
              { name: "meditation", path: "audio", icon: "/images/discover/audio.svg" },
              { name: "comic", path: "comics-and-graphic-novels", icon: "/images/discover/comics.svg" },
              { name: "notion template", path: "business-and-money", icon: "/images/discover/software.svg" },
              { name: "textures", path: "design", icon: "/images/discover/design.svg" },
              { name: "procreate", path: "drawing-and-painting", icon: "/images/discover/drawing.svg" },
              { name: "3d model", path: "3d", icon: "/images/discover/animation.svg" },
              { name: "hypnosis", path: "audio", icon: "/images/discover/audio.svg" },
              { name: "manga", path: "comics-and-graphic-novels", icon: "/images/discover/comics.svg" },
              { name: "investing", path: "business-and-money", icon: "/images/discover/software.svg" },
              { name: "mockup", path: "design", icon: "/images/discover/design.svg" },
              { name: "brushes", path: "drawing-and-painting", icon: "/images/discover/drawing.svg" },
              { name: "spark ar", path: "3d", icon: "/images/discover/animation.svg" },
              { name: "subliminal messages", path: "audio", icon: "/images/discover/audio.svg" },
              { name: "anime", path: "comics-and-graphic-novels", icon: "/images/discover/comics.svg" },
              { name: "instagram", path: "business-and-money", icon: "/images/discover/design.svg" },
              { name: "font", path: "design", icon: "/images/discover/design.svg" }
            ].concat([
              { name: "blender", path: "3d", icon: "/images/discover/animation.svg" },
              { name: "meditation", path: "audio", icon: "/images/discover/audio.svg" },
              { name: "comic", path: "comics-and-graphic-novels", icon: "/images/discover/comics.svg" },
              { name: "notion template", path: "business-and-money", icon: "/images/discover/software.svg" },
              { name: "textures", path: "design", icon: "/images/discover/design.svg" },
              { name: "procreate", path: "drawing-and-painting", icon: "/images/discover/drawing.svg" },
              { name: "3d model", path: "3d", icon: "/images/discover/animation.svg" },
              { name: "hypnosis", path: "audio", icon: "/images/discover/audio.svg" },
              { name: "manga", path: "comics-and-graphic-novels", icon: "/images/discover/comics.svg" },
              { name: "investing", path: "business-and-money", icon: "/images/discover/software.svg" },
              { name: "mockup", path: "design", icon: "/images/discover/design.svg" },
              { name: "brushes", path: "drawing-and-painting", icon: "/images/discover/drawing.svg" },
              { name: "spark ar", path: "3d", icon: "/images/discover/animation.svg" },
              { name: "subliminal messages", path: "audio", icon: "/images/discover/audio.svg" },
              { name: "anime", path: "comics-and-graphic-novels", icon: "/images/discover/comics.svg" },
              { name: "instagram", path: "business-and-money", icon: "/images/discover/design.svg" },
              { name: "font", path: "design", icon: "/images/discover/design.svg" }
            ]).map((tag, index) => (
              <div key={index} className="flex-shrink-0 mr-3 flex gap-3 justify-center items-center h-auto">
                <Image
                  src={tag.icon}
                  alt={`${tag.name} icon`}
                  width={48}
                  height={48}
                  className="w-12 h-auto md:w-20 flex-shrink-0"
                  loading="lazy"
                />
                <div className="px-4 py-2 bg-white rounded-full text-lg md:text-2xl font-medium text-black border border-gray-300 no-underline motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000000] transition-all whitespace-nowrap">
                  {tag.name}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-[200%] animate-none">
            {[
              { name: "art", path: "drawing-and-painting", icon: "/images/discover/drawing.svg" },
              { name: "after effects", path: "films", icon: "/images/discover/film.svg" },
              { name: "education", path: "education", icon: "/images/discover/education.svg" },
              { name: "fitness", path: "fitness-and-health", icon: "/images/discover/sports.svg" },
              { name: "sci-fi", path: "fiction-books", icon: "/images/discover/writing.svg" },
              { name: "vrchat", path: "gaming", icon: "/images/discover/games.svg" },
              { name: "ableton", path: "music-and-sound-design", icon: "/images/discover/music.svg" },
              { name: "certification exams", path: "education", icon: "/images/discover/education.svg" },
              { name: "vj loops", path: "films", icon: "/images/discover/film.svg" },
              { name: "workout program", path: "fitness-and-health", icon: "/images/discover/sports.svg" },
              { name: "poetry", path: "fiction-books", icon: "/images/discover/writing.svg" },
              { name: "avatar", path: "gaming", icon: "/images/discover/games.svg" },
              { name: "sample pack", path: "music-and-sound-design", icon: "/images/discover/music.svg" },
              { name: "learning", path: "education", icon: "/images/discover/education.svg" },
              { name: "luts", path: "films", icon: "/images/discover/film.svg" },
              { name: "yoga", path: "fitness-and-health", icon: "/images/discover/sports.svg" },
              { name: "fiction", path: "fiction-books", icon: "/images/discover/writing.svg" },
              { name: "assets", path: "gaming", icon: "/images/discover/games.svg" },
              { name: "sheet music", path: "music-and-sound-design", icon: "/images/discover/music.svg" }
            ].concat([
              { name: "art", path: "drawing-and-painting", icon: "/images/discover/drawing.svg" },
              { name: "after effects", path: "films", icon: "/images/discover/film.svg" },
              { name: "education", path: "education", icon: "/images/discover/education.svg" },
              { name: "fitness", path: "fitness-and-health", icon: "/images/discover/sports.svg" },
              { name: "sci-fi", path: "fiction-books", icon: "/images/discover/writing.svg" },
              { name: "vrchat", path: "gaming", icon: "/images/discover/games.svg" },
              { name: "ableton", path: "music-and-sound-design", icon: "/images/discover/music.svg" },
              { name: "certification exams", path: "education", icon: "/images/discover/education.svg" },
              { name: "vj loops", path: "films", icon: "/images/discover/film.svg" },
              { name: "workout program", path: "fitness-and-health", icon: "/images/discover/sports.svg" },
              { name: "poetry", path: "fiction-books", icon: "/images/discover/writing.svg" },
              { name: "avatar", path: "gaming", icon: "/images/discover/games.svg" },
              { name: "sample pack", path: "music-and-sound-design", icon: "/images/discover/music.svg" },
              { name: "learning", path: "education", icon: "/images/discover/education.svg" },
              { name: "luts", path: "films", icon: "/images/discover/film.svg" },
              { name: "yoga", path: "fitness-and-health", icon: "/images/discover/sports.svg" },
              { name: "fiction", path: "fiction-books", icon: "/images/discover/writing.svg" },
              { name: "assets", path: "gaming", icon: "/images/discover/games.svg" },
              { name: "sheet music", path: "music-and-sound-design", icon: "/images/discover/music.svg" }
            ]).map((tag, index) => (
              <div key={index} className="flex-shrink-0 mr-3 flex gap-3 justify-center items-center h-auto">
                <Image
                  src={tag.icon}
                  alt={`${tag.name} icon`}
                  width={48}
                  height={48}
                  className="w-12 h-auto md:w-20 flex-shrink-0"
                  loading="lazy"
                />
                <div className="px-4 py-2 bg-white rounded-full text-lg md:text-2xl font-medium text-black border border-gray-300 no-underline motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000000] transition-all whitespace-nowrap">
                  {tag.name}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex w-[200%] animate-none">
            {[
              { name: "reference photos", path: "photography", icon: "/images/discover/photography.svg" },
              { name: "coloring page", path: "self-improvement", icon: "/images/discover/drawing.svg" },
              { name: "singles", path: "recorded-music", icon: "/images/discover/music.svg" },
              { name: "programming", path: "software-development", icon: "/images/discover/software.svg" },
              { name: "kdp interior", path: "writing-and-publishing", icon: "/images/discover/writing.svg" },
              { name: "stock photos", path: "photography", icon: "/images/discover/photography.svg" },
              { name: "printable", path: "self-improvement", icon: "/images/discover/crafts.svg" },
              { name: "jazz", path: "recorded-music", icon: "/images/discover/music.svg" },
              { name: "windows", path: "software-development", icon: "/images/discover/software.svg" },
              { name: "ebook", path: "writing-and-publishing", icon: "/images/discover/writing.svg" },
              { name: "photobash", path: "photography", icon: "/images/discover/photography.svg" },
              { name: "productivity", path: "self-improvement", icon: "/images/discover/software.svg" },
              { name: "instrumental music", path: "recorded-music", icon: "/images/discover/music.svg" },
              { name: "theme", path: "software-development", icon: "/images/discover/software.svg" },
              { name: "low content books", path: "writing-and-publishing", icon: "/images/discover/writing.svg" }
            ].concat([
              { name: "reference photos", path: "photography", icon: "/images/discover/photography.svg" },
              { name: "coloring page", path: "self-improvement", icon: "/images/discover/drawing.svg" },
              { name: "singles", path: "recorded-music", icon: "/images/discover/music.svg" },
              { name: "programming", path: "software-development", icon: "/images/discover/software.svg" },
              { name: "kdp interior", path: "writing-and-publishing", icon: "/images/discover/writing.svg" },
              { name: "stock photos", path: "photography", icon: "/images/discover/photography.svg" },
              { name: "printable", path: "self-improvement", icon: "/images/discover/crafts.svg" },
              { name: "jazz", path: "recorded-music", icon: "/images/discover/music.svg" },
              { name: "windows", path: "software-development", icon: "/images/discover/software.svg" },
              { name: "ebook", path: "writing-and-publishing", icon: "/images/discover/writing.svg" },
              { name: "photobash", path: "photography", icon: "/images/discover/photography.svg" },
              { name: "productivity", path: "self-improvement", icon: "/images/discover/software.svg" },
              { name: "instrumental music", path: "recorded-music", icon: "/images/discover/music.svg" },
              { name: "theme", path: "software-development", icon: "/images/discover/software.svg" },
              { name: "low content books", path: "writing-and-publishing", icon: "/images/discover/writing.svg" }
            ]).map((tag, index) => (
              <div key={index} className="flex-shrink-0 mr-3 flex gap-3 justify-center items-center h-auto">
                <Image
                  src={tag.icon}
                  alt={`${tag.name} icon`}
                  width={48}
                  height={48}
                  className="w-12 h-auto md:w-20 flex-shrink-0"
                  loading="lazy"
                />
                <div className="px-4 py-2 bg-white rounded-full text-lg md:text-2xl font-medium text-black border border-gray-300 no-underline motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000000] transition-all whitespace-nowrap">
                  {tag.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  <div className="bg-gray flex flex-col lg:flex-row rounded-2xl px-4 gap-8 mx-auto max-w-6xl">
    <div className="flex flex-col overflow-hidden lg:flex-col lg:w-1/2 gap-8">
      <div className="flex bg-white items-center px-4 py-10 md:p-10 border lg:border border-dark-gray/50 rounded-2xl">
        <h3 className="font-medium text-4xl md:text-5xl">
          Don&apos;t take risks.
          <br />
          That&apos;s scary!
        </h3>
      </div>
      <div className="bg-white py-12 md:py-24 p-8 sm:p-32 md:p-32 lg:py-10 lg:px-12 flex items-center justify-center border lg:border rounded-2xl border-dark-gray/50">
        <div className="relative">
          <Image
            src="/images/about/blog-post-circle-1.svg"
            alt="Sell anywhere feature illustration"
            width={300}
            height={300}
            className="w-full h-auto object-cover mx-auto"
          />
          <div className="absolute top-[-1rem] left-0 sm:left-[-2rem] bg-white rounded-2xl px-6 sm:px-8 py-4 border border-black">
            <p className="text-xl font-medium m-0">Instead of selling a book...</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col overflow-hidden lg:flex-col lg:w-1/2 gap-8">
      <div className="bg-white py-12 md:py-24 p-8 sm:p-32 md:p-32 lg:py-10 lg:px-12 flex items-center justify-center border lg:border rounded-2xl border-dark-gray/50">
        <div className="relative">
          <Image
            src="/images/about/blog-post-circle-2.svg"
            alt="Sell anywhere feature illustration"
            width={300}
            height={300}
            className="w-full h-auto object-cover mx-auto"
          />
          <div className="absolute bottom-[-0.5rem] left-0 sm:left-[-2rem] bg-white rounded-2xl px-6 sm:px-6 py-4 border border-black">
            <p className="text-xl font-medium m-0">...start by selling a blog post!</p>
          </div>
        </div>
      </div>
      <div className="flex bg-white items-center px-4 py-10 md:p-10 border lg:border border-dark-gray/50 rounded-2xl">
        <h3 className="font-medium text-4xl md:text-5xl">
          Place small bets.
          <br />
          That&apos;s exciting!
        </h3>
      </div>
    </div>
  </div>

  <div className="px-8 py-16 lg:px-[4vw] lg:py-24">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl mx-auto lg:items-center">
      <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl"> Share your work. <br /> Someone out there needs it.</h1>
      <GumroadButton 
        href="/register"
        variant="light"
      >
        Start selling
      </GumroadButton>
    </div>
  </div>

  <Image
    src="/images/about/new-sale.svg"
    alt="New sale illustration"
    width={1920}
    height={300}
    className="w-full min-h-[300px] object-cover"
  />
    </div>
  )
}