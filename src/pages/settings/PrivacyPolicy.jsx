import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[800px]">
      <div className="flex items-center gap-4">
        <Link to="/settings" className="text-gray-400 hover:text-white transition-colors no-underline">
          Settings
        </Link>
        <span className="text-gray-600">/</span>
        <h2 className="text-white text-xl font-medium m-0">Privacy Policy</h2>
      </div>

      <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl overflow-hidden p-8 text-gray-300 leading-relaxed text-sm">
        <h3 className="text-white text-lg font-medium mb-4 mt-0">1. Information We Collect</h3>
        <p className="mb-6">
          We collect information to provide better services to all our users. The types of information we collect include:
          <br /><br />
          - Information you give us: For example, when you create an account, we ask for personal information, like your name, email address, telephone number.
          <br />
          - Information we get from your use of our services: We collect information about the services that you use and how you use them.
        </p>

        <h3 className="text-white text-lg font-medium mb-4">2. How We Use Information</h3>
        <p className="mb-6">
          We use the information we collect from all our services to provide, maintain, protect and improve them, to develop new ones, and to protect our company and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
        </p>

        <h3 className="text-white text-lg font-medium mb-4">3. Information We Share</h3>
        <p className="mb-6">
          We do not share personal information with companies, organizations and individuals outside of our company unless one of the following circumstances applies:
          <br /><br />
          - With your consent: We will share personal information with companies, organizations or individuals outside of our company when we have your consent to do so.
          <br />
          - For legal reasons: We will share personal information if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
