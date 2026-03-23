export interface ComparisonRow {
  feature: string;
  medal: string;
  competitor: string;
  medalWins: boolean | null; // null = tie
  competitorWins: boolean | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DetailSection {
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  embedUrl?: string;
  video?: string;
}

export interface ComparisonPage {
  slug: string;
  competitor: string;
  competitorShort: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  competitorUrl: string;
  comparisonRows: ComparisonRow[];
  detailSections: DetailSection[];
  faqs: FAQItem[];
  verdict: string;
}

export const allComparisons: ComparisonPage[] = [
  {
    slug: 'medal-vs-obs',
    competitor: 'OBS Studio',
    competitorShort: 'OBS',
    title: 'Medal vs OBS: Clipping Software vs Streaming Software (2026)',
    metaDescription:
      'Medal vs OBS compared for gaming clips, performance, and sharing. See why Medal is better for instant replays and highlights while OBS wins for live streaming and encoding control.',
    heroSubtitle:
      "Medal and OBS are not really the same kind of tool. Medal is purpose-built to clip, edit, and share your gaming highlights in seconds. OBS is an open-source streaming and recording powerhouse with deep encoding control. Searching \"is Medal better than OBS\" is like comparing a sports car to a pickup truck  - it depends on what you need. Here is the honest breakdown.",
    competitorUrl: 'https://obsproject.com/',
    comparisonRows: [
      {
        feature: 'Instant replay / clipping',
        medal: 'One-hotkey replay, always running',
        competitor: 'Replay Buffer requires manual config',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'AI auto-clipping',
        medal: 'Kills, aces, and clutch plays saved automatically',
        competitor: 'Not available',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Live streaming',
        medal: 'Not supported',
        competitor: 'Full Twitch, YouTube, Kick streaming suite',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Scene and source management',
        medal: 'Not available',
        competitor: 'Scenes, sources, transitions, facecam overlays',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Encoding and codec control',
        medal: 'Automatic optimization',
        competitor: 'Full bitrate, CRF, x264/x265/AV1, preset control',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Mac and Linux support',
        medal: 'Windows only (mobile on iOS/Android)',
        competitor: 'Windows, macOS, and Linux',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Built-in clip editor',
        medal: 'Trim, cut, text, effects, captions',
        competitor: 'No editing features',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'One-click sharing',
        medal: 'Instant link to Discord, TikTok, Reddit',
        competitor: 'Manual file upload to any platform',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Setup time for new users',
        medal: 'Install, open, press F8 (under 2 minutes)',
        competitor: 'Scene setup, encoding config, audio routing',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Performance on low-end PCs',
        medal: 'Hardware-accelerated, minimal footprint',
        competitor: 'Can lag games without manual tuning',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud backup and sync',
        medal: 'Free cloud storage, premium for more',
        competitor: 'Local files only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS and Android for recording, browsing, sharing',
        competitor: 'Desktop only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Multitrack audio',
        medal: 'Auto-separated game, mic, and Discord tracks',
        competitor: 'Separate tracks with manual audio routing',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Voice-activated clipping',
        medal: 'Say "clip that" hands-free',
        competitor: 'Not available',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Plugin ecosystem',
        medal: 'Built-in features, no plugins needed',
        competitor: 'Thousands of community plugins',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Price',
        medal: 'Free (optional premium)',
        competitor: 'Free and open-source',
        medalWins: null,
        competitorWins: null,
      },
    ],
    detailSections: [
      {
        title: 'Clip Without Configuring a Single Setting',
        content:
          'OBS was designed for streamers who want granular control  - and that means configuring scenes, outputs, audio sources, and encoding presets before you record a single frame. Medal was designed so you install it, press F8, and your last 15 seconds are saved. That is the entire workflow. If you have ever searched "OBS replay buffer setup" or "OBS not capturing Roblox," you already know the friction. Medal captures <a href="https://medal.tv/games/roblox">Roblox</a>, <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, and every other PC game out of the box. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/images/medal-instant-replay.mp4',
      },
      {
        title: 'AI That Clips Your Highlights While You Play',
        content:
          'OBS records what you tell it to record. Medal records what matters. With <a href="https://medal.tv/auto-clipping">auto-clipping</a>, Medal uses AI to detect kills, multi-kills, aces, and clutch rounds in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, and <a href="https://medal.tv/games/fortnite">Fortnite</a>  - saving them automatically before you even think to hit a hotkey. You finish a round and the clip is already waiting. OBS has no equivalent. If you want <a href="https://medal.tv/auto-clipping">auto-clipping</a> for your gameplay, it only exists in Medal.',
        image: '/images/medal-auto-clip.png',
        imageAlt: 'Medal AI auto-clipping a multi-kill in Valorant without any hotkey press',
      },
      {
        title: 'Record Without Tanking Your FPS',
        content:
          'One of the most common OBS complaints is "OBS makes my game lag." OBS renders your scenes in real-time, which fights your game for GPU and CPU resources  - especially on mid-range or older hardware. Medal uses lightweight hardware-accelerated encoding that runs in the background with minimal impact. No scene composition, no real-time mixing, just clean capture. If you play on a laptop or a PC without top-tier specs, Medal is built to stay out of your way. <a href="https://medal.tv/download">Download Medal</a> and see the difference.',
        image: '/images/medal-editor-demo.gif',
        imageAlt: 'Medal running in the background with minimal performance impact during gameplay',
      },
      {
        title: 'Share a Link, Not a 2 GB File',
        content:
          'When OBS finishes recording, you get a local video file. To share it, you compress it, upload it to YouTube or a file host, wait, and send the link. <strong class="text-medal-primary">Medal generates a shareable link the instant you clip. It embeds perfectly on Discord, auto-formats for TikTok and Reddit, and your friends can watch it without downloading anything.</strong> You can also follow friends, discover clips you appear in, and build a highlight feed. OBS has zero social or sharing features built in.',
        video: '/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'Clip From Your Phone, Not Just Your Desktop',
        content:
          'OBS is strictly a desktop application with no mobile version. Medal has a full mobile app on iOS and Android where you can record mobile games like <a href="https://medal.tv/games/brawl-stars">Brawl Stars</a> and <a href="https://medal.tv/games/roblox">Roblox</a>, browse your clip library, edit with the same tools as desktop, and share directly to TikTok or Discord. Your clips sync between PC and phone automatically. If you want your highlights accessible everywhere, Medal is the only option.',
        image: '/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app showing clip library, mobile recording, and one-tap sharing',
      },
      {
        title: 'When to Use Medal',
        content:
          'Medal is the right tool when you want to clip your best gaming moments and share them fast:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- Instant replay with one hotkey - press F8 and your last 15 seconds are saved</li><li>- <a href="https://medal.tv/auto-clipping">Auto-clipping</a> saves kills, aces, and clutch plays without pressing anything</li><li>- Built-in editor for trimming, text, effects, and slow-mo</li><li>- Instant share links that embed on Discord, TikTok, and Reddit</li><li>- Mobile app on iOS and Android with cloud sync</li><li>- Works with every PC game on NVIDIA, AMD, and Intel GPUs</li></ul>',
      },
      {
        title: 'When to Use OBS',
        content:
          'OBS is the better tool for specific workflows:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- Live streaming on Twitch, YouTube, or Kick with scenes, sources, and transitions</li><li>- Professional encoding control (CRF values, x264 vs NVENC presets, custom bitrate curves)</li><li>- Long-form content production with facecam overlays and multi-source mixing</li><li>- Recording on macOS or Linux (Medal is Windows-only on desktop)</li><li>- Plugin ecosystem with thousands of community extensions</li></ul><strong class="text-medal-primary">Many gamers run both: OBS for the stream, Medal for the clips.</strong>',
      },
    ],
    faqs: [
      {
        question: 'Is Medal better than OBS for clipping?',
        answer:
          'For clipping gaming highlights, yes. Medal was purpose-built for instant replay and <a href="https://medal.tv/auto-clipping">auto-clipping</a> with one-click sharing. OBS is a streaming and recording tool that requires manual setup for replay buffer and has no built-in clipping, editing, or sharing features. If your goal is to capture and share clips, Medal is the faster, simpler tool. <a href="https://medal.tv/download">Download Medal</a> to start clipping in under two minutes.',
      },
      {
        question: 'Can you clip with OBS like you can with Medal?',
        answer:
          'OBS has a Replay Buffer feature that can save the last X seconds, but it requires manual configuration of output settings, encoding format, and file paths before it works. It also does not auto-detect highlights or share clips  - you get a local file with no editing tools. Medal gives you instant replay, <a href="https://medal.tv/auto-clipping">auto-clipping</a>, a built-in editor, and shareable links right out of the box.',
      },
      {
        question: 'Does Medal use less resources than OBS while recording?',
        answer:
          'Medal uses hardware-accelerated encoding with a minimal footprint designed specifically for background recording. OBS renders scenes in real-time which can compete with your game for GPU and CPU resources, especially on mid-range hardware. If you have searched "OBS makes my game lag," Medal is built to solve that problem. <a href="https://medal.tv/features">See how Medal keeps performance impact low</a>.',
      },
      {
        question: 'Can I use Medal and OBS at the same time?',
        answer:
          'Yes, and many gamers do exactly this. Run OBS for your Twitch or YouTube stream with scenes and facecam, and run Medal in the background for instant highlight clips. They do not conflict. OBS handles your broadcast, Medal handles your <a href="https://medal.tv/auto-clipping">auto-clipping</a> and clip sharing.',
      },
      {
        question: 'Does Medal work with Roblox, Fortnite, and other games OBS has trouble capturing?',
        answer:
          'Yes. Medal supports every PC game for recording, including <a href="https://medal.tv/games/roblox">Roblox</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/minecraft">Minecraft</a>, and <a href="https://medal.tv/games">100+ more with smart auto-clipping</a>. If OBS is not capturing your game due to window mode or anti-cheat issues, Medal handles those cases automatically.',
      },
      {
        question: 'Is Medal free like OBS?',
        answer:
          'Yes. Medal is free for instant replay, <a href="https://medal.tv/auto-clipping">auto-clipping</a>, editing, and sharing with no time limits. OBS is free and open-source. Medal offers optional premium features like extra cloud storage and higher-quality exports, but the core clipping experience costs nothing. <a href="https://medal.tv/download">Get Medal</a>.',
      },
    ],
    verdict:
      "OBS is an incredible tool for what it does  - live streaming, scene composition, and fine-grained encoding control on Windows, Mac, and Linux. If that is what you need, use OBS. But if you are a gamer who wants to capture highlights, edit them, and share a link to Discord before the next round starts  - OBS was never built for that. Medal handles instant replays, AI auto-clipping in 100+ games, built-in editing, one-click sharing, cloud sync, and a mobile app, all with minimal performance impact. Over 15 million gamers use Medal because it does the one thing they actually need: save the moment and share it fast.",
  },
  {
    slug: 'medal-vs-xbox-game-bar',
    competitor: 'Xbox Game Bar',
    competitorShort: 'Xbox Game Bar',
    title:
      'Medal vs Xbox Game Bar: Best Clipping Software for PC Gaming (2026)',
    metaDescription:
      'Medal vs Xbox Game Bar compared for game recording on PC. See why gamers upgrade from Windows built-in recorder to Medal for auto-clips, editing, sharing, and better clip quality.',
    heroSubtitle:
      "Medal is the game recorder built for sharing highlights with your squad. Xbox Game Bar ships with every copy of Windows - it is free, it is convenient, and it gets the job done at a basic level. But if you have ever tried to edit a Game Bar clip, share it on Discord, or wished it would just capture your kills automatically, you already know why millions of gamers switch to Medal. Let's break down exactly where each tool wins.",
    competitorUrl:
      'https://www.xbox.com/en-US/apps/xbox-game-bar',
    comparisonRows: [
      {
        feature: 'Installation required',
        medal: 'Quick download from medal.tv',
        competitor: 'Zero install - built into Windows',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Auto-clipping',
        medal: 'AI-powered, 100+ games supported',
        competitor: 'Not available',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Instant replay quality',
        medal: 'Up to 4K, configurable length',
        competitor: 'Capped at 1080p 60fps',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Built-in clip editor',
        medal: 'Trim, cut, effects, text, captions',
        competitor: 'Basic trim only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Clip sharing',
        medal: 'Instant link, embeds on Discord/TikTok/Reddit',
        competitor: 'Manual file sharing from local folder',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Performance overlay',
        medal: 'Basic FPS counter',
        competitor: 'FPS, CPU, GPU, RAM widgets',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Account required',
        medal: 'Free account for cloud + sharing',
        competitor: 'No account needed',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Voice commands',
        medal: '"Clip that" voice capture',
        competitor: 'Not supported',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Free cloud + unlimited with Premium',
        competitor: 'Local only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android (record, edit, share)',
        competitor: 'Desktop only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Audio tracks',
        medal: 'Separate game, mic, and Discord tracks',
        competitor: 'Single mixed audio track',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Social features',
        medal: 'Follow friends, discover clips, get tagged',
        competitor: 'None',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'System-level integration',
        medal: 'Third-party app',
        competitor: 'Deep Windows OS integration',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Price',
        medal: 'Free (optional Premium)',
        competitor: 'Free (no paid tier)',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'GPU support',
        medal: 'NVIDIA, AMD, Intel',
        competitor: 'NVIDIA, AMD, Intel',
        medalWins: null,
        competitorWins: null,
      },
    ],
    detailSections: [
      {
        title: 'Replay Capture That Actually Keeps Up with You',
        content:
          'You just hit a 1v5 ace in <a href="https://medal.tv/games/valorant">Valorant</a> and your hands are shaking. With Medal, press F8 and the last 15 seconds (or however long you want) are saved at up to 4K resolution - done, clipped, ready to share. Xbox Game Bar has a background recording feature too, but it maxes out at 1080p 60fps and you have to first enable it deep inside Windows Settings > Gaming > Captures. Medal was designed from the ground up as a <a href="https://medal.tv/features">game recorder for PC</a> - the difference in speed and quality is night and day.',
        video: '/images/medal-instant-replay.mp4',
      },
      {
        title: 'Your Highlights Saved While You Focus on the Game',
        content:
          'This is the feature Xbox Game Bar simply does not have. Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> uses AI to detect kills, clutch rounds, and highlight-reel moments in <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, and <a href="https://medal.tv/games/rocket-league">Rocket League</a> - saving them automatically without you pressing a single button. With Game Bar, every single clip requires you to hit Win+Alt+G manually. If you forget, the moment is gone. Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> means you never have to choose between playing and recording.',
        image: '/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping highlights in the background while the player focuses on the game',
      },
      {
        title: 'Hands on WASD? Just Say the Word',
        content:
          'Mid-clutch in a ranked <a href="https://medal.tv/games/cs2">CS2</a> match, there is no way you are reaching for Win+Alt+G. With Medal, just say "clip that" and the moment is captured - completely hands-free. It is perfect for those high-pressure plays in <a href="https://medal.tv/games/apex-legends">Apex Legends</a> or <a href="https://medal.tv/games/fortnite">Fortnite</a> where every keystroke matters. Xbox Game Bar relies entirely on keyboard shortcuts with no voice command support at all.',
        image: '/images/medal-editor-demo.gif',
        imageAlt: 'Medal capturing a clip via voice command during a competitive gaming moment',
      },
      {
        title: 'From Raw Clip to Discord Link in Under 10 Seconds',
        content:
          'Here is where Medal pulls way ahead. You clip a play, trim it in the built-in editor, add text or effects if you want, and hit share. <strong class="text-medal-primary">Medal generates a shareable link the instant you clip. It embeds perfectly on Discord, auto-formats for TikTok and Reddit, and your friends can watch it without downloading anything.</strong> No file uploading, no compression, no "file too large" errors. You can also follow friends, see their clips, and get tagged in clips you appear in. Xbox Game Bar? It dumps raw .mp4 files into your Videos/Captures folder. From there, you are on your own - find the file, open a separate editor, export, manually upload. That is a 10-minute workflow vs. 10 seconds.',
        video: '/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'Clip on PC, Watch and Share from Your Phone',
        content:
          'Medal has a full mobile app on iOS and Android. Record mobile games directly, browse your PC clips synced to the cloud, edit on the go, and share to TikTok or Discord without ever opening your laptop. Your clips follow you everywhere. Xbox Game Bar is locked to your Windows desktop with no mobile experience whatsoever - if you want to share a clip from your phone, you are screen-recording a screen recording. <a href="https://medal.tv/download">Download Medal</a> on all your devices and keep your clips in sync.',
        image: '/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app showing clip feed, editing tools, and sharing options on a phone',
      },
      {
        title: 'When to Use Medal',
        content:
          'Medal is the right choice when you want more than basic screen recording:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- <a href="https://medal.tv/auto-clipping">Auto-clipping</a> saves your best plays without pressing a button</li><li>- Built-in editor with trimming, text, effects, and slow-mo</li><li>- Instant share links that embed on Discord, TikTok, and Reddit</li><li>- Follow friends and discover clips you are in</li><li>- Mobile app on iOS and Android with cloud sync</li><li>- Works with <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/roblox">Roblox</a>, and every other PC game</li></ul><a href="https://medal.tv/download">Medal is free to download</a>.',
      },
      {
        title: 'When to Use Xbox Game Bar',
        content:
          'Xbox Game Bar makes sense for specific situations:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- Pre-installed on every Windows 10 and 11 PC - zero setup needed</li><li>- Performance overlay widgets (FPS, CPU usage, GPU temp, RAM monitoring)</li><li>- No account required - just press Win+G and record</li><li>- Quick one-off screen recordings when you do not need editing or sharing</li><li>- System-level Windows integration that works without third-party software</li></ul>',
      },
    ],
    faqs: [
      {
        question: 'Is Xbox Game Bar good for recording gameplay?',
        answer:
          'Xbox Game Bar works for basic screen recordings on Windows, but it caps out at 1080p 60fps with no editing tools, no sharing features, and no <a href="https://medal.tv/auto-clipping">auto-clipping</a>. If you just need a quick local recording it is fine, but most gamers who want to actually share and edit clips switch to Medal for its built-in editor, instant share links, and AI-powered highlights.',
      },
      {
        question: 'Does Xbox Game Bar affect FPS and gaming performance?',
        answer:
          'Xbox Game Bar can impact performance, especially on lower-end PCs. Its background recording feature uses system resources even when you are not actively clipping. Medal is optimized specifically for gaming - it uses hardware-accelerated encoding on NVIDIA, AMD, and Intel GPUs to keep the performance hit minimal. Many gamers find Medal lighter than Game Bar when both are doing background recording.',
      },
      {
        question: 'How do I record with Xbox Game Bar vs Medal?',
        answer:
          'With Xbox Game Bar, press Win+G to open the overlay, then click the record button or use Win+Alt+R. With Medal, just press F8 (or your custom hotkey) to save an instant replay of whatever just happened - no overlay needed. Medal also offers voice commands ("clip that") and <a href="https://medal.tv/auto-clipping">auto-clipping</a> that saves highlights with zero input. <a href="https://medal.tv/download">Download Medal</a> to try it out.',
      },
      {
        question: 'Can I use Medal and Xbox Game Bar at the same time?',
        answer:
          'Yes, they work well side by side. A popular setup is to keep Xbox Game Bar for its FPS counter and performance widgets (Win+G), while Medal handles all your clipping, editing, and sharing in the background. They do not conflict. Game Bar monitors your system, Medal captures your best plays with <a href="https://medal.tv/auto-clipping">auto-clipping</a> and instant replay.',
      },
      {
        question: 'Why are my Xbox Game Bar recordings low quality?',
        answer:
          'Xbox Game Bar maxes out at 1080p 60fps and uses relatively aggressive compression to keep file sizes small, which can make recordings look washed out. Medal lets you record at higher resolutions with better bitrate control, and hardware encoding means you get sharper clips without tanking your FPS. Check out <a href="https://medal.tv/features">Medal\'s full feature list</a> for recording quality options.',
      },
      {
        question: 'What is the best clipping software for PC gaming?',
        answer:
          'For most PC gamers, Medal is the best clipping software. It combines instant replay, AI-powered <a href="https://medal.tv/auto-clipping">auto-clipping</a> in <a href="https://medal.tv/games">100+ games</a>, a built-in editor, one-click sharing, cloud storage, and a mobile app - all for free. Xbox Game Bar is convenient because it is built into Windows, but it only covers basic recording. ShadowPlay is NVIDIA-only. Medal works on any GPU and gives you the full clip-to-share pipeline in one app.',
      },
    ],
    verdict:
      "Xbox Game Bar is convenient - it is already on your PC, it does not need an account, and the performance widgets are genuinely useful. But as a game recorder, it stops at \"basic.\" No auto-clipping, no real editor, no sharing workflow, no mobile app, no social features, no cloud. Medal picks up where Game Bar leaves off and does not stop. If you have ever saved a Game Bar clip and then spent 10 minutes figuring out how to get it to your Discord server, Medal is the answer. Clip it, edit it, share it - all in one place, all in seconds. Over 15 million gamers have already made the switch.",
  },
  {
    slug: 'medal-vs-shadowplay',
    competitor: 'NVIDIA ShadowPlay',
    competitorShort: 'ShadowPlay',
    title:
      'Medal vs NVIDIA ShadowPlay: GPU Recording Compared (2026)',
    metaDescription:
      'Medal vs NVIDIA ShadowPlay  - full comparison of GPU compatibility, auto-clipping, editing, sharing, and mobile support. Find out which game recorder wins for your setup.',
    heroSubtitle:
      "Medal records, clips, edits, and shares your highlights on any GPU  - NVIDIA, AMD, or Intel. ShadowPlay is baked into your NVIDIA card and delivers rock-solid hardware encoding, but it locks you into one ecosystem with zero editing or sharing. Here is exactly how the two stack up.",
    competitorUrl:
      'https://www.nvidia.com/en-us/geforce/geforce-experience/shadowplay/',
    comparisonRows: [
      {
        feature: 'GPU compatibility',
        medal: 'NVIDIA, AMD, and Intel GPUs',
        competitor: 'NVIDIA GPUs only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Hardware-accelerated encoding',
        medal: 'Uses NVENC, AMF, or QuickSync',
        competitor: 'Direct NVENC at the driver level',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Auto-clipping',
        medal: 'AI-powered, 100+ games',
        competitor: 'Highlights  - limited game list',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Instant replay',
        medal: 'One hotkey, any GPU',
        competitor: 'Instant Replay (NVIDIA only)',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Built-in editor',
        medal: 'Trim, cut, text, effects, slow-mo',
        competitor: 'No editor',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'One-click sharing',
        medal: 'Instant link to Discord, TikTok, Reddit',
        competitor: 'Manual file export only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'In-game screenshots',
        medal: 'Built-in screenshot capture',
        competitor: 'Ansel  - high-res, 360, super resolution',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'In-game visual filters',
        medal: 'No',
        competitor: 'Freestyle  - real-time color and style filters',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android  - record, edit, share',
        competitor: 'No mobile app',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Free tier + unlimited with Premium',
        competitor: 'Local only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Background software required',
        medal: 'Medal runs standalone',
        competitor: 'Requires GeForce Experience or NVIDIA App',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Voice-activated clipping',
        medal: '"Clip that" voice command',
        competitor: 'No voice features',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Social and discovery features',
        medal: 'Follow friends, discover clips you are in',
        competitor: 'No social features',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Price',
        medal: 'Free (any GPU)',
        competitor: 'Free (NVIDIA GPU required)',
        medalWins: null,
        competitorWins: null,
      },
    ],
    detailSections: [
      {
        title: 'Replay Your Best Plays on Any Graphics Card',
        content:
          'ShadowPlay\'s Instant Replay is genuinely good  - press a hotkey and the last few minutes are saved with barely any FPS hit, thanks to direct NVENC access at the hardware level. The problem? It only works if you own an NVIDIA GPU. Medal gives you the same instant replay workflow on <strong class="text-medal-primary">NVIDIA, AMD, and Intel graphics cards</strong>. Press F8 after landing a 4K in <a href="https://medal.tv/games/cs2">CS2</a> or a ceiling shot in <a href="https://medal.tv/games/rocket-league">Rocket League</a>, and the clip is saved in seconds. No GeForce Experience required, no driver-level lock-in. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/images/medal-instant-replay.mp4',
      },
      {
        title: 'AI Highlights That Actually Cover Your Games',
        content:
          'ShadowPlay Highlights sounds great on paper  - automatic clips of your kills and wins. In practice, it only supports a handful of titles and NVIDIA has barely expanded that list in years. Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> covers <strong class="text-medal-primary">100+ games</strong> and keeps growing. Your aces in <a href="https://medal.tv/games/valorant">Valorant</a>, squad wipes in <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, clutch defuses in <a href="https://medal.tv/games/cs2">CS2</a>, Victory Royales in <a href="https://medal.tv/games/fortnite">Fortnite</a>, and team kills in <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a> are saved before you are back in the lobby  - no button press, no NVIDIA GPU needed.',
        image: '/images/medal-auto-clip.png',
        imageAlt: 'Medal AI auto-clipping highlights across 100+ games on any GPU',
      },
      {
        title: 'No Hotkey Needed  - Voice-Clip Mid-Fight',
        content:
          'Mid-fight in a ranked <a href="https://medal.tv/games/fortnite">Fortnite</a> endgame and can not reach your hotkey? Just say "clip that" and Medal captures the moment instantly  - voice-activated, zero distraction. ShadowPlay has no voice clipping at all. You either press the hotkey or you lose the clip. Medal keeps your hands where they belong: on your keyboard.',
        image: '/images/medal-editor-demo.gif',
        imageAlt: 'Medal voice command saving a highlight clip hands-free during gameplay',
      },
      {
        title: 'Edit and Share Without Leaving the App',
        content:
          'ShadowPlay dumps raw video files onto your hard drive. Want to trim a clip? Open a separate editor. Want to share it? Manually upload to YouTube or drag the file into Discord and hope it is under the size limit. Medal gives you a <strong class="text-medal-primary">built-in editor</strong> with trimming, text overlays, effects, and slow-mo  - then generates an instant link. <strong class="text-medal-primary">Medal generates a shareable link the instant you clip. It embeds perfectly on Discord, auto-formats for TikTok and Reddit, and your friends can watch it without downloading anything.</strong> You can also follow friends, browse their clips, and discover highlights you appear in. The whole loop from play to share takes under 10 seconds.',
        video: '/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'Take Your Clips Everywhere with Mobile',
        content:
          'ShadowPlay is welded to your desktop. Medal has a full mobile app on iOS and Android where you can record mobile games, browse your PC clips, edit on the go, and share directly to TikTok, Discord, or anywhere else. Your clips sync across devices automatically  - clip on PC, post from your phone on the bus. ShadowPlay does not have any mobile presence at all.',
        image: '/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app showing clip feed, editing tools, and mobile game recording',
      },
      {
        title: 'When to Use Medal',
        content:
          'Medal is the right tool when you want to clip, edit, and share highlights on any GPU:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- Works on NVIDIA, AMD, and Intel GPUs - no hardware lock-in</li><li>- <a href="https://medal.tv/auto-clipping">Auto-clipping</a> saves your best plays across 100+ games</li><li>- Built-in editor for trimming, text, effects, and slow-mo</li><li>- Instant share links that embed on Discord, TikTok, and Reddit</li><li>- Mobile app on iOS and Android with cloud sync</li><li>- Community of 15 million gamers</li></ul>',
      },
      {
        title: 'When to Use ShadowPlay',
        content:
          'ShadowPlay has real strengths if you have an NVIDIA GPU:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- Ansel - pause supported games and capture super-resolution, 360-degree, or HDR screenshots</li><li>- Freestyle - real-time visual filters like sharpening, color grading, and retro effects</li><li>- Driver-level encoding on RTX cards can edge out third-party tools in specific scenarios</li><li>- Native integration with GeForce Experience / NVIDIA App</li></ul>If those features matter and you have an NVIDIA GPU, ShadowPlay delivers.',
      },
    ],
    faqs: [
      {
        question: 'Does ShadowPlay work with AMD graphics cards?',
        answer:
          'No. ShadowPlay requires an NVIDIA GeForce GPU and will not run on AMD or Intel graphics cards at all. If you have an AMD or Intel GPU, Medal is the best alternative  - it supports NVIDIA, AMD, and Intel hardware and gives you instant replay, <a href="https://medal.tv/auto-clipping">auto-clipping</a>, editing, and sharing on any setup. <a href="https://medal.tv/download">Download Medal</a> to get started.',
      },
      {
        question: 'Is Medal better than ShadowPlay?',
        answer:
          'For most gamers, yes. Medal works on any GPU, has a built-in editor, generates instant share links, offers <a href="https://medal.tv/auto-clipping">auto-clipping</a> in 100+ games, and runs on mobile. ShadowPlay is limited to NVIDIA GPUs, has no editor, no sharing features, and no mobile app. ShadowPlay does have Ansel screenshots and Freestyle filters, which Medal does not offer. If those NVIDIA-exclusive features matter, ShadowPlay is worth keeping  - but Medal handles everything else better.',
      },
      {
        question: 'Does Medal work without an NVIDIA GPU?',
        answer:
          'Yes. Medal works on NVIDIA, AMD, and Intel GPUs. It uses hardware-accelerated encoding (NVENC, AMF, or QuickSync) depending on your card, so performance impact stays low regardless of your GPU brand. <a href="https://medal.tv/download">Download Medal</a> and it auto-detects your setup.',
      },
      {
        question: 'Is ShadowPlay free?',
        answer:
          'Yes, ShadowPlay is free for anyone with a compatible NVIDIA GeForce GPU  - it comes bundled with GeForce Experience (or the newer NVIDIA App). However, you still need the NVIDIA GPU itself. Medal is also free and works on any GPU, with optional Premium features like extra cloud storage and higher quality exports.',
      },
      {
        question: 'How do I switch from ShadowPlay to Medal?',
        answer:
          '<a href="https://medal.tv/download">Download Medal</a> and install it  - setup takes under two minutes. Medal runs alongside or instead of ShadowPlay with no conflicts. Set your preferred hotkey (default is F8), enable <a href="https://medal.tv/auto-clipping">auto-clipping</a> for your games, and you are good to go. You can uninstall GeForce Experience afterward if you do not use it for driver updates.',
      },
      {
        question: 'Can I use Medal and ShadowPlay at the same time?',
        answer:
          'Yes. Medal and ShadowPlay can run side by side without conflicts. Some players keep ShadowPlay for Ansel screenshots or Freestyle filters and use Medal for clipping, editing, and sharing. Just make sure they are not both recording with overlapping hotkeys to avoid double-writing to disk.',
      },
      {
        question: 'Does Medal have an alternative to ShadowPlay Highlights?',
        answer:
          'Yes  - Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> is the direct alternative and covers far more games. ShadowPlay Highlights only works with a short list of supported titles. Medal\'s AI-powered <a href="https://medal.tv/auto-clipping">auto-clipping</a> detects kills, aces, and clutch moments across <a href="https://medal.tv/games">100+ games</a> including <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, and <a href="https://medal.tv/games/rocket-league">Rocket League</a>  - and the list keeps growing.',
      },
      {
        question: 'What is NVIDIA Instant Replay and how does Medal compare?',
        answer:
          'NVIDIA Instant Replay continuously buffers your gameplay and lets you save the last few minutes with a hotkey  - but only on NVIDIA GPUs. Medal offers the same instant replay feature on any GPU (NVIDIA, AMD, Intel). Press F8 and your last 15 seconds to 10 minutes are saved instantly. Medal also adds editing, sharing, and <a href="https://medal.tv/auto-clipping">auto-clipping</a> on top, which Instant Replay does not have.',
      },
    ],
    verdict:
      "ShadowPlay is a solid recording tool if you own an NVIDIA GPU and only need raw local footage  - plus Ansel and Freestyle are genuinely useful features Medal does not replicate. But ShadowPlay locks out every AMD and Intel user, has no editor, no sharing, no mobile app, and its Highlights feature only covers a fraction of the games Medal auto-clips. If you want to clip your best moments, edit them in the app, share an instant link to Discord, and do it all on any GPU with 15 million other gamers  - Medal is the better choice.",
  },
  {
    slug: 'medal-vs-outplayed',
    competitor: 'Outplayed (by Overwolf)',
    competitorShort: 'Outplayed',
    title: 'Medal vs Outplayed: Best Auto-Clipping Software Compared (2026)',
    metaDescription:
      'Medal vs Outplayed head-to-head. Compare auto-clipping accuracy, editing tools, sharing speed, Overwolf dependency, and performance impact to pick the best clip software.',
    heroSubtitle:
      "Medal and Outplayed both promise to capture your best gaming moments automatically. The difference is what happens next. Medal edits, shares, and syncs clips across devices without a second app. Outplayed needs the full Overwolf platform running underneath it just to start recording. Here is every detail you need to decide.",
    competitorUrl: 'https://www.overwolf.com/app/overwolf-outplayed',
    comparisonRows: [
      {
        feature: 'Auto-clipping',
        medal: 'AI-powered, 100+ games',
        competitor: 'Event-based, 100+ games',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Standalone install',
        medal: 'Yes - no extra platform',
        competitor: 'No - requires Overwolf',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Built-in editor',
        medal: 'Trim, effects, text, slow-mo, captions',
        competitor: 'Basic trim only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Instant share links',
        medal: 'One-click link, embeds anywhere',
        competitor: 'No - local files only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Free tier + unlimited Premium',
        competitor: 'None - local only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android (record, browse, share)',
        competitor: 'No mobile app',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Overwolf ecosystem integration',
        medal: 'No',
        competitor: 'Full access to Overwolf app library',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Replay HUD overlay',
        medal: 'No',
        competitor: 'Shows recent plays in-game',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Timeline markers',
        medal: 'No',
        competitor: 'Marks key events on timeline',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Social / community features',
        medal: 'Follow friends, discover clips you\'re in',
        competitor: 'None',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Voice-activated clipping',
        medal: '"Clip that" hands-free capture',
        competitor: 'No',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Performance impact',
        medal: 'Lightweight, standalone process',
        competitor: 'Overwolf adds extra overhead',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'GPU support',
        medal: 'NVIDIA, AMD, Intel',
        competitor: 'NVIDIA, AMD, Intel',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Price',
        medal: 'Free (optional Premium)',
        competitor: 'Free',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Platform',
        medal: 'Windows, iOS, Android',
        competitor: 'Windows only (via Overwolf)',
        medalWins: true,
        competitorWins: false,
      },
    ],
    detailSections: [
      {
        title: 'No Overwolf Required - Medal Runs on Its Own',
        content:
          'The biggest difference between Medal and Outplayed is not a feature - it is architecture. Outplayed cannot run without Overwolf. That means every time you want to clip, you are also loading the full Overwolf platform with its own overlay, update system, and app framework sitting between you and your game. Medal installs standalone, launches in seconds, and does not inject a single extra process. Less running in the background means fewer frame drops in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, or <a href="https://medal.tv/games/cs2">CS2</a> when you are mid-fight. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/images/medal-instant-replay.mp4',
      },
      {
        title: 'Both Auto-Clip - But Medal Does More With the Clip',
        content:
          'Medal and Outplayed both detect kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, and <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>. Their <a href="https://medal.tv/auto-clipping">auto-clipping</a> approaches are different - Medal uses AI-powered detection while Outplayed hooks into Overwolf game events - but both get the job done for supported titles. Where Medal pulls ahead is what happens after the clip is saved. Outplayed drops a local file on your hard drive and stops there. Medal lets you trim it, add effects, generate an instant share link, and have it on your phone before the next round starts.',
        image: '/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping a highlight and preparing it for editing and sharing',
      },
      {
        title: 'A Real Editor vs a Trim Button',
        content:
          'Outplayed gives you a basic trim tool - you can cut the start and end of a clip and that is about it. Medal has a full built-in editor with trimming, slow-motion, text overlays, effects, and captions. You can turn a raw <a href="https://medal.tv/auto-clipping">auto-clipping</a> capture into something worth posting on TikTok or Reddit without ever opening a separate editing app. If you are serious about making your clips look good before you share them, the editing gap between Medal and Outplayed is massive.',
        image: '/images/medal-editor-demo.gif',
        imageAlt: 'Medal built-in editor with effects, text, and slow-mo applied to a gaming clip',
      },
      {
        title: 'Instant Links That Embed Everywhere',
        content:
          'This is where Medal leaves Outplayed behind entirely. <strong class="text-medal-primary">Medal generates a shareable link the instant you clip. It embeds perfectly on Discord, auto-formats for TikTok and Reddit, and your friends can watch it without downloading anything.</strong> No uploading, no compression, no file size drama. Outplayed saves everything locally. If you want to share an Outplayed clip, you are manually uploading it to YouTube or a file hosting service yourself. Medal also has a social layer where you follow friends, see their clips in your feed, and even discover clips you appear in. Outplayed has none of that.',
        video: '/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'Clip on PC, Watch on Your Phone',
        content:
          'Medal syncs your clips to the cloud and has a full mobile app on iOS and Android. Record a clutch play in <a href="https://medal.tv/games/rocket-league">Rocket League</a> on your PC at night, then edit and share it from your phone on the bus the next morning. You can also record mobile games directly in the app. Outplayed is locked to your Windows desktop with no mobile app, no cloud backup, and no way to access your clips from anywhere except the PC that recorded them. If that hard drive fails, your Outplayed clips are gone.',
        image: '/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app showing clip library synced from PC with editing and sharing options',
      },
      {
        title: 'When to Use Medal',
        content:
          'Medal is the right tool when you want a standalone clip solution with no extra platform required:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- <a href="https://medal.tv/auto-clipping">Auto-clipping</a> saves kills, aces, and clutch plays automatically</li><li>- Built-in editor for trimming, text, effects, and slow-mo</li><li>- Instant share links that embed on Discord, TikTok, and Reddit</li><li>- Cloud storage and mobile app on iOS and Android</li><li>- No Overwolf or extra software required - Medal runs standalone</li><li>- Social community of 15 million gamers</li></ul>',
      },
      {
        title: 'When to Use Outplayed',
        content:
          'Outplayed makes sense in specific situations:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- You already use Overwolf apps like OP.GG, Porofessor, or other game overlays</li><li>- Replay HUD shows recent captures inside the game without alt-tabbing</li><li>- Timeline markers tag key events for scrubbing through longer recordings</li><li>- Overwolf ecosystem integration keeps all your gaming tools in one place</li></ul>',
      },
    ],
    faqs: [
      {
        question: 'Is Outplayed better than Medal?',
        answer:
          'Outplayed has some strengths - its Overwolf ecosystem integration, replay HUD, and timeline markers are features Medal does not have. But Medal wins on editing, instant sharing, cloud storage, mobile access, voice-activated clipping, and social features. For most gamers who want to clip, edit, and share highlights quickly, Medal is the better choice. <a href="https://medal.tv/download">Try Medal free</a> and compare for yourself.',
      },
      {
        question: 'Does Outplayed require Overwolf?',
        answer:
          'Yes. Outplayed cannot run without the Overwolf platform installed and running in the background. Overwolf handles game event detection, overlays, and the app framework that Outplayed depends on. This means extra processes, extra RAM usage, and potential frame drops. Medal is fully standalone - install it and you are recording in under two minutes with nothing else running.',
      },
      {
        question: 'Is Outplayed free?',
        answer:
          'Yes, Outplayed is free. Medal is also free for instant replay, <a href="https://medal.tv/auto-clipping">auto-clipping</a>, editing, and sharing. Medal offers optional Premium features like unlimited cloud storage and higher quality exports. Both tools cost nothing to start using, but Medal gives you significantly more at the free tier - instant share links, a built-in editor, cloud storage, and a mobile app that Outplayed does not have.',
      },
      {
        question: 'Does Outplayed affect FPS?',
        answer:
          'Outplayed itself is lightweight, but it requires Overwolf running underneath it. Overwolf loads its own overlay system, update manager, and app framework into memory alongside your game. Many gamers report noticeable frame drops with Overwolf active, especially on mid-range hardware. Medal runs as a single standalone process using hardware-accelerated encoding on NVIDIA, AMD, and Intel GPUs - most players see zero FPS impact. If performance matters to you in ranked <a href="https://medal.tv/games/valorant">Valorant</a> or <a href="https://medal.tv/games/fortnite">Fortnite</a>, Medal is the safer pick.',
      },
      {
        question: 'How to switch from Outplayed to Medal?',
        answer:
          '<a href="https://medal.tv/download">Download Medal</a> and install it - takes under two minutes. Medal runs standalone so you do not need to uninstall Outplayed or Overwolf first. Set your hotkey (default is F8 for instant replay) and Medal will start capturing immediately. Your existing Outplayed clips stay on your local drive. Going forward, Medal will <a href="https://medal.tv/auto-clipping">auto-clip</a> your highlights, let you edit them, and generate instant share links - all without Overwolf running.',
      },
      {
        question: 'Can Medal and Outplayed run at the same time?',
        answer:
          'Technically yes, but it is not recommended. Running both means Overwolf plus Medal are both hooking into your game, which can cause conflicts and extra performance overhead. Most gamers who try both end up uninstalling Outplayed because Medal covers <a href="https://medal.tv/auto-clipping">auto-clipping</a> plus editing, sharing, cloud backup, and mobile access in one standalone app.',
      },
      {
        question: 'Does Medal work with the same games as Outplayed?',
        answer:
          'Medal supports <a href="https://medal.tv/auto-clipping">auto-clipping</a> in <a href="https://medal.tv/games">100+ games</a> including <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, <a href="https://medal.tv/games/rocket-league">Rocket League</a>, and League of Legends. Outplayed also supports 100+ games through Overwolf game events. Both have strong coverage, but Medal also records any game on PC for manual clipping - not just titles with auto-detect support.',
      },
    ],
    verdict:
      "Medal and Outplayed both auto-clip your highlights, but that is where the similarities end. Outplayed is locked inside the Overwolf ecosystem - no editor beyond basic trim, no share links, no cloud storage, no mobile app. Every clip lives on your local hard drive until you manually upload it somewhere. Medal gives you a full editor, instant embed links for Discord and Reddit, cloud backup, a mobile app, voice-activated capture, and a social feed with over 15 million gamers. If you use a stack of Overwolf apps already and love the replay HUD, Outplayed fits neatly into that setup. For everyone else who just wants to clip it, edit it, and share it - Medal is the faster, more complete tool.",
  },
  {
    slug: 'medal-vs-insights-capture',
    competitor: 'Insights Capture',
    competitorShort: 'Insights',
    title: 'Medal vs Insights Capture: Clipping vs Coaching Tools Compared (2026)',
    metaDescription:
      'Medal vs Insights Capture - which gaming tool do you actually need? Medal is built for instant clipping and sharing. Insights Capture is built for esports coaching and VOD review. Full comparison.',
    heroSubtitle:
      "Medal and Insights Capture are not really competing - they are built for completely different gamers. Medal is the clip-edit-share tool for the 90% who want highlights on Discord in seconds. Insights Capture is the structured VOD review platform for esports teams working with a coach. Here is exactly where each one wins.",
    competitorUrl: 'https://insights.gg/',
    comparisonRows: [
      {
        feature: 'Core purpose',
        medal: 'Capture, edit, and share highlights',
        competitor: 'Structured gameplay analysis and coaching',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Auto-clipping',
        medal: 'AI detects kills, aces, and clutch moments',
        competitor: 'No auto-clipping - manual bookmarks only',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Instant replay hotkey',
        medal: 'Press F8, last 15 seconds saved',
        competitor: 'Full session recording, no instant replay',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Clip editor',
        medal: 'Trim, cut, effects, text overlays, speed ramps',
        competitor: 'Basic trim for exporting segments',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Sharing and social',
        medal: 'Instant link, Discord embeds, community feed',
        competitor: 'No sharing links or social features',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'VOD review and annotations',
        medal: 'No VOD review tools',
        competitor: 'Timeline markers, drawing tools, and annotations',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Coach and team features',
        medal: 'No team workflows',
        competitor: 'Shared team reviews, coach feedback, role-based access',
        medalWins: false,
        competitorWins: true,
      },
      {
        feature: 'Voice clipping',
        medal: 'Say "clip that" hands-free',
        competitor: 'No voice commands',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Mobile app',
        medal: 'iOS + Android (record, browse, edit, share)',
        competitor: 'No mobile app',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'Cloud storage',
        medal: 'Free cloud + premium tiers',
        competitor: 'Limited cloud, primarily local',
        medalWins: true,
        competitorWins: false,
      },
      {
        feature: 'GPU support',
        medal: 'NVIDIA, AMD, Intel',
        competitor: 'NVIDIA, AMD, Intel',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Price',
        medal: 'Free (optional premium)',
        competitor: 'Free tier available (premium for teams)',
        medalWins: null,
        competitorWins: null,
      },
      {
        feature: 'Platform',
        medal: 'Windows, iOS, Android',
        competitor: 'Windows only',
        medalWins: true,
        competitorWins: false,
      },
    ],
    detailSections: [
      {
        title: 'Clip Highlights in Seconds, Not Full Sessions',
        content:
          'Medal is purpose-built for the moment-to-moment highlight reel. Press F8 after a clutch 1v3 in <a href="https://medal.tv/games/cs2">CS2</a> or a ceiling shot in <a href="https://medal.tv/games/rocket-league">Rocket League</a> and the last 15 seconds are saved, edited, and ready to share before the next round starts. Insights Capture records entire gameplay sessions for later review - great for coaching, but overkill if you just want to save that one sick play. <a href="https://medal.tv/features">See all Medal features</a>.',
        video: '/images/medal-instant-replay.mp4',
      },
      {
        title: 'AI-Powered Highlights While You Focus on the Game',
        content:
          'Medal\'s <a href="https://medal.tv/auto-clipping">auto-clipping</a> runs in the background and detects your best plays without any button press. Aces in <a href="https://medal.tv/games/valorant">Valorant</a>, Victory Royales in <a href="https://medal.tv/games/fortnite">Fortnite</a>, squad wipes in <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, and clutch rounds in <a href="https://medal.tv/games/cs2">CS2</a> are clipped and waiting by the time you are back in the lobby. Insights Capture does not have <a href="https://medal.tv/auto-clipping">auto-clipping</a> - it records full sessions that you review later with your coach or team. If you want highlights saved automatically, Medal is the only option between the two.',
        image: '/images/medal-auto-clip.png',
        imageAlt: 'Medal auto-clipping a highlight in Apex Legends without pressing any button',
      },
      {
        title: 'Voice Commands for Hands-Free Clipping',
        content:
          'In a tight 1v1 in <a href="https://medal.tv/games/valorant">Valorant</a> or a chaotic endgame in <a href="https://medal.tv/games/fortnite">Fortnite</a>, your hands are on your keyboard and mouse. Medal lets you say "clip that" and captures the moment instantly - no hotkey needed, no breaking focus. Insights Capture has no voice command support. If you are looking for a recorder that stays out of your way during ranked matches, Medal\'s voice clipping is a game-changer.',
        image: '/images/medal-editor-demo.gif',
        imageAlt: 'Medal voice command capturing a gaming highlight hands-free',
      },
      {
        title: 'Share Instant Links Instead of Exporting Files',
        content:
          '<strong class="text-medal-primary">Medal generates a shareable link the instant you clip. It embeds perfectly on Discord, auto-formats for TikTok and Reddit, and your friends can watch it without downloading anything.</strong> No file uploading, no compression, no waiting. You can also follow friends, react to their clips, and even discover clips that feature you. Insights Capture is built around session recordings that stay within the platform for team review. There are no public sharing links, no social feed, and no community features. If your goal is to get clips in front of your friends or followers fast, Medal is the tool for that. <a href="https://medal.tv/download">Download Medal</a>.',
        video: '/images/medal-share-clip.mp4',
        embedUrl: 'https://medal.tv/games/valorant/clips/mkI53EXbBMVaS1bLn?theater=true',
      },
      {
        title: 'Clip and Share from Your Phone Too',
        content:
          'Medal has a full mobile app on iOS and Android where you can record mobile games, browse your clip library, edit with the same tools as desktop, and share directly to TikTok, Discord, or anywhere else. Your clips sync across devices automatically. Insights Capture is desktop-only with no mobile experience. If you game on your phone or want to manage clips on the go, Medal is the only choice here.',
        image: '/images/medal-mobile-combined.png',
        imageAlt: 'Medal mobile app showing clip browsing and mobile game recording',
      },
      {
        title: 'When to Use Medal',
        content:
          'Medal is the right tool for the vast majority of gamers:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- <a href="https://medal.tv/auto-clipping">Auto-clipping</a> saves your best moments across 100+ games</li><li>- Built-in editor for trimming, text, effects, and slow-mo</li><li>- Instant share links that embed on Discord, TikTok, and Reddit</li><li>- Mobile app on iOS and Android with cloud sync</li><li>- Social community of 15 million gamers</li><li>- Lightweight - built for clipping, not coaching</li></ul>',
      },
      {
        title: 'When to Use Insights Capture',
        content:
          'Insights Capture excels for organized competitive play:<ul class="mt-3 space-y-2 text-medal-text-muted"><li>- Structured VOD review with timeline markers and drawing annotations</li><li>- Per-round performance stats for competitive improvement</li><li>- Team-based review workflows for scrims and practice</li><li>- Coach-assigned homework and positioning review</li><li>- Built for esports teams, not casual clipping</li></ul>If your coach is assigning homework to review your positioning on round 14 of a <a href="https://medal.tv/games/valorant">Valorant</a> scrim, Insights Capture was designed for exactly that.',
      },
    ],
    faqs: [
      {
        question: 'Is Insights Capture free?',
        answer:
          'Insights Capture offers a free tier that covers basic recording and review features. Premium plans unlock additional team features and expanded storage. Medal is also free for instant replay, <a href="https://medal.tv/auto-clipping">auto-clipping</a>, editing, and sharing, with optional premium for extra cloud storage and higher quality exports. <a href="https://medal.tv/download">Download Medal</a> and start clipping in under two minutes.',
      },
      {
        question: 'What is Insights Capture used for?',
        answer:
          'Insights Capture is primarily used for esports coaching and structured gameplay analysis. It records full gaming sessions and provides tools for VOD review with timeline markers, annotations, performance stats, and team review workflows. It is designed for competitive players and coaches who want to break down gameplay round by round - not for quick clipping and sharing.',
      },
      {
        question: 'Is Medal or Insights Capture better for clipping?',
        answer:
          'Medal is significantly better for clipping. It was built from the ground up for the clip-edit-share workflow with instant replay hotkeys, AI-powered <a href="https://medal.tv/auto-clipping">auto-clipping</a>, voice commands, a full built-in editor, instant shareable links, and a mobile app. Insights Capture records full sessions for coaching review and does not have instant clipping, <a href="https://medal.tv/auto-clipping">auto-clipping</a>, or quick sharing features. If clipping highlights is your goal, Medal is the clear pick.',
      },
      {
        question: 'Does Insights Capture have auto-clipping?',
        answer:
          'No. Insights Capture does not offer <a href="https://medal.tv/auto-clipping">auto-clipping</a>. It records full gameplay sessions that you manually review later using timeline markers and bookmarks. Medal is the tool with AI-powered <a href="https://medal.tv/auto-clipping">auto-clipping</a> that automatically detects and saves kills, aces, and clutch moments in <a href="https://medal.tv/games/valorant">Valorant</a>, <a href="https://medal.tv/games/fortnite">Fortnite</a>, <a href="https://medal.tv/games/apex-legends">Apex Legends</a>, <a href="https://medal.tv/games/cs2">CS2</a>, <a href="https://medal.tv/games/call-of-duty-warzone">Call of Duty</a>, and <a href="https://medal.tv/games/rocket-league">Rocket League</a> without any button press.',
      },
      {
        question: 'Can I use Medal and Insights Capture together?',
        answer:
          'Yes, Medal and Insights Capture work great side by side and do not conflict. Many competitive players use Insights Capture for structured VOD review sessions with their team or coach, and Medal for capturing and sharing individual highlights throughout their ranked grind. Medal handles the clip-edit-share side while Insights Capture handles the analysis and improvement side. They complement each other well if you are serious about both content and competition.',
      },
    ],
    verdict:
      "Medal and Insights Capture serve fundamentally different audiences. Insights Capture is a focused tool for esports teams that need structured coaching, VOD review, and performance analytics. Medal is the complete clip-edit-share platform for the other 90% of gamers who want to capture a sick play, make it look good, and get it on Discord in seconds. With AI-powered <a href=\"https://medal.tv/auto-clipping\">auto-clipping</a>, instant sharing links, a built-in editor, voice commands, and a mobile app, Medal covers everything most gamers need. <a href=\"https://medal.tv/download\">Download Medal</a> and see for yourself - over 15 million gamers already have.",
  },
];

export interface PlaceholderPage {
  slug: string;
  competitor: string;
}

export const placeholderPages: PlaceholderPage[] = [];

export const allPages = [
  ...allComparisons.map((c) => ({ slug: c.slug, competitor: c.competitor })),
  ...placeholderPages,
];
