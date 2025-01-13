export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tired of returning Train Tickets!!?
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We have a solution for you. Share us your ticket details and we will find the perfect buyer for your tickets.<br/> You get the exact amount you paid for it <span className="font-semibold">too</span>
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://img.freepik.com/free-photo/steam-train-chugs-through-mountain-forest-scene-generative-ai_188544-8072.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=ais"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-photo/railroad-track-transporting-locomotive-mountain-landscape-generative-ai_188544-8138.jpg?t=st=1736773266~exp=1736776866~hmac=8a399a6010df76865715b11e40ceddb518f41fb29441377ceb791b62608b7298&w=900"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://wallpapers.com/images/featured/train-7o9wvprtuvushy43.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://i.pinimg.com/736x/7c/f3/22/7cf3223525b14286fdf5ebc42e628b4d.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://bureaucratsindia.in/cache/vande_bharat_2100_x_1470.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://i.pinimg.com/736x/e5/23/94/e52394d622f58c7567822eb84a2cbf62.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://e1.pxfuel.com/desktop-wallpaper/475/392/desktop-wallpaper-indian-train-indian-railway.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#table_list"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Search Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
