import type { ImageItem } from "@vars/*";
import styles from "@styles/ImageSlider.module.css";
import { useState } from "react";

export const ImageSlider = ({ images }: { images: ImageItem[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className={styles.mainImg}>
        <img src={selectedImage.url} alt={selectedImage.description} />
      </div>
      <div className={styles.allImgs}>
        {images.map((image) => (
          <img
            key={image.title}
            src={image.url}
            alt={image.description}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </>
  );
};
