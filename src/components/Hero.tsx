function Hero() {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="hero-content text-center text-primary-content">
        <div className="max-w-4xl">
          <div className="badge badge-outline mb-4">Empieza tu aprendizaje</div>
          <h1 className="text-6xl font-bold mb-6">
            La mejor plataforma de aprendizaje en robótica
          </h1>
          <p className="text-xl mb-8">
            Niveles: básico - intermedio - avanzado
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-12">
            <button className="btn btn-lg bg-white text-primary hover:bg-base-200">
              Comienza tu aprendizaje
            </button>
            <button className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">
              Videos Demo
            </button>
          </div>

          {/* Stats */}
          <div className="stats shadow bg-base-100 text-primary">
            <div className="stat">
              <div className="stat-value">500+</div>
              <div className="stat-title">Estudiantes</div>
            </div>
            <div className="stat">
              <div className="stat-value">50K+</div>
              <div className="stat-title">Proyectos</div>
            </div>
            <div className="stat">
              <div className="stat-value">99%</div>
              <div className="stat-title">Mejora</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
