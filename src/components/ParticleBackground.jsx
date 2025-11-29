import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);
        resize();

        class Point {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = (Math.random() * width - width / 2) * 2;
                this.y = (Math.random() * height - height / 2) * 2;
                this.z = Math.random() * 1000 + 500;
                this.baseSize = 2;
            }
            update(speed) {
                this.z -= speed;
                if (this.z < 1) {
                    this.reset();
                    this.z = 1000;
                }
            }
            draw() {
                const focalLength = 400;
                const scale = focalLength / this.z;
                const x2d = this.x * scale + width / 2;
                const y2d = this.y * scale + height / 2;
                const size = this.baseSize * scale;

                ctx.beginPath();
                ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 200, 255, ${scale})`;
                ctx.fill();
                return { x: x2d, y: y2d, scale };
            }
        }

        const pointCount = 100;
        const points = Array.from({ length: pointCount }, () => new Point());
        let animationFrameId;

        const animate = () => {
            ctx.fillStyle = '#050510';
            ctx.fillRect(0, 0, width, height);

            const activePoints = points.map(p => {
                p.update(1.5);
                return p.draw();
            });

            ctx.lineWidth = 0.5;
            for (let i = 0; i < activePoints.length; i++) {
                for (let j = i + 1; j < activePoints.length; j++) {
                    const dx = activePoints[i].x - activePoints[j].x;
                    const dy = activePoints[i].y - activePoints[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(activePoints[i].x, activePoints[i].y);
                        ctx.lineTo(activePoints[j].x, activePoints[j].y);
                        const alpha = (1 - distance / 100) * activePoints[i].scale;
                        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default ParticleBackground;
