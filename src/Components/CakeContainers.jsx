import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/Cake/CakeActions'

function CakeContainers(props) {

    return (
        <div>
            <h1>Number of cakes - {props.numberOfCake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// to acces the redux state
const mapStateToProps = state => {
    return {
        numberOfCake: state.numberOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (CakeContainers)
