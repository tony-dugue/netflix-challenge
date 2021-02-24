import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

/** les requêtes ressembleront à ceci: instance.get('/foo-bar')
 * et on aura => https://api.themoviedb.org/3/foo-bar
 */

export default instance;

