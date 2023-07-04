import ContactCall from '@components/contact-call';
import ContactWrite from '@components/contact-write';


const ContactHotline = () => {
    return (
        <div className="p-16 shadow-2xl inline-block">
            <ContactCall></ContactCall>
            <ContactWrite></ContactWrite>
        </div>
    );
};

export default ContactHotline;