"use client"

export default function DataDeletionPage() {
    return (
      <div className="my-12 max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Data Deletion Instructions</h1><hr className="text-gray-300"/>
        <p className="text-base text-gray-700 mb-4">
          Here at <strong className="text-blue-600">Nomo Phones</strong>, we do not store any personal data directly. However, if you wish to delete your data, please follow the instructions below for the third-party services used for authentication.
        </p>
  
        <h2 className="text-2xl font-semibold text-red-800 mt-6 mb-4">Delete Your Data from Google</h2>
        <p className="text-base text-gray-700 mb-4">
          If you used your Google account to sign in to Nomo Phones, you can delete your data by following these steps:
        </p>
        <ol className="list-none pl-6 text-gray-700 mb-6">
          <li>Go to <a href="https://myaccount.google.com/" target="_blank" className="text-blue-600 hover:underline">Google Account Settings</a></li>
          <li>Click on &quot;Data & Privacy&quot; and navigate to &quot;Manage Your Data & Personalization.&quot;</li>
          <li>Follow the steps to delete any data related to your Google account.</li>
        </ol>
  
        <h2 className="text-2xl font-semibold text-red-800 mt-6 mb-4">Delete Your Data from Facebook</h2>
        <p className="text-base text-gray-700 mb-4">
          If you used your Facebook account to sign in to Nomo Phones, you can delete your data by following these steps:
        </p>
        <ol className="list-none pl-6 text-gray-700 mb-6">
          <li>Go to <a href="https://www.facebook.com/settings" target="_blank" className="text-blue-600 hover:underline">Facebook Settings</a></li>
          <li>Navigate to &quot;Your Facebook Information&quot; and select &quot;Delete Your Account and Information.&quot;</li>
          <li>Follow the prompts to delete your data.</li>
        </ol>
  
        <p className="text-base text-gray-700 mb-4">
          If you have any questions or concerns, feel free to <a href="mailto:nomopoventures@yahoo.com" className="text-blue-600 hover:underline">contact us</a>.
        </p>
      </div>
    );
}
  