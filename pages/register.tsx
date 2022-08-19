import styles from '../styles/registerLogin.module.scss';
import Head from 'next/head';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useRouter } from 'next/router';
//Components
import HeaderGeneric from '../src/components/common/headerGeneric';
import Footer from '../src/components/common/footer';
import { FormEvent, useEffect, useState } from 'react';
//Services
import authService from '../src/services/authService';
import ToastComponent from '../src/components/common/toast';

const Register = () => {
    const router = useRouter();
    const [ toastIsOpen, setToastIsOpen ] = useState(false);
    const [ toastMessage, setToastMessage ] = useState('');

    useEffect(() => {
        if(sessionStorage.getItem("onebitflix-token")) {
            router.push("/home");
        }
    }, [])


    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //Captura valor dos inputs
        const formData = new FormData(event.currentTarget);
        //Inputs
        const firstName = formData.get("firstName")!.toString();
        const lastName = formData.get("lastName")!.toString();
        const phone = formData.get("phone")!.toString();
        const birth = formData.get("birth")!.toString();
        const email = formData.get("email")!.toString();
        const password = formData.get("password")!.toString();
        //confirmação apenas no front
        const confirmPassword = formData.get("confirmPassword")!.toString();
        
        const params = { firstName, lastName, phone, birth, email, password };

        if(password != confirmPassword) {
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage("Os campos de senha devem coincidir");

            return;
        }

        const { data, status } = await authService.register(params);

        if(status === 201) {
            router.push("/login?registred=true");
        } else {
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage(data.message);
        }
    };


    return(
        <>
            <Head> 
                <title>Onebitflix - Registro</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                {/* Masks */}
                <script src="https://jsuites.net/v4/jsuites.js"></script>
            </Head>
            <main className={ styles.main }>
                <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Quero fazer login' />
                <Container className='py-5'>
                    <p className={ styles.formTitle }>Bem-vindo ao Onebitflix</p>
                    <Form className={ styles.form } onSubmit={ handleRegister }>
                        <p className='text-center'><strong>Faça a sua conta!</strong></p>
                        <FormGroup>
                            <Label for='firstName' className={ styles.label }>NOME</Label>
                            <Input 
                                id='firstName' 
                                name='firstName' 
                                type='text' 
                                placeholder='Informe o seu nome...'
                                required
                                maxLength={ 20 }
                                className={ styles.inputName }
                            />      
                        </FormGroup>
                        <FormGroup>
                            <Label for='lastName' className={ styles.label }>SOBRENOME</Label>
                            <Input 
                                id='lastName' 
                                name='lastName' 
                                type='text' 
                                placeholder='Informe o seu sobrenome...'
                                required
                                maxLength={ 20 }
                                className={ styles.inputName }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='phone' className={ styles.label }>WHATSAPP / TELEGRAM</Label>
                            <Input 
                                id='phone' 
                                name='phone' 
                                type='tel' 
                                placeholder='(xx) 9xxxx-xxxx'
                                data-mask="[-]+55 (00) 00000-0000"
                                required
                                className={ styles.input }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='email' className={ styles.label }>EMAIL</Label>
                            <Input 
                                id='email' 
                                name='email' 
                                type='email' 
                                placeholder='seu-email@exemplo.com'
                                required
                                className={ styles.input }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='birth' className={ styles.label }>DATA DE NASCIMENTO</Label>
                            <Input 
                                id='birth' 
                                name='birth' 
                                type='date'
                                min="1930-01-01"
                                max="2022-12-31"
                                required
                                className={ styles.input }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password' className={ styles.label }>SENHA</Label>
                            <Input 
                                id='password' 
                                name='password' 
                                type='password' 
                                placeholder='informe a sua senha (Min: 6)'
                                minLength={ 6 }
                                maxLength={ 20 }
                                required
                                className={ styles.input }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='confirmPassword' className={ styles.label }>CONFIRME SUA SENHA</Label>
                            <Input 
                                id='confirmPassword' 
                                name='confirmPassword' 
                                type='password' 
                                placeholder='confirme a sua senha (Min: 6)'
                                minLength={ 6 }
                                maxLength={ 20 }
                                required
                                className={ styles.input }
                            />
                        </FormGroup>
                        <Button type='submit' outline className={ styles.formBtn }>
                            CADASTRAR
                        </Button>
                    </Form>
                </Container>
                <Footer />
                <ToastComponent isOpen={ toastIsOpen } message={ toastMessage } color='bg-danger' />
            </main>
        </>
    );
};

export default Register;