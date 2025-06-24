"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("manifesto");
  const [selectedProgram, setSelectedProgram] = React.useState(null);
  const [isInstallable, setIsInstallable] = React.useState(false);
  const [deferredPrompt, setDeferredPrompt] = React.useState(null);

  // PWA Install functionality
  React.useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    }
  };

  const manifestoPoints = [
    {
      title: "Education for All",
      description:
        "Improve access to quality education by building more schools and providing free learning materials to all children in our constituency.",
    },
    {
      title: "Healthcare Access",
      description:
        "Establish community health centers and ensure affordable healthcare services for every family.",
    },
    {
      title: "Economic Empowerment",
      description:
        "Create job opportunities through small business support and skills training programs for our youth.",
    },
    {
      title: "Infrastructure Development",
      description:
        "Improve roads, water supply, and electricity access to connect our communities and boost development.",
    },
    {
      title: "Agricultural Support",
      description:
        "Provide farmers with modern tools, seeds, and training to increase crop yields and food security.",
    },
  ];

  const campaignEvents = [
    {
      date: "March 15, 2025",
      time: "10:00 AM",
      location: "Kampala Community Center",
      event: "Town Hall Meeting",
      description:
        "Meet with constituents to discuss local issues and development plans",
    },
    {
      date: "March 18, 2025",
      time: "2:00 PM",
      location: "Makerere University",
      event: "Youth Rally",
      description:
        "Engaging with young voters on education and employment opportunities",
    },
    {
      date: "March 22, 2025",
      time: "9:00 AM",
      location: "Central Market",
      event: "Market Visit",
      description:
        "Meeting traders and discussing business support initiatives",
    },
    {
      date: "March 25, 2025",
      time: "3:00 PM",
      location: "Rural Villages Tour",
      event: "Community Outreach",
      description:
        "Visiting rural areas to understand farming and infrastructure needs",
    },
  ];

  const socialPrograms = [
    {
      title: "Women Empowerment Initiative",
      description:
        "Providing microfinance and business training for women entrepreneurs",
      beneficiaries: "500+ women",
      status: "Active",
    },
    {
      title: "Youth Skills Development",
      description:
        "Technical training in carpentry, tailoring, and computer skills",
      beneficiaries: "300+ youth",
      status: "Ongoing",
    },
    {
      title: "Senior Citizens Support",
      description:
        "Monthly support and healthcare assistance for elderly community members",
      beneficiaries: "200+ seniors",
      status: "Active",
    },
    {
      title: "School Feeding Program",
      description: "Providing nutritious meals to primary school children",
      beneficiaries: "1000+ children",
      status: "Expanding",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* PWA Install Banner */}
      {isInstallable && (
        <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-mobile-alt"></i>
            <span className="text-sm">Install this app on your device</span>
          </div>
          <button
            onClick={handleInstallClick}
            className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium"
          >
            Install
          </button>
        </div>
      )}

      {/* Header */}
      <div className="bg-green-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-user text-green-600 text-2xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold">Hon. James Mukasa</h1>
              <p className="text-green-100">
                Candidate for MP - Kampala Central
              </p>
              <p className="text-sm text-green-200">
                National Resistance Movement (NRM)
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-xs text-green-200">Online</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex">
          <button
            onClick={() => setActiveTab("manifesto")}
            className={`flex-1 py-3 px-2 text-center font-medium transition-all duration-200 ${
              activeTab === "manifesto"
                ? "bg-green-600 text-white border-b-2 border-green-600"
                : "text-gray-600 hover:bg-gray-50 active:bg-gray-100"
            }`}
          >
            <i className="fas fa-scroll mr-1 text-sm"></i>
            <span className="text-sm">Manifesto</span>
          </button>
          <button
            onClick={() => setActiveTab("campaign")}
            className={`flex-1 py-3 px-2 text-center font-medium transition-all duration-200 ${
              activeTab === "campaign"
                ? "bg-green-600 text-white border-b-2 border-green-600"
                : "text-gray-600 hover:bg-gray-50 active:bg-gray-100"
            }`}
          >
            <i className="fas fa-calendar mr-1 text-sm"></i>
            <span className="text-sm">Campaign</span>
          </button>
          <button
            onClick={() => setActiveTab("social")}
            className={`flex-1 py-3 px-2 text-center font-medium transition-all duration-200 ${
              activeTab === "social"
                ? "bg-green-600 text-white border-b-2 border-green-600"
                : "text-gray-600 hover:bg-gray-50 active:bg-gray-100"
            }`}
          >
            <i className="fas fa-hands-helping mr-1 text-sm"></i>
            <span className="text-sm">Programs</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-20">
        {/* Manifesto Tab */}
        {activeTab === "manifesto" && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-600">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                <i className="fas fa-flag text-green-600 mr-2"></i>
                Our Vision for Kampala Central
              </h2>
              <p className="text-gray-600 mb-4">
                Building a prosperous, inclusive, and sustainable constituency
                where every citizen has access to quality education, healthcare,
                and economic opportunities.
              </p>
            </div>

            {manifestoPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Campaign Tab */}
        {activeTab === "campaign" && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-600">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                <i className="fas fa-bullhorn text-blue-600 mr-2"></i>
                Upcoming Campaign Events
              </h2>
              <p className="text-gray-600 text-sm">
                Join us at these events to learn more about our plans for the
                constituency
              </p>
            </div>

            {campaignEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-calendar-alt text-blue-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {event.event}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <i className="fas fa-clock mr-1"></i>
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {event.location}
                    </div>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Social Programs Tab */}
        {activeTab === "social" && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-500">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                <i className="fas fa-heart text-red-500 mr-2"></i>
                Community Social Programs
              </h2>
              <p className="text-gray-600 text-sm">
                Our ongoing initiatives to support and empower our community
                members
              </p>
            </div>

            {socialPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-users mr-1"></i>
                        {program.beneficiaries}
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          program.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : program.status === "Ongoing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {program.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation/Contact Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="p-4">
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-2">Get in Touch</h3>
            <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-3">
              <a
                href="tel:+256702973428"
                className="flex items-center hover:text-green-600 transition-colors"
              >
                <i className="fas fa-phone mr-1 text-green-600"></i>
                +256 702 973 428
              </a>
              <a
                href="mailto:james@campaign.ug"
                className="flex items-center hover:text-green-600 transition-colors"
              >
                <i className="fas fa-envelope mr-1 text-green-600"></i>
                james@campaign.ug
              </a>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;