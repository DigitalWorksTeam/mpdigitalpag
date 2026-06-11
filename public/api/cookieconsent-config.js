import * as CookieConsent from 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.esm.js';

const CAT_NECESSARY = "necessary";

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left"
        },
        preferencesModal: {
            layout: "box",
            position: "right"
        }
    },

    categories: {
        [CAT_NECESSARY]: {
            enabled: true,
            readOnly: true
        }
    },

    language: {
        default: 'es',

        translations: {
            es: {
                consentModal: {
                    title: "Información sobre cookies",
                    description:
                        "Este sitio no utiliza cookies de análisis, publicidad ni seguimiento. Solo pueden emplearse mecanismos técnicos necesarios para su funcionamiento y seguridad.",
                    acceptAllBtn: "Entendido",
                    footer: `<span>MP Digital SpA  - ${new Date().getFullYear()}</span>`
                },

                preferencesModal: {
                    title: "Información sobre cookies",
                    acceptAllBtn: "Entendido",
                    closeIconLabel: "Cerrar",

                    sections: [
                        {
                            title: "Uso de cookies",
                            description:
                                "MP Digital no utiliza cookies con fines analíticos, publicitarios o de seguimiento. El sitio es principalmente informativo."
                        },

                        {
                            title: "Cookies esenciales",
                            description:
                                "El sitio utiliza servicios de infraestructura y seguridad que pueden emplear cookies técnicas necesarias para proteger la navegación y garantizar la disponibilidad del servicio.",
                            linkedCategory: CAT_NECESSARY
                        },

                        {
                            title: "Más información",
                            description:
                                'Si tienes dudas sobre privacidad o tratamiento de información, puedes contactarnos a través de los canales publicados en este sitio.'
                        }
                    ]
                }
            }
        }
    }
});