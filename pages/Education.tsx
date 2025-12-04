import React, { useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Share2, Award, ChevronRight, Lock, Unlock, ArrowRight, RotateCcw, CircleX } from 'lucide-react';
import { StudyTier, StudyModule, StudySegment } from '../types';
import { CURRICULUM } from '../data/curriculum';
import ReactMarkdown from 'react-markdown';

const NavCard: React.FC<{ title: string; subtitle: string; onClick: () => void; active?: boolean }> = ({ title, subtitle, onClick, active }) => (
  <button 
    onClick={onClick}
    className={`rock-card w-full p-6 text-left group transition-all h-32 flex flex-col justify-between
      ${active ? 'bg-bitcoin-orange text-white border-stone-900' : 'bg-white hover:bg-stone-50'}
    `}
  >
    <div>
      <h3 className={`text-2xl font-black uppercase tracking-tight ${active ? 'text-white' : 'text-stone-900'}`}>
        {title}
      </h3>
      <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${active ? 'text-white/80' : 'text-stone-500'}`}>
        {subtitle}
      </p>
    </div>
    <div className="flex justify-end">
      {active ? <Unlock size={20} /> : <Lock size={20} className="text-stone-300 group-hover:text-stone-900" />}
    </div>
  </button>
);

const SegmentCard: React.FC<{ index: number; title: string; desc: string; onClick: () => void }> = ({ index, title, desc, onClick }) => (
  <button 
    onClick={onClick}
    className="rock-card p-4 flex items-center justify-between hover:bg-stone-50 group"
  >
    <div className="flex items-center gap-3 overflow-hidden">
      <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex-shrink-0 flex items-center justify-center font-black text-sm group-hover:bg-bitcoin-orange transition-colors">
        {index + 1}
      </div>
      <div className="text-left min-w-0">
        <span className="font-bold text-stone-900 uppercase block truncate">{title}</span>
        <span className="text-[10px] text-stone-500 font-bold uppercase truncate block">{desc}</span>
      </div>
    </div>
    <ChevronRight size={16} className="text-stone-400 group-hover:text-stone-900 flex-shrink-0" />
  </button>
);

const EducationPage: React.FC = () => {
  // Navigation State
  const [view, setView] = useState<'tiers' | 'modules' | 'segments' | 'lesson'>('tiers');
  const [selectedTier, setSelectedTier] = useState<StudyTier | null>(null);
  const [selectedModule, setSelectedModule] = useState<StudyModule | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<StudySegment | null>(null);
  
  // Lesson Progress State
  const [lessonStep, setLessonStep] = useState(0);

  // Quiz State: { [questionId: string]: selectedOptionIndex }
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  // Navigation Handlers
  const selectTier = (tier: StudyTier) => {
    setSelectedTier(tier);
    setView('modules');
  };

  const selectModule = (mod: StudyModule) => {
    setSelectedModule(mod);
    setView('segments');
  };

  const selectSegment = (seg: StudySegment) => {
    setSelectedSegment(seg);
    setLessonStep(0);
    setQuizAnswers({});
    setView('lesson');
  };

  const nextStep = () => {
    setLessonStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    if (lessonStep > 0) {
      setLessonStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        setView('segments');
    }
  };

  const handleQuizAnswer = (subtopicIdx: number, questionIdx: number, optionIdx: number) => {
    const key = `${subtopicIdx}-${questionIdx}`;
    setQuizAnswers(prev => ({ ...prev, [key]: optionIdx }));
  };

  const handleShare = async () => {
    if (selectedSegment) {
      const shareText = `#studybitcoin\n\nI just completed the "${selectedSegment.title}" segment. ${selectedSegment.socialCaption}\n\n#btckomarock\n\nbtckomarock.vercel.app`;
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Bitcoin Komarock Certificate',
            text: shareText,
          });
        } catch (err) {
          console.error('Share failed:', err);
        }
      } else {
        navigator.clipboard.writeText(shareText);
        alert("Text copied to clipboard! Open WhatsApp/Twitter to paste.");
      }
    }
  };

  const renderLessonContent = () => {
    if (!selectedSegment) return null;

    const totalSubtopics = selectedSegment.subtopics.length;
    const isQuestionStep = lessonStep === totalSubtopics;
    const isCertificateStep = lessonStep === totalSubtopics + 1;

    // --- CERTIFICATE VIEW ---
    if (isCertificateStep) {
        return (
            <div className="animate-in zoom-in duration-300 flex flex-col items-center justify-center min-h-[50vh]">
                <div className="bg-stone-50 p-6 md:p-8 rounded-2xl border-4 border-double border-stone-900 max-w-sm w-full text-center relative shadow-rock mb-8">
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-200 text-6xl font-black uppercase -rotate-45 pointer-events-none select-none z-0">
                        Sample
                    </div>
                    
                    <div className="relative z-10 border-4 border-stone-900 p-6 mb-6 bg-white/90 shadow-sm backdrop-blur-sm">
                        <div className="flex justify-center mb-4">
                            <div className="bg-stone-900 text-white p-2 rounded-full">
                                <Award size={32} />
                            </div>
                        </div>

                        <h3 className="font-black text-2xl uppercase text-bitcoin-orange mb-1">Certificate</h3>
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-6">Of Completion</p>
                        
                        <div className="mb-6">
                        <p className="font-serif text-xl italic text-stone-900 leading-tight">
                            "{selectedSegment.certificateText}"
                        </p>
                        </div>

                        <div className="w-full h-0.5 bg-stone-200 my-6"></div>
                        
                        <div className="flex justify-between items-end text-left">
                            <div>
                                <p className="text-[10px] font-bold uppercase text-stone-400 mb-1">Issuer</p>
                                <p className="font-black text-sm uppercase">Bitcoin Komarock</p>
                            </div>
                            <div className="text-right">
                                <div className="font-handwriting text-bitcoin-orange font-bold text-lg leading-none mb-1">RockSignature</div>
                                <div className="w-24 h-px bg-stone-900 mb-1"></div>
                                <p className="text-[8px] font-bold uppercase text-stone-500">Exec. Director & Founder</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wide">
                        Verified on the StudyB Protocol
                    </p>
                </div>
                
                <div className="flex flex-col w-full max-w-sm gap-3">
                     <button 
                        onClick={handleShare}
                        className="btn-primary py-4 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider"
                    >
                        <Share2 size={20} /> Share Achievement
                    </button>
                    <button 
                        onClick={() => setView('segments')}
                        className="bg-white text-stone-900 border-2 border-stone-900 font-bold py-4 rounded-xl hover:bg-stone-50 transition-colors uppercase"
                    >
                        Back to Segments
                    </button>
                </div>
            </div>
        );
    }

    // --- QUESTIONS VIEW ---
    if (isQuestionStep) {
        return (
            <div className="animate-in slide-in-from-right duration-300">
                 <div className="mb-6">
                    <span className="text-xs font-black uppercase text-bitcoin-orange tracking-widest">Knowledge Check</span>
                    <h2 className="text-3xl font-black uppercase mt-1">Review</h2>
                </div>

                <div className="space-y-6 mb-8">
                    {selectedSegment.subtopics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="rock-card p-6 bg-white">
                             <h3 className="font-black text-lg mb-4 border-b-2 border-stone-100 pb-2">
                                {topic.title}
                             </h3>
                             <div className="space-y-6">
                                {topic.questions && topic.questions.map((q, qIdx) => {
                                    const answerKey = `${topicIdx}-${qIdx}`;
                                    const selectedAnswer = quizAnswers[answerKey];
                                    const isCorrect = selectedAnswer === q.correctIndex;
                                    const hasAnswered = selectedAnswer !== undefined;

                                    return (
                                        <div key={qIdx} className="mb-4 last:mb-0">
                                            <p className="font-bold text-stone-900 mb-3">{q.text}</p>
                                            <div className="space-y-2">
                                                {q.options.map((option, optIdx) => {
                                                    let itemClass = "w-full p-3 rounded-lg border-2 text-left text-sm font-bold transition-all flex justify-between items-center ";
                                                    
                                                    if (hasAnswered) {
                                                        if (optIdx === q.correctIndex) {
                                                            itemClass += "bg-green-100 border-green-500 text-green-900"; // Correct answer style
                                                        } else if (optIdx === selectedAnswer && !isCorrect) {
                                                            itemClass += "bg-red-100 border-red-500 text-red-900"; // Wrong selected style
                                                        } else {
                                                            itemClass += "bg-stone-50 border-transparent text-stone-400"; // Other options faded
                                                        }
                                                    } else {
                                                        itemClass += "bg-white border-stone-200 hover:border-stone-900 text-stone-700"; // Default
                                                    }

                                                    return (
                                                        <button 
                                                            key={optIdx} 
                                                            onClick={() => !hasAnswered && handleQuizAnswer(topicIdx, qIdx, optIdx)}
                                                            className={itemClass}
                                                            disabled={hasAnswered}
                                                        >
                                                            <span>{option}</span>
                                                            {hasAnswered && optIdx === q.correctIndex && <CheckCircle size={16} className="text-green-600" />}
                                                            {hasAnswered && optIdx === selectedAnswer && !isCorrect && <CircleX size={16} className="text-red-600" />}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                             </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button 
                        onClick={nextStep}
                        className="btn-primary w-full md:w-auto px-12 py-4 rounded-xl text-lg flex items-center justify-center gap-2 uppercase tracking-wider"
                    >
                        Claim Certificate <Award size={20} />
                    </button>
                </div>
            </div>
        )
    }

    // --- CONCEPT VIEW (Default) ---
    const topic = selectedSegment.subtopics[lessonStep];
    return (
        <div className="animate-in fade-in duration-300">
            {/* Progress Indicator */}
            <div className="flex gap-2 mb-8">
                {selectedSegment.subtopics.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                            idx <= lessonStep ? 'bg-bitcoin-orange' : 'bg-stone-200'
                        }`}
                    />
                ))}
                {/* Dots for quiz and cert */}
                <div className="h-2 w-2 rounded-full bg-stone-200"></div>
                <div className="h-2 w-2 rounded-full bg-stone-200"></div>
            </div>

            <div className="mb-6">
                <span className="text-xs font-black uppercase text-stone-400 tracking-widest">
                    Concept {lessonStep + 1} of {selectedSegment.subtopics.length}
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase mt-1 leading-none">
                    {topic.title}
                </h2>
            </div>

            <div className="rock-card p-6 md:p-8 bg-white mb-8 min-h-[300px] flex flex-col">
                <div className="prose prose-stone prose-lg font-medium prose-p:leading-relaxed flex-grow">
                    <ReactMarkdown>{topic.content}</ReactMarkdown>
                </div>

                {topic.tools.length > 0 && (
                    <div className="mt-8 pt-6 border-t-2 border-stone-100">
                        <h4 className="font-bold text-xs uppercase text-stone-400 mb-3">Recommended Tools</h4>
                        <div className="flex flex-wrap gap-2">
                            {topic.tools.map((t, idx) => (
                                <span key={idx} className="bg-stone-50 border border-stone-200 px-3 py-1.5 text-xs font-black rounded-lg text-stone-600">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center gap-4">
                <button 
                    onClick={prevStep}
                    className="p-4 rounded-xl border-2 border-stone-200 text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all"
                >
                    <ArrowLeft size={24} />
                </button>
                
                <button 
                    onClick={nextStep}
                    className="flex-1 btn-primary py-4 rounded-xl text-lg flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                    Next Concept <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
  };

  return (
    <div className="min-h-[80vh]">
      
      {/* Breadcrumbs / Header - Only show if NOT in lesson mode or show simplified header */}
      <div className="mb-6 flex items-center gap-2">
        {view !== 'tiers' && view !== 'lesson' && (
          <button onClick={() => {
            if (view === 'segments') setView('modules');
            else setView('tiers');
          }} className="p-2 hover:bg-stone-200 rounded-full border border-stone-900 bg-white">
            <ArrowLeft size={20} />
          </button>
        )}
        
        {view === 'lesson' && (
             <button onClick={() => setView('segments')} className="p-2 hover:bg-stone-200 rounded-full border border-stone-900 bg-white mr-2">
                <RotateCcw size={20} />
            </button>
        )}

        <div className="flex flex-col">
          <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">
            {view === 'tiers' && "StudyB"}
            {view === 'modules' && selectedTier?.title}
            {view === 'segments' && selectedModule?.title}
            {view === 'lesson' && (selectedSegment?.title || "Lesson")}
          </h1>
          {view === 'tiers' && <span className="text-xs font-bold text-stone-500">Select your level</span>}
          {view !== 'tiers' && view !== 'lesson' && <span className="text-xs font-bold text-stone-500">{view}</span>}
        </div>
      </div>

      {/* VIEW 1: TIERS */}
      {view === 'tiers' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in slide-in-from-right-4">
          {CURRICULUM.map(tier => (
            <NavCard 
              key={tier.id} 
              title={tier.title} 
              subtitle={tier.description}
              onClick={() => selectTier(tier)}
            />
          ))}
        </div>
      )}

      {/* VIEW 2: MODULES */}
      {view === 'modules' && selectedTier && (
        <div className="space-y-4 animate-in slide-in-from-right-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedTier.modules.map(mod => (
              <NavCard 
                key={mod.id} 
                title={mod.title} 
                subtitle={mod.description}
                onClick={() => selectModule(mod)}
                active
              />
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: SEGMENTS */}
      {view === 'segments' && selectedModule && (
        <div className="space-y-4 animate-in slide-in-from-right-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
             {selectedModule.segments.map((seg, idx) => (
               <SegmentCard 
                 key={seg.id} 
                 index={idx} 
                 title={seg.title} 
                 desc={seg.description}
                 onClick={() => selectSegment(seg)} 
               />
             ))}
           </div>
        </div>
      )}

      {/* VIEW 4: LESSON CONTENT (WIZARD) */}
      {view === 'lesson' && renderLessonContent()}

    </div>
  );
};

export default EducationPage;