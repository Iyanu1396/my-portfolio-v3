'use client'
import { motion } from "framer-motion";
import {
    Smartphone,
    Code,
    Server
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "FRONTEND DEVELOPMENT",
        description: "Delivering exceptional user experiences through modern web applications built with React.js, Next.js, and TypeScript. Implementing advanced state management with Redux and efficient data handling with React Query. Our solutions prioritize performance, accessibility, and responsive design across all devices.",
        icon: Code,
        category: "Development"
    },
    {
        id: 2,
        title: "BACKEND DEVELOPMENT",
        description: "Engineering robust server-side architectures with Node.js and Express.js that power scalable digital solutions. Implementing optimized database systems with MongoDB and leveraging Supabase for real-time applications. Our backend services emphasize security, performance, and seamless integration capabilities.",
        icon: Server,
        category: "Development"
    },
    {
        id: 3,
        title: "MOBILE APP DEVELOPMENT",
        description: "Creating high-performance cross-platform mobile applications with React Native and Expo. Our development approach delivers native-quality experiences while maintaining a single codebase for iOS and Android platforms, reducing time-to-market and development costs while ensuring consistent functionality.",
        icon: Smartphone,
        category: "Mobile"
    }
];


const Services = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 " />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-5"
                >
                    <h1 className="text-2xl md:text-3xl font-clashbold text-white mb-6 tracking-tight">
                        Services
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🔥</span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
                    <p className="text-[#FFFFFF99] text-base md:text-l ">
                        Specialized in multiple domains of software developement
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: service.id * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                translateY: -5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                            }}
                            className="group relative bg-[#130b1c]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-purple-500" strokeWidth={1.5} />
                                    </span>
                                    <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
                                </div>

                                <h3 className="text-white text-xl  font-clashbold mb-4 tracking-wide">
                                    {service.title}
                                </h3>

                                <p className="text-[#FFFFFF99] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
