import Modal from 'react-modal';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi'
import { useEffect, useState } from 'react';
import { Container } from './styles'
import { api } from '../../services/api';
import { Button } from '../Button';
import { FiChevronsLeft, FiEdit, FiTrash2 } from "react-icons/fi";

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
    status: string;

}

interface NewTransactionModalProps {
    idUser: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export const DetailsUserModal = ({ isOpen, onRequestClose, idUser }: NewTransactionModalProps) => {
    const [user, setUser] = useState<UserProps>();


    useEffect(() => {
        api.get('usuarios/' + idUser).then(response => {
            setUser(response.data);
        })
    }, [idUser])

    function handleDelet() {
        api.delete("usuarios/" + idUser);
        onRequestClose();

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <Container>
                <header>
                    <h1>dados pessoais</h1>
                    <div>
                        <a href={`editar/` + idUser}><Button color="##1C1C1C" bgColor="#FFEC8B" ><FiEdit /></Button></a>
                        <Button onClick={handleDelet} color="#fff" bgColor="#CD3333"><FiTrash2 /></Button>
                        <Button color="#fff" bgColor="#3abd73"><FiChevronsLeft /></Button>
                    </div>
                </header>

                {user && <table>
                    <tr>
                        <th>Tipo de pessoa</th><td>{user.typePeople}</td>
                        <th>Nome</th><td>{user.nameValue}</td>
                    </tr>
                    <tr>
                        <th>Data de aniversario</th><td>{user.birthDate}</td>
                        <th>Sexo</th><td>{user.selectGender}</td>
                    </tr>
                    <tr>
                        <th>Nome da mãe</th><td>{user.momName}</td>
                        <th>CPF</th><td>{user.cpf}</td>
                    </tr>
                    <tr>

                        <th>Titulo de eleitor</th><td>{user.voterRegistration}</td>
                        <th>Carteira de trabalho</th><td>{user.workCard}</td>
                    </tr>
                    <tr>
                        <th>PIS/PASEP</th><td>{user.pisPasep}</td>
                        <th>Carteira de motorista</th><td>{user.workCard}</td>
                    </tr>
                    <tr>
                        <th>Identidade</th><td>{user.identity}</td>
                        <th>Orgão emissor</th><td>{user.emittingOrgan}</td>
                    </tr>
                    <tr>
                        <th>Data de emissão</th><td>{user.issueDate}</td>
                        <th>E-mail</th><td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Telefone</th><td>{user.phone}</td>
                        <th>Telefone para contato</th><td>{user.contactPhone}</td>
                    </tr>
                    <tr>
                        <th>Situação</th><td>{user.status}</td>

                    </tr>

                </table>}
            </Container>
        </Modal >
    );
}