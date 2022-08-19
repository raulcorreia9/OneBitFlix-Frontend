import styles from '../styles/registerLogin.module.scss';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
//Components
import HeaderGeneric from '../src/components/common/headerGeneric';
import Footer from '../src/components/common/footer';
import ToastComponent from '../src/components/common/toast';
import authService from '../src/services/authService';

const Login = () => {
    const router = useRouter();
    const [ toastColor, setToastColor] = useState('');
    const [ toastIsOpen, setToastIsOpen ] = useState(false);
    const [ toastMessage, setToastMessage ] = useState('');

    const registerSuccess = router.query.registred;

    useEffect(() => {
        if(sessionStorage.getItem("onebitflix-token")) {
            router.push("/home");
        }
    }, [])

    useEffect(() => {
        if(registerSuccess === "true") {
            setToastColor('bg-success');
            setToastIsOpen(true);
            setToastMessage('Cadastro feito com sucesso!')
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
        }
    }, [router.query])

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email")!.toString();
        const password = formData.get("password")!.toString();

        const params = { email, password };
        const { status } = await authService.login(params);

        if(status === 200) {
            router.push('/home');
        } else {
            setToastColor('bg-danger');
            setToastIsOpen(true);
            setToastMessage('Email ou senha incorretos!')
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
        }
    }
    
    return (
        <>
        <Head>
            <title>Onebitflix - Login</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={ styles.main }>
            <HeaderGeneric logoUrl='/' btnUrl='/register' btnContent='Quero fazer parte'/>
            <Container className='py-5'>
                <p className={ styles.formTitle }>Bem-vindo de volta</p>
                <Form className={ styles.form } onSubmit={ handleLogin }>
                    <p className='text-center'>
                        <strong>Bem vindo ao OneBitFlix</strong>
                    </p>
                    <FormGroup>
                        <Label for="email" className={ styles.label }>
                            E-MAIL
                        </Label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="email@exemplo.com" 
                            required
                            className={ styles.input }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className={ styles.label }>
                            SENHA
                        </Label>
                        <Input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="Informe a sua senha" 
                            required
                            className={ styles.input }
                        />
                    </FormGroup>
                    <Button outline className={ styles.formBtn } type="submit">
                        ENTRAR
                    </Button>
                </Form>
            </Container>
            <Footer />
            <ToastComponent isOpen={ toastIsOpen } message={ toastMessage } color={ toastColor } />
        </main>
        </>
    );
};

export default Login;