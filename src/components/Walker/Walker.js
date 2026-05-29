import React, { useMemo, useState } from "react";

const pickRandom = (items, exclude) => {
    if (!items || items.length === 0) {
        return null;
    }
    if (items.length === 1) {
        return items[0];
    }
    let next = items[Math.floor(Math.random() * items.length)];
    while (next === exclude) {
        next = items[Math.floor(Math.random() * items.length)];
    }
    return next;
};

const randomDuration = (min, max) => {
    const span = Math.max(0, max - min);
    return min + Math.random() * span;
};

function Walker({ leftGifs, rightGifs, size = 80, minDuration = 32, maxDuration = 48 }) {
    const initialDirection = useMemo(() => (Math.random() > 0.5 ? "ltr" : "rtl"), []);
    // Map movement direction to the correct sprite-facing pool:
    // gifs named "*-l.gif" face left and should travel left (movement 'rtl')
    // gifs named "*-r.gif" face right and should travel right (movement 'ltr')
    const initialGif = useMemo(() => {
        return initialDirection === "ltr" ? pickRandom(rightGifs) : pickRandom(leftGifs);
    }, [leftGifs, rightGifs, initialDirection]);

    const [direction, setDirection] = useState(initialDirection);
    const [gif, setGif] = useState(initialGif);
    const [duration, setDuration] = useState(randomDuration(minDuration, maxDuration));

    const handleCycleEnd = () => {
        // flip direction (movement) and pick a new gif from the pool
        // matching the sprite-facing for that movement
        const nextDirection = direction === "ltr" ? "rtl" : "ltr";
        const pool = nextDirection === "ltr" ? rightGifs : leftGifs;
        setDirection(nextDirection);
        setGif(pickRandom(pool, gif));
        setDuration(randomDuration(minDuration, maxDuration));
    };

    if (!gif) {
        return null;
    }

    return (
        <div className="page-walker" aria-hidden="true">
            <img
                src={gif}
                alt=""
                key={`${gif}-${direction}-${duration}`}
                className={`page-walker__sprite page-walker__sprite--${direction}`}
                style={{ width: size, animationDuration: `${duration}s` }}
                onAnimationEnd={handleCycleEnd}
            />
        </div>
    );
}

export default Walker;
