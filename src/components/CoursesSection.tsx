import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, BookOpen, Users, Zap, Target } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      icon: Target,
      title: "$100M Money Models",
      description: "Learn the financial blueprints that took our founders from $1M to $100M+",
      type: "Free Course",
      cta: "Take This Course",
      color: "from-purple-600 to-purple-700",
      image: "https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alex.h/s-l1200.jpg"
    },
    {
      icon: Zap,
      title: "Offer Creation Course",
      description: "Master the art of crafting irresistible offers that multiply your conversion rates",
      type: "Free Course",
      cta: "Take This Course",
      color: "from-blue-600 to-blue-700",
      image: "https://v3b.fal.media/files/b/0a9c8486/Qj9_ySYpAXP6F_PphVAqG_2f8c8e7d3e6f4a5b8c9d0e1f2g3h4i5j.jpg"
    },
    {
      icon: BookOpen,
      title: "Lead Generation Course",
      description: "Proven strategies to build a consistent pipeline of qualified leads",
      type: "Free Course",
      cta: "Take This Course",
      color: "from-emerald-600 to-emerald-700",
      image: "https://v3b.fal.media/files/b/0a9c8486/8hFjKpLmNoPqRsTuVwXyZ_5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k.jpg"
    },
    {
      icon: Users,
      title: "Scaling Workshop",
      description: "Live, in-person intensive with our top coaches. Limited to 50 founders per session",
      type: "Live In-Person",
      cta: "Secure Your Spot",
      color: "from-orange-600 to-red-600",
      image: "https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alex.h/download%20(1).jpg",
      featured: true
    }
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Level Up Your Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Free courses and live workshops designed to accelerate your journey to $100M.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <Card
                key={idx}
                className={`overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  course.featured
                    ? 'lg:col-span-1 border-2 border-orange-500 shadow-lg shadow-orange-600/20 md:col-span-2 md:row-span-1'
                    : 'border-gray-800 hover:border-gray-700'
                } bg-gray-800 group`}
              >
                <div className={`h-48 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                    />
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <CardTitle className={`${
                        course.featured ? 'text-2xl' : 'text-lg'
                      } text-white`}>
                        {course.title}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="inline-block">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      course.featured
                        ? 'bg-orange-600/30 text-orange-300 border border-orange-500/50'
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {course.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-300 leading-relaxed text-sm">
                    {course.description}
                  </CardDescription>
                  <Button
                    className={`w-full ${
                      course.featured
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    } flex items-center justify-center gap-2 h-12 font-semibold`}
                  >
                    {course.cta}
                    <ArrowRight size={18} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">New courses released monthly • Over 50,000 founders already enrolled</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;