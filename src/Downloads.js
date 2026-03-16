import React, { useState } from "react";
import Navbar from "./componets/ui/Navbar";
import Footer from "./componets/ui/Footer";
import { Download, Monitor, Smartphone, Cpu, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { softwareData } from "./data/softwareData";
import { Link } from "react-router-dom";

const Downloads = () => {
    const [activeTab, setActiveTab] = useState("desktop");

    const tabs = [
        { id: "desktop", label: "Desktop", icon: <Monitor size={18} /> },
        { id: "mobile", label: "Mobile", icon: <Smartphone size={18} /> },
        { id: "tools", label: "Toolkit", icon: <Cpu size={18} /> },
    ];

    const filteredSoftware = softwareData.filter(s => s.category === activeTab);

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
            <Navbar />

            {/* Subtle Professional Hero */}
            <section className="pt-40 pb-20 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black tracking-widest uppercase mb-6 border border-orange-100">
                                    Product Reach
                                </span>
                                <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
                                    Precision <br /> 
                                    <span className="text-gray-400 font-light">Software Tools.</span>
                                </h1>
                                <p className="text-gray-500 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
                                    Our proprietary suite of technical assets designed for reliability, speed, and Malawian infrastructure needs.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Refined Tab System */}
            <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-8 py-6 text-sm font-bold transition-all border-b-2 ${activeTab === tab.id
                                ? "border-orange-500 text-gray-900"
                                : "border-transparent text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* List View - More professional than common cards */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {filteredSoftware.map((pkg, idx) => (
                                <Link
                                    key={pkg.id}
                                    to={`/software/${pkg.id}`}
                                    className="group block bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-4 mb-4">
                                                <h3 className="text-3xl font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                                                    {pkg.name}
                                                </h3>
                                                {pkg.isComingSoon && (
                                                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-orange-50 text-orange-600 rounded-md">
                                                        Development
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">
                                                {pkg.description}
                                            </p>
                                        </div>

                                        <div className="shrink-0 flex items-center gap-6">
                                            <div className="text-right hidden sm:block">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">Target Channel</p>
                                                <p className="font-bold text-gray-600">{pkg.version.includes('Alpha') ? 'Restricted' : 'Stable'}</p>
                                            </div>
                                            <div className="p-5 bg-gray-50 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                                <ArrowRight size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features preview row */}
                                    <div className="mt-8 pt-8 border-t border-gray-50 flex flex-wrap gap-x-8 gap-y-3">
                                        {pkg.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                                <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Professional Inquiry Block */}
            <section className="py-24 px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-900 text-white rounded-[48px] p-12 md:p-20 relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic">
                                Built for <br /> 
                                High-Performance.
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                                We develop bespoke solutions for hardware-level integration and complex network infrastructure.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-orange-500 hover:text-white transition-all active:scale-95"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Downloads;
