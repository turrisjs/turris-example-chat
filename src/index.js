/* istanbul ignore if  */
if (__WEBPACK__) {
    require('bootstrap');
    require('../style/main.less');
}
import App from './app.jsx';
// import main store
import './stores/chatStore';

App.start();
