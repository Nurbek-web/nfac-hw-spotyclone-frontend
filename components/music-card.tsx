import { Music } from "@/@types/music";

export default function MusicCard({ music }: { music: Music }) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{music.name}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-2">{music.artist}</p>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>{music.date}</span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <ClockIcon className="w-4 h-4 mr-1" />
          <span>{music.duration}</span>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
