import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3333',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com fisico: ip da maquina
 * Android com emulador: localhost(cdm: adb reverse tcp:"porta da aplicação" tcp:"porta da aplicação")
 * Android com emulador: 10.0.2.2 (Android studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com fisico: ip da maquina
 */