import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[800px]">
      <div className="flex items-center gap-4">
        <Link to="/settings" className="text-gray-400 hover:text-white transition-colors no-underline">
          Settings
        </Link>
        <span className="text-gray-600">/</span>
        <h2 className="text-white text-xl font-medium m-0">Terms & Conditions</h2>
      </div>

      <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl overflow-hidden p-8 text-gray-300 leading-relaxed text-sm">
        <h3 className="text-white text-lg font-medium mb-4 mt-0">1. Acceptance of Terms</h3>
        <p className="mb-6">
          By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <h3 className="text-white text-lg font-medium mb-4">2. Provision of Services</h3>
        <p className="mb-6">
          We constantly innovate in order to provide the best possible experience for our users. You acknowledge and agree that the form and nature of the services which we provide may change from time to time without prior notice to you.
        </p>

        <h3 className="text-white text-lg font-medium mb-4">3. User Conduct</h3>
        <p className="mb-6">
          You agree to use the services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
