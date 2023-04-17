import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../conponents/Counter';

const CounterContanier = ({number, increase, decrease}) => {
    return(
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increase,
        decrease
    }
)(CounterContanier);