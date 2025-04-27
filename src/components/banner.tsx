import { FiClock } from 'react-icons/fi';

export function Banner() {
  return (
    <div className="gradient-primary bg-gradient-to-r py-3 text-center text-gray-800">
      <div className="container flex items-center justify-center">
        <p className="flex items-center gap-2 font-medium text-sm">
          <FiClock className="animate-pulse" />
          <span>
            מבצע מיוחד! הנחות גדולות מסתיימות ב-15 במאי
            <span className="hidden sm:inline"> - אל תפספסו את ההזדמנות</span>
          </span>
          <a
            href="#register"
            className="ml-2 flex items-center gap-1 hover:opacity-80 transition-opacity text-sm"
          >
            הרשמו עכשיו
            <span>→</span>
          </a>
        </p>
      </div>
    </div>
  )
}