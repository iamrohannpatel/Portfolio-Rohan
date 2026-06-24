const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx') && f !== 'GoogleIcons.jsx');

let allIcons = new Set();
const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/g;

// Step 1: Find all used icons
files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const icons = match[1].split(',').map(i => i.trim()).filter(Boolean);
        icons.forEach(i => allIcons.add(i));
    }
});

const iconsArray = Array.from(allIcons).sort();
console.log('Found icons:', iconsArray.join(', '));

// Step 2: Generate GoogleIcons.jsx
const googleIconsCode = `import React from 'react';
import { ${iconsArray.map(i => `${i} as Lucide${i}`).join(', ')} } from 'lucide-react';

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
            .replace(/text-[a-zA-Z]+-\\d+/g, '')
            .replace(/text-(black|white)/g, '')
            .replace(/dark:text-[a-zA-Z]+-\\d+/g, '')
            .replace(/dark:text-(white|black)/g, '')
            .replace(/group-hover:text-[a-zA-Z]+-\\d+/g, '')
            .replace(/dark:group-hover:text-[a-zA-Z]+-\\d+/g, '')
            .replace(/hover:text-[a-zA-Z]+-\\d+/g, '')
            .trim();
            
        return <WrappedIcon {...props} className={cleanClass + " " + colorClass} />;
    };
};

${iconsArray.map(icon => `export const ${icon} = withGoogleColor(Lucide${icon}, '${icon}');`).join('\n')}
`;

fs.writeFileSync(path.join(componentsDir, 'GoogleIcons.jsx'), googleIconsCode);
console.log('Generated GoogleIcons.jsx');

// Step 3: Replace imports in all files
files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes("from 'lucide-react'") || content.includes('from "lucide-react"')) {
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/g, "import { $1 } from './GoogleIcons'");
        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
console.log('Done!');
