import { TextareaHTMLAttributes } from "react"
import { Container } from "../Textarea/styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    getValue: (value: string) => void;
}

export const TextArea = (props: TextAreaProps) => {
    const { getValue, label, ...rest } = props;

    return (
        <Container>
            <span>{label}</span>
            <textarea {...rest} onChange={e => getValue && getValue(e.target.value)}></textarea>


        </Container>
    )
}