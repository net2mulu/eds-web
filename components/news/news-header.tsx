export function NewsHeader() {
  return (
    <div className="w-full bg-navy-blue text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold">NEWS AND EVENTS</h1>
      </div>

      {/* Abstract background design */}
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M322.39,57.34C297.12,32.33,262.94,17.97,226.98,17.08c-40.74-1.01-81.13,15.7-108.04,46.25 c-37.9,43.06-45.57,110.25-18.79,162.63c27.51,53.83,88.1,89.46,148.54,85.19c49.77-3.52,97.07-31.21,125.58-73.07 c29.58-43.47,36.49-102.41,17.54-152.15C381.43,55.19,358.8,25.79,322.39,57.34z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}
