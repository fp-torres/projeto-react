import styles from './Input.module.css'; // Reutiliza o CSS do seu Input normal
import { useState, useEffect } from 'react';

function InputCurrency({ text, name, placeholder, handleOnChange, value }) {
    const [displayValue, setDisplayValue] = useState("");

    useEffect(() => {
        // Se já vier um valor do banco de dados (edição), formata ele para exibir
        if (value !== undefined && value !== null) {
            formatAndSetDisplay(value);
        }
    }, [value]);

    const formatAndSetDisplay = (val) => {
        if (!val) {
            setDisplayValue("");
            return;
        }
        const numberVal = parseFloat(val);
        const formatted = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(numberVal);
        setDisplayValue(formatted);
    };

    const handleChange = (e) => {
        // 1. Pega o valor bruto digitado e remove tudo que não é dígito
        const rawValue = e.target.value.replace(/\D/g, "");
        
        // 2. Transforma em centavos (divide por 100)
        const numberValue = Number(rawValue) / 100;

        // 3. Simula o evento padrão do React para enviar o NÚMERO PURO para o pai
        // O pai (ProjectForm) vai receber ex: 2500.50
        handleOnChange({
            target: {
                name: name,
                value: numberValue 
            }
        });

        // 4. Atualiza o visual do campo para mostrar R$ 2.500,50
        formatAndSetDisplay(numberValue);
    };

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type="text"
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={displayValue}
                autoComplete="off"
            />
        </div>
    );
}

export default InputCurrency;