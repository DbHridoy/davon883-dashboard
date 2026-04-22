import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[800px]">
      <div className="flex items-center gap-4">
        <Link to="/settings" className="text-gray-400 hover:text-white transition-colors no-underline">
          Settings
        </Link>
        <span className="text-gray-600">/</span>
        <h2 className="text-white text-xl font-medium m-0">About Us</h2>
      </div>

      <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl overflow-hidden p-8 text-gray-300 leading-relaxed text-sm">
        <h3 className="text-[var(--color-brand-gold)] text-xl font-medium mb-4 mt-0">Our Mission</h3>
        <p className="mb-6">
          We are dedicated to providing the most curated, high-quality experiences for our users. Our platform connects individuals with unique opportunities that create lasting memories, focusing on seamless interactions and robust administrative support.
        </p>

        <h3 className="text-white text-lg font-medium mb-4">Our Story</h3>
        <p className="mb-6">
          Founded with a passion for exceptional service, our team recognized the need for a comprehensive platform that simplifies the management of user experiences, notifications, and analytics. We have grown into a reliable solution trusted by administrators worldwide.
        </p>

        <h3 className="text-white text-lg font-medium mb-4">Our Values</h3>
        <ul className="list-disc pl-5 mb-6 flex flex-col gap-2">
          <li><strong>Quality:</strong> We never compromise on the standard of our platform.</li>
          <li><strong>Innovation:</strong> We continuously seek new ways to improve.</li>
          <li><strong>Integrity:</strong> We operate with transparency and honesty.</li>
          <li><strong>Community:</strong> We build platforms that foster connections.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
