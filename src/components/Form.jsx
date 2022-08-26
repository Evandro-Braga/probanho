import emailjs from 'emailjs-com';

function Form() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_1qb5sjh',
            'template_543rr02',
            e.target,
            'UnR65prAJvZDIsVYi'
        )
            .then((result) => {
                alert("Mensagem enviada com sucesso!" + " " + result.text)
            }, (error) => {
                alert("Falha no envio da mensagem!" + " " + error)
            });
        e.target.reset();
    };

    return (
        <div className="max-w-screen-md bg-cyan-900 m-auto text-xl space-y-4 p-8 rounded-md bg-opacity-40">
            <div className='text-center text-white p-4'>
                <h2 className='text-3xl font-bold'>
                    NOS ENVIE UMA MENSAGEM
                </h2>
                <p className='text-xl'>
                    e faça o seu orçamento!
                </p>
            </div>

            <form className='space-y-4' onSubmit={sendEmail} id="contato">
                <div>
                    <div>
                        <label className="text-left text-white" htmlFor="user_name">Nome</label>
                    </div>
                    <div>
                        <input 
                        className="w-full h-8 p-2" 
                        type="text" 
                        placeholder="Nome" 
                        name="user_name" 
                        required
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label className="text-left text-white" htmlFor="user_email">Email</label>
                    </div>
                    <div>
                        <input 
                        className="w-full h-8 p-2" 
                        type="email" 
                        placeholder="Email" 
                        name="user_email" 
                        required
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label className="text-left text-white" htmlFor="user_phone">Telefone</label>
                    </div>
                    <div>
                        <input 
                        className="w-full h-8 p-2" 
                        type="text" 
                        placeholder="Telefone" 
                        name="user_phone"
                        required
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label className="text-left text-white" htmlFor="message">Mensagem</label>
                    </div>
                    <div>
                        <textarea 
                        className="w-full h-32 P-2" 
                        placeholder="Mensagem" 
                        name="message" 
                        required
                        />
                    </div>
                </div>

                <div className="text-center text-white">
                    <input className="bg-green-600 py-2 px-16 rounded-md cursor-pointer hover:bg-green-400 hover:duration-500" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form