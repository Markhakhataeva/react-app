

export const Button = ({ bought, setBought, id }) => {
    return (
        <div className="card-button">
            <button className="btn" onClick={() => setBought(id)} disabled={bought}>
                {bought ? 'Товар добален' : 'Добавить в корзину'}
            </button>
        </div>
    );
}

