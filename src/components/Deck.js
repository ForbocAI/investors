/**
 * Deck Component
 * Pitch deck slides for investors. No animations, no runes, plain copy.
 */
import { selectDeckSlide } from '../domains/navigationSlice.js';

const slides = [
    {
        id: 1,
        title: 'ForbocAI',
        content: `
            <p class="deck-tagline">NPCs that feel alive. Local-first AI at the edge.</p>
            <p class="deck-meta">Seed round — March 2026</p>
        `
    },
    {
        id: 2,
        title: 'The problem',
        content: `
            <p><strong>Game AI is static.</strong> Behavior trees and state machines. No improv, no persistent memory. Worlds feel dead.</p>
            <p><strong>Generative AI is chaotic.</strong> Cloud dependency, cost, hallucinations break game logic. Neither is persistent or ownable.</p>
        `
    },
    {
        id: 3,
        title: 'The solution',
        content: `
            <p><strong>ForbocAI Protocol:</strong> Local-first intelligence. Reliable behavior. Persistent memory. Portable souls.</p>
            <ul class="list">
                <li>Local-first intelligence: responsive play and player-first privacy.</li>
                <li>Reliable behavior: AI intent is constrained by game rules.</li>
                <li>Semantic memory: agents remember and evolve.</li>
                <li>Portable souls: own, trade, port across worlds.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: 'Tech moat',
        content: `
            <ul class="list">
                <li><strong>Logic-backed intelligence:</strong> AI thinks; system enforces rules. No hallucinations.</li>
                <li><strong>Local-first architecture:</strong> Fast player experience without pure cloud dependency.</li>
                <li><strong>Ghost in the Machine:</strong> Automated agents test content at scale.</li>
                <li><strong>ForbocAI Protocol:</strong> Open interoperability; network effects.</li>
            </ul>
        `
    },
    {
        id: 5,
        title: 'Market',
        content: `
            <p>$220B+ global gaming (2025). $62B AI in gaming by 2032. 3.4B gamers.</p>
            <p><strong>Why now:</strong> Better on-device compute, mature AI tooling, and player demand for responsive worlds.</p>
        `
    },
    {
        id: 6,
        title: 'Business model',
        content: `
            <ul class="list">
                <li><strong>Phase 1:</strong> Paid SDK and protocol access for studios from day one.</li>
                <li><strong>Phase 2:</strong> Usage-based growth as live games scale player activity.</li>
                <li><strong>Phase 3:</strong> $FAI-powered Soul economy fees, marketplace activity, and royalties.</li>
            </ul>
        `
    },
    {
        id: 7,
        title: 'Go-to-market',
        content: `
            <ol class="list ordered">
                <li>Proof of intelligence: interactive tech demo (2026).</li>
                <li>Developer evangelism: open-source components, GDC.</li>
                <li>Studio partnerships: mid-tier narrative RPGs.</li>
                <li>Protocol network effects: modules and campaigns.</li>
            </ol>
        `
    },
    {
        id: 8,
        title: 'Competition',
        content: `
            <p>Cloud LLM services: not local, not persistent, not ownable. Inworld / Convai: cloud, partial persistence, no ownership or interop.</p>
            <p><strong>ForbocAI:</strong> local, persistent, ownable, interoperable. Only solution with all four.</p>
        `
    },
    {
        id: 9,
        title: 'Team',
        content: `
            <p>Founder / CEO: full-stack, enterprise AI pipelines. Co-founder / CTO and CGO: hiring. Equity-first (10–20%) for co-founders.</p>
        `
    },
    {
        id: 10,
        title: 'Traction',
        content: `
            <p>SDK foundation shipped, protocol infrastructure live, and partner-facing documentation active. Current focus: production hardening, paid onboarding, and first studio deployments.</p>
        `
    },
    {
        id: 11,
        title: 'Roadmap',
        content: `
            <p>Q1 2026 (in progress): SDK v1.0 hardening and pilots. Q2: reliability and billing stack. Q3: Soul economy expansion and QA dashboard. Q4: distribution growth across engine ecosystems. 2027: protocol scale with enterprise studio partnerships.</p>
        `
    },
    {
        id: 12,
        title: 'The ask',
        content: `
            <p><strong>Seed round — open.</strong> ~$10M SAFE Cap.</p>
            <p><strong>$FAI utility is live:</strong> Minting, upgrades, and marketplace operations in the Soul economy.</p>
            <p>Use of funds: 40% engineering, 20% infra, 30% community/marketing, 10% legal.</p>
            <p><a href="mailto:investors@forboc.ai" class="btn btn-primary">investors@forboc.ai</a></p>
        `
    }
];

export const Deck = (state) => {
    const currentSlide = selectDeckSlide(state);
    const totalSlides = slides.length;
    const safeSlideIndex = Math.max(1, Math.min(currentSlide, totalSlides));
    const slide = slides.find(s => s.id === safeSlideIndex);

    const prevLink = safeSlideIndex > 1 ? `#deck/${safeSlideIndex - 1}` : '#deck/1';
    const nextLink = safeSlideIndex < totalSlides ? `#deck/${safeSlideIndex + 1}` : `#deck/${totalSlides}`;

    return `
    <section class="deck" id="deck">
        <div class="container">
            <div class="deck-frame">
                <div class="deck-header">
                    <span class="deck-counter">${safeSlideIndex} / ${totalSlides}</span>
                    <div class="deck-controls">
                        <a href="${prevLink}" class="btn-control">Prev</a>
                        <a href="${nextLink}" class="btn-control">Next</a>
                    </div>
                </div>
                <div class="deck-body">
                    <h2 class="deck-title">${slide.title}</h2>
                    <div class="deck-content">${slide.content}</div>
                </div>
                <div class="deck-footer">
                    <a href="#">ForbocAI</a> · Seed materials
                </div>
            </div>
        </div>
    </section>
    `;
};
