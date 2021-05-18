import React from 'react';

import styles from './Images.module.scss';

interface ImagesProps {
	images: (string | undefined)[];
}

const defaultProps = {
	images: [],
};

const Images = ({ images }: ImagesProps) => (
	<div className={styles.Images}>
		{images.map((image) => (
			<img key={image} src={image} className={styles.Images__img} />
		))}
	</div>
);

Images.defaultProps = defaultProps;

export default Images;