import React from 'react';

import styles from './Images.module.scss';

const Images = ({ images }) => (
	<div className={styles.Images}>
		{images.map((image) => (
			<img key={image} src={image} className={styles.Images__img}/>
		))}
	</div>
);

export default Images;