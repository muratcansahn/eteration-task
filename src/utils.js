 
    export const calcTotalPrice = (cart) => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.amount;
        });
        return total;
    };