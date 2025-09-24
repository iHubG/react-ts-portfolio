import { Terminal, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      {/* 404 Code Style */}
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white tracking-widest relative">
        404
        <span className="absolute inset-0 text-blue-500 dark:text-blue-400 animate-pulse blur-sm opacity-70">
          404
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 flex items-center gap-2">
        <Terminal size={18} className="text-blue-600 dark:text-blue-400" />
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Call to Action */}
      <a
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-6 py-2 
                   bg-blue-600 text-white text-sm font-medium rounded-lg 
                   hover:bg-blue-700 dark:hover:bg-blue-500 transition"
      >
        <Home size={16} />
        Go Back Home
      </a>

      {/* Optional Easter Egg */}
      <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
        Error Code: <span className="font-mono text-red-500">ERR_PAGE_NOT_FOUND</span>
      </p>
    </div>
  );
};

export default NotFound;
