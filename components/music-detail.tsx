export default function MusicDetail() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4">
        <img
          src="/placeholder.svg"
          width={120}
          height={120}
          alt="Album Cover"
          className="rounded-lg"
        />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Starlight</h1>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span>Muse</span>
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span>2012</span>
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span>4:24</span>
          </div>
        </div>
      </div>
      <div>
        <audio
          className="w-full"
          controls
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">About the song</h2>
          <p className="text-gray-500 dark:text-gray-400">
            "Starlight" is a song by the English rock band Muse. It was released
            as the lead single from their fifth studio album, Black Holes and
            Revelations, in 2006. The song became a major international hit,
            reaching the top 10 in several countries.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Lyrics</h2>
          <p className="text-gray-500 dark:text-gray-400">
            The lyrics of "Starlight" are about the desire to escape the mundane
            aspects of everyday life and find a sense of wonder and adventure.
            The song's title refers to the idea of looking up at the stars and
            feeling a connection to something larger than oneself.
          </p>
        </div>
      </div>
    </div>
  );
}
