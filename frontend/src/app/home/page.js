'use client';

import Link from "next/link";

export default function HomePage() {
  const serviceCards = [
    {
      title: "Predict Disease",
      description: "Get AI-based predictions based on symptoms.",
      buttonText: "Start Now",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      href: "home/predict"
    },
    {
      title: "Ask Doctor",
      description: "Chat with our AI doctor in real-time.",
      buttonText: "Chat Now",
      buttonColor: "bg-green-600 hover:bg-green-700",
      href: "home/chat"
    },
    {
      title: "View Records",
      description: "Access your medical history and reports.",
      buttonText: "View Now",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      href: "home/records"
    },
    {
      title: "Analyze Report",
      description: "Upload and analyze medical reports.",
      buttonText: "Analyze Now",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      href: "home/analyze"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 py-8 sm:py-12">
        <p className="text-lg text-gray-600 m-8 sm:m-12 px-4 text-center">
          Start your AI-powered diagnosis here.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-8 sm:gap-x-16 md:gap-x-38 sm:max-w-6xl px-4">
          {serviceCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="p-10 sm:p-12 bg-white shadow-md sm:shadow-lg rounded-xl flex flex-col items-center justify-between h-48 sm:h-64 hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="text-center space-y-2 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {card.description}
                </p>
              </div>
              <button
                className={`mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 ${card.buttonColor} text-white text-sm sm:text-lg rounded-lg transition w-50 sm:w-60 max-w-xs`}
              >
                {card.buttonText}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}