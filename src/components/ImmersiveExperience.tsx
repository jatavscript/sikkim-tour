import React from 'react';
import { Camera, Bot, MapPin, Archive, ArrowRight } from 'lucide-react';

const ImmersiveExperience = () => {
  const features = [
    {
      id: 1,
      title: "360° Virtual Tours",
      description: "Explore monastery interiors with immersive panoramic views and guided narration.",
      status: "45 Tours Available",
      icon: Camera,
      gradient: "from-red-500 to-pink-500",
      statusColor: "text-orange-500"
    },
    {
      id: 2,
      title: "AI Smart Guide",
      description: "Intelligent chatbot providing personalized monastery recommendations and cultural insights.",
      status: "24/7 Available",
      icon: Bot,
      gradient: "from-blue-500 to-cyan-500",
      statusColor: "text-orange-400"
    },
    {
      id: 3,
      title: "Interactive Mapping",
      description: "Geo-tagged monastery locations with routes, transport, and nearby attractions.",
      status: "Real-time Data",
      icon: MapPin,
      gradient: "from-green-500 to-emerald-500",
      statusColor: "text-green-500"
    },
    {
      id: 4,
      title: "Digital Archives",
      description: "Preserved manuscripts, murals, and artifacts with AI-powered search capabilities.",
      status: "5000+ Items",
      icon: Archive,
      gradient: "from-orange-500 to-yellow-500",
      statusColor: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Immersive Digital Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology meets ancient wisdom in our comprehensive digital heritage platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                status={feature.status}
                statusColor={feature.statusColor}
                gradient={feature.gradient}
                icon={IconComponent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  status: string;
  statusColor: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  status,
  statusColor,
  gradient,
  icon: IconComponent
}) => {
  const getGradientClass = (gradient: string) => {
    switch (gradient) {
      case 'from-red-500 to-pink-500':
        return 'bg-gradient-red-pink';
      case 'from-blue-500 to-cyan-500':
        return 'bg-gradient-blue-cyan';
      case 'from-green-500 to-emerald-500':
        return 'bg-gradient-green-emerald';
      case 'from-orange-500 to-yellow-500':
        return 'bg-gradient-orange-yellow';
      default:
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
    }
  };

  return (
    <div className="group perspective-1000">
      <div className="relative w-full h-80 transform-style-preserve-3d transition-all duration-500 ease-in-out group-hover:rotate-3d-1-1-0-30">
        {/* Main Card */}
        <div className={`h-full rounded-[50px] ${getGradientClass(gradient)} transition-all duration-500 ease-in-out shadow-lg group-hover:shadow-2xl`}>
          {/* Glass Overlay */}
          <div className="absolute inset-2 rounded-[55px] border-top-right-radius-full bg-gradient-to-b from-white/35 to-white/80 backdrop-blur-sm border-l border-b border-white/50 transform translate-z-25 transition-all duration-500 ease-in-out group-hover:translate-z-30" />
          
          {/* Content */}
          <div className="relative z-10 p-8 pt-20 transform translate-z-26">
            {/* Icon */}
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {description}
            </p>
            
            {/* Status */}
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${statusColor}`}>
                {status}
              </span>
              <ArrowRight className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveExperience;
