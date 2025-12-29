import styles from './ContactForm.module.css';
import Input from '@/components/input/Input.tsx';
import Button from '@/components/button/Button.tsx';
import { useForm } from 'react-hook-form';
import {
    contactMeSchema,
    type ContactMeTypes,
} from '@/components/contactForm/contactMeSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = () => {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<ContactMeTypes>({
        resolver: zodResolver(contactMeSchema),
    });

    const onSubmit = (data: ContactMeTypes) => {
        console.log(data);
        reset();
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
                <Button type="submit">Send</Button>
            </form>
        </div>
    );
};

export default ContactForm;
