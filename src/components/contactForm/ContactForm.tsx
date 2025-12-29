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
import Textarea from '@/components/textarea/Textarea.tsx';
import { useState } from 'react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, formState, reset, handleSubmit } =
        useForm<ContactMeTypes>({
            resolver: zodResolver(contactMeSchema),
        });
    const { errors } = formState;

    const onSubmit = async (data: ContactMeTypes) => {
        setIsSubmitting(true);
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, {
                publicKey: EMAILJS_PUBLIC_KEY,
            });

            console.log('success');
        } catch (err) {
            console.log('failed', (err as EmailJSResponseStatus).text);
        } finally {
            reset();
            setIsSubmitting(false);
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
                <Button type="submit" value="Send" disabled={isSubmitting}>
                    Send
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
