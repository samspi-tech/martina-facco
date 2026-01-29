import MiniSpinner from '@/components/miniSpinner/MiniSpinner.tsx';
import Button from '@/components/button/Button.tsx';
import { SITE_KEY } from '@/utils/constants.ts';
import ReCAPTCHA from 'react-google-recaptcha';
import { type RefObject } from 'react';

type ContactMeFormFooterProps = {
    isSubmitting: boolean;
    ref: RefObject<ReCAPTCHA | null>;
};

const ContactMeFormFooter = ({
    isSubmitting,
    ref,
}: ContactMeFormFooterProps) => {
    return (
        <footer>
            <ReCAPTCHA ref={ref} sitekey={SITE_KEY} />
            <Button type="submit" value="Send" disabled={isSubmitting}>
                {isSubmitting ? <MiniSpinner /> : 'Send'}
            </Button>
        </footer>
    );
};

export default ContactMeFormFooter;
