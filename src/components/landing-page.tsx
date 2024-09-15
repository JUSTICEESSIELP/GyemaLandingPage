'use client'

import { Truck, Leaf, Users, ArrowRight } from 'lucide-react'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-green-600">Gyema</span>
              </div>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Seamless Logistics</span>
                <span className="block text-green-600">Powered by Blockchain</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Gyema is an interstate logistics platform that links drivers to senders for seamless goods delivery while reducing carbon footprint.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 relative mx-auto w-full max-w-md">
              <div className="relative w-full h-0 pb-[177.78%]">
                <div className="absolute inset-0 w-full h-full bg-black rounded-[3rem] overflow-hidden border-[14px] border-gray-900 shadow-xl">
                  <div className="absolute inset-0 w-full h-full bg-white">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screen3_gyema-TL3u1BUEXvx1Hq1Z3xtAcBNJwPtiVo.jpg"
                      alt="Gyema mobile app screenshot showing carbon savings chart"
                      className="w-full h-full object-cover animate-float"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">Features and Benefits</h2>
              <div className="mt-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                            <Truck className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Mobile App Experience</h3>
                        <p className="mt-5 text-base text-gray-500">
                          Two mobile apps powered by blockchain for both users and drivers, ensuring a seamless logistics experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                            <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Carbon Footprint Tracking</h3>
                        <p className="mt-5 text-base text-gray-500">
                          ICP Oracle Feature calculates emission factors and footprint saved using metrics from various APIs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                            <Users className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Driver Analytics</h3>
                        <p className="mt-5 text-base text-gray-500">
                          Drivers get analytics on their performance with non-opinionated queries using Graph Protocol.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Carbon Savings Impact</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-around">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600">7.5 tons</span>
                    <p className="mt-1 text-sm text-gray-500">Total Carbon Saved</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600">40 trees</span>
                    <p className="mt-1 text-sm text-gray-500">Trees Planted</p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <a href="#" className="text-sm font-medium text-green-600 hover:text-green-500">
                  Learn more about our environmental impact <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Team</h2>
              <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/addo-4zEDu532LMDzb79WpM5vkp7Ocbl8QQ.jpg"
                    alt="Adokwei Addo"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">Adokwei Addo</h3>
                    <p className="text-sm text-gray-500">Visionary</p>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2022-12-18_20-24-38-y9TOqIaHtsPLjEWaA27QOoc3qtydHU.jpg"
                    alt="Essiel Justice Prince"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">Essiel Justice Prince</h3>
                    <p className="text-sm text-gray-500">Developer</p>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-04-27_21-35-02-TaqZUja26RVM84CfdcJJg6D5ylkmPc.jpg"
                    alt="Sam Amponsah"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">Samuel Osei-Amponsah</h3>
                    <p className="text-sm text-gray-500">Knowledge Expert in Climate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Partners</h2>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <img
                      src="/placeholder.svg?height=60&width=120"
                      alt="Base Blockchain"
                      className="h-12 w-auto mx-auto mb-4"
                    />
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Base Blockchain</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">Powering our transactions with efficiency and security</p>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <img
                      src="/placeholder.svg?height=60&width=120"
                      alt="Graph Protocol"
                      className="h-12 w-auto mx-auto mb-4"
                    />
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Graph Protocol</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">Enabling powerful analytics and data querying</p>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <img
                      src="/placeholder.svg?height=60&width=120"
                      alt="ICP Oracle"
                      className="h-12 w-auto mx-auto mb-4"
                    />
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">ICP Oracle</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">Providing reliable data for our carbon footprint calculations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Us</h3>
              <p className="mt-4 text-base text-gray-500">
                Gyema is revolutionizing interstate logistics with blockchain technology and a focus on reducing carbon footprint.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect With Us</h3>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Gyema. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}