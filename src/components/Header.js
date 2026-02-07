/**
 * Header Component
 * Pure function returning the header HTML string.
 */
export const Header = () => {
    return `
    <header class="site-header">
        <div class="container">
            <nav class="nav">
                <div class="logo">
                    <a href="#">ForbocAI</a>
                </div>
                <div class="nav-links">
                    <a href="#thesis">Thesis</a>
                    <a href="#traction">Traction</a>
                    <a href="#team">Team</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#round">Round</a>
                    <a href="#deck/1">Deck</a>
                    <a href="#materials">Materials</a>
                    <a href="#contact">Contact</a>
                </div>
                <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </div>
        <nav class="mobile-nav" id="mobileNav">
            <a href="#thesis">Thesis</a>
            <a href="#traction">Traction</a>
            <a href="#team">Team</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#round">Round</a>
            <a href="#deck/1">Deck</a>
            <a href="#materials">Materials</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    `;
};
