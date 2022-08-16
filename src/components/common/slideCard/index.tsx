import styles from './styles.module.scss';

const SlideCard = () => {
    return (
        <>
            <div className={ styles.slide }>
                <img src="" alt="" className={ styles.slideImg }/>
                <p className= { styles.slideTitle }></p>
                <p className= { styles.slideDescription }></p>
            </div>
        </>
    );
}

export default SlideCard;