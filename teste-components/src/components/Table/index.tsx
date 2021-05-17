import { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { DetailsUserModal } from '../Modal'
import { Container } from "./styles";
import Modal from 'react-modal';

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
    id: string;

}


// interface TableProps extends TableHTMLAttributes<HTMLTableCaptionElement> {

// }

export const Table = (props: any) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [idUser, setIdUser] = useState('');
    const { data, ...rest } = props;
    const [arreyUser, setArreyUser] = useState<UserProps[]>(data)

    useEffect(() => {
        setArreyUser(data)

    }, [modalIsOpen, data])

    console.log(modalIsOpen);


    function handleClick(id: string) {
        setIdUser(id);
        setModalIsOpen(true)
    }



    return (
        <>
            <DetailsUserModal
                idUser={idUser}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)} />
            <Container>
                <table >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Situação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arreyUser && arreyUser.map((user: UserProps) =>
                            <tr key={user.nameValue}>
                                <td>{user.nameValue}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td><button onClick={() => handleClick(user.id)}> <HiOutlineDotsVertical /></button></td>

                                {/* <a><td>{canditate.Professionalgoal}</td></a> */}
                            </tr>

                        )}
                    </tbody>
                </table>
            </Container >

        </>

    )
}