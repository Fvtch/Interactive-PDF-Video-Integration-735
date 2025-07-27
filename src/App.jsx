import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from './common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight, FiDownload, FiPlay, FiVolume2, FiTarget, FiZap, FiUsers, FiBookOpen } = FiIcons;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      type: 'title',
      emoji: '🔄',
      mission: 'Mission 11',
      title: 'Dynamics — The Flow Master',
      subtitle: 'Subtle moves. Massive results.'
    },
    {
      id: 'intro',
      type: 'intro',
      title: 'Intro from Futch',
      emoji: '👨‍🎨',
      content: "Hey, it's Futch. In the last mission, you learned how EQ works. Now it's time to actually use it to clean up your mix and carve sonic space so every sound can breathe."
    },
    {
      id: 'problem',
      type: 'problem',
      title: 'The Problem',
      emoji: '🤖',
      villain: 'The Clutter King',
      content: "The Clutter King wants your sounds to fight. He hides behind overlapping frequencies, masking your mix in chaos."
    },
    {
      id: 'goal',
      type: 'goal',
      title: 'Your Mission Goal',
      emoji: '📊',
      content: "Your goal: use EQ to carve out space so each element of your track has its own spotlight."
    },
    {
      id: 'metaphor',
      type: 'metaphor',
      title: 'Think of it Like This',
      emoji: '🧩',
      content: "Think of your mix like a stage. Not everyone can stand front and center. Carving EQ holes is how you rearrange the spotlight."
    },
    {
      id: 'quote',
      type: 'quote',
      title: 'Words of Wisdom',
      emoji: '🧤',
      content: "Subtract the unnecessary so the necessary may speak."
    },
    {
      id: 'outcomes',
      type: 'outcomes',
      title: 'Learning Outcomes',
      emoji: '💡',
      items: [
        'Use high-pass filters to clear up low-end muddiness',
        'Identify and boost a focal frequency of a track',
        'Carve space in competing instruments by cutting that same frequency'
      ]
    },
    {
      id: 'part1',
      type: 'tutorial',
      title: 'Part 1: Clear the Mud',
      emoji: '🔄',
      subtitle: 'Start With the High Pass',
      videoId: 'H-kA3UtBj4M',
      steps: [
        'Roll off low end on every track that doesn\'t need it',
        'Listen until it thins, then dial it back',
        'Free up room for kick and bass to shine'
      ]
    },
    {
      id: 'part2',
      type: 'tutorial',
      title: 'Part 2: Find the Focus',
      emoji: '🔄',
      subtitle: 'Find the Sweet Spot',
      videoId: 'H-kA3UtBj4M',
      steps: [
        'Solo the track you want to spotlight',
        'Use a boost & sweep technique to find the focal frequency',
        'Gently boost (within +3 to +6 dB max)'
      ]
    },
    {
      id: 'part3',
      type: 'tutorial',
      title: 'Part 3: Carve the Hole',
      emoji: '🔄',
      subtitle: 'Make Room For What Matters',
      videoId: 'aGCdLKXNF3w',
      steps: [
        'On competing tracks, cut the same focal frequency you boosted',
        'Keep moves subtle (±6 dB max)',
        'Listen in context (never solo forever)'
      ]
    },
    {
      id: 'magic',
      type: 'magic',
      title: 'The Magic Trick',
      emoji: '💫',
      content: "Cut instead of boost. Subtraction = clarity. Let your hero frequency shine by giving it space."
    },
    {
      id: 'download',
      type: 'download',
      title: 'Your Mission Guide',
      emoji: '🧙',
      content: "Download the Carve & Clarity Checklist so you can follow these steps in your own session.",
      videoId: '8AHCfZTRGiI'
    },
    {
      id: 'cliffhanger',
      type: 'cliffhanger',
      title: 'What\'s Next?',
      emoji: '⚡️',
      content: "We've carved out clarity… but how do we add impact? Up next: compression—and a villain called The Squisher."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="text-center space-y-8">
            <div className="text-8xl mb-4">{slide.emoji}</div>
            <h1 className="text-6xl font-bold text-white mb-4">
              {slide.mission}: {slide.title}
            </h1>
            <p className="text-2xl text-blue-200 italic">{slide.subtitle}</p>
          </div>
        );

      case 'intro':
      case 'problem':
      case 'goal':
      case 'metaphor':
      case 'quote':
      case 'magic':
      case 'cliffhanger':
        return (
          <div className="text-center space-y-8">
            <div className="text-6xl mb-6">{slide.emoji}</div>
            <h2 className="text-4xl font-bold text-white mb-8">{slide.title}</h2>
            {slide.villain && (
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-red-300 mb-4">Villain: {slide.villain}</h3>
              </div>
            )}
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              {slide.content}
            </p>
          </div>
        );

      case 'outcomes':
        return (
          <div className="text-center space-y-8">
            <div className="text-6xl mb-6">{slide.emoji}</div>
            <h2 className="text-4xl font-bold text-white mb-8">{slide.title}</h2>
            <div className="text-left max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 mb-6">By the end of this mission, students will be able to:</p>
              <ul className="space-y-4">
                {slide.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start space-x-3 text-lg text-blue-100"
                  >
                    <SafeIcon icon={FiTarget} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'tutorial':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="text-6xl mb-6">{slide.emoji}</div>
              <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-2xl text-blue-200 mb-8">{slide.subtitle}</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Steps to Follow:</h3>
                <ul className="space-y-4">
                  {slide.steps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <span className="text-blue-100 text-lg">{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6">
                <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${slide.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-200">
                  <SafeIcon icon={FiPlay} />
                  <span>Watch the tutorial</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'download':
        return (
          <div className="text-center space-y-8">
            <div className="text-6xl mb-6">{slide.emoji}</div>
            <h2 className="text-4xl font-bold text-white mb-8">{slide.title}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">{slide.content}</p>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center space-x-3 mx-auto"
                >
                  <SafeIcon icon={FiDownload} />
                  <span>Download Mission Guide</span>
                </motion.button>
                
                <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-300 mb-3">What's Included:</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li>• Step-by-step EQ carving checklist</li>
                    <li>• Frequency range reference chart</li>
                    <li>• Common mixing mistakes to avoid</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6">
                <div className="aspect-video bg-black rounded-lg mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${slide.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-white font-bold text-xl">Mission 11: Dynamics</h1>
            <span className="text-blue-300 text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white"
            >
              <SafeIcon icon={FiChevronLeft} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white"
            >
              <SafeIcon icon={FiChevronRight} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Slide Progress Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[80vh] flex items-center justify-center"
            >
              {renderSlide(slides[currentSlide])}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-20 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
          onClick={() => window.open('https://example.com/mission-guide.pdf', '_blank')}
        >
          <SafeIcon icon={FiBookOpen} className="text-xl" />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;