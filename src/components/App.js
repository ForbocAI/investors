/**
 * App Component
 * Composes layout by route. No tech-layer, runes, or diagnostic labels.
 */
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Hero } from './Hero.js';
import { Thesis } from './Thesis.js';
import { Traction } from './Traction.js';
import { Team } from './Team.js';
import { Roadmap } from './Roadmap.js';
import { RoundTerms } from './RoundTerms.js';
import { Deck } from './Deck.js';
import { Materials } from './Materials.js';
import { Contact } from './Contact.js';
import { selectCurrentPage } from '../domains/navigationSlice.js';

export const App = (state) => {
    const page = selectCurrentPage(state);

    const renderContent = () => {
        if (page === 'deck') {
            return Deck(state);
        }
        if (page === 'materials') {
            return Materials();
        }
        if (page === 'contact') {
            return Contact();
        }

        return `
            ${Hero()}
            <section class="content-sections">
                <div class="container">
                    ${Thesis()}
                    ${Traction()}
                    ${Team()}
                    ${Roadmap()}
                    ${RoundTerms()}
                    ${Contact()}
                </div>
            </section>
        `;
    };

    return `
        ${Header()}
        <main>
            ${renderContent()}
        </main>
        ${Footer()}
    `;
};
