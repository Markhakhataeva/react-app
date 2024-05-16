import React from 'react';
import {Card} from "./Card";


export const Content = ({database,setBought}) => {




    return (
        <div className="content">
            {
                database.map((product) => <Card product={product} key={product.id} setBought={setBought} />)
            }
        </div>
    );
}
