import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <article className={styles.article}>
            <hgroup>
                <h1>
                    <span>Martina</span>
                    <span>Facco</span>
                </h1>
                <p>
                    <b>Senior Art Director & Graphic Designer</b> based in
                    Italy.
                </p>
            </hgroup>
            <section>
                <p>
                    Over the years, I have developed and perfected my creative
                    and production skills for different fashion, beauty, and
                    lifestyle brands. <br /> I graduated from the IUAV
                    University of Venice.
                </p>
                <p>
                    Currently, I’m working for <b>Oakley</b> at
                    EssilorLuxottica.
                </p>
            </section>
        </article>
    );
};

export default AboutMe;
