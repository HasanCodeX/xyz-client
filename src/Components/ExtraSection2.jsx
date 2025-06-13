

import React from 'react';
import { motion } from 'framer-motion';
// Import specific icons from lucide-react for facts and statistics
import {
  Globe,        // For global statistics
  LeafyGreen,   // For environmental impact
  Wallet,       // For economic impact
  Lightbulb,    // For "Did You Know?" or solution emphasis
  Trash2        // For general waste representation
} from 'lucide-react';

// Fix for linter warning: Explicitly "use" the motion object by creating an alias
const MotionDiv = motion.div;

// Define the static data for food waste facts and statistics
const foodWasteFacts = [
  {
    title: '1/3 of Food Wasted Globally',
    description: 'Roughly one-third of the food produced in the world for human consumption every year — approximately 1.3 billion tonnes — gets lost or wasted.',
    icon: Globe,
    color: 'text-red-500 dark:text-red-400'
  },
  {
    title: '$1 Trillion Economic Loss',
    description: 'Food waste is a major economic burden, costing the global economy approximately $1 trillion annually.',
    icon: Wallet,
    color: 'text-green-600 dark:text-green-400'
  },
  {
    title: 'Huge Environmental Impact',
    description: 'If food waste were a country, it would be the third largest emitter of greenhouse gases (after China and the U.S.).',
    icon: LeafyGreen,
    color: 'text-orange-500 dark:text-orange-400'
  },
  {
    title: 'Water & Land Resources Wasted',
    description: 'Growing food that never gets eaten wastes a volume of water equivalent to the annual flow of Russia’s Volga River.',
    icon: Trash2, // Using trash icon to represent waste of resources
    color: 'text-purple-500 dark:text-purple-400'
  },
  {
    title: 'Help End Hunger',
    description: 'Reducing food loss and waste could free up enough food to feed 2 billion people. Every small action helps.',
    icon: Lightbulb,
    color: 'text-blue-500 dark:text-blue-400'
  }
];

// Framer Motion variants for entry animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Slightly longer stagger for more distinct appearance
    }
  }
};

const itemVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.85 }, // Start lower, slightly smaller, and invisible
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6 // Slightly longer duration for a smoother reveal
    }
  }
};

const ExtraSection2 = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 bg-gradient-to-b from-teal-50 to-white dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 dark:text-teal-400">
          Understanding Food Waste: Facts & Statistics
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-base max-w-xl mx-auto">
          Every effort to reduce food waste makes a significant impact on our planet and resources.
        </p>
      </div>

      <MotionDiv
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of component is visible
      >
        {foodWasteFacts.map((fact, index) => (
          <MotionDiv
            key={index}
            className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-teal-100 dark:border-zinc-700"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }} // More pronounced hover effect
          >
            <div className={`text-6xl mb-4 ${fact.color}`}>
              {React.createElement(fact.icon, { size: 64 })} {/* Render Lucide Icon with larger size */}
            </div>
            <h3 className="text-xl font-bold text-teal-800 dark:text-teal-300 mb-2">
              {fact.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 flex-grow text-sm">
              {fact.description}
            </p>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
};

export default ExtraSection2;
