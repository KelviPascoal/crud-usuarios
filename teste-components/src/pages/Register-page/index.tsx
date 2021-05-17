import React, { FormEvent, useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components//Button';
import { Select } from '../../components//Select';
import { TextArea } from '../../components//Textarea';
import { Global } from '../../styles/Global';
import { CheckBox, Container, H1 } from './styles';
import { GoCheck } from "react-icons/go"
import { api } from '../../services/api';
import { useParams } from 'react-router';

interface UserProps {
    typePeople: string;
    nameValue: string;
    birthDate: string;
    selectGender: string;
    momName: string;
    cpf: string;
    voterRegistration: string;
    workCard: string;
    pisPasep: string;
    driverLlicense: string;
    identity: string;
    emittingOrgan: string;
    issueDate: string;
    email: string;
    phone: string;
    contactPhone: string;
    status: string
}


export const RegisterPage: React.FC = () => {
    const [userEdit, setUserEdit] = useState<UserProps>()

    const { id }: any = useParams();

    useEffect(() => {
        api.get('usuarios/' + id).then(response => {
            setUserEdit(response.data);
        })
    }, [id])
    console.log(userEdit);






    const genderOptions = [
        { label: 'Feminino', value: 'feminino' },
        { label: 'Masculino', value: 'masculino' }
    ]
    const [typePeople, setTypePeople] = useState('')
    const [nameValue, setNameValue] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [selectGender, setSelectGender] = useState(genderOptions[0].value);
    const [momName, setMomName] = useState('');
    const [cpf, setCpf] = useState('');
    const [voterRegistration, setVoterRegistration] = useState('');
    const [workCard, setWorkCard] = useState('');
    const [pisPasep, setPisPasep] = useState('');
    const [driverLlicense, setDriverLlicense] = useState('');
    const [identity, setIdentity] = useState('');
    const [emittingOrgan, setEmittingOrgan] = useState('');
    const [issueDate, setIssueDate] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [contactPhone, setContactPhone] = useState('');;


    useEffect(() => {
        if (userEdit) {
            setTypePeople(String(userEdit?.typePeople));
            setNameValue(String(userEdit?.nameValue));
            setBirthDate(String(userEdit?.birthDate));
            setSelectGender(String(userEdit?.selectGender));
            setMomName(String(userEdit?.momName));
            setCpf(String(userEdit?.cpf));
            setVoterRegistration(String(userEdit?.voterRegistration));
            setWorkCard(String(userEdit?.workCard));
            setPisPasep(String(userEdit?.pisPasep));
            setDriverLlicense(String(userEdit?.driverLlicense));
            setIdentity(String(userEdit?.identity));
            setEmittingOrgan(String(userEdit?.emittingOrgan));
            setIssueDate(String(userEdit?.issueDate));
            setEmail(String(userEdit?.email));
            setPhone(String(userEdit?.phone));
            setContactPhone(String(userEdit?.contactPhone));
        }


    }, [userEdit])



    function handleTest(event: FormEvent) {
        const usuario: UserProps = {
            typePeople: typePeople,
            nameValue: nameValue,
            birthDate: birthDate,
            selectGender: selectGender,
            momName: momName,
            cpf: cpf,
            voterRegistration: voterRegistration,
            workCard: workCard,
            pisPasep: pisPasep,
            driverLlicense: driverLlicense,
            identity: identity,
            emittingOrgan: emittingOrgan,
            issueDate: issueDate,
            email: email,
            phone: phone,
            contactPhone: contactPhone,
            status: "Ativo"
        }
        if (id) {
            api.put('usuarios/' + id, usuario)
        } else {

            api.post('usuarios', usuario);
        }

    }



    return (
        <>


            <H1>Dados Pessoais</H1>

            <form onSubmit={handleTest}>
                <CheckBox>
                    <Input type="radio"
                        value="juridica"
                        label="Juridica"
                        onChange={(e) => { setTypePeople(e.target.value) }} />

                    <Input type="radio"
                        label="Fisica"
                        value="fisica"
                        onChange={(e) => { setTypePeople(e.target.value) }} />
                </CheckBox>

                <Container>
                    <div>

                        <Input type="text"
                            placeholder="Nome e sobrenome" label="Nome do usuario"
                            value={nameValue}
                            getValue={value => setNameValue(value)} />




                        <Input type="text"
                            placeholder="Informe o nome da mãe" label="Nome da mãe"
                            value={momName}
                            getValue={value => setMomName(value)} />

                        <Input type="number"
                            placeholder="Informe seu documento" label="Carteira de trabalho"
                            value={workCard}
                            getValue={value => setWorkCard(value)} />

                        <Input type="number"
                            placeholder="Informe seu documento" label="Identidade"
                            value={identity}
                            getValue={value => setIdentity(value)} />
                        <Input
                            placeholder="nome_exemplo@email.com" label="E-mail"
                            value={email}
                            getValue={value => setEmail(value)} />
                    </div>
                    <div>
                        <Select options={genderOptions} label="Sexo"
                            onChange={(event) => {
                                setSelectGender(event.currentTarget.value);
                            }} >---</Select>

                        <Input type="number"
                            placeholder="000.000.000-00" label="CPF"
                            value={cpf}
                            getValue={value => setCpf(value)} />

                        <Input type="text"
                            placeholder="Informe seu documento" label="PIS/PASEP"
                            value={pisPasep}
                            getValue={value => setPisPasep(value)} />

                        <Input type="text"
                            placeholder="Informe o orgão emissor" label="Órgão emissor"
                            value={emittingOrgan}
                            getValue={value => setEmittingOrgan(value)} />

                        <Input type="number"
                            placeholder="99.99999-9999" label="Telefone"
                            value={phone}
                            getValue={value => setPhone(value)} />
                    </div>
                    <div>
                        <Input type="date"
                            placeholder="dd/mm/aaaa" label="Data de nascimento"
                            value={birthDate}
                            getValue={value => setBirthDate(value)} />

                        <Input type="number"
                            placeholder="Informe seu documento" label="Título de eleitor"
                            value={voterRegistration}
                            getValue={value => setVoterRegistration(value)} />

                        <Input type="number"
                            placeholder="Informe seu documento" label="Carteira de habilitação"
                            value={driverLlicense}
                            getValue={value => setDriverLlicense(value)} />

                        <Input type="date"
                            placeholder="dd/mm/aaaa" label="Data de emissão"
                            value={issueDate}
                            getValue={value => setIssueDate(value)} />
                        <Input type="number"
                            placeholder="99.99999-9999" label="Telefone de contato"
                            value={contactPhone}
                            getValue={value => setContactPhone(value)} />
                    </div>
                    {/* <TextArea label="Objetivo Proficional" cols={50} rows={4} getValue={value => setObjetivoProficional(value)} /> */}
                </Container>
                <Button type="submit" bgColor="#32CD32" color="#fff" ><GoCheck /></Button>
            </form>

        </>
    )
}