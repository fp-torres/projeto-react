import { useState } from 'react';
import styles from './Contact.module.css';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SubmitMensage from '../alert/SubmitMensage';

function Contact() {
    // Estado para guardar os dados do formulário
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    
    // 1. NOVO ESTADO: Controla a mensagem de sucesso
    const [message, setMessage] = useState('');

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        // Simulando envio...
        console.log(form);
        
        // 2. Define a mensagem de sucesso para exibir o componente
        setMessage('Mensagem enviada com sucesso!');
        
        setForm({ name: '', email: '', message: '' }); // Limpa o form

        // (Opcional) Faz a mensagem sumir após 3 segundos
        setTimeout(() => {
            setMessage('');
        }, 3000);
    }

    return (
        <section className={styles.contact_container}>
            
            <div className={styles.info_side}>
                <h1>Fale <span className={styles.highlight}>Conosco</span></h1>
                <p style={{marginBottom: '2em', color: '#ccc'}}>
                    Tem alguma dúvida sobre o Costs ou quer sugerir uma melhoria? Entre em contato!
                </p>
                
                <div className={styles.data_item}>
                    <FaWhatsapp className={styles.icon} />
                    <span>(11) 99999-9999</span>
                </div>
                <div className={styles.data_item}>
                    <FaEnvelope className={styles.icon} />
                    <span>contato@costs.com.br</span>
                </div>
                <div className={styles.data_item}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <span>Rio de Janeiro, RJ</span>
                </div>
            </div>

            <div className={styles.form_side}>
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="text" 
                        text="Seu Nome" 
                        name="name" 
                        placeholder="Digite seu nome" 
                        handleOnChange={handleChange}
                        value={form.name}
                    />
                    
                    <Input 
                        type="email" 
                        text="E-mail" 
                        name="email" 
                        placeholder="Digite seu e-mail" 
                        handleOnChange={handleChange}
                        value={form.email}
                    />

                    <div className={styles.textarea_control}>
                        <label htmlFor="message">Mensagem:</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder="Escreva sua mensagem aqui..."
                            onChange={handleChange}
                            value={form.message}
                        ></textarea>
                    </div>

                    <SubmitButton text="Enviar Mensagem" />
                </form>
                  {message && <SubmitMensage msg={message} type="success" />}
            </div>
            
          
            
        </section>
    );
}

export default Contact;