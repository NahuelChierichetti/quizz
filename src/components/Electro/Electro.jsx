import React, { useState, useEffect } from 'react';
import preguntasElectro from '../../data/electro';
import './Electro.css';

function Electro() {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestasUsuario, setRespuestasUsuario] = useState({});
    const [puntajeTotal, setPuntajeTotal] = useState(0);
    const [tier, setTier] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [feedbackTier, setFeedbackTier] = useState("");
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    const [imagenFondo, setImagenFondo] = useState(preguntasElectro.preguntas[0].imagen);
    const [plataformaEcommerceFeedbackStyle, setPlataformaEcommerceFeedbackStyle] = useState('');

    useEffect(() => {
        // Actualizar la imagen de fondo en función de la pregunta actual
        setImagenFondo(preguntasElectro.preguntas[preguntaActual].imagen);
    }, [preguntaActual]);

    useEffect(() => {
        if (preguntaActual >= 3) {
            // Calcular puntaje total basado en las respuestas del usuario
            let nuevoPuntajeTotal = 0;
            for (let pregunta = 0; pregunta < 3; pregunta++) {
                const respuesta = respuestasUsuario[pregunta];
                nuevoPuntajeTotal += Number(respuesta);
            }

            // Determinar el TIER basado en el puntaje total
            let nuevoTier = null;
            if (nuevoPuntajeTotal >= 10) {
                nuevoTier = 1;
            } else if (nuevoPuntajeTotal >= 7) {
                nuevoTier = 2;
            } else if (nuevoPuntajeTotal >= 4) {
                nuevoTier = 3;
            } else {
                nuevoTier = 4;
            }
            
            setPuntajeTotal(nuevoPuntajeTotal);
            setTier(nuevoTier);
        }
    }, [preguntaActual, respuestasUsuario]);

    const handleRespuesta = (valorRespuesta) => {
        setRespuestasUsuario((prevRespuestas) => ({
            ...prevRespuestas,
            [preguntaActual]: valorRespuesta
        }));
    
        // Mostrar la siguiente pregunta después de responder
        if (preguntaActual < preguntasElectro.preguntas.length - 1) {
            setPreguntaActual((prevPregunta) => prevPregunta + 1);
        }
    };

    // Acciones luego de completar el formulario y apretar Enviar formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Respuestas del usuario:', respuestasUsuario);
        mostrarFeedback();
    };

    
    const mostrarFeedback = () => {
        // Verificar que el usuario haya respondido las preguntas 4 a 10
        if (Object.keys(respuestasUsuario).length === preguntasElectro.preguntas.length) {
            const plataformaEcommerce = respuestasUsuario[3];
            const inversion = respuestasUsuario[4];
            const canalesPublicidad = respuestasUsuario[5];
            const plataformaEmailMarketing = respuestasUsuario[6];
            const logistica = respuestasUsuario[7];
            const omnicanalidad = respuestasUsuario[8];
            const canalesComunicacion = respuestasUsuario[9];

            let feedbackplataformaEcommerce = "";
            let feedbackInversion = "";
            let feedbackCanalesPublicidad = "";
            let feedbackPlataformaEmailMarketing = "";
            let feedbackLogistica = "";
            let feedbackOmnicanalidad = "";
            let feedbackCanalesComunicacion = "";

            if (tier === 1) {
                // Lógica para TIER 1
                if (plataformaEcommerce === "Vtex / Magento / Hybris / Propio"){
                    feedbackplataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
                } else {
                    feedbackplataformaEcommerce = "Lo recomendable es que utilices plataformas como Vtex / Magento / Hybris / Propio"
                }

                if (inversion === "3% a 5%"){
                    feedbackInversion = "¡Estás realizando bien tu inversión"
                } else {
                    feedbackInversion = "Lo recomendable es que inviertas de 3% a 5%"
                }

                if(canalesPublicidad === "Meta / Google / Youtube / Tik tok / Canales tradicionales / Retail Media"){
                    feedbackCanalesPublicidad = "!Estás utilizando los canales de publicidad correctos!"
                } else {
                    feedbackCanalesPublicidad = "Lo recomendable es que utilices Meta / Google / Youtube / Tik tok / Canales tradicionales / Retail Media"
                }

                if (plataformaEmailMarketing === "Woow Up / Salesforce / Eloqua") {
                    feedbackPlataformaEmailMarketing = "¡Estás utilizando bien los canales de comunicación!";
                } else {
                    feedbackPlataformaEmailMarketing = "Lo recomendable es que utilices Woow Up / Salesforce / Eloqua";
                }

                if (logistica === "Entrega a domicilio / Puntos de tercero / Pick up store / Same day /Ship From store"){
                    feedbackLogistica = "¡Estás implementando una logística correcta!"
                } else {
                    feedbackLogistica = "Lo recomendable es que utilices la siguiente logística Entrega a domicilio / Puntos de tercero / Pick up store / Same day /Ship From store"
                }

                if (omnicanalidad === "Kiosk In / Integrac. BD / Política de promociones / Integración de stock off - on"){
                    feedbackOmnicanalidad = "¡Estás por buen camino!"
                } else {
                    feedbackOmnicanalidad = "Lo recomendable es Kiosk In / Integrac. BD / Política de promociones / Integración de stock off - on"
                }

                if (canalesComunicacion === "WhatsApp saliente - entrante/ Instagram / Mail / Chatbot / Teléfono"){
                    feedbackCanalesComunicacion = "¡Estás utilizando los canales de comunicación adecuados!"
                } else {
                    feedbackCanalesComunicacion = "Lo recomendable es que utilices los siguientes canales de comunicación: WhatsApp saliente - entrante/ Instagram / Mail / Chatbot / Teléfono"
                }

            } else if (tier === 2) {
                // Lógica para TIER 2
                if (plataformaEcommerce === "Joomla / BigCommerce"){
                    feedbackplataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
                } else {
                    feedbackplataformaEcommerce = "Lo recomendable es que utilices plataformas como Joomla / BigCommerce"
                }

                if (inversion === "5% a 7%"){
                    feedbackInversion = "¡Estás realizando bien tu inversión"
                } else {
                    feedbackInversion = "Lo recomendable es que inviertas de 5% a 7%"
                }

                if(canalesPublicidad === "Meta / Google / YouTube / Programática"){
                    feedbackCanalesPublicidad = "!Estás utilizando los canales de publicidad correctos!"
                } else {
                    feedbackCanalesPublicidad = "Lo recomendable es que utilices Meta / Google / YouTube / Programática"
                }

                if (plataformaEmailMarketing === "Icomm / Woow Up / Salesforce") {
                    feedbackPlataformaEmailMarketing = "¡Estás utilizando bien los canales de comunicación!";
                } else {
                    feedbackPlataformaEmailMarketing = "Lo recomendable es que utilices Icomm / Woow Up / Salesforce";
                }

                if (logistica === "Entrega a domicilio / Puntos de tercero / Pick up store / Same day"){
                    feedbackLogistica = "¡Estás implementando una logística correcta!"
                } else {
                    feedbackLogistica = "Lo recomendable es que utilices la siguiente logística Entrega a domicilio / Puntos de tercero / Pick up store / Same day"
                }

                if (omnicanalidad === "Integrac. BD / Integrac. stock"){
                    feedbackOmnicanalidad = "¡Estás por buen camino!"
                } else {
                    feedbackOmnicanalidad = "Lo recomendable es Integrac. BD / Integrac. stock"
                }

                if (canalesComunicacion === "WhatsApp / Instagram / Mail / Chatbot / Teléfono"){
                    feedbackCanalesComunicacion = "¡Estás utilizando los canales de comunicación adecuados!"
                } else {
                    feedbackCanalesComunicacion = "Lo recomendable es que utilices los siguientes canales de comunicación: WhatsApp / Instagram / Mail / Chatbot / Teléfono"
                }

            } else if (tier === 3) {
                // Lógica para TIER 3
                if (plataformaEcommerce === "WooCommerce / Shopify / Presta / e3 / Hermes"){
                    feedbackplataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
                } else {
                    feedbackplataformaEcommerce = "Lo recomendable es que utilices plataformas como WooCommerce / Shopify / Presta / e3 / Hermes"
                }

                if (inversion === "7% a 10%"){
                    feedbackInversion = "¡Estás realizando bien tu inversión"
                } else {
                    feedbackInversion = "Lo recomendable es que inviertas de 7% a 10%"
                }

                if(canalesPublicidad === "Meta / Google / YouTube"){
                    feedbackCanalesPublicidad = "!Estás utilizando los canales de publicidad correctos!"
                } else {
                    feedbackCanalesPublicidad = "Lo recomendable es que utilices Meta / Google / YouTube"
                }

                if (plataformaEmailMarketing === "Emblue / Mailup") {
                    feedbackPlataformaEmailMarketing = "¡Estás utilizando bien los canales de comunicación!";
                } else {
                    feedbackPlataformaEmailMarketing = "Lo recomendable es que utilices Emblue / Mailup";
                }

                if (logistica === "Entrega a domicilio / Puntos de tercero / Pick up store"){
                    feedbackLogistica = "¡Estás implementando una logística correcta!"
                } else {
                    feedbackLogistica = "Lo recomendable es que utilices la siguiente logística Entrega a domicilio / Puntos de tercero / Pick up store"
                }

                if (omnicanalidad === "Integrac. BD"){
                    feedbackOmnicanalidad = "¡Estás por buen camino!"
                } else {
                    feedbackOmnicanalidad = "Lo recomendable es Integrac. BD"
                }

                if (canalesComunicacion === "WhatsApp / Instagram / Mail"){
                    feedbackCanalesComunicacion = "¡Estás utilizando los canales de comunicación adecuados!"
                } else {
                    feedbackCanalesComunicacion = "Lo recomendable es que utilices los siguientes canales de comunicación: WhatsApp / Instagram / Mail"
                }

            } else {
                // Lógica para TIER 4
                if (plataformaEcommerce === "Tiendanube / Mercado Shops"){
                    feedbackplataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
                } else {
                    feedbackplataformaEcommerce = "Lo recomendable es que utilices plataformas como Tiendanube / Mercado Shops"
                }

                if (inversion === "10% a 15%"){
                    feedbackInversion = "¡Estás realizando bien tu inversión"
                } else {
                    feedbackInversion = "Lo recomendable es que inviertas de 10% a 15%"
                }

                if(canalesPublicidad === "Meta / Google"){
                    feedbackCanalesPublicidad = "!Estás utilizando los canales de publicidad correctos!"
                } else {
                    feedbackCanalesPublicidad = "Lo recomendable es que utilices Meta / Google"
                }

                if (plataformaEmailMarketing === "Mailchimp / Perfit") {
                    feedbackPlataformaEmailMarketing = "¡Estás utilizando bien los canales de comunicación!";
                } else {
                    feedbackPlataformaEmailMarketing = "Lo recomendable es que utilices Mailchimp / Perfit";
                }

                if (logistica === "Entrega a domicilio / Puntos de tercero"){
                    feedbackLogistica = "¡Estás implementando una logística correcta!"
                } else {
                    feedbackLogistica = "Lo recomendable es que utilices la siguiente logística Entrega a domicilio / Puntos de tercero"
                }

                if (omnicanalidad === "n/a"){
                    feedbackOmnicanalidad = "¡Estás por buen camino!"
                } else {
                    feedbackOmnicanalidad = "Lo recomendable es n/a"
                }

                if (canalesComunicacion === "WhatsApp / Instagram / Mail"){
                    feedbackCanalesComunicacion = "¡Estás utilizando los canales de comunicación adecuados!"
                } else {
                    feedbackCanalesComunicacion = "Lo recomendable es que utilices los siguientes canales de comunicación: WhatsApp / Instagram / Mail"
                }

            }

            // Almacenar el mensaje de feedback del TIER y el puntaje total
            setFeedbackTier(`TIER ${tier}`);

            const feedbackFinal = (
                <div className="feedback-list">
                    <p className='description-feedback'>A continuación vamos a ver tus respuestas y te vamos a sugerir dependiendo a tu TIERN</p>
                    <div className='containerRespuesta respuestaPlataformaEcommerce'>
                        <h4 className='title-respuesta'>¿Qué plataforma utilizas para vender?</h4>
                        <p>Tu respuesta: {plataformaEcommerce}</p>
                        <p>{feedbackplataformaEcommerce}</p>
                    </div>
                    <div className='containerRespuesta respuestaInversion'>
                        <h4 className='title-respuesta'>¿Cuál es tu % de inversión?</h4>
                        <p>Tu respuesta: {inversion}</p>
                        <p>{feedbackInversion}</p>
                    </div>
                    <div className='containerRespuesta respuestaCanalesPublicidad'>
                        <h4 className='title-respuesta'>¿Qué canales de publicidad utilizas?</h4>
                        <p>Tu respuesta: {canalesPublicidad}</p>
                        <p>{feedbackCanalesPublicidad}</p>
                    </div>
                    <div className='containerRespuesta respuestaPlataformaEmailMarketing'>
                        <h4 className='title-respuesta'>¿Qué plataforma de Email Marketing utilizas?</h4>
                        <p>Tu respuesta: {plataformaEmailMarketing}</p>
                        <p>{feedbackPlataformaEmailMarketing}</p>
                    </div>
                    <div className='containerRespuesta respuestaLogistica'>
                        <h4 className='title-respuesta'>¿Cuál es la logística que implementas?</h4>
                        <p>Tu respuesta: {logistica}</p>
                        <p>{feedbackLogistica}</p>
                    </div>
                    <div className='containerRespuesta respuestaOmnicanalidad'>
                        <h4 className='title-respuesta'>Omnicanalidad</h4>
                        <p>Tu respuesta: {omnicanalidad}</p>
                        <p>{feedbackOmnicanalidad}</p>
                    </div>
                    <div className='containerRespuesta respuestaCanalesComunicacion'>
                        <h4 className='title-respuesta'>¿Qué canales de comunicación utilizas?</h4>
                        <p>Tu respuesta: {canalesComunicacion}</p>
                        <p>{feedbackCanalesComunicacion}</p>
                    </div>
                </div>
            );
            setFeedback(feedbackFinal);

            // Ocultar el formulario luego de mostrar el feedback
            setMostrarFormulario(false);
        };
    }

    return (
        <div className='container-principal'>
            <div className={mostrarFormulario ? 'bg-weare' : 'bg-weare-hidden'} style={{display: mostrarFormulario ? 'block' : 'none', backgroundImage: `url(${imagenFondo})`}}></div>
            <div className={`box-quizz ${!mostrarFormulario ? 'box-quizz-completed' : ''}`}>
                <div className="container-quizz">
                    <p className="etiqueta-quizz">Electro</p>
                    {mostrarFormulario && preguntaActual < preguntasElectro.preguntas.length ? (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <p className="numero-pregunta">{preguntaActual + 1}/{preguntasElectro.preguntas.length}</p>
                                <p className='titulo-pregunta'>{preguntasElectro.preguntas[preguntaActual].pregunta}</p>
                                <div className="opciones-container">
                                    {preguntasElectro.preguntas[preguntaActual].respuestas.map((respuesta, index) => (
                                        <button
                                            key={index}
                                            className={`btn-opcion ${respuestasUsuario[preguntaActual] === respuesta.valor ? 'seleccionado' : ''}`}
                                            onClick={() => handleRespuesta(respuesta.valor)}
                                        >
                                            {respuesta.texto}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div>
                            <p className='quizzComplete'>¡Cuestionario completado!</p>
                        </div>
                    )}
                    {feedback && (
                        <div className='feedback'>
                            <h2>{feedbackTier}</h2>
                            <p>{feedback}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Electro;