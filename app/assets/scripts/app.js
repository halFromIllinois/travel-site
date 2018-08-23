import MobileMenu from './components/MobileMenu.js';
import ScrollReveal from './components/ScrollReveal.js';
import StickyHeader from './components/StickyHeader.js';
import Modal from './components/Modal.js';

var mobileMenu = new MobileMenu();
var featuresScrollReveal = new ScrollReveal(".feature-item", "80%");
var testimoniaScrollReveal = new ScrollReveal(".testimonial", "65%");
var stickyHeader = new StickyHeader(".site-header", ".large-hero__title");
var modal = new Modal();
