"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Policy(){
    
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        // Get the last modified date of the document
        const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
        setLastUpdated(lastModifiedDate);
    }, []);

    return(
        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-300 ">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-sm text-center text-gray-800 mb-4"><strong style={{color: "goldenrod"}}>Last updated:{lastUpdated}</strong></p><hr />

            <p className="text-base text-gray-700 mb-4 my-2">Here at <strong>Nomo Phones</strong>, We value your privacy and are committed to protecting any personal information you share with us. This Privacy Policy outlines the types of information we collect, how we use it, and how we protect your data when you use our website <a href="https://nomophonez.vercel.app" className="text-blue-600 hover:underline">https://nomophonez.vercel.app</a>.</p>

            <p className="text-base text-gray-700 mb-4">By using our services, you consent to the collection and use of information as outlined in this Privacy Policy.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-3">1. Information We Collect</h3>
            <p className="text-base text-gray-700 mb-3">We only collect data when you choose to sign in using <strong>Google</strong> or <strong>Facebook</strong> login services. The information we collect includes:</p>
            <ul className="list-none pl-6 text-base text-gray-700 mb-3">
                <li><strong>Email Address</strong></li>
                <li><strong>Basic Profile Information</strong> (e.g., name, profile picture)</li>
            </ul>
            <p className="text-base text-gray-700 mb-3">This data is provided directly by Google or Facebook to enable the login process. We do not store or retain additional personal data.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-4">2. How We Use Your Information</h3>
            <p className="text-base text-gray-700 mb-3">The information we collect is used only for the purpose of:</p>
            <ul className="list-none pl-6 text-base text-gray-700 mb-4">
                <li><strong>Authentication</strong>: To verify your identity when you log in to our website.</li>
                <li><strong>Personalization</strong>: To allow you to view our content (phones and related products) on your account.</li>
            </ul>
            <p className="text-base text-gray-700 mb-4">We do not share, sell, or disclose your personal information to third parties, except as necessary to comply with applicable law.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-4">3. Third-Party Services</h3>
            <p className="text-base text-gray-700 mb-4">We use the <strong>Google</strong> and <strong>Facebook</strong> authentication services to allow you to log in to our website. When you sign in using one of these services, you are granting permission for them to share certain information (like your email and profile details) with us.</p>
            <ul className="list-none pl-6 text-base text-gray-700 mb-4">
                <li><strong>Google</strong>: For more information on how Google uses your data, please visit their <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 hover:underline">Privacy Policy</a>.</li>
                <li><strong>Facebook</strong>: For more information on how Facebook uses your data, please visit their <a href="https://www.facebook.com/privacy/explanation" target="_blank" className="text-blue-600 hover:underline">Privacy Policy</a>.</li>
            </ul>

            <h3 className="text-l font-semibold text-gray-800 mb-4">4. Data Retention</h3>
            <p className="text-base text-gray-700 mb-4">Since we do not store personal data in our database, any information you share via the Google or Facebook login will only be used during your session to personalize your experience. Once you log out, this data is no longer retained.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-3">5. Cookies</h3>
            <p className="text-base text-gray-700 mb-4">Our website may use <strong>cookies</strong> to enhance the user experience. Cookies are small files stored on your device that allow us to remember your preferences, login status, and other settings. You can control the use of cookies through your browser settings.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-4">6. Data Deletion</h3>
            <p className="text-base text-gray-700 mb-4">Since we do not store your data, there is no need for explicit data deletion. However, if you wish to revoke permissions or delete your account from Google or Facebook, you can manage this through their respective settings.</p>
            <p className="text-base text-gray-700 mb-4">To manage your Facebook and Google account data, please refer to their privacy settings and options for deleting your data:</p>
            <ul className="list-none pl-6 text-base text-gray-700 mb-4">
                <li><a href="https://myaccount.google.com/" target="_blank" className="text-blue-600 hover:underline">Google Account Settings</a></li>
                <li><a href="https://www.facebook.com/settings" target="_blank" className="text-blue-600 hover:underline">Facebook Settings</a></li>
            </ul>
            <p className="text-base text-gray-700 mb-6">Need Help to know more about Data-Deletion? <br />please visit: <Link className='font-bold text-red-600 hover:text-red-800 px-2 underline' href={"/policies/data-deletion"}>Data-Deletion</Link> page.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-2">7. Security</h3>
            <p className="text-base text-gray-700 mb-6">We take reasonable steps to protect your information from unauthorized access or disclosure. However, as we do not store sensitive data, the responsibility for securing your personal data lies with the third-party services (Google and Facebook) that authenticate you.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-2">8. Changes to This Privacy Policy</h3>
            <p className="text-base text-gray-700 mb-6">We may update our privacy policy from time to time. Any changes will be posted on this page, and we will update the &quot;Last updated&quot; date above. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>

            <h3 className="text-l font-semibold text-gray-800 mb-2">9. Contact Us</h3>
            <p className="text-base text-gray-700 mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <ul className="list-none text-base text-gray-700">
                <li><strong>Email</strong>: <a href="mailto: nomopoventures@yahoo.com" className="text-blue-600 hover:underline">nomopoventures@yahoo.com</a></li>
                <li><strong>Email Admin @</strong>: <a href="mailto: princenwachukwu308@yahoo.com" className="text-blue-600 hover:underline">princenwachukwu308@yahoo.com</a></li>
            </ul>
        </div>
    )

}