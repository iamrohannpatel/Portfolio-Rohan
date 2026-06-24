import React, { useState } from 'react';
import { Send, User, Mail } from './GoogleIcons';
import { Star, Frown, Meh, Smile, Heart, Zap } from 'lucide-react';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const getMoodConfig = (r) => {
        if (r === 1) return { color: 'text-[#EA4335]', bg: 'bg-[#EA4335]', border: 'border-[#EA4335]', icon: <Frown size={64} />, label: 'Disappointed', desc: "I'll work hard to improve." };
        if (r === 2) return { color: 'text-[#FBBC05]', bg: 'bg-[#FBBC05]', border: 'border-[#FBBC05]', icon: <Meh size={64} />, label: 'It was okay', desc: 'Thanks for the feedback.' };
        if (r === 3) return { color: 'text-[#4285F4]', bg: 'bg-[#4285F4]', border: 'border-[#4285F4]', icon: <Smile size={64} />, label: 'Good', desc: 'Glad you liked it!' };
        if (r === 4) return { color: 'text-[#34A853]', bg: 'bg-[#34A853]', border: 'border-[#34A853]', icon: <Heart size={64} />, label: 'Amazing!', desc: 'That means a lot to me.' };
        if (r === 5) return { color: 'text-[#EA4335]', bg: 'bg-[#EA4335]', border: 'border-[#EA4335]', icon: <Zap size={64} />, label: 'Mind-blowing!', desc: 'You are awesome!' };
        return { color: 'text-gray-300 dark:text-gray-700', bg: 'bg-gray-200 dark:bg-white/10', border: 'border-gray-200 dark:border-white/10', icon: <Star size={64} />, label: 'Rate Experience', desc: 'Select a rating to begin.' };
    };

    const currentMood = getMoodConfig(hoverRating || rating);
    const hasRated = rating > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, rating, note });
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setRating(0);
            setNote('');
            setName('');
            setEmail('');
        }, 3000);
    };

    return (
        <section id="feedback" className="py-20 md:py-32 px-4 relative bg-white/50 dark:bg-transparent transition-colors duration-300">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3 text-gray-900 dark:text-white">
                        <span className="text-amber-600 dark:text-amber-500">12.</span> Feedback
                    </h2>
                </div>

                <div className="bg-white dark:bg-[#030303] border border-gray-200 dark:border-white/10 relative group transition-colors hover:border-gray-300 dark:hover:border-white/20">
                    
                    {/* Top dynamic accent line */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${currentMood.bg} transition-colors duration-500`} />

                    {!isSubmitted ? (
                        <div className="grid md:grid-cols-5 min-h-[500px]">
                            {/* Left Column: Experience / Mood */}
                            <div className="md:col-span-2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5 flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-white/[0.02]">
                                <div className={`inline-flex items-center justify-center w-32 h-32 bg-white dark:bg-white/5 border ${currentMood.border} mb-8 transition-colors duration-500`}>
                                    <div className={`transition-transform duration-500 ${hasRated ? 'scale-110' : 'scale-100'} ${currentMood.color}`}>
                                        {currentMood.icon}
                                    </div>
                                </div>
                                <h3 className={`text-3xl font-black tracking-tight transition-colors duration-300 mb-3 ${hasRated ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                                    {currentMood.label}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">
                                    {currentMood.desc}
                                </p>
                            </div>

                            {/* Right Column: Form */}
                            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                                <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-lg mx-auto">
                                    
                                    {/* Star Rating */}
                                    <div className="flex justify-between items-center pb-8 border-b border-gray-100 dark:border-white/5">
                                        <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">Your Rating</span>
                                        <div className="flex gap-2 sm:gap-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    className="group/star relative focus:outline-none transition-transform hover:-translate-y-1 duration-300"
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                    onClick={() => setRating(star)}
                                                >
                                                    <Star
                                                        size={32}
                                                        className={`transition-colors duration-300 ${star <= (hoverRating || rating)
                                                            ? `${getMoodConfig(Math.max(hoverRating, rating)).color} fill-current`
                                                            : 'text-gray-200 dark:text-white/10 fill-transparent group-hover/star:text-gray-300 dark:group-hover/star:text-white/20'
                                                            }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Input Fields */}
                                    <div className={`space-y-5 transition-all duration-500 ${hasRated ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="relative group/input">
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Name"
                                                    className={`w-full bg-transparent border border-gray-200 dark:border-white/10 p-4 pl-12 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors font-medium focus:border-black dark:focus:border-white`}
                                                    disabled={!hasRated}
                                                    required
                                                />
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            </div>
                                            <div className="relative group/input">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Email"
                                                    className={`w-full bg-transparent border border-gray-200 dark:border-white/10 p-4 pl-12 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors font-medium focus:border-black dark:focus:border-white`}
                                                    disabled={!hasRated}
                                                    required
                                                />
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            </div>
                                        </div>

                                        <div className="relative group/input">
                                            <textarea
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                                placeholder="Tell me more about your experience..."
                                                maxLength={250}
                                                className={`w-full bg-transparent border border-gray-200 dark:border-white/10 p-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors font-medium resize-none h-32 focus:border-black dark:focus:border-white`}
                                                disabled={!hasRated}
                                                required
                                            />
                                            <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-400">
                                                {note.length}/250
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={!hasRated || !note.trim() || !name.trim() || !email.trim()}
                                            className={`w-full group/btn flex items-center justify-center gap-3 py-4 font-bold tracking-widest uppercase transition-all duration-300 ${hasRated && note.trim() && name.trim() && email.trim()
                                                ? `text-white cursor-pointer ${currentMood.bg}`
                                                : 'bg-gray-100 dark:bg-white/5 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            {hasRated && note.trim() ? 'Submit Feedback' : 'Awaiting Input'}
                                            <Send size={18} className={`transition-transform ${hasRated && note.trim() ? 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1' : ''}`} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="py-32 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-white/[0.02]">
                            <div className="w-24 h-24 border-2 border-green-500 bg-green-500/10 flex items-center justify-center mb-6">
                                <Zap className="text-green-500" size={40} />
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Feedback Received</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">Thank you for taking the time, {name.split(' ')[0]}!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
