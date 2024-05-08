import styles from '/src/components/layout/promo/Promo.module.scss'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../hooks/useAuth.js";
import Button from "../../ui/Button.jsx";

const Promo = () => {

    const navigate = useNavigate();

    const {isAuth} = useAuth()

    return (
        <section className={styles.promo}>
            <div className={styles.container}>
                <div className={styles.promo__content}>
                    <div className={styles.promo__text}>
                        <div className={styles.promo__title}>
                            Если ты против нарушения пдд
                        </div>
                        <div className={styles.promo__description}>
                            Доложи на работягу
                        </div>
                        <Button clickHandler={() => navigate(isAuth ? '/apply' : '/auth')}>
                            Доложить
                        </Button>
                    </div>
                    <div>
                        <img src="/promo.png" alt="Promo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;