import React, { useState } from 'react';
import './CardStack.css';

const DigitalEvolutionSection = () => {
  // Interactive state for Card 1: Diagnostic Tab
  const [activeTab1, setActiveTab1] = useState('latency');
  
  // Interactive state for Card 2: AI Terminal Output
  const [agentRunning, setAgentRunning] = useState(false);
  const [terminalLog, setTerminalLog] = useState('Status: Agent Idle. Ready for high-velocity code synthesis.');

  // Interactive state for Card 3: UI Design Simulator
  const [uiMode, setUiMode] = useState('glass');

  // Interactive state for Card 4: System Failover Simulation
  const [systemStatus, setSystemStatus] = useState('nominal');

  const runAiAgent = () => {
    if (agentRunning) return;
    setAgentRunning(true);
    setTerminalLog('>> Analyzing Arctic Navy infrastructure nodes...');
    setTimeout(() => setTerminalLog('>> Synthesizing Glacier Blue GraphQL endpoints & schemas...'), 700);
    setTimeout(() => {
      setTerminalLog('>> SUCCESS: 42 autonomous microservices synthesized in 0.18s.');
      setAgentRunning(false);
    }, 1500);
  };

  const triggerSpike = () => {
    setSystemStatus('alert');
    setTimeout(() => setSystemStatus('recovering'), 800);
    setTimeout(() => setSystemStatus('nominal'), 1800);
  };

  return (
    <div className="relative w-full bg-[#1E2A39] text-white py-12 border-t border-[#9DB4C6]/20 font-sans">
      {/* Concise Section Header */}
      <div className="container pt-6 pb-12 text-center sm:text-left relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F14] border border-[#9DB4C6]/40 text-xs sm:text-sm font-mono tracking-widest text-[#9DB4C6] mb-4 uppercase shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#9DB4C6] animate-pulse"></span>
          GLACIER BLUE & ARCTIC NAVY // ENTERPRISE STACK
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          The Veronic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9DB4C6] to-[#68839E]">Digital Evolution</span>
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-[#9DB4C6] font-normal leading-relaxed">
          Scroll down to explore our four-stage continuous engineering paradigm. Every card features live interactive widgets alongside deep architectural specifications.
        </p>
      </div>

      <div className="container z-10 relative">
          <ul id="cards">
            {/* Stage 1: Architecture & Discovery (Pure Glacier Blue Theme) */}
            <li className="card" id="card1">
              <div className="card-body">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#0B0F14]/20">
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase opacity-80 block mb-1 text-[#0B0F14]">
                        // STAGE 01: ARCHITECTURE & DISCOVERY
                      </span>
                      <h2 className="text-[#0B0F14]">Neural Blueprinting & Audit</h2>
                    </div>
                    <div className="bg-[#1E2A39] text-[#9DB4C6] px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#9DB4C6]/30 shadow-md">
                      Phase 01 / 04
                    </div>
                  </div>

                  <div className="w-full my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Rich Methodology Content */}
                    <div className="lg:col-span-7 space-y-4 text-[#0B0F14]/90">
                      <p className="text-base sm:text-lg font-semibold leading-relaxed">
                        Before writing code, Veronic engineers deploy automated diagnostic intelligence across your enterprise servers, databases, and network topologies to map structural bottlenecks and latency profiles.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="bg-white/30 backdrop-blur-sm p-3.5 rounded-2xl border border-white/40 flex items-start gap-2.5">
                          <span className="text-[#1E2A39] font-bold text-base">✓</span>
                          <div>
                            <div className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider">360° System Health Check</div>
                            <div className="text-[11px] opacity-80 mt-0.5">Automated structural query mapping</div>
                          </div>
                        </div>
                        <div className="bg-white/30 backdrop-blur-sm p-3.5 rounded-2xl border border-white/40 flex items-start gap-2.5">
                          <span className="text-[#1E2A39] font-bold text-base">✓</span>
                          <div>
                            <div className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider">Zero-Trust Security Audit</div>
                            <div className="text-[11px] opacity-80 mt-0.5">Deep vulnerability & perimeter scan</div>
                          </div>
                        </div>
                        <div className="bg-white/30 backdrop-blur-sm p-3.5 rounded-2xl border border-white/40 flex items-start gap-2.5">
                          <span className="text-[#1E2A39] font-bold text-base">✓</span>
                          <div>
                            <div className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider">Elastic Cloud Roadmap</div>
                            <div className="text-[11px] opacity-80 mt-0.5">Multi-region container architecture</div>
                          </div>
                        </div>
                        <div className="bg-white/30 backdrop-blur-sm p-3.5 rounded-2xl border border-white/40 flex items-start gap-2.5">
                          <span className="text-[#1E2A39] font-bold text-base">✓</span>
                          <div>
                            <div className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider">Zero Downtime Migration</div>
                            <div className="text-[11px] opacity-80 mt-0.5">Continuous data synchronization</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column: Interactive Diagnostic Matrix */}
                    <div className="lg:col-span-5 bg-[#1E2A39] text-white p-5 sm:p-6 rounded-3xl border border-[#9DB4C6]/40 shadow-2xl">
                      <div className="text-xs font-mono text-[#9DB4C6] uppercase font-bold mb-3 flex justify-between items-center">
                        <span>Interactive Diagnostic Mode</span>
                        <span className="w-2 h-2 rounded-full bg-[#9DB4C6] animate-ping"></span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0B0F14] rounded-xl mb-4">
                        <button 
                          onClick={() => setActiveTab1('latency')}
                          className={`py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${activeTab1 === 'latency' ? 'bg-[#9DB4C6] text-[#0B0F14]' : 'text-gray-400 hover:text-white'}`}
                        >
                          Latency
                        </button>
                        <button 
                          onClick={() => setActiveTab1('security')}
                          className={`py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${activeTab1 === 'security' ? 'bg-[#9DB4C6] text-[#0B0F14]' : 'text-gray-400 hover:text-white'}`}
                        >
                          Security
                        </button>
                        <button 
                          onClick={() => setActiveTab1('scale')}
                          className={`py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${activeTab1 === 'scale' ? 'bg-[#9DB4C6] text-[#0B0F14]' : 'text-gray-400 hover:text-white'}`}
                        >
                          Scale
                        </button>
                      </div>
                      <div className="bg-[#0B0F14] p-4 rounded-xl border border-white/10 text-center">
                        {activeTab1 === 'latency' && (
                          <div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-[#9DB4C6] font-mono">0.8ms</div>
                            <div className="text-xs text-gray-300 mt-1">Global Edge Latency Optimized</div>
                          </div>
                        )}
                        {activeTab1 === 'security' && (
                          <div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100% LOCKED</div>
                            <div className="text-xs text-[#9DB4C6] mt-1">Zero-Trust Perimeter Enforced</div>
                          </div>
                        )}
                        {activeTab1 === 'scale' && (
                          <div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-[#9DB4C6] font-mono">10,000x</div>
                            <div className="text-xs text-gray-300 mt-1">Instant Auto-Elastic Scaling</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full pt-6 border-t border-[#0B0F14]/20 flex flex-wrap gap-2 items-center justify-between text-xs sm:text-sm font-mono font-bold text-[#0B0F14]/85">
                    <span>Deliverable: Comprehensive System Blueprint & Audit</span>
                    <span>Status: FOUNDATIONAL</span>
                  </div>
              </div>
            </li>

            {/* Stage 2: Autonomous Engineering (Arctic Navy Theme with Glacier Blue Border) */}
            <li className="card" id="card2">
              <div className="card-body">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#9DB4C6]/20">
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase opacity-80 block mb-1 text-[#9DB4C6]">
                        // STAGE 02: AUTONOMOUS ENGINEERING
                      </span>
                      <h2 className="text-white">Agentic Code Synthesis & Cloud Core</h2>
                    </div>
                    <div className="bg-[#0B0F14] text-[#9DB4C6] px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#9DB4C6]/40 shadow-md">
                      Phase 02 / 04
                    </div>
                  </div>

                  <div className="w-full my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Rich Engineering Specifications */}
                    <div className="lg:col-span-7 space-y-4 text-gray-200">
                      <p className="text-base sm:text-lg font-medium leading-relaxed">
                        We replace traditional slow development cycles with autonomous AI engineering pipelines. Custom self-optimizing microservices auto-scale to handle massive traffic while self-documenting codebases ensure future-proof maintainability.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {[
                          'Next.js 15 App Router',
                          'Python / FastAPI Backend',
                          'Real-Time Agentic AI Pipelines',
                          'GraphQL Native & WebSockets',
                          'Multi-Region Docker/K8s Edge',
                          'Automated CI/CD Self-Testing'
                        ].map((tag, idx) => (
                          <span key={idx} className="bg-[#0B0F14] text-[#9DB4C6] px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold border border-[#9DB4C6]/30">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Interactive AI Terminal Widget */}
                    <div className="lg:col-span-5 bg-[#0B0F14] text-white p-5 rounded-3xl border border-[#9DB4C6]/50 shadow-2xl">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#9DB4C6]/60"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#9DB4C6]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                        </div>
                        <span className="text-xs font-mono text-[#9DB4C6] font-bold">VERONIC-AGENT // Terminal</span>
                      </div>
                      <div className="bg-[#121A24] p-3.5 rounded-xl font-mono text-xs text-[#9DB4C6] min-h-[68px] flex items-center mb-3 border border-[#9DB4C6]/20">
                        {terminalLog}
                      </div>
                      <button
                        onClick={runAiAgent}
                        disabled={agentRunning}
                        className="w-full py-2.5 rounded-xl bg-[#9DB4C6] text-[#0B0F14] font-bold font-mono text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg disabled:opacity-50"
                      >
                        {agentRunning ? 'Synthesizing...' : 'Trigger AI Synthesis'}
                      </button>
                    </div>
                  </div>

                  <div className="w-full pt-6 border-t border-[#9DB4C6]/20 flex flex-wrap gap-2 items-center justify-between text-xs sm:text-sm font-mono font-bold text-[#9DB4C6]">
                    <span>Deliverable: High-Concurrency Production Architecture</span>
                    <span>Status: HIGH-VELOCITY</span>
                  </div>
              </div>
            </li>

            {/* Stage 3: Hyper-Personalization (Metallic Glacier Steel Theme) */}
            <li className="card" id="card3">
              <div className="card-body">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#0B0F14]/20">
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase opacity-80 block mb-1 text-[#0B0F14]">
                        // STAGE 03: HYPER-PERSONALIZATION
                      </span>
                      <h2 className="text-[#0B0F14]">Adaptive Glassmorphic UI/UX</h2>
                    </div>
                    <div className="bg-[#1E2A39] text-[#9DB4C6] px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#9DB4C6]/30 shadow-md">
                      Phase 03 / 04
                    </div>
                  </div>

                  <div className="w-full my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Comprehensive Experience Design Content */}
                    <div className="lg:col-span-7 space-y-4 text-[#0B0F14]/90">
                      <p className="text-base sm:text-lg font-medium leading-relaxed">
                        Your enterprise interface should dynamically adapt to user intent. Veronic builds award-winning, high-converting glassmorphic interfaces engineered with hardware-accelerated 60 FPS micro-animations and accessibility compliance.
                      </p>
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="bg-white/40 p-3 rounded-xl border border-white/50 text-[#0B0F14]">
                          <div className="text-xl sm:text-2xl font-extrabold font-mono">+340%</div>
                          <div className="text-[11px] font-semibold uppercase tracking-wider opacity-80 mt-0.5">Conversion Uplift</div>
                        </div>
                        <div className="bg-white/40 p-3 rounded-xl border border-white/50 text-[#0B0F14]">
                          <div className="text-xl sm:text-2xl font-extrabold font-mono">60 FPS</div>
                          <div className="text-[11px] font-semibold uppercase tracking-wider opacity-80 mt-0.5">Micro-Animations</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Interactive UI Mode Switcher */}
                    <div className="lg:col-span-5 bg-[#1E2A39] text-white p-5 rounded-3xl border border-[#9DB4C6]/50 shadow-2xl">
                      <div className="text-xs font-mono text-[#9DB4C6] uppercase font-bold mb-3">
                        UI Theme Engine Preview
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0B0F14] rounded-xl mb-4">
                        <button
                          onClick={() => setUiMode('glass')}
                          className={`py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all ${uiMode === 'glass' ? 'bg-[#9DB4C6] text-[#0B0F14]' : 'text-gray-400 hover:text-white'}`}
                        >
                          Glass
                        </button>
                        <button
                          onClick={() => setUiMode('cyber')}
                          className={`py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all ${uiMode === 'cyber' ? 'bg-[#9DB4C6] text-[#0B0F14]' : 'text-gray-400 hover:text-white'}`}
                        >
                          Cyber
                        </button>
                        <button
                          onClick={() => setUiMode('minimal')}
                          className={`py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all ${uiMode === 'minimal' ? 'bg-[#9DB4C6] text-[#0B0F14]' : 'text-gray-400 hover:text-white'}`}
                        >
                          Minimal
                        </button>
                      </div>
                      
                      <div className={`p-4 rounded-xl border transition-all duration-300 ${
                        uiMode === 'glass' ? 'bg-white/10 backdrop-blur-md border-[#9DB4C6]/40 text-white' :
                        uiMode === 'cyber' ? 'bg-[#0B0F14] border-[#9DB4C6] text-[#9DB4C6] shadow-[0_0_15px_rgba(157,180,198,0.3)]' :
                        'bg-[#9DB4C6] text-[#0B0F14] border-[#0B0F14] shadow-md'
                      }`}>
                        <div className="text-sm font-bold tracking-tight">Active Mode: {uiMode.toUpperCase()}</div>
                        <div className="text-xs opacity-80 mt-1">Dynamic Intent Engine // 10M+ Tested Interactions</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full pt-6 border-t border-[#0B0F14]/20 flex flex-wrap gap-2 items-center justify-between text-xs sm:text-sm font-mono font-bold text-[#0B0F14]/85">
                    <span>Deliverable: Dynamic High-Converting UI/UX Design System</span>
                    <span>Status: INTERACTIVE</span>
                  </div>
              </div>
            </li>

            {/* Stage 4: Continuous Dominance (Midnight Arctic Obsidian with Bold Glacier Blue Frame) */}
            <li className="card" id="card4">
              <div className="card-body">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#9DB4C6]/20">
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase opacity-80 block mb-1 text-[#9DB4C6]">
                        // STAGE 04: CONTINUOUS DOMINANCE
                      </span>
                      <h2 className="text-white">Self-Healing Enterprise Orchestration</h2>
                    </div>
                    <div className="bg-[#9DB4C6] text-[#0B0F14] px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                      Phase 04 / 04
                    </div>
                  </div>

                  <div className="w-full my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Continuous Cloud Orchestration Breakdown */}
                    <div className="lg:col-span-7 space-y-4 text-gray-300">
                      <p className="text-base sm:text-lg font-medium leading-relaxed">
                        Once deployed, your enterprise ecosystem operates with continuous predictive anomaly detection. Our neural monitors identify traffic spikes or edge latency anomalies milliseconds before they occur, automatically rerouting nodes without human intervention.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="bg-[#121A24] p-3.5 rounded-2xl border border-[#9DB4C6]/30">
                          <div className="text-xs font-mono font-bold text-[#9DB4C6]">99.999% SLA</div>
                          <div className="text-xs text-gray-300 mt-0.5">Guaranteed enterprise uptime</div>
                        </div>
                        <div className="bg-[#121A24] p-3.5 rounded-2xl border border-[#9DB4C6]/30">
                          <div className="text-xs font-mono font-bold text-[#9DB4C6]">Automated Edge Failover</div>
                          <div className="text-xs text-gray-300 mt-0.5">Zero packet loss node redirection</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Interactive Failover Simulator */}
                    <div className="lg:col-span-5 bg-[#0B0F14] text-white p-5 rounded-3xl border border-[#9DB4C6]/60 shadow-2xl">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                        <span className="text-xs font-mono text-[#9DB4C6] font-bold">ORCHESTRATION BEACON</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase ${
                          systemStatus === 'nominal' ? 'bg-[#9DB4C6]/20 text-[#9DB4C6] border border-[#9DB4C6]/40' :
                          systemStatus === 'alert' ? 'bg-red-500/20 text-red-400 animate-pulse border border-red-500/30' :
                          'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {systemStatus === 'nominal' ? 'NOMINAL' : systemStatus === 'alert' ? 'SPIKE DETECTED' : 'HEALING...'}
                        </span>
                      </div>
                      <div className="bg-[#121A24] p-3 rounded-xl border border-white/5 mb-3 text-center">
                        <div className="text-xs font-mono text-gray-300">Active Nodes: 128 / 128 Online</div>
                        <div className="text-sm font-bold font-mono text-[#9DB4C6] mt-1">99.999% SLA Guaranteed</div>
                      </div>
                      <button
                        onClick={triggerSpike}
                        disabled={systemStatus !== 'nominal'}
                        className="w-full py-2.5 rounded-xl bg-[#9DB4C6] text-[#0B0F14] font-bold font-mono text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg disabled:opacity-50"
                      >
                        {systemStatus === 'nominal' ? 'Simulate 10x Edge Spike' : 'Self-Healing Active...'}
                      </button>
                    </div>
                  </div>

                  <div className="w-full pt-6 border-t border-[#9DB4C6]/20 flex flex-wrap gap-2 items-center justify-between text-xs sm:text-sm font-mono font-bold text-[#9DB4C6]">
                    <span>Deliverable: Unstoppable Autonomous Enterprise Engine</span>
                    <span>Status: UNSTOPPABLE</span>
                  </div>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default DigitalEvolutionSection;
