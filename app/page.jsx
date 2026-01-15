"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  Users, 
  Zap, 
  Target, 
  Briefcase, 
  Award, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Brain,
  Rocket,
  XCircle,
  HelpCircle,
  Video
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-100 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-slate-800 font-nunito">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 font-nunito leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const PrimaryButton = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#F9AE00] rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 ${className}`}
  >
    {children}
    <ArrowRight className="ml-2 w-5 h-5" />
  </a>
);

const SecondaryButton = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-600 transition-all duration-300 bg-white border-2 border-blue-600 rounded-full shadow-sm hover:bg-blue-50 hover:shadow-md hover:-translate-y-1 active:translate-y-0 ${className}`}
  >
    {children}
  </a>
);

// --- Main App ---

export default function DesafioTechLanding() {
  const applyLink = "https://tally.so/r/xXMbOr";
  const infoLink = "https://luma.com/s9hl5cli";

  return (
    <div className="min-h-screen bg-white font-nunito text-slate-700 overflow-x-hidden selection:bg-blue-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .font-nunito { font-family: 'Nunito', sans-serif; }
        .bg-soft-gradient { background: linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%); }
        .bg-hero-gradient { background: linear-gradient(135deg, #F0F9FF 0%, #FFFBEB 100%); }
        .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl text-slate-800 tracking-tight">Desafío <span className="text-blue-600">TECH</span></span>
            </div>
            <div className="hidden md:flex space-x-4">
               <a href={infoLink} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 font-semibold px-4 py-2 transition-colors">Sesión Info</a>
               <a href={applyLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                 Postular ahora
               </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-hero-gradient overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-800 uppercase bg-blue-100 rounded-full">
                🚀 Nueva Edición: Enero 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                Aprende a trabajar con <span className="text-blue-600">IA</span>, <br className="hidden md:block"/> sin saber programar.
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-slate-600 mb-8 font-medium">
                Una experiencia práctica de 5 semanas para aprender haciendo y prepararte para el mundo laboral actual.
              </p>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Resuelve retos de empresas, usa herramientas digitales e IA y sal con experiencia demostrable para tu CV. No necesitas conocimientos técnicos.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-wrap justify-center gap-4 mb-10 text-slate-700 font-semibold">
                <div className="flex items-center bg-white/60 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-[#F9AE00] mr-2" />
                  Retos de 48h (Fines de semana)
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  Para perfiles NO técnicos
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                  <Award className="w-5 h-5 text-[#F9AE00] mr-2" />
                  Becas disponibles
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <PrimaryButton href={applyLink}>Postular al programa</PrimaryButton>
                <SecondaryButton href={infoLink}>Asistir a sesión informativa</SecondaryButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 p-10 md:p-16 text-center border border-slate-50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-[#F9AE00]"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Aprender no siempre es suficiente. <br/>
                <span className="text-blue-600">Hacer</span> es lo que marca la diferencia.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Desafío TECH es un programa que te enseña a <strong className="text-slate-900">ejecutar tareas reales</strong> que hoy se requieren en empresas globales, no solo a aprender teoría. Rompemos la barrera entre el "saber" y el "saber hacer".
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is Desafio TECH */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-2xl opacity-50 blur-lg"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <div className="flex gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <Briefcase size={24} />
                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                            <Target size={24} />
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Users size={24} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                        <div className="h-4 bg-slate-100 rounded w-full"></div>
                        <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                        <div className="h-4 bg-slate-100 rounded w-4/5"></div>
                    </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">¿Qué es el programa?</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Una simulación laboral, no un curso más.</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Desafío TECH es un programa intensivo de <span className="font-bold text-slate-900">5 semanas</span> basado en retos que simulan un trabajo real en startups y empresas digitales.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                No es un curso teórico donde solo ves videos. Es una <span className="font-bold text-slate-900">experiencia práctica</span> con acompañamiento, comunidad y feedback constante para que valides tus habilidades.
              </p>
              <ul className="space-y-3">
                {[
                  "Sin exámenes, solo proyectos reales.",
                  "Aprende herramientas No-Code e IA.",
                  "Feedback de expertos de la industria."
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-[#F9AE00] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-slate-600">Una metodología diseñada para que aprendas haciendo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Calendar className="w-8 h-8 text-blue-600" />, 
                title: "Duración & Inicio", 
                desc: "5 semanas intensivas. Iniciamos el 15 de Enero de 2025." 
              },
              { 
                icon: <Zap className="w-8 h-8 text-[#F9AE00]" />, 
                title: "Dinámica Semanal", 
                desc: "1 sesión de capacitación + recursos + 1 reto práctico semanal." 
              },
              { 
                icon: <Users className="w-8 h-8 text-blue-600" />, 
                title: "Feedback Constante", 
                desc: "Revisiones grupales y feedback personalizado para mejorar." 
              }
            ].map((card, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-100 border border-slate-100 hover:shadow-xl hover:shadow-blue-200/50 transition-all h-full">
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Clock className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Dedicación Estimada</h4>
                  <p className="text-slate-600">8 a 10 horas por semana (flexible a tu horario).</p>
                </div>
              </div>
              <div className="md:border-l md:border-blue-200 md:pl-8">
                <p className="text-sm text-slate-500 italic">
                  *Cada reto es independiente. Si no completas uno por fuerza mayor, no pierdes todo el programa.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The 5 Challenges */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Los 5 Retos</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cada semana enfrentarás un desafío diseñado para desarrollar una habilidad crítica en el mercado actual.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { 
                id: 1, 
                title: "Ejecutar bajo presión", 
                desc: "Construir y lanzar una propuesta clara en poco tiempo. Aprende a priorizar y entregar.",
                icon: <Rocket className="w-6 h-6" />
              },
              { 
                id: 2, 
                title: "Levantar y organizar data", 
                desc: "Escuchar a personas reales, hacer entrevistas y organizar información para detectar problemas reales.",
                icon: <Target className="w-6 h-6" />
              },
              { 
                id: 3, 
                title: "Construir con IA y No-Code", 
                desc: "Crear una solución simple (MVP) usando herramientas digitales e IA, sin escribir una línea de código.",
                icon: <Brain className="w-6 h-6" />
              },
              { 
                id: 4, 
                title: "Salir al mercado", 
                desc: "Presentar tu solución al mundo, generar conversaciones y validar con un enfoque comercial.",
                icon: <Users className="w-6 h-6" />
              },
              { 
                id: 5, 
                title: "Venderte profesionalmente", 
                desc: "Construir tu CV, portafolio y pitch personal con la evidencia real de lo que lograste en las semanas anteriores.",
                icon: <Briefcase className="w-6 h-6" />
              }
            ].map((reto, i) => (
              <FadeIn key={reto.id} delay={i * 100}>
                <div className="group relative bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-750">
                   <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                     <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center font-bold text-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       {reto.id}
                     </div>
                     <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{reto.title}</h3>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                                {reto.icon}
                            </div>
                        </div>
                       <p className="text-slate-300 text-lg leading-relaxed">{reto.desc}</p>
                     </div>
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
                        ¿Qué te llevas al terminar?
                    </h2>
                    <div className="space-y-6">
                        {[
                            "Experiencia práctica demostrable (no solo teoría).",
                            "Resultados claros y tangibles para agregar a tu CV.",
                            "Un portafolio con 5 retos reales ejecutados.",
                            "Feedback profesional y de tus pares.",
                            "Más confianza y seguridad para postular a nuevos trabajos."
                        ].map((benefit, idx) => (
                            <div key={idx} className="flex items-start">
                                <div className="mt-1 mr-4 bg-green-100 p-1 rounded-full">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
                <FadeIn delay={200}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                            <div>
                                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                                <div className="h-3 bg-gray-100 rounded w-20"></div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-100 rounded w-full"></div>
                            <div className="h-4 bg-gray-100 rounded w-full"></div>
                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Portafolio</div>
                            <div className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Proyectos</div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">¿Este programa es para ti?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-200 p-2 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">Es para ti si...</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Estás estudiando o iniciando tu carrera.",
                    "Te interesa marketing, ventas, operaciones o administración.",
                    "Quieres aprender haciendo, no solo leyendo.",
                    "Estás dispuesto/a a ejecutar, fallar y volver a probar."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                       <span className="mr-3 mt-1.5 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-200 p-2 rounded-lg">
                        <XCircle className="w-6 h-6 text-red-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-800">NO es para ti si...</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Buscas solo teoría y videos pasivos.",
                    "No tienes al menos 8 horas semanales para los retos.",
                    "Esperas resultados mágicos sin involucrarte.",
                    "Buscas un curso avanzado de programación (Python, JS, etc)."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                       <span className="mr-3 mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-slate-900 text-white relative">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
                <div className="inline-block p-3 rounded-full bg-[#F9AE00]/20 mb-6">
                    <Award className="w-8 h-8 text-[#F9AE00]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    Becas e Inscripción <span className="text-[#F9AE00]">Piloto</span>
                </h2>
                <div className="bg-slate-800 rounded-2xl p-8 md:p-10 border border-slate-700 shadow-2xl">
                    <p className="text-xl leading-relaxed mb-6">
                        Para esta edición piloto se otorgarán <strong className="text-[#F9AE00]">10 becas completas</strong> a personas con alto potencial y compromiso.
                    </p>
                    <p className="text-slate-400 mb-8 text-sm">
                        * Si no obtienes una beca, puedes inscribirte directamente al programa. La postulación a beca no garantiza su otorgación.
                    </p>
                    <PrimaryButton href={applyLink}>Postular a una beca</PrimaryButton>
                </div>
            </FadeIn>
         </div>
      </section>

      {/* Info Session */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Tienes dudas antes de decidir?</h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    Te invitamos a una sesión informativa gratuita donde explicaremos cómo funciona el programa, el nivel de exigencia y resolveremos tus preguntas en vivo.
                </p>
                
                <a
                    href={infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full border border-blue-200 shadow-md hover:shadow-lg hover:bg-blue-50 transition-all group"
                >
                    <Video className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Inscribirme a la sesión informativa
                </a>
            </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-2">
                    <HelpCircle className="text-blue-600" /> Preguntas Frecuentes
                </h2>
            </div>
            <div className="space-y-2">
                {[
                    { q: "¿Necesito saber programar?", a: "No. El programa está diseñado específicamente para perfiles no técnicos. Usaremos herramientas No-Code e IA que son accesibles para todos." },
                    { q: "¿Cuánto tiempo debo dedicarle?", a: "Entre 8 y 10 horas aproximadamente por semana. La mayor parte del tiempo la usarás para resolver el reto del fin de semana." },
                    { q: "¿Qué pasa si no puedo completar un reto?", a: "No te preocupes. Cada reto es independiente. Si fallas una semana, puedes retomar con fuerza la siguiente. Sin embargo, existe una calificación mínima global para graduarte." },
                    { q: "¿Obtengo algún certificado?", a: "Sí, al completar el programa satisfactoriamente recibirás una constancia de participación y una insignia digital para tu LinkedIn." },
                    { q: "¿Es obligatorio asistir a la sesión informativa?", a: "No es obligatorio, pero es muy recomendable para entender la dinámica y ver si el programa hace fit con tus expectativas." },
                    { q: "¿El programa tiene costo?", a: "Sí, es un programa de pago. Sin embargo, para esta edición piloto tenemos 10 becas del 100% disponibles." },
                    { q: "¿Las clases quedarán grabadas?", a: "Sí, todas las sesiones de capacitación quedarán grabadas y disponibles en la plataforma del curso." },
                ].map((faq, i) => (
                    <AccordionItem key={i} question={faq.q} answer={faq.a} />
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F9AE00] opacity-10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                    ¿Listo/a para pasar de la teoría a la acción?
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                    Si quieres aprender a trabajar con IA, sin saber programar, y salir con experiencia real, <strong>Desafío TECH</strong> es para ti.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <PrimaryButton href={applyLink} className="text-lg px-10 py-5">
                        Postular al programa
                    </PrimaryButton>
                    <a
                        href={infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all"
                    >
                        Participar en sesión informativa
                    </a>
                </div>
            </FadeIn>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 py-10 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
              <p>&copy; 2025 Desafío TECH. Todos los derechos reservados.</p>
          </div>
      </footer>
    </div>
  );
}