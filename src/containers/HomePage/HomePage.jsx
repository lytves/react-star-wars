import styles from './HomePage.module.css'
import ChooseSide from '@components/HomePage/ChooseSide'
import PropTypes from "prop-types";

const HomePage = () => {
    return (
        <>
            <h1 className="header__text">Home Page</h1>
            <ChooseSide></ChooseSide>
        </>
    )
}

export default HomePage
