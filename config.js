// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Juluś",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Zostaniesz moja walentynka? 💕",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓','💐','💟','💌','💏'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

questions: {
    first: {
        text: "Czy mnie kochasz?",
        yesBtn: "TAK ❤️",
        noBtn: "Kocham cie najmocniej na swiecie 💖",
    },
    second: {
        text: "Jak bardzo mnie kochasz?",
        startText: "Aż tak bardzo!",
        nextBtn: "Dalej 💕"
    },
    third: {
        text: "Czy zostaniesz moją Walentynką 14 lutego 2026? 🌹",
        yesBtn: "Oczywiście Radziu:3! 💘",
        noBtn: "Nie, spierdalaj 😌"
    }
},

loveMessages: {
    extreme: "COOO?! To już kosmiczny poziom miłości 🚀💖🔥",
    high: "Bez końca i jeszcze dalej 💕✨",
    normal: "Więcej niż wystarczająco 🥰"
},

celebration: {
    title: "TAK?! 😍 Super i tak innego wyboru nie miałaś 🎉💖",
    message: "Teraz dostaniesz ode mnie milion tuli i buziakow 😘",
    emojis: "🎁💘🤗💋❤️💕✨"
},


    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
colors: {
    backgroundStart: "#ffdde1",   // bardzo jasny róż (romantic vibe)
    backgroundEnd: "#ee9ca7",     // ciepły róż / rose-gold
    buttonBackground: "#e63946",  // głęboka walentynkowa czerwień ❤️
    buttonHover: "#ff5d6c",       // jaśniejsza, „cute” czerwień na hover
    textColor: "#b11226"          // ciemna wiśnia – czytelna i elegancka
},

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "5s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: false,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
