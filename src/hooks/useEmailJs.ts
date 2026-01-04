import { useRef, useState } from 'react';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import type { ContactMeTypes } from '@/components/contactForm/contactMeSchema.ts';
import {
    EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
} from '@/utils/constants.ts';
import ReCAPTCHA from 'react-google-recaptcha';

export const useEmailJs = (reset: () => void) => {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = async (data: ContactMeTypes) => {
        const captchaValue = recaptchaRef.current?.getValue();
        if (!captchaValue) return alert('Please verify the reCAPTCHA.');

        const templateParams = {
            ...data,
            'g-recaptcha-response': captchaValue,
        };

        setIsSubmitting(true);
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            reset();
            console.log('success');
        } catch (err) {
            console.log('failed', (err as EmailJSResponseStatus).text);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        recaptchaRef,
        isSubmitting,
        sendEmail,
    };
};
