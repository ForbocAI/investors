/**
 * Main Entry Point
 * Bootstraps the functional application. No animations or decrypt effects.
 */
import { createStore } from './domains/store.js';
import { rootReducer } from './domains/rootReducer.js';
import { navigate } from './domains/navigationSlice.js';
import { App } from './components/App.js';

const store = createStore(rootReducer, undefined);

let mobileMenuOpen = false;

const setupMobileMenu = () => {
    const toggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
            mobileMenuOpen = !mobileMenuOpen;
            toggle.classList.toggle('active', mobileMenuOpen);
            mobileNav.classList.toggle('active', mobileMenuOpen);
        });

        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOpen = false;
                toggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }
};

const render = () => {
    const state = store.getState();
    const appElement = document.getElementById('app');

    if (appElement) {
        appElement.innerHTML = App(state);
        setupMobileMenu();

        const hash = window.location.hash;
        if (hash && /^#[a-zA-Z][\w-]*$/.test(hash)) {
            const target = document.querySelector(hash);
            if (target) target.scrollIntoView();
        } else if (hash === '#materials' || hash === '#contact') {
            window.scrollTo(0, 0);
        } else if (!hash || hash === '#') {
            window.scrollTo(0, 0);
        }
    }
};

store.subscribe(render);

window.addEventListener('hashchange', () => {
    store.dispatch(navigate(window.location.hash));
});

render();
