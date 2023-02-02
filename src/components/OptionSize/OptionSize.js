import styles from './OptionSize.module.scss';

const OptionSize = props => {

	const foo = (size) => {
		props.setCurrentSize(size.name);
		props.setCurrentSizePrice(size.additionalPrice);
	}

	const bar = (size) => {
		const maybeClassName = size.name === props.currentSize && styles.active;

		if(!maybeClassName) {
			return '';
		}
		return maybeClassName
	};

	return (
		<div className={styles.sizes}>
			<h3 className={styles.optionLabel}>Sizes</h3>
			<ul className={styles.choices}>
				{props.sizes.map((size, i) => (
					<li key={'size' + i}>
						<button 
							type="button" 
							onClick={() => foo(size)} 
							className={bar(size)}>
							{size.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
};

export default OptionSize
