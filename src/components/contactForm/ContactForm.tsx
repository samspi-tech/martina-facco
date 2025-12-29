import styles from './ContactForm.module.css';
import Input from '@/components/input/Input.tsx';
import Button from '@/components/button/Button.tsx';
import { useForm } from 'react-hook-form';
import {
    contactMeSchema,
    type ContactMeTypes,
} from '@/components/contactForm/contactMeSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {
    EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
} from '@/utils/constants.ts';
import type { BaseSyntheticEvent } from 'react';

const ContactForm = () => {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<ContactMeTypes>({
        resolver: zodResolver(contactMeSchema),
    });

    const onSubmit = async (_data: ContactMeTypes, e?: BaseSyntheticEvent) => {
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                e?.target as HTMLFormElement,
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            );

            reset();
            console.log('success');
        } catch (err) {
            console.log('failed', (err as EmailJSResponseStatus).text);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Let's get in touch!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    id="firstName"
                    label="First Name"
                    {...register('firstName')}
                    error={errors.firstName?.message}
                />
                <Input
                    type="text"
                    id="lastName"
                    label="Last Name"
                    {...register('lastName')}
                    error={errors.lastName?.message}
                />
                <Input
                    type="email"
                    id="email"
                    label="Email"
                    {...register('email')}
                    error={errors.email?.message}
                />
                <Input
                    type="textarea"
                    id="message"
                    label="Message"
                    {...register('message')}
                    error={errors.message?.message}
                />
                <Button type="submit" value="Send">
                    Send
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
