import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${!isLoading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          BYRD
        </div>
        <div className="preloader-spinner"></div>
        <p className="text-bright-green mt-4 text-lg font-medium">
          Loading Opportunities...
        </p>
      </div>
    </div>
  );
}
