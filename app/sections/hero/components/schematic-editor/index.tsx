import React, { FC } from 'react'
import IllustrateAnimate from '@/components/illustrate-animate'

const SchematicEditor: FC = () => {
	return (
		<div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#1a1d21' }}>
			{/* Toolbar row */}
			<IllustrateAnimate delay={1.8} duration={1}>
				<div style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 6px', borderBottom: '1px solid #252525', height: '36px', background: '#141618' }}>
					{/* Tools Section */}
					{/* Select (active) */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
					</div>
					{/* Pan */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 00-4 0v5m0 0V4a2 2 0 00-4 0v7m0 0V7a2 2 0 00-4 0v6l-1.5-1.5a2 2 0 00-2.83 2.83L8 21h8a4 4 0 004-4v-5a2 2 0 00-4 0v1"/></svg>
					</div>
					{/* Wire */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="8" x2="12" y2="8"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="12" y1="16" x2="21" y2="16"/><circle cx="3" cy="8" r="2" fill="#666" stroke="none"/><circle cx="21" cy="16" r="2" fill="#666" stroke="none"/></svg>
					</div>

					{/* Separator */}
					<div style={{ width: '1px', height: '20px', background: '#252525', margin: '0 3px' }} />

					{/* Components Section */}
					{/* Resistor */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="16" height="14" viewBox="0 0 28 14" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="0,7 4,7 6,1 10,13 14,1 18,13 22,1 24,7 28,7"/></svg>
					</div>
					{/* Capacitor */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="8"/><line x1="5" y1="8" x2="19" y2="8"/><line x1="5" y1="14" x2="19" y2="14"/><line x1="12" y1="14" x2="12" y2="22"/></svg>
					</div>

					{/* Separator */}
					<div style={{ width: '1px', height: '20px', background: '#252525', margin: '0 3px' }} />

					{/* Power Section */}
					{/* VCC */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="20" x2="12" y2="8"/><line x1="6" y1="8" x2="18" y2="8"/></svg>
					</div>
					{/* GND */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="4" x2="12" y2="10"/><line x1="5" y1="10" x2="19" y2="10"/><line x1="7" y1="14" x2="17" y2="14"/><line x1="9" y1="18" x2="15" y2="18"/></svg>
					</div>
					{/* Net Label */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h10l4 5-4 5H5V7z"/></svg>
					</div>

					{/* Separator */}
					<div style={{ width: '1px', height: '20px', background: '#252525', margin: '0 3px' }} />

					{/* Annotations Section */}
					{/* Text */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="#666"><path d="M5 4v3h5.5v12h3V7H19V4z"/></svg>
					</div>
					{/* Rectangle */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>
					</div>
					{/* Line */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="20" x2="20" y2="4"/></svg>
					</div>
					{/* Circle */}
					<div style={{ width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/></svg>
					</div>

					{/* Separator */}
					<div style={{ width: '1px', height: '20px', background: '#252525', margin: '0 3px' }} />

					{/* Place Component button */}
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 12px', borderRadius: '6px', border: '1px solid #2563eb', background: 'rgba(37,99,235,0.08)' }}>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
							<rect x="7" y="3" width="10" height="18" rx="1.5"/>
							<line x1="2" y1="7" x2="7" y2="7" strokeLinecap="round"/>
							<line x1="2" y1="12" x2="7" y2="12" strokeLinecap="round"/>
							<line x1="2" y1="17" x2="7" y2="17" strokeLinecap="round"/>
							<line x1="17" y1="7" x2="22" y2="7" strokeLinecap="round"/>
							<line x1="17" y1="12" x2="22" y2="12" strokeLinecap="round"/>
							<line x1="17" y1="17" x2="22" y2="17" strokeLinecap="round"/>
							<circle cx="2" cy="7" r="1" fill="#60a5fa" stroke="none"/>
							<circle cx="2" cy="12" r="1" fill="#60a5fa" stroke="none"/>
							<circle cx="2" cy="17" r="1" fill="#60a5fa" stroke="none"/>
							<circle cx="22" cy="7" r="1" fill="#60a5fa" stroke="none"/>
							<circle cx="22" cy="12" r="1" fill="#60a5fa" stroke="none"/>
							<circle cx="22" cy="17" r="1" fill="#60a5fa" stroke="none"/>
						</svg>
						<span style={{ fontSize: '11px', color: '#60a5fa', fontWeight: 600 }}>Place Component</span>
					</div>

					<div style={{ flex: 1 }} />

					{/* Right side: History + Transform/View */}
					{/* Undo */}
					<div style={{ width: '26px', height: '26px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M12.5 8c-2.65 0-5.05 1.04-6.83 2.73L3 8v9h9l-2.72-2.72A7.49 7.49 0 0112.5 10c2.88 0 5.39 1.65 6.63 4.04l1.77-1.02A9.49 9.49 0 0012.5 8z"/></svg>
					</div>
					{/* Redo */}
					<div style={{ width: '26px', height: '26px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 017.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>
					</div>
					{/* Separator */}
					<div style={{ width: '1px', height: '20px', background: '#252525', margin: '0 2px' }} />
					{/* Rotate */}
					<div style={{ width: '26px', height: '26px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.06 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.9 7.9 0 00-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41A7.9 7.9 0 0019.93 13h-2.02a5.9 5.9 0 01-1.02 2.48z"/></svg>
					</div>
					{/* Mirror/Flip */}
					<div style={{ width: '26px', height: '26px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zm-2 8h-2v2h2v-2zm-4 4v-2H9v2h4zM3 21h2v-2H3v2zm8-16h2V3h-2v2zM5 9H3v2h2V9zm0 4H3v2h2v-2zm8 8h2v-2h-2v2zM9 3H7v2h2V3zM5 5H3v2h2V5zm14 0h-2v2h2V5zm0 8h2v-2h-2v2zm-4-8h-2v2h2V5z"/></svg>
					</div>
					{/* Delete */}
					<div style={{ width: '26px', height: '26px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
					</div>
					{/* Grid toggle */}
					<div style={{ width: '26px', height: '26px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
					</div>
					<span style={{ fontSize: '10px', color: '#888', marginLeft: '4px' }}>81%</span>
				</div>
			</IllustrateAnimate>

			{/* Tab bar */}
			<IllustrateAnimate delay={2} duration={1}>
				<div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #252525', height: '30px', background: '#111315' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 10px', height: '100%', borderRight: '1px solid #252525', fontSize: '11px', color: '#777' }}>
						<span style={{ color: '#f59e0b', fontSize: '8px' }}>⊙</span>asdfdsf.kicad_sch
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 10px', height: '100%', background: '#1a1d21', borderRight: '1px solid #252525', borderBottom: '2px solid #2563eb', fontSize: '11px', color: '#ccc' }}>
						<span style={{ color: '#f59e0b', fontSize: '8px' }}>⊙</span>Guitar_waveform_pr... *
						<span style={{ color: '#555', fontSize: '9px', marginLeft: '2px' }}>✕</span>
					</div>
					<div style={{ marginLeft: 'auto', padding: '0 8px', fontSize: '16px', color: '#555' }}>+</div>
				</div>
			</IllustrateAnimate>

			{/* Main area: canvas + right panel, takes all remaining space */}
			<div style={{ position: 'relative', flex: 1, display: 'flex', minHeight: 0 }}>
				{/* Schematic canvas */}
				<div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#1a1d21' }}>
					{/* Grid */}
					<div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
					<div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#282828 1px, transparent 1px), linear-gradient(90deg, #282828 1px, transparent 1px)', backgroundSize: '128px 128px' }} />

					{/* Circuit SVG - all wires strictly horizontal/vertical */}
					<IllustrateAnimate delay={2.4} duration={1.4} className="absolute inset-0">
						<svg viewBox="0 0 750 600" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
							{/* === LEFT SECTION: Amplifier input stage === */}

							{/* R9 100k resistor */}
							<text x="280" y="88" fill="#22c55e" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="600">R9</text>
							<text x="280" y="104" fill="#22c55e" fontSize="11" fontFamily="monospace" textAnchor="middle">100k</text>
							<polyline points="230,120 242,106 254,134 266,106 278,134 290,106 302,134 314,106 326,120" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinejoin="round" />

							{/* Vamp label */}
							<rect x="148" y="112" width="46" height="17" rx="3" fill="none" stroke="#ef4444" strokeWidth="1.5" />
							<text x="171" y="124" fill="#ef4444" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="600">Vamp</text>

							{/* Wire: Vamp → R9 left (horizontal) */}
							<line x1="194" y1="120" x2="230" y2="120" stroke="#00b4d8" strokeWidth="2.5" />
							{/* Wire: R9 right → down to junction (horizontal then vertical) */}
							<line x1="326" y1="120" x2="380" y2="120" stroke="#00b4d8" strokeWidth="2.5" />
							<line x1="380" y1="120" x2="380" y2="170" stroke="#00b4d8" strokeWidth="2.5" />

							{/* +3.3V power symbol */}
							<line x1="180" y1="168" x2="204" y2="168" stroke="#22c55e" strokeWidth="2" />
							<line x1="192" y1="160" x2="192" y2="168" stroke="#22c55e" strokeWidth="2" />
							<text x="170" y="158" fill="#22c55e" fontSize="10" fontFamily="monospace">+3.3V</text>
							{/* Wire: +3.3V down to R10 (vertical) */}
							<line x1="192" y1="168" x2="192" y2="200" stroke="#00b4d8" strokeWidth="2.5" />

							{/* R10 1k (vertical resistor) */}
							<text x="160" y="230" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="600">R10</text>
							<text x="165" y="246" fill="#22c55e" fontSize="10" fontFamily="monospace">1k</text>
							<polyline points="192,200 178,212 206,224 178,236 206,248 178,260 206,272 192,284" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinejoin="round" />

							{/* Wire: R10 → shared junction (vertical) */}
							<line x1="192" y1="284" x2="192" y2="280" stroke="#00b4d8" strokeWidth="2.5" />
							{/* Wire: shared junction → Q2 base (horizontal) */}
							<line x1="192" y1="280" x2="308" y2="280" stroke="#00b4d8" strokeWidth="2.5" />
							{/* Wire: shared junction → R11 top (vertical) */}
							<line x1="192" y1="280" x2="192" y2="340" stroke="#00b4d8" strokeWidth="2.5" />
							{/* Junction dot for R10, R11, and Q2 */}
							<circle cx="192" cy="280" r="4" fill="#00b4d8" />

							{/* Q2 2N3906 transistor */}
							<circle cx="340" cy="280" r="32" fill="none" stroke="#22c55e" strokeWidth="2" />
							<line x1="308" y1="280" x2="320" y2="280" stroke="#22c55e" strokeWidth="2" />
							<line x1="320" y1="260" x2="320" y2="300" stroke="#22c55e" strokeWidth="2" />
							<line x1="320" y1="265" x2="350" y2="255" stroke="#22c55e" strokeWidth="2" />
							<line x1="320" y1="295" x2="350" y2="305" stroke="#22c55e" strokeWidth="2" />
							<text x="340" y="276" fill="#22c55e" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="600">Q2</text>
							<text x="340" y="292" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">2N3906</text>

							{/* Wire: Q2 collector up (vertical) */}
							<line x1="350" y1="248" x2="350" y2="170" stroke="#00b4d8" strokeWidth="2.5" />
							{/* Wire: junction horizontal to R9 output */}
							<line x1="350" y1="170" x2="380" y2="170" stroke="#00b4d8" strokeWidth="2.5" />
							{/* Junction dot */}
							<circle cx="380" cy="170" r="4" fill="#00b4d8" />

							{/* Wire: Q2 emitter down (vertical) */}
							<line x1="350" y1="312" x2="350" y2="380" stroke="#00b4d8" strokeWidth="2.5" />

							{/* D3 1N4148 diode */}
							<line x1="380" y1="170" x2="380" y2="190" stroke="#00b4d8" strokeWidth="2.5" />
							<polygon points="370,190 390,190 380,210" fill="none" stroke="#22c55e" strokeWidth="2" />
							<line x1="370" y1="210" x2="390" y2="210" stroke="#22c55e" strokeWidth="2" />
							<line x1="380" y1="210" x2="380" y2="240" stroke="#00b4d8" strokeWidth="2.5" />
							<text x="398" y="195" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="600">D3</text>
							<text x="398" y="210" fill="#22c55e" fontSize="9" fontFamily="monospace">1N4148</text>

							{/* GND under D3 */}
							<line x1="365" y1="240" x2="395" y2="240" stroke="#22c55e" strokeWidth="2" />
							<line x1="370" y1="247" x2="390" y2="247" stroke="#22c55e" strokeWidth="1.5" />
							<line x1="375" y1="254" x2="385" y2="254" stroke="#22c55e" strokeWidth="1" />
							<text x="380" y="270" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">GND</text>
							<text x="380" y="282" fill="#22c55e" fontSize="7" fontFamily="monospace" textAnchor="middle">#PWR016</text>

							{/* Q3 2N3904 transistor */}
							<circle cx="420" cy="420" r="32" fill="none" stroke="#22c55e" strokeWidth="2" />
							<line x1="388" y1="420" x2="400" y2="420" stroke="#22c55e" strokeWidth="2" />
							<line x1="400" y1="400" x2="400" y2="440" stroke="#22c55e" strokeWidth="2" />
							<line x1="400" y1="405" x2="430" y2="395" stroke="#22c55e" strokeWidth="2" />
							<line x1="400" y1="435" x2="430" y2="445" stroke="#22c55e" strokeWidth="2" />
							<text x="420" y="416" fill="#22c55e" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="600">Q3</text>
							<text x="420" y="432" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">2N3904</text>

							{/* Wire: Q2 emitter → right → down → Q3 base (orthogonal) */}
							<line x1="350" y1="380" x2="350" y2="420" stroke="#00b4d8" strokeWidth="2.5" />
							<line x1="350" y1="420" x2="388" y2="420" stroke="#00b4d8" strokeWidth="2.5" />

							{/* R11 8.2k (vertical) */}
							<text x="155" y="370" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="600">R11</text>
							<text x="160" y="386" fill="#22c55e" fontSize="10" fontFamily="monospace">8.2k</text>
							<line x1="192" y1="340" x2="192" y2="420" stroke="#22c55e" strokeWidth="2" />

							{/* GND under R11 */}
							<line x1="177" y1="440" x2="207" y2="440" stroke="#22c55e" strokeWidth="2" />
							<line x1="182" y1="447" x2="202" y2="447" stroke="#22c55e" strokeWidth="1.5" />
							<line x1="187" y1="454" x2="197" y2="454" stroke="#22c55e" strokeWidth="1" />
							<text x="192" y="470" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">GND</text>
							<line x1="192" y1="420" x2="192" y2="440" stroke="#00b4d8" strokeWidth="2.5" />

							{/* GND under Q3 */}
							<line x1="415" y1="480" x2="445" y2="480" stroke="#22c55e" strokeWidth="2" />
							<line x1="420" y1="487" x2="440" y2="487" stroke="#22c55e" strokeWidth="1.5" />
							<line x1="425" y1="494" x2="435" y2="494" stroke="#22c55e" strokeWidth="1" />
							<text x="430" y="510" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">GND</text>
							<line x1="430" y1="452" x2="430" y2="480" stroke="#00b4d8" strokeWidth="2.5" />

							{/* === RIGHT SECTION: Op-amp stage === */}

							{/* Guitar Signal label */}
							<text x="620" y="108" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="middle">Guitar Signal</text>
							<text x="620" y="122" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="middle">Clamping/Clipping</text>
							<text x="620" y="136" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="middle">Stage</text>

							{/* Op-amp U3 LM324 (top) - triangle is okay */}
							<polygon points="510,150 510,260 590,205" fill="none" stroke="#22c55e" strokeWidth="2" />
							<text x="525" y="198" fill="#22c55e" fontSize="10" fontFamily="monospace">+</text>
							<text x="525" y="228" fill="#22c55e" fontSize="10" fontFamily="monospace">−</text>
							<text x="540" y="146" fill="#22c55e" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="600">U3</text>
							<text x="550" y="275" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">LM324</text>
							<text x="550" y="140" fill="#22c55e" fontSize="7" fontFamily="monospace" textAnchor="middle">#PWR012</text>

							{/* Wire: Q3 collector up → right → op-amp input (orthogonal) */}
							<line x1="430" y1="388" x2="430" y2="220" stroke="#00b4d8" strokeWidth="2.5" />
							<line x1="430" y1="220" x2="510" y2="220" stroke="#00b4d8" strokeWidth="2.5" />

							{/* Wire: junction → op-amp + input (horizontal) */}
							<line x1="480" y1="190" x2="510" y2="190" stroke="#00b4d8" strokeWidth="2.5" />
							<line x1="480" y1="120" x2="480" y2="190" stroke="#00b4d8" strokeWidth="2.5" />
							<line x1="380" y1="120" x2="480" y2="120" stroke="#00b4d8" strokeWidth="2.5" />

							{/* Wire: op-amp output → right (horizontal) */}
							<line x1="590" y1="205" x2="640" y2="205" stroke="#00b4d8" strokeWidth="2.5" />
							{/* Vadc label - on the end of the output wire */}
							<rect x="640" y="197" width="40" height="16" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
							<text x="660" y="209" fill="#f59e0b" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="600">Vadc</text>

							{/* Op-amp U3 LM324 (bottom) */}
							<polygon points="510,340 510,450 590,395" fill="none" stroke="#22c55e" strokeWidth="2" />
							<text x="525" y="388" fill="#22c55e" fontSize="10" fontFamily="monospace">+</text>
							<text x="525" y="418" fill="#22c55e" fontSize="10" fontFamily="monospace">−</text>
							<text x="540" y="336" fill="#22c55e" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="600">U3</text>
							<text x="550" y="466" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">LM324</text>
							<text x="540" y="476" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">GND</text>
							<text x="540" y="488" fill="#22c55e" fontSize="7" fontFamily="monospace" textAnchor="middle">#PWR011</text>

							{/* Wire: top op-amp output feedback → down → bottom op-amp input (orthogonal) */}
							<line x1="620" y1="205" x2="620" y2="380" stroke="#00b4d8" strokeWidth="2" />
							<line x1="620" y1="380" x2="510" y2="380" stroke="#00b4d8" strokeWidth="2" />
							{/* Junction dot on output wire for feedback */}
							<circle cx="620" cy="205" r="3.5" fill="#00b4d8" />

							{/* Wire: bottom op-amp − input */}
							<line x1="480" y1="410" x2="510" y2="410" stroke="#00b4d8" strokeWidth="2" />
							<line x1="480" y1="410" x2="480" y2="460" stroke="#00b4d8" strokeWidth="2" />

							{/* +9V for bottom section */}
							<line x1="660" y1="290" x2="680" y2="290" stroke="#22c55e" strokeWidth="2" />
							<line x1="670" y1="282" x2="670" y2="290" stroke="#22c55e" strokeWidth="2" />
							<text x="658" y="280" fill="#22c55e" fontSize="10" fontFamily="monospace">+9V</text>
							<line x1="670" y1="290" x2="670" y2="320" stroke="#00b4d8" strokeWidth="2.5" />

							{/* C7 10u capacitor */}
							<line x1="670" y1="320" x2="670" y2="345" stroke="#22c55e" strokeWidth="1.5" />
							<line x1="656" y1="345" x2="684" y2="345" stroke="#22c55e" strokeWidth="2.5" />
							<line x1="656" y1="354" x2="684" y2="354" stroke="#22c55e" strokeWidth="2.5" />
							<line x1="670" y1="354" x2="670" y2="380" stroke="#22c55e" strokeWidth="1.5" />
							<text x="690" y="342" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="600">C7</text>
							<text x="690" y="358" fill="#22c55e" fontSize="10" fontFamily="monospace">10u</text>
							<text x="648" y="342" fill="#22c55e" fontSize="11" fontFamily="monospace">+</text>

							{/* GND under C7 */}
							<line x1="655" y1="400" x2="685" y2="400" stroke="#22c55e" strokeWidth="2" />
							<line x1="660" y1="407" x2="680" y2="407" stroke="#22c55e" strokeWidth="1.5" />
							<line x1="665" y1="414" x2="675" y2="414" stroke="#22c55e" strokeWidth="1" />
							<text x="670" y="430" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">GND</text>
							<text x="670" y="442" fill="#22c55e" fontSize="7" fontFamily="monospace" textAnchor="middle">#PWR018</text>
							<line x1="670" y1="380" x2="670" y2="400" stroke="#00b4d8" strokeWidth="2.5" />

							{/* Junction dots at key intersections */}
							<circle cx="380" cy="120" r="3.5" fill="#00b4d8" />
							<circle cx="480" cy="120" r="3.5" fill="#00b4d8" />
							<circle cx="350" cy="380" r="3.5" fill="#00b4d8" />
						</svg>
					</IllustrateAnimate>
				</div>

				{/* Right panel - AI Copilot */}
				<IllustrateAnimate delay={2.6} duration={1.2}>
					<div style={{
						width: '240px', flexShrink: 0, height: '100%',
						background: '#141618', borderLeft: '1px solid #252525',
						display: 'flex', flexDirection: 'column', overflow: 'hidden',
					}}>
						{/* Panel tabs */}
						<div style={{ display: 'flex', borderBottom: '1px solid #252525', fontSize: '10px', flexShrink: 0 }}>
							<div style={{ padding: '7px 8px', color: '#777' }}>Properties</div>
							<div style={{ padding: '7px 8px', color: '#777' }}>Simulation</div>
							<div style={{ padding: '7px 8px', color: '#60a5fa', borderBottom: '2px solid #60a5fa', fontWeight: 600 }}>AI Copilot</div>
							<span style={{ padding: '7px 4px', color: '#555', fontSize: '9px' }}>✕</span>
						</div>
						{/* AI Copilot header */}
						<div style={{ padding: '10px 12px 6px', borderBottom: '1px solid #252525', flexShrink: 0 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
								<span style={{ fontSize: '10px', color: '#60a5fa' }}>✦</span>
								<span style={{ fontSize: '10px', color: '#888', fontWeight: 600, letterSpacing: '0.3px' }}>AI COPILOT</span>
							</div>
						</div>
						{/* AI Content */}
						<div style={{ padding: '12px', flex: 1, overflow: 'hidden' }}>
							<IllustrateAnimate delay={3} duration={1}>
								<div>
									<p style={{ fontSize: '12px', color: '#ccc', fontWeight: 700, marginBottom: '8px' }}>Circuit Overview:</p>
									<p style={{ fontSize: '10px', color: '#ccc', fontWeight: 600, marginBottom: '4px' }}>Joystick Input:</p>
									<ul style={{ paddingLeft: '12px', marginBottom: '10px' }}>
										<li style={{ fontSize: '9px', color: '#999', lineHeight: '1.6', marginBottom: '3px' }}>
											The X and Y potentiometers are connected to <span style={{ color: '#ccc', fontWeight: 600 }}>ADC0 (Pin 23)</span> and <span style={{ color: '#ccc', fontWeight: 600 }}>ADC1 (Pin 24)</span>
										</li>
										<li style={{ fontSize: '9px', color: '#999', lineHeight: '1.6' }}>
											The joystick push-button is connected to <span style={{ color: '#ccc', fontWeight: 600 }}>PD2 (Pin 32)</span>
										</li>
									</ul>
									<p style={{ fontSize: '10px', color: '#ccc', fontWeight: 600, marginBottom: '4px' }}>LED Output:</p>
									<ul style={{ paddingLeft: '12px', marginBottom: '10px' }}>
										<li style={{ fontSize: '9px', color: '#999', lineHeight: '1.6', marginBottom: '3px' }}>
											The MCU drives Red, Green, Blue via <span style={{ color: '#ccc', fontWeight: 600 }}>PD3, PD5, PD6</span>
										</li>
										<li style={{ fontSize: '9px', color: '#999', lineHeight: '1.6' }}>
											Each channel protected by a 220Ω resistor
										</li>
									</ul>
									<p style={{ fontSize: '10px', color: '#ccc', fontWeight: 600, marginBottom: '4px' }}>Power Supply:</p>
									<ul style={{ paddingLeft: '12px' }}>
										<li style={{ fontSize: '9px', color: '#999', lineHeight: '1.6' }}>
											Designed for a <span style={{ color: '#ccc', fontWeight: 600 }}>+5V</span> rail with ground and power symbols
										</li>
									</ul>
								</div>
							</IllustrateAnimate>
						</div>
						{/* Chat input */}
						<IllustrateAnimate delay={3.2} duration={0.8}>
							<div style={{ padding: '8px', borderTop: '1px solid #252525', flexShrink: 0 }}>
								<div style={{ padding: '8px 10px', borderRadius: '8px', border: '1px solid #2a2a2a', background: '#1a1d21', fontSize: '11px', color: '#555', marginBottom: '8px' }}>
									Ask me to build something...
								</div>
								<div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
									<div style={{ padding: '3px 8px', borderRadius: '5px', border: '1px solid #2a2a2a', fontSize: '9px', color: '#888' }}>▾ Agent</div>
									<div style={{ padding: '3px 8px', borderRadius: '5px', border: '1px solid #2a2a2a', fontSize: '9px', color: '#888' }}>▾ Gemini 3 Flash</div>
									<div style={{ padding: '3px 8px', borderRadius: '5px', border: '1px solid #2a2a2a', fontSize: '9px', color: '#888' }}># More</div>
									<div style={{ marginLeft: 'auto', width: '20px', height: '20px', borderRadius: '6px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
										<span style={{ fontSize: '10px', color: '#fff' }}>→</span>
									</div>
								</div>
							</div>
						</IllustrateAnimate>
					</div>
				</IllustrateAnimate>
			</div>

			{/* Status bar */}
			<IllustrateAnimate delay={2.8} duration={0.8}>
				<div style={{
					display: 'flex', alignItems: 'center', justifyContent: 'space-between',
					height: '22px', padding: '0 8px', borderTop: '1px solid #252525',
					fontSize: '9px', color: '#555', background: '#111315',
				}}>
					<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
						<span style={{ color: '#2563eb' }}>◀ Select</span>
						<span>⊞ 73 components</span>
						<span>⚡ 160 wires</span>
					</div>
					<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
						<span style={{ color: '#22c55e' }}>⊞ Snap ON</span>
						<span>⊕ 81%</span>
						<span>⊞ Grid: 10px</span>
					</div>
				</div>
			</IllustrateAnimate>
		</div>
	)
}

export default SchematicEditor
