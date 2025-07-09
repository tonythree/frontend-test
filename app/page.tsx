import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Frontend Developer Technical Test
          </h1>

          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Welcome! 👋
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-yellow-800 mb-2 text-lg">
                📖 READ THE README.md FILE FIRST
              </h3>
              <p className="text-yellow-700">
                All detailed requirements, acceptance criteria, technical
                specifications, and evaluation guidelines are in the{" "}
                <strong>README.md</strong> file. Please read it thoroughly
                before starting.
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Your task is to build a <strong>Profile Settings Page</strong>{" "}
              with a dropdown interface that allows users to view and edit their
              profile information.
            </p>

            <div className="space-y-4">
              <Link
                href="/profile/settings"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Profile Settings →
              </Link>

              <p className="text-sm text-gray-500">
                (This page needs to be created by you)
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-2">
              <strong>
                Everything you need to know is in the README.md file
              </strong>
            </p>
            <p className="text-sm text-gray-400">
              Requirements • Acceptance Criteria • Technical Specs • Evaluation
              Guidelines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
