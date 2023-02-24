export const upVariants = {
    onscreen: {
        y: [-200, 0], opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    offscreen: { opacity: 0 }
}

export const downVariants = {
    onscreen: {
        y: [200, 0], opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    offscreen: { opacity: 0 }
}

export const leftVariants = {
    onscreen: {
        x: [-200, 0], opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    offscreen: { opacity: 0 }
}

export const rightVariants = {
    onscreen: {
        x: [200, 0], opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    offscreen: { opacity: 0 }
}