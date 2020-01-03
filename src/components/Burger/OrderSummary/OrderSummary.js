import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {

        const ingredientSummary = Object.keys(props.ingredients)
            .map(ingKey => {
                return (
                    <li key={ingKey}>
                        <span style={{textTransform: 'capitalize'}}>
                            {ingKey}
                        </span>
                        : {props.ingredients[ingKey]}
                    </li>
                );
            });
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
                <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
            </React.Fragment>
        );
};

export default OrderSummary;