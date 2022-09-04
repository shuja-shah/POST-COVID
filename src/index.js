import './Stylesheets/Style.css';
import showMobileNav from './Modules/mobile_nav.js';

const navigation = document.getElementById('mobile_nav');
navigation.addEventListener('click', showMobileNav);