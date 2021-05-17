import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from './styled';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    bgColor: string;
    color: string;
}

export const Button = (props: ButtonProps) => {
    const { children, ...rest } = props;

    return (
        <Container {...rest} bgColor={props.bgColor} color={props.color}>{children}</Container>
    )
}