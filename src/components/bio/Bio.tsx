import styles from './Bio.module.css';

const Bio = () => {
    return (
        <article className={styles.bio}>
            <p>
                Hi, <br /> I am Martina a{' '}
                <b>Senior Art Director & Graphic Designer</b> based in{' '}
                <b>Italy</b>.
            </p>
            <p>
                Over the years, I have developed and perfected my creative and
                production skills for different fashion, beauty, and lifestyle
                brands. <br /> I graduated from the <b>IUAV University</b> of{' '}
                <b>Venice</b>.
            </p>
            <p>
                Currently, I’m working for <b>Oakley</b> at{' '}
                <b>EssilorLuxottica</b>.
            </p>
        </article>
    );
};

export default Bio;
