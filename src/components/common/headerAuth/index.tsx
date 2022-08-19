import Link from 'next/link';
import { Container, Form, Input } from 'reactstrap';
import styles from './styles.module.scss';
import Modal from 'react-modal';
import { useState } from 'react';
import { useRouter } from 'next/router';

Modal.setAppElement("#__next");

const HeaderAuth = () => {

    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleLogout = () => {
        sessionStorage.clear();
        router.push("/");
    }

    return(
        <>
            <Container className={ styles.nav }>
                <Link href="/home">
                    <img 
                        src="/logoOnebitflix.svg" 
                        alt="logo onebitflix" 
                        className={ styles.imgLogoNav }
                    />
                </Link>
                <div className='d-flex align-items-center'>
                    <Form>
                        <Input 
                            name='search' 
                            type='search' 
                            placeholder='Pesquisar' 
                            className={ styles.input }
                        />
                    </Form>
                    <img 
                        src="/homeAuth/iconSearch.svg" 
                        alt="lupa header" 
                        className={ styles.searchImg }
                    />
                    <p className={ styles.userProfile } onClick={ handleOpenModal }>AB</p>
                </div>
                <Modal 
                    isOpen={ modalOpen } 
                    onRequestClose={ handleCloseModal } 
                    shouldCloseOnEsc={ true }
                    className={ styles.modal }
                    overlayClassName={ styles.overlayModal }
                >   
                    <Link href="/profile">
                        <p className={ styles.modalLink }>Meus Dados</p>
                    </Link>
                    <p className={ styles.modalLink } onClick={ handleLogout }>Sair</p>
                </Modal>
            </Container>
        </>
    );
};

export default HeaderAuth;