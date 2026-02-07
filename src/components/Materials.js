/**
 * Materials Component
 * Data room and one-pager / whitepaper links.
 */
export const Materials = () => {
    return `
    <section class="materials" id="materials">
        <div class="container">
            <span class="block-label">MATERIALS</span>
            <h1>Data room</h1>
            <p>Links to deck, one-pager, and technical whitepaper for accredited investors and angels.</p>
            <div class="block">
                <h2>Deck</h2>
                <p><a href="#deck/1" class="link">View pitch deck</a> (in-browser).</p>
            </div>
            <div class="block">
                <h2>Whitepaper</h2>
                <p><a href="https://forboc.ai/#whitepaper" class="link" target="_blank" rel="noopener">Technical whitepaper</a> (main site).</p>
            </div>
            <div class="block">
                <h2>Contact</h2>
                <p>Request data room access or data pack: <a href="mailto:investors@forboc.ai" class="link">investors@forboc.ai</a>.</p>
            </div>
        </div>
    </section>
    `;
};
