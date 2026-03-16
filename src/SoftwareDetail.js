import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./componets/ui/Navbar";
import Footer from "./componets/ui/Footer";
import { softwareData } from "./data/softwareData";
import { Download, ArrowLeft, CheckCircle2, Info, FileCode, Zap } from "lucide-react";
import { motion } from "framer-motion";

const SoftwareDetail = () => {
    const { id } = useParams();
    const software = softwareData.find((s) => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!software) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white">
                <div className="p-4 bg-orange-50 rounded-full mb-6">
                    <Info size={40} className="text-orange-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Resource Missing</h1>
                <p className="text-gray-500 mb-8 max-w-sm">We couldn't find the software profile you're looking for. It might have been relocated or deprecated.</p>
                <Link to="/downloads" className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-600 transition-all">
                    <ArrowLeft size={20} /> Browse Software Catalog
                </Link>
            </div>
        );
    }

    const downloadConfig = () => {
        const configData = JSON.stringify(software.configTemplate, null, 2);
        const blob = new Blob([configData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${software.id}-config.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans">
            <Navbar />

            {/* Header / Briefing Area */}
            <header className="bg-white border-b border-gray-100 pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    <Link to="/downloads" className="inline-flex items-center gap-2 text-orange-500 font-bold mb-8 hover:gap-3 transition-all">
                        <ArrowLeft size={18} /> BACK TO CATALOG
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase">Product Profile</span>
                                <div className="h-px w-8 bg-gray-200" />
                                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">{software.version}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-[1.1] mb-6">
                                {software.name.split(' ').map((word, i) => (
                                    <span key={i} className={i === software.name.split(' ').length - 1 ? "font-black" : ""}>{word} </span>
                                ))}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl italic">
                                "{software.description}"
                            </p>
                        </div>

                        {/* Status Badge */}
                        <div className="shrink-0 flex items-center gap-3 p-6 bg-orange-500 rounded-[14px] text-white shadow-sm shadow-orange-500/20">
                            <div className="p-3 bg-white/20 rounded-2xl">
                                <Zap size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-black tracking-widest opacity-70 leading-none mb-1">Status</p>
                                <p className="text-sm font-bold leading-none">{software.isComingSoon ? "In Development" : "Stable Release"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow max-w-6xl mx-auto px-6 py-20 w-full">
                <div className="grid lg:grid-cols-5 gap-20">

                    {/* Insights Content */}
                    <div className="lg:col-span-3 space-y-20">
                        <section>
                            <h2 className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase mb-8">Technical Narrative</h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-[1.8] font-light">
                                {software.longDescription.split('. ').map((para, i) => (
                                    <p key={i}>{para}.</p>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase mb-10">High-Performance Capabilties</h2>
                            <div className="grid sm:grid-cols-2 gap-12">
                                {software.features.map((feature, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex items-end gap-3 mb-4">
                                            <span className="text-4xl font-black text-orange-100 leading-none transition-colors group-hover:text-orange-500/10">0{idx + 1}</span>
                                            <h3 className="font-bold text-gray-900 text-lg">{feature}</h3>
                                        </div>
                                        <div className="h-0.5 w-8 bg-gray-100 group-hover:w-full group-hover:bg-orange-500/30 transition-all duration-500" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Interaction Hub */}
                    <aside className="lg:col-span-2">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white p-10 rounded-[10px] shadow-sm border border-gray-100 overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="p-4 bg-gray-50 rounded-2xl">
                                            <FileCode size={24} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Configuration</p>
                                            <p className="text-sm font-black text-gray-900">deployment-spec.json</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-10">
                                        Download the technical manifest to initialize your local instance. This file contains architecture settings and node-routing logic.
                                    </p>

                                    <button
                                        onClick={downloadConfig}
                                        className="w-full flex items-center justify-between bg-gray-900 text-white p-6 rounded-[10px] font-bold transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-600/20 active:scale-95 group/btn"
                                    >
                                        <span>INITIALIZE FETCH</span>
                                        <Download size={20} className="group-hover/btn:translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-[10px] flex flex-col items-center text-center">
                                <h4 className="font-bold text-gray-900 mb-2">Need a tailored build?</h4>
                                <p className="text-sm text-gray-500 mb-6 font-light">We architect custom versions for unique infrastructure needs.</p>
                                <Link to="/contact" className="text-orange-500 text-sm font-black tracking-widest hover:underline">
                                    INQUIRE ABOUT ENGAGEMENT
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SoftwareDetail;
