import { Navigation } from '@/components/layout/navigation'

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20 px-6 lg:px-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Log In
          </h1>
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <p className="text-center text-black">
              Login functionality coming soon.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}