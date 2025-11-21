import { useState } from 'react';
import styles from './Contact.module.css';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
    // Estado para guardar os dados do formulário
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    // Função para atualizar o estado quando digita
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // Função de envio (simulação)
    function handleSubmit(e) {
        e.preventDefault(); // Não recarrega a página
        console.log(form);
        alert(`Obrigado, ${form.name}! Sua mensagem foi enviada (simulação).`);
        // Aqui entraria a integração com EmailJS ou Backend
        setForm({ name: '', email: '', message: '' }); // Limpa o form
    }

    return (
        <section className={styles.contact_container}>
            
            {/* Lado Esquerdo: Infos */}
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

            {/* Lado Direito: Formulário */}
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

                    {/* Textarea manual pois não temos componente pronto */}
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
            </div>

        </section>
    );
}

export default Contact;