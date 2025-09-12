import HelloWorldSelect from "@/components/HelloWorldSelect";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hello <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">World</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Welcome to our interactive select demo!
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Choose from hundreds of options across different categories
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <HelloWorldSelect />
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">🌍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">195+ Countries</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Choose from every country in the world</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-xl font-bold">💻</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">50+ Languages</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Popular programming languages</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 dark:text-green-400 text-xl font-bold">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Multiple Categories</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Colors, cities, fruits, and more</p>
          </div>
        </div>
      </div>
    </main>
  );
}