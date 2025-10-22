import gladius from '../assets/images/glad.jpg';

function Specs() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Robots</h2>
          <p className="text-lg opacity-70">
            Explora lo mejor para la robótica educativa
          </p>
        </div>

        <div className="space-y-24">
          {/* Product 1 - Image Left, Specs Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={gladius}
                alt="Product Pro"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            {/* Specs */}
            <div className="lg:w-1/2">
              <div className="badge badge-primary mb-4">Premium</div>
              <h3 className="text-3xl font-bold mb-4">GLADIUS</h3>
              <p className="text-lg opacity-70 mb-6">
                Desarrollado para aprender desde niveles iniciales hasta niveles
                avanzados.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Basado en ESP32</strong>
                    <p className="text-sm opacity-70">
                      Microcontrolador de alto rendimiento
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">
                      Pines I/O de propósito general
                    </strong>
                    <p className="text-sm opacity-70">
                      Expande las capacidades del robot
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">IMU MPU6050</strong>
                    <p className="text-sm opacity-70">
                      Ideal para navegación autónoma
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Conectividad Wifi</strong>
                    <p className="text-sm opacity-70">
                      Posibilidad de conectarse con dispositivos de manera
                      remota.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Bateria Li-On </strong>
                    <p className="text-sm opacity-70">Alta durabilidad</p>
                  </div>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                {/* <div className="text-4xl font-bold text-primary">$1,999</div> */}
                <button className="btn btn-primary btn-lg">
                  Compralo Ahora
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Product 2 - Image Right, Specs Left (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="/product2.png"
                alt="Product Lite"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>

            {/* Specs */}
            <div className="lg:w-1/2">
              <div className="badge badge-secondary mb-4">Best Value</div>
              <h3 className="text-3xl font-bold mb-4">ORACULUS</h3>
              <p className="text-lg opacity-70 mb-6">
                Perfecto para controlar robot de manera inalambrica.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Basado en un ESP32</strong>
                    <p className="text-sm opacity-70">Rendimiento eficiente.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">
                      Conectividad WiFi Bluetooth
                    </strong>
                    <p className="text-sm opacity-70">
                      Puedes conectarte a cualquier robot
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">JoySticks configurables</strong>
                    <p className="text-sm opacity-70">
                      Tu decides como controlar un robot
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Botones configurables</strong>
                    <p className="text-sm opacity-70">
                      Puedes decidir la funcionalidad de cada una.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Batería interna</strong>
                    <p className="text-sm opacity-70">
                      Para un funcionamiento de largo tiempo
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                {/* <div className="text-4xl font-bold text-primary">$1,299</div> */}
                <button className="btn btn-primary btn-lg">
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specs;
