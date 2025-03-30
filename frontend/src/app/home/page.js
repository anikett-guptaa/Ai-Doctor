export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 py-12">
        <p className="text-lg text-gray-600 m-10">Start your AI-powered diagnosis here.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl px-4">
          {/* Predict Disease */}
          <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center w-full h-64 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">Predict Disease</h2>
            <p className="text-gray-600 text-center">Get AI-based predictions based on symptoms.</p>
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
              Start Now
            </button>
          </div>

          {/* Ask Doc */}
          <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center w-full h-64 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">Ask Doc</h2>
            <p className="text-gray-600 text-center">Get expert advice from a real time doctor.</p>
            <button className="mt-6 px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition">
              Chat Now
            </button>
          </div>

          {/* View Previous Records */}
          <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center w-full h-64 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">View Records</h2>
            <p className="text-gray-600 text-center">Check your previous medical records now.</p>
            <button className="mt-6 px-8 py-3 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-700 transition">
              View Records
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}