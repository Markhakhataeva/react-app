
export const Button = ({setBought,id,bought}) => {
    return (
        <div className='card-button'>
            <button className='btn' onClick={()=>setBought(id)} disabled={bought}>{bought ? "Добавлено в корзину" :"Добавить в корзину"}</button>
        </div>
    );
}

