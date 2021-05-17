import { SelectHTMLAttributes, useState } from "react";
import { Container } from "../Select/styles";

interface SelectOptions {
    label: string;
    value: any;

}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOptions[];
    label?: string;
}


export const Select = (props: SelectProps) => {
    const [dataOption, setDataOption] = useState(false)
    const { options, label, ...rest } = props;

    return (
        <Container>
            <span>{label}</span>

            <select {...rest}>
                {options.map((option, i) => <option key={i} value={option.value}>
                    {option.label}
                </option>)}

            </select>
        </Container>
    )
}