import Head from "next/head";
import { Button, Col, Container, Row } from "reactstrap";
//Components
import HeaderAuth from "../src/components/common/headerAuth";
import UserForm from "../src/components/profile/user";
import Footer from "../src/components/common/footer";
import { useState } from 'react';

import styles from "../styles/profile.module.scss";
import PasswordForm from "../src/components/profile/password";

const UserInfo = () => {
    const [form, setForm] = useState("userForm");

    return (
        <>
            <Head>
                <title>Onebitflix - Meus dados</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div className={ styles.header }>
                    <HeaderAuth />
                </div>
                <Container className="py-5">
                    <p className={ styles.title }>Minha Conta</p>
                    <Row className="pt-3 pb-5">
                        <Col md={4} className={ styles.btnColumn }>
                            <Button 
                                className={ styles.renderForm } 
                                onClick={() => {setForm("userForm")}}
                                style={{color: form === "userForm" ? "#FF0044" : "white"}}
                            >
                                DADOS PESSOAIS
                            </Button>
                            <Button 
                                className={ styles.renderForm }
                                onClick={() => {setForm("passwordForm")}}
                                style={{color: form === "passwordForm" ? "#FF0044" : "white"}}
                            >
                                SENHA
                            </Button>
                        </Col>
                        <Col md>
                            { form === "userForm" ? <UserForm/> : <PasswordForm /> }
                        </Col>
                    </Row>
                </Container>
                <div className={ styles.footer }>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default UserInfo;