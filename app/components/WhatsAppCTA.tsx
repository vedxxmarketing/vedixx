import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { CONTACT } from '../site.config';

const WhatsAppCTA = () => {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[100] group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-vedixx-bg px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat with us
      </div>

      {/* Button */}
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 duration-1000"></div>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-110">
          <WhatsAppIcon className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppCTA;
