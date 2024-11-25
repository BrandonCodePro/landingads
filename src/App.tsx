import React from 'react';
import { ArrowRight, BarChart3, Target, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="absolute top-0 w-full z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
              <Target className="w-8 h-8" />
              AdsMaster
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Contáctanos Ahora
            </button>
          </div>
        </nav>

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Impulsa tu Negocio con Publicidad Digital Estratégica
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Aumenta tus ingresos con campañas de Google y Meta Ads optimizadas. Ayudo a empresas a escalar sus ventas con estrategias basadas en datos.
              </p>
              <div className="flex gap-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  Empieza Ahora <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors">
                  Ver Casos de Éxito
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50">
        <Stats />
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios Completos de Gestión de Anuncios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
                title: "Análisis de Desempeño",
                description: "Obtén reportes detallados para maximizar el retorno de tu inversión (ROI)."
              },
              {
                icon: <Target className="w-8 h-8 text-indigo-600" />,
                title: "Segmentación Estratégica",
                description: "Llega a tus clientes ideales con segmentación precisa y eficaz."
              },
              {
                icon: <Zap className="w-8 h-8 text-indigo-600" />,
                title: "Optimización de Conversiones",
                description: "Pruebas A/B continuas para mejorar las tasas de conversión."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Más Información <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Opiniones de Clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              name="Sara López"
              role="Directora de E-commerce"
              content="El retorno de inversión que hemos obtenido es increíble. Nuestra eficiencia en el gasto publicitario mejoró un 240% en solo 3 meses."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            />
            <Testimonial
              name="Miguel Pérez"
              role="Fundador de SaaS"
              content="Su conocimiento profundo de Google y Meta Ads nos ayudó a escalar nuestro negocio de 6 a 7 cifras en ingresos."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            />
            <Testimonial
              name="Emma Torres"
              role="Gerente de Marketing"
              content="La atención al detalle y el enfoque basado en datos han transformado nuestra estrategia de campañas publicitarias."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Escalar tu Negocio?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Hablemos de cómo puedo ayudarte a alcanzar tus objetivos publicitarios.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">¿Por qué Elegirme?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              {[
                "Experto Certificado en Google & Meta Ads",
                "Estrategias Basadas en Datos",
                "Resultados Comprobados",
                "Reportes Transparentes",
                "Optimización Continua",
                "Comunicación Directa"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
              Agenda una Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold flex items-center gap-2 mb-4">
              <Target className="w-6 h-6" />
              AdsMaster
            </div>
            <p className="text-gray-400">
              Transformamos negocios con estrategias de publicidad digital.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Gestión de Google Ads</li>
              <li>Gestión de Meta Ads</li>
              <li>Análisis & Reportes</li>
              <li>Optimización de Conversiones</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Casos de Éxito</li>
              <li>Blog</li>
              <li>Preguntas Frecuentes</li>
              <li>Política de Privacidad</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hola@adsmaster.com</li>
              <li>+54 9 11 5555-5555</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
