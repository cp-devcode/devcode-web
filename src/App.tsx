import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Code2, Moon, Rocket, Shield, ChevronDown, Instagram, Linkedin, Facebook, Check, ExternalLink, Menu, X, MessageSquare } from 'lucide-react';
import { CursorGlow } from './components/CursorGlow';
import { Logo } from './components/Logo';
import { useEffect } from 'react';
import '@n8n/chat/style.css';

import { createChat } from '@n8n/chat';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 15000,
    description: 'Perfect for starting out with AI and online presence',
    features: [
      'Custom Website',
      'Custom Domain',
      'Calendar Integration',
      'AI Scheduling Agent',
      'AI Support Agent',
      'Setup Online Presence',
      'Basic Security',
      '24/7 Support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 27000,
    description: 'Ideal for Professionals in their field',
    features: [
      'All What Is Included In Starter',
      'AI Personal Assistant',
      'AI Whatsapp Agent',
      'AI Email Agent',
      'Business Email Setup',
      'Enhanced Security'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 60000,
    description: 'For large organizations with complex needs',
    features: [
      'All What Is Included In Professional',
      'Web Application',
      '2 Languages',
      'Blog Integration',
      'Voice Summary AI Agent',
      '2 Custom AI Agents',
      'Advanced Analytics',
      'Advanced Security',
      '3 Months Of Free Customizations'
    ]
  },
  {
    id: 'custom',
    name: 'Custom',
    price: null,
    description: 'Tailored solutions for unique requirements',
    features: [
      'Fully customizable feature set',
      'Choose What Matters Most For You',
      'Control The Price',
      'Choose Your Capabilities',
      'Integrate With Your Current Stack'
    ]
  }
];

const demos = [
  {
    id: 'ecommerce',
    name: "Dr. Adel's Clinic",
    description: 'An advanced AI integrated website for a medical clinic',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    url: 'https://demo-ecommerce.techforge.dev'
  },
  {
    id: 'dashboard',
    name: 'Analytics Dashboard',
    description: 'Real-time data visualization and reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    url: 'https://demo-dashboard.techforge.dev'
  },
  {
    id: 'crm',
    name: 'CRM System',
    description: 'Customer relationship management solution',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    url: 'https://demo-crm.techforge.dev'
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    description: 'Cross-platform mobile application',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    url: 'https://demo-mobile.techforge.dev'
  }
];

function ServiceCard({ service, index }) {
  return (
    <div 
      className="interactive-card bg-dark p-6 sm:p-8 rounded-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 animate-float">{service.icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
    </div>
  );
}

function PlanCard({ plan, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`interactive-card bg-dark-lighter p-6 sm:p-8 rounded-xl ${
        plan.id === 'custom' ? 'border-2 border-dark-accent animate-glow' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-4">{plan.name}</h3>
      <div className={`text-2xl sm:text-3xl font-bold text-dark-accent mb-4 transition-transform duration-300 ${
        isHovered ? 'scale-110' : ''
      }`}>
        {plan.price ? `${plan.price}` : (
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-6 h-6" />
            <span>Contact Us</span>
          </div>
        )}
        {plan.price && <span className="text-lg sm:text-xl text-gray-400">EGP</span>}
      </div>
      <p className="text-sm sm:text-base text-gray-400 mb-6">{plan.description}</p>
      <ul className="space-y-3 mb-8">
        {plan.features.slice(0, 5).map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className={`w-5 h-5 text-dark-accent transition-all duration-300 ${
              isHovered ? 'scale-125' : ''
            }`} />
            <span className="text-sm sm:text-base">{feature}</span>
          </li>
        ))}
        {plan.features.length > 5 && (
          <li className="text-sm sm:text-base text-gray-400">
            + {plan.features.length - 5} more features
          </li>
        )}
      </ul>
      <Link
        to={`/plan/${plan.id}`}
        className="button-primary block text-center w-full"
      >
        View Details
      </Link>
    </div>
  );
}

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <div className={`fixed inset-0 bg-dark/95 backdrop-blur-sm transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 lg:hidden`}>
      <div className="flex justify-end p-6">
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col items-center space-y-8 p-6">
        <a href="#services" onClick={() => setIsOpen(false)} className="nav-link text-xl">Services</a>
        <a href="#plans" onClick={() => setIsOpen(false)} className="nav-link text-xl">Plans</a>
        <a href="#about" onClick={() => setIsOpen(false)} className="nav-link text-xl">Why-Us</a>
        <Link to="/demos" onClick={() => setIsOpen(false)} className="nav-link text-xl">Demos</Link>
      </div>
    </div>
  );
}

function PlanDetails() {
  const { planId } = useParams();
  const plan = plans.find(p => p.id === planId);

  if (!plan) return <div>Plan not found</div>;

  return (
    <div className="min-h-screen bg-dark pt-20 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <Link to="/#plans" className="text-dark-accent hover:text-opacity-80 mb-8 inline-block">
          ← Back to Plans
        </Link>
        <div className="bg-dark-lighter rounded-2xl p-6 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{plan.name} Plan</h1>
          <div className="text-2xl sm:text-3xl font-bold text-dark-accent mb-6">
            {plan.price ? `$${plan.price}` : 'Custom Pricing'}<span className="text-lg sm:text-xl text-gray-400">{plan.price ? '/month' : ''}</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">{plan.description}</p>
          
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Features Included:</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-dark-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/schedule" className="button-primary w-full sm:w-auto">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemosPage() {
  return (
    <div className="min-h-screen bg-dark pt-20 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <Link to="/" className="text-dark-accent hover:text-opacity-80 mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Demos</h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12">
          Explore our live demos to see our solutions in action. Each demo showcases different aspects of our capabilities.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {demos.map((demo) => (
            <a
              key={demo.id}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-lighter rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent opacity-60" />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold">{demo.name}</h3>
                  <ExternalLink className="w-5 h-5 text-dark-accent" />
                </div>
                <p className="text-sm sm:text-base text-gray-400">{demo.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-dark-accent" />,
      title: "Custom Web Development",
      description: "Tailored solutions built with cutting-edge technology"
    },
    {
      icon: <Rocket className="w-12 h-12 text-dark-accent" />,
      title: "AI & Automation",
      description: "Boost your performance with AI and automation solutions"
    },
    {
      icon: <Shield className="w-12 h-12 text-dark-accent" />,
      title: "Hosting & Cybersecurity",
      description: "We will manage the hassle of hosting and cybersecurity for you"
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-gray-100">
      <CursorGlow />
      <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden lg:flex space-x-8">
            <a href="#services" className="text-xl nav-link">Services</a>
            <a href="#plans" className="text-xl nav-link">Plans</a>
            <a href="#about" className="text-xl nav-link">Why-Us</a>
            <Link to="/demos" className="text-xl nav-link text-dark-accent hover:text-dark-accent/80 font-semibold">Demos</Link>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <header className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span>Equiping Businesses</span><br />
            <span className="text-dark-accent">With AI Automations</span>
            <br />Advancing Prouctivity
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            We craft AI-driven solutions to streamline your operations and drive growth
            and statifaction for you and your customers.
          </p>
          <div className=" text-xl flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up">
            <a href="#plans" className="button-primary">
              Get Started
            </a>
            <Link to="/demos" className="button-secondary">
              Try Demo
            </Link>
          </div>
          <div className="mt-16 animate-bounce-slow">
            <ChevronDown className="w-8 h-8 mx-auto text-dark-accent" />
          </div>
        </div>
      </header>

      <section id="services" className="py-16 sm:py-20 bg-dark-lighter">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">Choose Your Plan</h2>
          <p className="text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            Select the perfect plan for your business needs. All plans include our core features
            with different levels of integrations and capabilities.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 bg-dark-lighter">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img 
                src="https://i.ibb.co/0xjTBDR/devcode-rounded.png?au=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-6">
                At Cyiper Devcode, we care about your trust and satisfaction
                with our services. Empowering you with today's AI technology just for an affordable price. 
              </p>
              <ul className="space-y-4">
                {[
                  "4+ live demos to try yourself",
                  "Payment only after delivery and a 48h trial",
                  "Affordable pricing and flexible installment plans",
                  "No need to worry about maintenance and administration",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dark-accent rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Moon className="w-8 h-8 text-dark-accent" />
              <span className="text-xl font-bold">CP-Devcode</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dark-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dark-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dark-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className=" text-xl mt-8 text-center text-sm sm:text-base text-gray-400">
            <p>&copy; 2025 CP-Devcode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SchedulePage() {
  return (
    <div className="min-h-screen bg-dark">
      <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Logo />
          <Link to="/" className="text-dark-accent hover:text-opacity-80">
            ← Back to Home
          </Link>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 title-gradient">
            Schedule a Call with Our Team
          </h1>
	  <p>Or Email Us sales@cp-devcode.com</p>
          <div className="bg-dark-lighter rounded-xl p-4 shadow-lg">
            <iframe
              src="https://cal.com/cp-devcode"
              className="w-full min-h-[600px] rounded-lg"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    
  }, []);createChat({
    webhookUrl: 'https://n8n.cp-devcode.com/webhook/6f84fd36-d50d-4e53-9c6e-83f7b8c78a1c/chat',
    webhookConfig: {
      method: 'POST',
      headers: {}
    },
    target: '#n8n-chat',
    mode: 'window',
    chatInputKey: 'chatInput',
    chatSessionKey: 'sessionId',
    metadata: {},
    showWelcomeScreen: false,
    defaultLanguage: 'en',
    initialMessages: [
      "Assalam A'likum! 👋\nAm CP-Devcode's AI Assistant. How can I assist you today?",
      "you can also Email us: sales@cp-devcode.com"
    ],
    i18n: {
      en: {
        title: "CP-Devcode's AI",
        subtitle: "Ask questions or even schedule a meeting.",
        footer: '',
        getStarted: 'New Conversation',
        inputPlaceholder: 'Type your question..',
      },
    },
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan/:planId" element={<PlanDetails />} />
      <Route path="/demos" element={<DemosPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
    </Routes>
  );
}

export default App;
