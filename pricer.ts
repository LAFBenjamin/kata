export const pricer = ({
    itemPrice,
    quantity,
    tax
}: {
    itemPrice: number,
    quantity: number,
    tax: number
}) => {
    const priceHT = quantity * itemPrice;
    const discountRate = getDiscountRate(priceHT);
    
    const priceHTWithDiscount = priceHT *(1-discountRate/100);

    const taxAmount = (priceHTWithDiscount * tax) / 100;
    const finalyPrice = priceHTWithDiscount + taxAmount;

    return `${finalyPrice.toFixed(2)} €`
}


const getDiscountRate = (priceHT : number) : number =>{ 
    if(priceHT >= 5000) 
        return 5;
    if(priceHT >= 1000)
        return 3

    return 0;
}
