import React from 'react';
import PriceOptions from '../PriceOptions/PriceOptions';

const Pricing = () => {

    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, features: [
            'Awesom Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Hudai Feature',
            'Ajira Feature'
        ]},
        {id: 2, name: 'Medium', price: 9.99, features: [
            'Everything on free',
            'Extra Feature',
            'Unnecessary Feature',
            'Hudai Feature',
            'Ajira Feature'
        ]},
        {id: 3, name: 'Premium', price: 99.99, features: [
            'Everything on Premium',
            'Extra Feature',
            'Unnecessary Feature',
            'Hudai Feature',
            'Ajira Feature'
        ]}
    ] 


    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of the Town</h2>

            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOptions
                        
                        key={option.id}
                        option = {option}

                    >
                    </PriceOptions>)
                }
            </div>
        </div>
    );
};

export default Pricing;