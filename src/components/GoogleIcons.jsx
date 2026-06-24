import React from 'react';
import { Activity as LucideActivity, AlertCircle as LucideAlertCircle, AlertTriangle as LucideAlertTriangle, Anchor as LucideAnchor, ArrowLeft as LucideArrowLeft, ArrowRight as LucideArrowRight, ArrowUp as LucideArrowUp, ArrowUpRight as LucideArrowUpRight, Award as LucideAward, Book as LucideBook, BookOpen as LucideBookOpen, Bot as LucideBot, Box as LucideBox, Braces as LucideBraces, Brain as LucideBrain, Calendar as LucideCalendar, CheckCircle as LucideCheckCircle, CheckCircle2 as LucideCheckCircle2, CheckSquare as LucideCheckSquare, ChevronDown as LucideChevronDown, ChevronRight as LucideChevronRight, Clock as LucideClock, Cloud as LucideCloud, Code as LucideCode, Code2 as LucideCode2, Container as LucideContainer, Cpu as LucideCpu, Database as LucideDatabase, DollarSign as LucideDollarSign, ExternalLink as LucideExternalLink, Figma as LucideFigma, FileCode as LucideFileCode, FileDown as LucideFileDown, FileJson as LucideFileJson, FileText as LucideFileText, Flame as LucideFlame, Frown as LucideFrown, GitBranch as LucideGitBranch, Github as LucideGithub, Globe as LucideGlobe, GraduationCap as LucideGraduationCap, Grid as LucideGrid, Hand as LucideHand, Heart as LucideHeart, Image as LucideImage, Instagram as LucideInstagram, Layers as LucideLayers, Layout as LucideLayout, Lightbulb as LucideLightbulb, LineChart as LucideLineChart, Linkedin as LucideLinkedin, Loader as LucideLoader, Loader2 as LucideLoader2, Mail as LucideMail, Meh as LucideMeh, Menu as LucideMenu, MessageSquare as LucideMessageSquare, Minus as LucideMinus, Moon as LucideMoon, Move as LucideMove, Package as LucidePackage, Palette as LucidePalette, PenTool as LucidePenTool, Percent as LucidePercent, Plus as LucidePlus, Quote as LucideQuote, Rocket as LucideRocket, ScanLine as LucideScanLine, Search as LucideSearch, Send as LucideSend, Server as LucideServer, Share2 as LucideShare2, Smartphone as LucideSmartphone, Smile as LucideSmile, Sparkles as LucideSparkles, Star as LucideStar, Sun as LucideSun, Target as LucideTarget, Terminal as LucideTerminal, TrendingUp as LucideTrendingUp, Triangle as LucideTriangle, Type as LucideType, User as LucideUser, Users as LucideUsers, Workflow as LucideWorkflow, Wrench as LucideWrench, X as LucideX, Zap as LucideZap } from 'lucide-react';

const GOOGLE_COLORS = ['text-[#EA4335]', 'text-[#FBBC05]', 'text-[#34A853]', 'text-[#4285F4]'];

const getHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
};

const withGoogleColor = (WrappedIcon, name) => {
    const colorClass = GOOGLE_COLORS[getHash(name) % GOOGLE_COLORS.length];
    return (props) => {
        let cleanClass = (props.className || '')
            .replace(/text-[a-zA-Z]+-\d+/g, '')
            .replace(/text-(black|white)/g, '')
            .replace(/dark:text-[a-zA-Z]+-\d+/g, '')
            .replace(/dark:text-(white|black)/g, '')
            .replace(/group-hover:text-[a-zA-Z]+-\d+/g, '')
            .replace(/dark:group-hover:text-[a-zA-Z]+-\d+/g, '')
            .replace(/hover:text-[a-zA-Z]+-\d+/g, '')
            .trim();
            
        return <WrappedIcon {...props} className={cleanClass + " " + colorClass} />;
    };
};

export const Activity = withGoogleColor(LucideActivity, 'Activity');
export const AlertCircle = withGoogleColor(LucideAlertCircle, 'AlertCircle');
export const AlertTriangle = withGoogleColor(LucideAlertTriangle, 'AlertTriangle');
export const Anchor = withGoogleColor(LucideAnchor, 'Anchor');
export const ArrowLeft = withGoogleColor(LucideArrowLeft, 'ArrowLeft');
export const ArrowRight = withGoogleColor(LucideArrowRight, 'ArrowRight');
export const ArrowUp = withGoogleColor(LucideArrowUp, 'ArrowUp');
export const ArrowUpRight = withGoogleColor(LucideArrowUpRight, 'ArrowUpRight');
export const Award = withGoogleColor(LucideAward, 'Award');
export const Book = withGoogleColor(LucideBook, 'Book');
export const BookOpen = withGoogleColor(LucideBookOpen, 'BookOpen');
export const Bot = withGoogleColor(LucideBot, 'Bot');
export const Box = withGoogleColor(LucideBox, 'Box');
export const Braces = withGoogleColor(LucideBraces, 'Braces');
export const Brain = withGoogleColor(LucideBrain, 'Brain');
export const Calendar = withGoogleColor(LucideCalendar, 'Calendar');
export const CheckCircle = withGoogleColor(LucideCheckCircle, 'CheckCircle');
export const CheckCircle2 = withGoogleColor(LucideCheckCircle2, 'CheckCircle2');
export const CheckSquare = withGoogleColor(LucideCheckSquare, 'CheckSquare');
export const ChevronDown = withGoogleColor(LucideChevronDown, 'ChevronDown');
export const ChevronRight = withGoogleColor(LucideChevronRight, 'ChevronRight');
export const Clock = withGoogleColor(LucideClock, 'Clock');
export const Cloud = withGoogleColor(LucideCloud, 'Cloud');
export const Code = withGoogleColor(LucideCode, 'Code');
export const Code2 = withGoogleColor(LucideCode2, 'Code2');
export const Container = withGoogleColor(LucideContainer, 'Container');
export const Cpu = withGoogleColor(LucideCpu, 'Cpu');
export const Database = withGoogleColor(LucideDatabase, 'Database');
export const DollarSign = withGoogleColor(LucideDollarSign, 'DollarSign');
export const ExternalLink = withGoogleColor(LucideExternalLink, 'ExternalLink');
export const Figma = withGoogleColor(LucideFigma, 'Figma');
export const FileCode = withGoogleColor(LucideFileCode, 'FileCode');
export const FileDown = withGoogleColor(LucideFileDown, 'FileDown');
export const FileJson = withGoogleColor(LucideFileJson, 'FileJson');
export const FileText = withGoogleColor(LucideFileText, 'FileText');
export const Flame = withGoogleColor(LucideFlame, 'Flame');
export const Frown = withGoogleColor(LucideFrown, 'Frown');
export const GitBranch = withGoogleColor(LucideGitBranch, 'GitBranch');
export const Github = withGoogleColor(LucideGithub, 'Github');
export const Globe = withGoogleColor(LucideGlobe, 'Globe');
export const GraduationCap = withGoogleColor(LucideGraduationCap, 'GraduationCap');
export const Grid = withGoogleColor(LucideGrid, 'Grid');
export const Hand = withGoogleColor(LucideHand, 'Hand');
export const Heart = withGoogleColor(LucideHeart, 'Heart');
export const Image = withGoogleColor(LucideImage, 'Image');
export const Instagram = withGoogleColor(LucideInstagram, 'Instagram');
export const Layers = withGoogleColor(LucideLayers, 'Layers');
export const Layout = withGoogleColor(LucideLayout, 'Layout');
export const Lightbulb = withGoogleColor(LucideLightbulb, 'Lightbulb');
export const LineChart = withGoogleColor(LucideLineChart, 'LineChart');
export const Linkedin = withGoogleColor(LucideLinkedin, 'Linkedin');
export const Loader = withGoogleColor(LucideLoader, 'Loader');
export const Loader2 = withGoogleColor(LucideLoader2, 'Loader2');
export const Mail = withGoogleColor(LucideMail, 'Mail');
export const Meh = withGoogleColor(LucideMeh, 'Meh');
export const Menu = withGoogleColor(LucideMenu, 'Menu');
export const MessageSquare = withGoogleColor(LucideMessageSquare, 'MessageSquare');
export const Minus = withGoogleColor(LucideMinus, 'Minus');
export const Moon = withGoogleColor(LucideMoon, 'Moon');
export const Move = withGoogleColor(LucideMove, 'Move');
export const Package = withGoogleColor(LucidePackage, 'Package');
export const Palette = withGoogleColor(LucidePalette, 'Palette');
export const PenTool = withGoogleColor(LucidePenTool, 'PenTool');
export const Percent = withGoogleColor(LucidePercent, 'Percent');
export const Plus = withGoogleColor(LucidePlus, 'Plus');
export const Quote = withGoogleColor(LucideQuote, 'Quote');
export const Rocket = withGoogleColor(LucideRocket, 'Rocket');
export const ScanLine = withGoogleColor(LucideScanLine, 'ScanLine');
export const Search = withGoogleColor(LucideSearch, 'Search');
export const Send = withGoogleColor(LucideSend, 'Send');
export const Server = withGoogleColor(LucideServer, 'Server');
export const Share2 = withGoogleColor(LucideShare2, 'Share2');
export const Smartphone = withGoogleColor(LucideSmartphone, 'Smartphone');
export const Smile = withGoogleColor(LucideSmile, 'Smile');
export const Sparkles = withGoogleColor(LucideSparkles, 'Sparkles');
export const Star = withGoogleColor(LucideStar, 'Star');
export const Sun = withGoogleColor(LucideSun, 'Sun');
export const Target = withGoogleColor(LucideTarget, 'Target');
export const Terminal = withGoogleColor(LucideTerminal, 'Terminal');
export const TrendingUp = withGoogleColor(LucideTrendingUp, 'TrendingUp');
export const Triangle = withGoogleColor(LucideTriangle, 'Triangle');
export const Type = withGoogleColor(LucideType, 'Type');
export const User = withGoogleColor(LucideUser, 'User');
export const Users = withGoogleColor(LucideUsers, 'Users');
export const Workflow = withGoogleColor(LucideWorkflow, 'Workflow');
export const Wrench = withGoogleColor(LucideWrench, 'Wrench');
export const X = withGoogleColor(LucideX, 'X');
export const Zap = withGoogleColor(LucideZap, 'Zap');
