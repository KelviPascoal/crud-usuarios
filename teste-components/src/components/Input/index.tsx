import { InputHTMLAttributes } from "react";
import { Container } from "./styles"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    getValue?: (value: string) => void;
    label?: string;
};

export const Input = (props: InputProps) => {
    const { getValue, label, ...rest } = props;

    return (
        <Container>
            <span>{label}</span>
            <input
                onChange={e => getValue && getValue(e.target.value)}
                {...rest}
            />
        </Container>
    )
}



// select 
// textarea