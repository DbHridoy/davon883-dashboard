import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('').length === 4) {
      navigate('/auth/set-new-password');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-left mb-6 mt-0">Verify OTP</h2>
      <p className="text-sm text-gray-400 text-left mb-8 leading-relaxed">Please check your email. We have sent a code to contact @gmail.com</p>

      <div className="flex justify-center gap-3 mb-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            className="w-14 h-16 bg-transparent border border-[#3f3f46] rounded-lg text-center text-2xl font-semibold text-white outline-none transition-colors focus:border-[var(--color-brand-gold)]"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            placeholder="-"
          />
        ))}
      </div>

      <div className="flex justify-between items-center mb-8 text-sm text-gray-400">
        <span>Didn't receive code?</span>
        <button type="button" className="bg-transparent border-none text-[var(--color-brand-gold)] underline p-0 text-sm cursor-pointer">Resend</button>
      </div>

      <button type="button" className="w-full p-3.5 bg-[var(--color-brand-gold)] text-black rounded-md text-base font-semibold transition-colors hover:bg-[var(--color-brand-gold-hover)] flex justify-center items-center" onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default VerifyOTP;
