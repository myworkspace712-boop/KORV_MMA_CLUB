import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

function WhatsAppButton({ phoneNumber = '919925816161', message = 'Hello! I would like to inquire about training sessions and admissions at KORV MMA Club.' }) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Chat on WhatsApp: +91 99258 16161"
      aria-label="Contact +91 99258 16161 on WhatsApp for training sessions and admissions"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">+91 99258 16161</span>
    </a>
  );
}

export default WhatsAppButton;

