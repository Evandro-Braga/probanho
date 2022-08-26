import imgCuidador from '../assets/images/img-idoso.jpg'
import imgCuidador2 from '../assets/images/img-idoso-2.jpg'
import Form from '../components/Form'

function Home() {
    return(
        <div className='min-h-screen'>
            <div id='banner' className="bg-bg-banner bg-cover h-[600px]">
                <div className="md:max-w-screen-lg m-auto text-center pt-44">
                    <h1 className="text-5xl font-light text-white italic font-['Satisfy']">
                        Precisando de um cuidador em Campo Grande?
                    </h1>
                </div>
            </div>

            <div className='px-4 py-28'>
                <div className="md:max-w-screen-lg m-auto">
                    <img className='m-auto rounded-md' src={imgCuidador} alt="imagem de um cuidador" />
                </div>
            </div>

            <div className="bg-gradient-to-b from-cyan-800 to-cyan-900">
                <div className='max-w-screen-xl m-auto text-white py-32 px-2 md:px-0' id='sobre'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8'>
                        <div className='text-center'>
                            <h2 className='text-2xl mb-8 font-bold'>
                                NOSSA MISSÃO
                            </h2>
                            <p className='text-lg'>
                                Através do cuidado humanizado poder promover segurança, bem-estar e melhoria da qualidade de vida de seus pacientes no conforto do seu lar.
                            </p>
                        </div>
                        <div className='text-center'>
                            <h2 className="text-2xl mb-8 font-bold">
                                PORQUE CONTRATAR UM CUIDADOR?
                            </h2>
                            <p className="text-lg">
                                Mais do que evitar acidentes, os cuidadores oferecem total apoio na rotina do idoso, atuando, inclusive, na adoção de hábitos saudáveis. Eles oferecem auxílio na alimentação, minimizando riscos de desnutrição e desidratação. Além disso, podem ajudar o idoso na realização de atividades físicas.
                            </p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-2xl mb-8 font-bold'>
                                VISÃO E VALORES
                            </h2>
                            <p className='text-lg'>
                                Comprometimento, paciência e dedicação em cuidar de quem você mais ama, de maneira humanizada e acolhedora.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 py-28'>
                <div className="md:max-w-screen-lg m-auto">
                    <img className='m-auto rounded-md' src={imgCuidador2} alt="segunda imagem de um cuidador" />
                </div>
            </div>

            <div id='servicos' className='bg-gradient-to-b from-cyan-800 to-cyan-900'>
                <div className="md:max-w-screen-xl m-auto text-center py-28 text-white" id='sobre'>
                    <h2 className='text-3xl mb-8 font-bold'>
                        SERVIÇOS
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16'>
                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/color/96/000000/bath.png" />
                            <h3 className='text-2xl'>
                                Banho no leito
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci.
                            </p>
                        </div>

                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/color/96/000000/personal-trainer.png" />
                            <h3 className='text-2xl'>
                                Treinamento para a familia
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci.
                            </p>
                        </div>

                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/color/96/000000/defend-family--v2.png" />
                            <h3 className='text-2xl'>
                                Assistencia social
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci.
                            </p>
                        </div>

                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/color/96/000000/clock--v1.png" />
                            <h3 className='text-2xl'>
                                Cuidado 24H
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci.
                            </p>
                        </div>

                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/color/96/000000/doctors-bag.png" />
                            <h3 className='text-2xl'>
                                Curativos
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-2 py-16 md:px-16 space-y-8 bg-bg-contato bg-cover'>
                <Form></Form>
            </div>
        </div>
    )
}

export default Home