// como usar o 'useState'
import { useState } from 'react';
// criando propriedades
interface ButtonProps {
    color: string
    children: string
}

// utilizando as propriedades
export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1)// retorna duas variáveis

    function increment() {
        setCounter(counter + 1)// muda valor de uma nova variável
    }
    return (
        <button
            type="button"
            style={{ backgroundColor: props.color}}
            onClick={increment}
        >
            {props.children} <strong>{counter}</strong>
        </button>
    );
}

// 'interface' é igual a 'type'
// as propriedades tem que ser criadas aqui primeiro para então serem utilizadas
