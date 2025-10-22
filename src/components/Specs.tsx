function Specs() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Product Specifications</h2>
          <p className="text-lg opacity-70">Explore our premium product line</p>
        </div>

        <div className="space-y-24">
          {/* Product 1 - Image Left, Specs Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="/product1.png"
                alt="Product Pro"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            {/* Specs */}
            <div className="lg:w-1/2">
              <div className="badge badge-primary mb-4">Premium</div>
              <h3 className="text-3xl font-bold mb-4">Product Pro</h3>
              <p className="text-lg opacity-70 mb-6">
                Our flagship model designed for professionals who demand the
                best performance.
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
                    <strong className="text-lg">Intel Core i9 Processor</strong>
                    <p className="text-sm opacity-70">
                      Latest generation for maximum performance
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
                    <strong className="text-lg">32GB RAM</strong>
                    <p className="text-sm opacity-70">
                      DDR5 memory for seamless multitasking
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
                    <strong className="text-lg">1TB NVMe SSD</strong>
                    <p className="text-sm opacity-70">
                      Ultra-fast storage for your files
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
                    <strong className="text-lg">15.6" 4K OLED Display</strong>
                    <p className="text-sm opacity-70">
                      Stunning visuals with true blacks
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
                    <strong className="text-lg">12 Hour Battery Life</strong>
                    <p className="text-sm opacity-70">
                      All-day productivity on a single charge
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">$1,999</div>
                <button className="btn btn-primary btn-lg">Buy Now</button>
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
              <h3 className="text-3xl font-bold mb-4">Product Lite</h3>
              <p className="text-lg opacity-70 mb-6">
                Perfect balance of performance and portability for everyday
                users.
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
                    <strong className="text-lg">Intel Core i5 Processor</strong>
                    <p className="text-sm opacity-70">
                      Efficient performance for daily tasks
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
                    <strong className="text-lg">16GB RAM</strong>
                    <p className="text-sm opacity-70">
                      Smooth performance for most applications
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
                    <strong className="text-lg">512GB NVMe SSD</strong>
                    <p className="text-sm opacity-70">
                      Fast storage for your essentials
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
                    <strong className="text-lg">14" Full HD Display</strong>
                    <p className="text-sm opacity-70">
                      Crisp visuals in a compact form
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
                    <strong className="text-lg">10 Hour Battery Life</strong>
                    <p className="text-sm opacity-70">
                      Reliable power for your workday
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">$1,299</div>
                <button className="btn btn-primary btn-lg">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specs;
