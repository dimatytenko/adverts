import styles from './Home.module.scss';
const text_array = [
  "Embark on a journey of cinematic exploration with our Trailers Booking App. From pulse-pounding action to heartwarming dramas, immerse yourself in the world of trailers like never before. Whether you're a movie buff planning your next theater outing or simply seeking a sneak peek into upcoming blockbusters, our app is your ultimate companion.",
  'Browse through a vast collection of trailers, conveniently categorized for every taste and mood. Want to catch the latest superhero epic or indulge in a spine-chilling thriller? With our intuitive search feature, finding the perfect trailer is a breeze.',
  "But we don't just stop at browsing – book your tickets directly through the app! Say goodbye to long queues and sold-out shows. Secure your seats in advance and ensure you never miss the excitement of the big screen.",
  'Stay updated with personalized recommendations tailored to your preferences. With our cutting-edge algorithm, we curate a selection of trailers just for you, ensuring every movie night is an unforgettable experience.',
];

const HomeComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Discover Your Next Adventure: Trailers Booking App!</h1>

      <div className={styles.texts}>
        {text_array.map((text, index) => (
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
