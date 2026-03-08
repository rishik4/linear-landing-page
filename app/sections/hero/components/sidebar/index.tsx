import React, { FC } from 'react'
import styles from './styles.module.css'
import IllustrateAnimate from '@/components/illustrate-animate'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			{/* Window dots + title */}
			<div className={styles.top__container}>
				<IllustrateAnimate delay={2.9} className={styles.dot__container}>
					<div style={{ background: '#ff5f57' }} />
					<div style={{ background: '#febc2e' }} />
					<div style={{ background: '#28c840' }} />
				</IllustrateAnimate>
				<IllustrateAnimate delay={2.7} className={styles.illustrate__animate}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
						<span style={{ fontSize: '12px', fontWeight: 700, color: '#e0e0e0', fontFamily: 'system-ui' }}>Protoflow</span>
						<span style={{ fontSize: '9px', color: '#7aa2f7', background: '#1a2332', padding: '1px 6px', borderRadius: '3px', fontWeight: 700, letterSpacing: '0.5px' }}>BETA</span>
					</div>
				</IllustrateAnimate>
			</div>

			{/* Menu bar */}
			<IllustrateAnimate delay={2.5} className={styles.illustrate__animate}>
				<div style={{ display: 'flex', gap: '14px', padding: '6px 6px 8px', borderBottom: '1px solid #1e1e1e' }}>
					{['File', 'Edit', 'View', 'Place', 'Tools', 'Help'].map((item) => (
						<span key={item} style={{ fontSize: '11px', color: '#999', fontWeight: 500, fontFamily: 'system-ui' }}>{item}</span>
					))}
				</div>
			</IllustrateAnimate>

			{/* Project Explorer header */}
			<IllustrateAnimate delay={2.3} className={styles.illustrate__animate}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 6px 6px', borderBottom: '1px solid #1a1a1a' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						<span style={{ fontSize: '9px', color: '#555' }}>≡</span>
						<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
						<span style={{ fontSize: '10px', color: '#888', fontWeight: 600, letterSpacing: '0.4px' }}>PROJECT EXPLOR...</span>
					</div>
					<div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
						<span style={{ fontSize: '11px', color: '#555' }}>+</span>
						<span style={{ fontSize: '9px', color: '#555' }}>✎</span>
						<span style={{ fontSize: '9px', color: '#555' }}>✕</span>
					</div>
				</div>
			</IllustrateAnimate>

			{/* File tree */}
			<div className={styles.sidebar__dropdown__outter__container}>
				<IllustrateAnimate delay={2.1} className={styles.illustrate__animate}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1px', padding: '4px 6px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 6px', borderRadius: '4px', fontSize: '11px', color: '#777' }}>
							<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
							<span style={{ fontStyle: 'italic', color: '#666' }}>asdfdsf.kicad_sch</span>
						</div>
						<div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 6px', borderRadius: '5px', background: '#1a2332', border: '1px solid #253350', fontSize: '11px', color: '#e0e0e0' }}>
							<svg width="11" height="11" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="0"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>
							<span style={{ fontWeight: 500 }}>Guitar_waveform_proj...</span>
							<span style={{ marginLeft: 'auto', color: '#f59e0b', fontSize: '8px' }}>●</span>
							<span style={{ color: '#555', fontSize: '10px' }}>✕</span>
						</div>
					</div>
				</IllustrateAnimate>

				{/* Icon sidebar */}
				<IllustrateAnimate delay={1.9} className={styles.illustrate__animate}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px 8px', borderTop: '1px solid #1e1e1e', marginTop: '10px', alignItems: 'center' }}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/></svg>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
					</div>
				</IllustrateAnimate>

				{/* Settings gear at bottom */}
				<IllustrateAnimate delay={1.7} className={styles.illustrate__animate}>
					<div style={{ marginTop: 'auto', padding: '12px 8px', borderTop: '1px solid #1e1e1e', display: 'flex', justifyContent: 'center' }}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
					</div>
				</IllustrateAnimate>
			</div>
		</div>
	)
}

export default Sidebar
