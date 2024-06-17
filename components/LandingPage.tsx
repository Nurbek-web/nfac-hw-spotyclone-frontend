import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlimited Music Streaming
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover new music, create playlists, and listen to your
                favorite artists anytime, anywhere with our Spotify clone app.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#1DB954] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1DB954]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1DB954] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#1DB954] dark:text-gray-900 dark:hover:bg-[#1DB954]/90 dark:focus-visible:ring-[#1DB954]"
                prefetch={false}
              >
                Download App
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover, Create, and Enjoy
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our Spotify clone app offers a seamless music streaming
                  experience with personalized recommendations, custom
                  playlists, and high-quality audio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Recommendations
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Get tailored music recommendations based on your
                        listening history and preferences.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Offline Mode</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Download your favorite songs and playlists to listen
                        offline, anytime, anywhere.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">High-Quality Audio</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Enjoy your music in crystal-clear audio quality for an
                        immersive listening experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Download the Spotify Clone App
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the best music streaming service on your mobile
                device. Download the app now and start listening to your
                favorite songs.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#1DB954] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1DB954]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1DB954] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#1DB954] dark:text-gray-900 dark:hover:bg-[#1DB954]/90 dark:focus-visible:ring-[#1DB954]"
                  prefetch={false}
                >
                  iOS
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#1DB954] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1DB954]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1DB954] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#1DB954] dark:text-gray-900 dark:hover:bg-[#1DB954]/90 dark:focus-visible:ring-[#1DB954]"
                  prefetch={false}
                >
                  Android
                </Link>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Download the app and start listening to your favorite music
                today.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 Spotify Clone. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function AirplayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </svg>
  );
}
