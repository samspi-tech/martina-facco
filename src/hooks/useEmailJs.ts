import { useRef, useState } from 'react';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import type { ContactMeTypes } from '@/components/contactMeForm/contactMeSchema.ts';
import {
    EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    TEN_SECONDS,
} from '@/utils/constants.ts';
import ReCAPTCHA from 'react-google-recaptcha';
import toast from 'react-hot-toast';

export const useEmailJs = (reset: () => void) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = async (data: ContactMeTypes) => {
        const captchaValue = recaptchaRef.current?.getValue();
        if (!captchaValue) return toast.error('Please verify the reCAPTCHA.');

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
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                    limitRate: { throttle: TEN_SECONDS },
                }
            );

            reset();
            toast.success(
                'Message sent successfully.\nPlease, check your email.'
            );
        } catch (err) {
            toast.error('Something went wrong.\nTry again later, please.');

            const emailJsErrorMessage = (err as EmailJSResponseStatus).text;

            if (!emailJsErrorMessage && err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(emailJsErrorMessage);
            }
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
