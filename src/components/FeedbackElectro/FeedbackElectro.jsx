import React from 'react';

function FeedbackElectro({
    plataformaEcommerce,
    inversion,
    canalesPublicidad,
    plataformaEmailMarketing,
    logistica,
    omnicanalidad,
    canalesComunicacion,
    tier
}) {
    let feedbackPlataformaEcommerce = "";
    let feedbackInversion = "";
    let feedbackCanalesPublicidad = "";
    let feedbackPlataformaEmailMarketing = "";
    let feedbackLogistica = "";
    let feedbackOmnicanalidad = "";
    let feedbackCanalesComunicacion = "";

    if (tier === 1) {
        // Lógica para TIER 1
        if (plataformaEcommerce === "Vtex / Magento / Hybris / Propio"){
            feedbackPlataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
        } else {
            feedbackPlataformaEcommerce = "Lo recomendable es que utilices plataformas como Vtex / Magento / Hybris / Propio"
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
            feedbackOmnicanalidad = "¡Estás por buen camino"
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
        // Lógica para TIER 2
        if (plataformaEcommerce === "Joomla / BigCommerce"){
            feedbackPlataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
        } else {
            feedbackPlataformaEcommerce = "Lo recomendable es que utilices plataformas como Joomla / BigCommerce"
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
            feedbackOmnicanalidad = "¡Estás por buen camino"
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
            feedbackPlataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
        } else {
            feedbackPlataformaEcommerce = "Lo recomendable es que utilices plataformas como WooCommerce / Shopify / Presta / e3 / Hermes"
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
            feedbackOmnicanalidad = "¡Estás por buen camino"
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
            feedbackPlataformaEcommerce = "¡Estás utilizando buenas plataformas de venta online!"
        } else {
            feedbackPlataformaEcommerce = "Lo recomendable es que utilices plataformas como Tiendanube / Mercado Shops"
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
            feedbackOmnicanalidad = "¡Estás por buen camino"
        } else {
            feedbackOmnicanalidad = "Lo recomendable es n/a"
        }

        if (canalesComunicacion === "WhatsApp / Instagram / Mail"){
            feedbackCanalesComunicacion = "¡Estás utilizando los canales de comunicación adecuados!"
        } else {
            feedbackCanalesComunicacion = "Lo recomendable es que utilices los siguientes canales de comunicación: WhatsApp / Instagram / Mail"
        }
    }

    return (
        <div className="feedback-list">
            <div className='respuestaPlataformaEcommerce'>
                <p>• {feedbackPlataformaEcommerce} Tu respuesta: {plataformaEcommerce}</p>
                <p>• {feedbackPlataformaEcommerce}</p>
            </div>
            <div className='respuestaInversion'>
                <p>• {feedbackInversion} Tu respuesta: {inversion}</p>
                <p>• {feedbackInversion}</p>
            </div>
            <div className='respuestaCanalesPublicidad'>
                <p>• {feedbackCanalesPublicidad} Tu respuesta: {canalesPublicidad}</p>
                <p>• {feedbackCanalesPublicidad}</p>
            </div>
            <div className='respuestaPlataformaEmailMarketing'>
                <p>• {feedbackPlataformaEmailMarketing} Tu respuesta: {plataformaEmailMarketing}</p>
                <p>• {feedbackPlataformaEmailMarketing}</p>
            </div>
            <div className='respuestaLogistica'>
                <p>• {feedbackLogistica} Tu respuesta: {logistica}</p>
                <p>• {feedbackLogistica}</p>
            </div>
            <div className='respuestaOmnicanalidad'>
                <p>• {feedbackOmnicanalidad} Tu respuesta: {omnicanalidad}</p>
                <p>• {feedbackOmnicanalidad}</p>
            </div>
            <div className='respuestaCanalesComunicacion'>
                <p>• {feedbackCanalesComunicacion} Tu respuesta: {canalesComunicacion}</p>
                <p>• {feedbackCanalesComunicacion}</p>
            </div>
        </div>
    );
}

export default FeedbackElectro;