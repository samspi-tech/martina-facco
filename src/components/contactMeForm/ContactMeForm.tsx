import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './ContactMeForm.module.css';
import Input from '@/components/input/Input.tsx';
import {
    contactMeSchema,
    type ContactMeTypes,
} from '@/components/contactMeForm/contactMeSchema.ts';
import Textarea from '@/components/textarea/Textarea.tsx';
import { useEmailJs } from '@/hooks/useEmailJs.ts';
import ContactMeFormFooter from '@/components/contactMeForm/partials/ContactMeFormFooter.tsx';

const ContactMeForm = () => {
    const { register, formState, reset, handleSubmit } =
        useForm<ContactMeTypes>({
            resolver: zodResolver(contactMeSchema),
        });
    const { errors } = formState;

    const { isSubmitting, sendEmail, recaptchaRef } = useEmailJs(reset);

    return (
        <div className={styles.formContainer}>
            <hgroup>
                <h2>Contact me</h2>
                <p>I will get back to you asap!</p>
            </hgroup>
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
                <ContactMeFormFooter
                    ref={recaptchaRef}
                    isSubmitting={isSubmitting}
                />
            </form>
        </div>
    );
};

export default ContactMeForm;
