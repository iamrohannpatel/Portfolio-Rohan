import React, { useState } from 'react';
import { Star, Send, MessageSquare, Frown, Meh, Smile, Heart, Zap, User, Mail } from 'lucide-react';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const getMoodConfig = (r) => {
        if (r === 1) return { color: 'text-red-500', bg: 'bg-red-500', shadow: 'shadow-red-500/50', icon: <Frown size={48} />, label: 'Disappointed' };
        if (r === 2) return { color: 'text-orange-500', bg: 'bg-orange-500', shadow: 'shadow-orange-500/50', icon: <Meh size={48} />, label: 'It was okay' };
        if (r === 3) return { color: 'text-yellow-500', bg: 'bg-yellow-500', shadow: 'shadow-yellow-500/50', icon: <Smile size={48} />, label: 'Good' };
        if (r === 4) return { color: 'text-pink-500', bg: 'bg-pink-500', shadow: 'shadow-pink-500/50', icon: <Heart size={48} />, label: 'Amazing!' };
        if (r === 5) return { color: 'text-cyan-400', bg: 'bg-cyan-400', shadow: 'shadow-cyan-400/50', icon: <Zap size={48} />, label: 'Mind-blowing!' };
        return { color: 'text-gray-400', bg: 'bg-gray-500', shadow: 'shadow-gray-500/20', icon: <Star size={48} />, label: 'Rate Experience' };
    };

    const currentMood = getMoodConfig(hoverRating || rating);
    const hasRated = rating > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
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
        <section id="feedback" className="py-20 md:py-32 px-4 relative overflow-hidden">

            {/* Dynamic Background Glow based on mood */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-colors duration-700 ${currentMood.bg}`} />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3 text-white">
                        <span className="text-pink-500">12.</span> Feedback
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Please share your feedback on my work and projects.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-[#0f1115]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">

                        {/* Animated Border Gradient */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${currentMood.bg.replace('bg-', '')} to-transparent opacity-50 transition-all duration-500`} />

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-8">

                                {/* Header & Mood Icon */}
                                <div className="text-center space-y-4">
                                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-2 transition-all duration-500 ${currentMood.shadow} shadow-lg group-hover:scale-110`}>
                                        <div className={`transition-all duration-300 ${currentMood.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                                            {currentMood.icon}
                                        </div>
                                    </div>
                                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${hasRated ? 'text-white' : 'text-gray-400'}`}>
                                        {hasRated ? currentMood.label : 'How was your visit?'}
                                    </h3>
                                </div>

                                {/* Star Interaction */}
                                <div className="flex justify-center gap-3 md:gap-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            className="group/star relative focus:outline-none transition-transform hover:scale-125 hover:-translate-y-2 duration-300"
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setRating(star)}
                                        >
                                            <Star
                                                size={36}
                                                className={`transition-all duration-300 ${star <= (hoverRating || rating)
                                                    ? `${getMoodConfig(Math.max(hoverRating, rating)).color} fill-current drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`
                                                    : 'text-gray-700 fill-transparent group-hover/star:text-gray-500'
                                                    }`}
                                            />
                                            {/* Particle dot below star */}
                                            {star <= (hoverRating || rating) && (
                                                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${getMoodConfig(Math.max(hoverRating, rating)).bg} blur-[1px]`} />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Inputs Container */}
                                <div className={`space-y-6 transition-all duration-500 ${hasRated ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 blur-sm grayscale pointer-events-none'}`}>

                                    {/* Name & Email Grid */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Name Input */}
                                        <div className="relative group/input">
                                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover/input:opacity-50 transition duration-500" />
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Your Name"
                                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 pl-12 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-all font-sans"
                                                    disabled={!hasRated}
                                                    required
                                                />
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                                            </div>
                                        </div>

                                        {/* Email Input */}
                                        <div className="relative group/input">
                                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover/input:opacity-50 transition duration-500" />
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Your Email"
                                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 pl-12 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-all font-sans"
                                                    disabled={!hasRated}
                                                    required
                                                />
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cinematic Input Field (Textarea) */}
                                    <div className="relative group/input">
                                        <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${rating >= 4 ? 'from-pink-500 to-cyan-500' : 'from-white/10 to-white/5'} opacity-20 group-hover/input:opacity-50 transition duration-500`} />
                                        <div className="relative">
                                            <textarea
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                                placeholder="Write a short review..."
                                                maxLength={100}
                                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-6 text-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-all resize-none h-32 leading-relaxed font-sans"
                                                disabled={!hasRated}
                                                required
                                            />
                                            <MessageSquare className="absolute right-4 top-4 text-white/10" size={20} />
                                            <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-600">
                                                {note.length}/100
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Futuristic Submit Button */}
                                <button
                                    type="submit"
                                    disabled={!hasRated || !note.trim() || !name.trim() || !email.trim()}
                                    className={`w-full group/btn relative py-4 rounded-xl font-bold tracking-wide overflow-hidden transition-all duration-500 ${hasRated && note.trim() && name.trim() && email.trim()
                                        ? 'cursor-pointer hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                                        : 'cursor-not-allowed opacity-50'
                                        }`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${rating >= 4 ? 'from-pink-600 via-purple-600 to-cyan-600' : 'from-gray-800 to-gray-700'} transition-all duration-500`} />
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer`} />

                                    <span className="relative flex items-center justify-center gap-3 text-white">
                                        <Send size={18} className={`transition-transform duration-300 ${hasRated && note.trim() && name.trim() && email.trim() ? 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1' : ''}`} />
                                        {hasRated && note.trim() ? 'TRANSMIT FEEDBACK' : 'WAITING FOR INPUT...'}
                                    </span>
                                </button>
                            </form>
                        ) : (
                            <div className="py-20 flex flex-col items-center justify-center space-y-6 animate-fade-in text-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-500 blur-[40px] opacity-20 rounded-full" />
                                    <div className="w-24 h-24 bg-[#0f1115] border border-green-500/30 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                        <Zap className="text-green-400 fill-green-400/20" size={40} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Transmission Received!</h3>
                                    <p className="text-gray-400">Thanks for boosting my signal, {name.split(' ')[0]}!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
