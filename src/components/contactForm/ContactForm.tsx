import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './ContactForm.module.css';
import Input from '@/components/input/Input.tsx';
import Button from '@/components/button/Button.tsx';
import {
    contactMeSchema,
    type ContactMeTypes,
} from '@/components/contactForm/contactMeSchema.ts';
import { SITE_KEY } from '@/utils/constants.ts';
import Textarea from '@/components/textarea/Textarea.tsx';
import { useEmailJs } from '@/hooks/useEmailJs.ts';

const ContactForm = () => {
    const { register, formState, reset, handleSubmit } =
        useForm<ContactMeTypes>({
            resolver: zodResolver(contactMeSchema),
        });
    const { errors } = formState;

    const { isSubmitting, sendEmail, recaptchaRef } = useEmailJs(reset);

    return (
        <div className={styles.formContainer}>
            <h2>Let's get in touch!</h2>
            <form onSubmit={handleSubmit(sendEmail)}>
                <Input
                    type="text"
                    id="firstName"
                    label="First Name"
                    disabled={isSubmitting}
                    {...register('firstName')}
                    error={errors.firstName?.message}
                />
                <Input
                    type="text"
                    id="lastName"
                    label="Last Name"
                    disabled={isSubmitting}
                    {...register('lastName')}
                    error={errors.lastName?.message}
                />
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    autoComplete="email"
                    {...register('email')}
                    disabled={isSubmitting}
                    error={errors.email?.message}
                />
                <Input
                    id="title"
                    type="text"
                    label="Message Title"
                    {...register('title')}
                    disabled={isSubmitting}
                    error={errors.title?.message}
                />
                <Textarea
                    rows={5}
                    id="message"
                    label="Message"
                    disabled={isSubmitting}
                    {...register('message')}
                    error={errors.message?.message}
                />
                <footer>
                    <ReCAPTCHA
                        theme="dark"
                        ref={recaptchaRef}
                        sitekey={SITE_KEY}
                    />
                    <Button type="submit" value="Send" disabled={isSubmitting}>
                        Send
                    </Button>
                </footer>
            </form>
        </div>
    );
};

export default ContactForm;
