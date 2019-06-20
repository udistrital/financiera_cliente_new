import { environment } from '../environments/environment';
// import { environment } from '../environments/environment.prod';

export const Config = {
  LOCAL: {
    NUXEO: {
      PATH: 'https://documental.udistrital.edu.co/nuxeo/',
    },
    ADMISIONES_SERVICE: 'http://localhost:8887/v1/',
    CORE_SERVICE: 'http://localhost:8097/v1/',
    MATRICULA_DESCUENTOS_SERVICE: 'http://localhost:8107/v1/',
    DOCUMENTO_SERVICE: 'http://localhost:8094/v1/',
    DOCUMENTO_PROGRAMA_SERVICE: 'http://localhost:8201/v1/',
    ENTE_SERVICE: 'http://localhost:8096/v1/',
    EXPERIENCIA_SERVICE: 'http://localhost:8099/v1/',
    FORMACION_ACADEMICA_SERVICE: 'http://localhost:8098/v1/',
    FORMULARIO_SERVICE: 'http://localhost:8117/v1/',
    IDIOMA_SERVICE: 'http://localhost:8103/v1/',
    CAMPUS_MID: 'http://localhost:8095/v1/',
    ORGANIZACION_SERVICE: 'http://localhost:8106/v1/',
    PERSONA_SERVICE: 'http://localhost:8083/v1/',
    PRODUCCION_ACADEMICA_SERVICE: 'http://localhost:8080/v1/',
    PROGRAMA_ACADEMICO_SERVICE: 'http://localhost:8101/v1/',
    SESIONES_SERVICE: 'http://localhost:8081/v1',
    UBICACIONES_SERVICE: 'http://localhost:8085/v1/',
    CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/',
    CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
    NOTIFICACION_SERVICE: 'ws://pruebasapi.intranetoas.udistrital.edu.co:8116/ws/join',
    WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
    TOKEN: {
      AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
      URL_USER_INFO: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/userinfo',
      CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
      REDIRECT_URL: 'http://localhost:9000/',
      RESPONSE_TYPE: 'id_token token',
      SCOPE: 'openid email',
      BUTTON_CLASS: 'btn btn-warning btn-sm',
      SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
      SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
      SIGN_OUT_APPEND_TOKEN: 'true',
      REFRESH_TOKEN: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/token',
      CLIENT_SECRET: '2crHq2IRkFHEVTBfpznLhKHyKVIa',
    },
    PLAN_CUENTAS_MID_SERVICE: 'http://localhost:8084/',
    DUMMY_SERVICE: 'http://localhost:8001/',
    /**
    TOKEN: {
      AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
      CLIENTE_ID: '3Idp5LUlnZY7cOV10NaLuyRfzooa',
      RESPONSE_TYPE: 'id_token token',
      SCOPE: 'openid email role documento',
      REDIRECT_URL: 'http://localhost:4200/',
      SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
      SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
    },
    **/
  },
  PREPROD: {
    NUXEO: {
      PATH: 'https://documental.udistrital.edu.co/nuxeo/',
    },
    ADMISIONES_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/admision/v1/',
    CORE_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/core/v1/',
    MATRICULA_DESCUENTOS_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/descuento/v1/',
    DOCUMENTO_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/documento/v1/',
    DOCUMENTO_PROGRAMA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/documento_programa/v1/',
    ENTE_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/ente/v1/',
    EXPERIENCIA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/experiencia_laboral/v1/',
    FORMACION_ACADEMICA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/formacion_academica/v1/',
    FORMULARIO_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/forms/v1/',
    IDIOMA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/idioma/v1/',
    CAMPUS_MID: 'https://autenticacion.udistrital.edu.co:8244/mid/v1/',
    ORGANIZACION_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/organizacion/v1/',
    PERSONA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/persona/v1/',
    PRODUCCION_ACADEMICA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/produccion_academica/v1/',
    PROGRAMA_ACADEMICO_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/programa/v1/',
    SESIONES_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/sesion/v1/',
    UBICACIONES_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/ubicacion/v1/',
    CONFIGURACION_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/configuracion_crud_api/v1/',
    CONF_MENU_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
    NOTIFICACION_SERVICE: 'ws://autenticacion.udistrital.edu.co:8244/notificacionws/v1/',
    WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
    TOKEN: {
      AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
      CLIENTE_ID: 'RK_DeZGAH6_F3JlPd5N1soJ7bYUa',
      RESPONSE_TYPE: 'id_token token',
      SCOPE: 'openid email role documento',
      REDIRECT_URL: 'https://cliente.campusvirtual.udistrital.edu.co/',
      SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
      SIGN_OUT_REDIRECT_URL: 'https://cliente.campusvirtual.udistrital.edu.co/',
    },
  },
  PROD: {
    NUXEO: {
      PATH: 'https://documental.udistrital.edu.co/nuxeo/',
    },
    WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
    UBICACIONES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/ubicacion_crud/',
    PERSONA_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/personas_crud/',
    ENTE_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/ente_crud/v1/',
    DOCUMENTO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/documento_crud/',
    ORGANIZACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/organizacion_crud/',
    EXPERIENCIASERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/experiencia_laboral_crud/',
    CAMPUS_MID: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/campus_mid/',
    ADMISIONES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/admisiones_crud/',
    PROGRAMA_ACADEMICO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/programa_academico_crud/',
    FORMACION_ACADEMICA_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/formacion_academica_crud/',
    IDIOMA_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/idiomas_crud/',
    CORE_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/core_crud/',
    SESIONES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/sesiones_crud/',
    CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/',
    NOTIFICACION_SERVICE: 'ws://autenticacion.portaloas.udistrital.edu.co/apioas/notificacionws/ws/join',
    CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
    TOKEN: {
      AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
      CLIENTE_ID: 'RK_DeZGAH6_F3JlPd5N1soJ7bYUa',
      RESPONSE_TYPE: 'id_token token',
      SCOPE: 'openid email role documento',
      REDIRECT_URL: 'https://campusvirtualudpreprod.portaloas.udistrital.edu.co/',
      SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
      SIGN_OUT_REDIRECT_URL: 'https://campusvirtualudpreprod.portaloas.udistrital.edu.co/',
    },
  },
};

export const GENERAL = {
    ENTORNO: Config[environment.entorno],
};
