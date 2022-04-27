import styles from '../../../styles/sections/advantages.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const Advantages = ({listData, title, buttonText}: any) => {

    return (

        <section className={styles.container}>

            <h2>{title}</h2>
            <List listData={listData} />
            <Button text={buttonText} style='cta' scrollToSection={'#contact'}/>

        </section>
            
    )

}