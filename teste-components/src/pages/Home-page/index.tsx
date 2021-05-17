import { Button } from "../../components/Button"
import { Table } from "../../components/Table"
import { Container } from "./styles"
import { GoChevronDown, GoPlus, GoSearch } from "react-icons/go";
import { Input } from "../../components/Input"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DetailsUserModal } from '../../components/Modal/index';


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

export const HomePage: React.FC = () => {



    const [modalIsOpen, setModalIsOpen] = useState(false)


    const [search, setSearch] = useState('')
    const [users, setUsers] = useState<UserProps[]>([]);
    const [filterUsers, setFilterUsers] = useState<UserProps[]>(users)

    useEffect(() => {
        api.get("usuarios").then(response => {
            setUsers(response.data);
        })
    }, [])
    useEffect(() => {
        if (search != '') {
            setFilterUsers(users.filter((u: UserProps) => u.nameValue.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        } else {
            setFilterUsers(users)
        }

    }, [users, search]);




    return (
        <>

            <Container>
                <h1>Tabela de usuários</h1>
                <header>

                    <Input
                        placeholder={`Buscar`}
                        value={search}
                        onChange={event => { setSearch(event.target.value) }} />
                    <div>
                        <a href="/cadastrar">
                            <Button bgColor="#FFDB66" color="#505050">
                                <i><GoPlus /></i><span>Novo usuário</span></Button>
                        </a>
                        <Button bgColor="#9CD2EA" color="#fff"><span>Ordernar por</span><i><GoChevronDown /></i></Button>
                    </div>
                </header>
                <Table data={filterUsers} />
            </Container>
        </>
    )
}