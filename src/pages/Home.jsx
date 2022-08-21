import cuidador1 from '../assets/images/cuidador1.jpg'

export default function Home() {
    return(
        <div className='min-h-screen'>
            <div id='banner' className="bg-cuidador bg-cover h-[600px]">
                <div className="md:max-w-screen-lg m-auto text-center pt-44">
                    <h1 className="text-5xl font-light text-white italic font-['Satisfy']">
                        Precisando de um cuidador em Campo Grande?
                    </h1>
                </div>
            </div>

            <div className='p-4'>
                <div className="md:max-w-screen-lg m-auto text-center py-28" id='porque'>
                    <h2 className="text-4xl mb-8 font-bold">
                        Porque contratar um cuidador?
                    </h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                        eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                        Nunc odio enim, varius eget neque quis, pulvinar tempor orci. Nunc laoreet urna eu ante
                        consequat suscipit. Suspendisse a turpis vitae velit feugiat faucibus ut ac mauris.
                        Nunc fringilla augue sapien, sed posuere felis convallis eget.
                    </p>
                </div>
            </div>

            <div className="bg-blue-100 p-4">
                <div className="md:max-w-screen-lg m-auto py-28">
                    <img className='m-auto' src={cuidador1} alt="imagem de um cuidador" />
                </div>
            </div>

            <div className='p-4'>
                <div className="md:max-w-screen-lg m-auto text-center py-28" id='sobre'>
                    <h2 className='text-4xl mb-8 font-bold'>
                        Sobre Nós
                    </h2>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                        eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                        Nunc odio enim, varius eget neque quis, pulvinar tempor orci. Nunc laoreet urna eu ante
                        consequat suscipit. Suspendisse a turpis vitae velit feugiat faucibus ut ac mauris.
                    </p>
                </div>
            </div>

            <div id='servicos' className='bg-blue-100'>
                <div className="md:max-w-screen-lg m-auto text-center py-28" id='sobre'>
                    <h2 className='text-4xl mb-8 font-bold'>
                        Serviços
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16'>
                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/ios-glyphs/90/000000/shower.png" />
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
                            <img className='m-auto' src="https://img.icons8.com/ios-glyphs/90/000000/teacher.png" />
                            <h3 className='text-2xl'>
                                Treinamento para a familia
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci..
                            </p>
                        </div>

                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/ios-glyphs/90/000000/full-family.png" />
                            <h3 className='text-2xl'>
                                Assistente social
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci.
                            </p>
                        </div>

                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/ios-glyphs/90/000000/clock--v3.png" />
                            <h3 className='text-2xl'>
                                Cuidado 24 horas
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus
                                eget orci rutrum, ut vestibulum ipsum vulputate. Proin nec nibh et sem faucibus auctor.
                                Nunc odio enim, varius eget neque quis, pulvinar tempor orci.
                            </p>
                        </div>

                        <div className='space-y-4 p-4'>
                            <img className='m-auto' src="https://img.icons8.com/ios-glyphs/90/000000/bandage.png" />
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
        </div>
    )
}