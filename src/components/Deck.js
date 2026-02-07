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
            <p class="deck-meta">Seed round — January 2026</p>
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
            <p><strong>ForbocAI Protocol:</strong> Local-first inference. Logic-backed validation. Persistent memory. Portable souls.</p>
            <ul class="list">
                <li>Local inference: instant response, zero server cost, privacy.</li>
                <li>Logic-backed validation: AI intent validated against game rules.</li>
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
                <li><strong>Edge-first SLMs:</strong> Quantized models on consumer hardware.</li>
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
            <p><strong>Why now:</strong> Consumer hardware (M-series, RTX, NPUs). Open models (SmolLM2, Phi-3, Llama). Demand for responsive worlds.</p>
        `
    },
    {
        id: 6,
        title: 'Business model',
        content: `
            <ul class="list">
                <li><strong>Phase 1:</strong> SDK licensing. Per-seat SaaS.</li>
                <li><strong>Phase 2:</strong> Enterprise integration. Custom SLM fine-tuning.</li>
                <li><strong>Phase 3:</strong> Protocol fees. Soul marketplace, royalties.</li>
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
            <p>SDK v0.3.x, cloud orchestration live, local SLM runtime, semantic memory, Soul portability, docs, BDD suite. Next: Solana integration, Python/Rust bindings, Unity/Unreal plugins.</p>
        `
    },
    {
        id: 11,
        title: 'Roadmap',
        content: `
            <p>Q1 2026: local inference alpha, memory integration. Q2: logic-backed validation, ghost QA. Q3: agent economy, wallet, Soul marketplace. Q4: SDK for creators. 2027: Protocol v1.0, enterprise.</p>
        `
    },
    {
        id: 12,
        title: 'The ask',
        content: `
            <p><strong>Seed round — open.</strong></p>
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
