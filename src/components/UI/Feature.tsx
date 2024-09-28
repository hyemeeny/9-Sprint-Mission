import styles from "./Feature.module.scss";
import Image from "next/image";

interface FeatureProps {
  image: string | any;
  alt: string;
  featureName: string;
  title: string;
  description: string;
  direction?: "row" | "row-reverse";
}

const Feature = ({
  image,
  alt,
  featureName,
  title,
  description,
}: FeatureProps) => {
  return (
    <section className={styles.featureContainer}>
      <div className={styles.imageWrap}>
        <Image src={image} alt={alt} width={579} height={444} />
      </div>
      <div className={styles.featureContent}>
        <h2>{featureName}</h2>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Feature;
