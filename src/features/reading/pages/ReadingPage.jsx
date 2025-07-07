import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useHeaderStore from "../../../stores/useHeaderStore";
import ReadingHeader from "../components/ReadingHeader";
import ChapterContent from "../components/ChapterContent";
import ReadingNavigation from "../components/ReadingNavigation";
import ReadingSettings from "../components/ReadingSettings";
import ChapterList from "../components/ChapterList";
import FloatingNavigation from "../components/FloatingNavigation";
import "./ReadingPage.css";

const ReadingPage = () => {
  const { isDarkMode } = useHeaderStore();
  const { novelId, chapterId } = useParams(); // Get novel ID and chapter ID from URL
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(
    parseInt(chapterId) || 1
  );
  const [showSettings, setShowSettings] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);
  const [readingSettings, setReadingSettings] = useState({
    fontSize: 18,
    lineHeight: 1.6,
    fontFamily: "Georgia",
    textAlign: "left",
    maxWidth: 800,
    backgroundColor: "default",
  });

  // Sample novel data - in real app this would come from props/API based on novelId
  const novel = {
    id: parseInt(novelId) || 1,
    title: "MMORPG: Rebirth as an Alchemist",
    author: "MiuNovels",
    totalChapters: 892,
    chapters: {
      1: {
        id: 1,
        title: "The Beginning of the End",
        content: `The virtual world of COVENANT stretched endlessly before Ren, its crystalline towers piercing the digital sky like monuments to human ambition. After five years of playing this revolutionary MMORPG, he thought he had seen everything the game had to offer.

He was wrong.

Standing at the edge of the Crimson Wasteland, Ren adjusted his worn leather armor and checked his inventory one last time. The final boss awaited him just beyond those jagged red rocks, and with it, his chance for revenge against the friend who had betrayed him.

"Just a little further," he muttered, his fingers tightening around the grip of his enchanted blade. The weapon hummed with magical energy, its surface gleaming with the accumulated power of countless battles.

Marcus had taken everything from him - his guild, his reputation, his trust. But today, all of that would change. Today, Ren would finally get his revenge.

The path ahead was treacherous, littered with the digital bones of players who had attempted this same journey and failed. But Ren was different. He had trained for this moment, sacrificed everything for this one chance at redemption.

As he took his first step into the wasteland, a notification appeared in his peripheral vision:

[WARNING: You are entering a High-Risk PvP Zone]
[Death penalty: Complete character reset]

Ren dismissed the warning with a wave of his hand. He had come too far to turn back now. Whatever happened next would determine not just his fate in the game, but his ability to move forward in the real world.

The crimson sand crunched beneath his boots as he advanced, each step bringing him closer to his destiny. In the distance, he could see the imposing silhouette of the Demon Lord's fortress, its dark spires reaching toward the artificial sky like claws seeking to tear reality itself.

This was it. The moment everything would change.

Little did he know, he was about to discover that some changes come with a price far greater than anything he could have imagined...`,
        publishDate: "2023-01-15",
        wordCount: 2840,
      },
      2: {
        id: 2,
        title: "Back to Level 1",
        content: `Ren's eyes snapped open, and he immediately knew something was wrong.

Gone was the sterile white ceiling of his apartment, replaced by the familiar blue glow of his VR pod's startup sequence. But that was impossible. He distinctly remembered dying to the final boss, watching his character dissolve into pixels as Marcus's laughter echoed through his headset.

[WELCOME TO COVENANT]
[CHARACTER CREATION IN PROGRESS...]

The words floating in his vision made his heart skip a beat. Character creation? But he had been playing for five years. His character, Zephyr the Alchemist, was level 987, one of the highest-level players in the entire game.

"What the hell is going on?" he whispered, his voice echoing strangely in the virtual space.

[PLEASE SELECT YOUR STARTING CLASS]

The familiar class selection screen materialized before him, showing the same six options he had chosen from five years ago: Warrior, Mage, Archer, Rogue, Cleric, and Alchemist. His cursor hovered over the Alchemist class, the same choice he had made all those years ago.

But this time, something was different. This time, he knew exactly what mistakes he had made, exactly how Marcus had betrayed him, and exactly what he needed to do to prevent it from happening again.

A slow smile spread across his face as the realization hit him. Somehow, impossibly, he had been given a second chance.

[ALCHEMIST SELECTED]
[WELCOME TO COVENANT, ADVENTURER]
[YOUR JOURNEY BEGINS NOW]

The character creation completed, and Ren found himself standing in the familiar cobblestone streets of Millhaven, the starting town where every player began their journey. NPCs wandered the streets, offering quests and selling basic equipment to new players.

But Ren was no longer a new player. Hidden behind his level 1 exterior was the knowledge and experience of a veteran who had reached the highest levels of the game. He knew every quest, every hidden treasure, every secret that other players would spend months discovering.

More importantly, he knew exactly when and how Marcus would try to manipulate him.

This time would be different. This time, he would be ready.

As he walked through the town square, a familiar figure caught his eye. Marcus was there, just as he had been five years ago, helping a group of new players with their first quest. To everyone else, he looked like a helpful veteran player sharing his knowledge.

But Ren could see the calculation in his eyes, the way he was already identifying which players might be useful to him later. The same way he had identified and manipulated Ren all those years ago.

"Not this time," Ren whispered, clenching his fists. "This time, I'll be the one pulling the strings."

The game of revenge was about to begin...`,
        publishDate: "2023-01-16",
        wordCount: 3120,
      },
      3: {
        id: 3,
        title: "The Knowledge Advantage",
        content: `Three days into his second chance, Ren had already accomplished what took him weeks in his previous life.

Standing in the Alchemist's Guild, he watched as Master Aldric examined the rare herbs he had just submitted. The old NPC's eyes widened in genuine surprise - something that rarely happened with the advanced AI systems that ran COVENANT.

"Remarkable, young one," Aldric said, his voice carrying that distinctive mixture of awe and suspicion that NPCs displayed when players exceeded their programmed expectations. "These Moonlit Petals... how did you know where to find them?"

Ren smiled. In his previous life, it had taken him three months to discover the hidden grove where these rare alchemical ingredients grew. This time, he had walked straight to it.

"Lucky guess," he replied, accepting the substantial experience points and gold reward that flashed across his vision.

[LEVEL UP!]
[You are now Level 8]
[New Skill Unlocked: Advanced Herbalism]
[Reputation with Alchemist's Guild: Respected]

While other players were still figuring out the basic controls and running starter quests for copper coins, Ren was already building the foundation for the empire he planned to create. He knew every shortcut, every hidden quest, every exploit that the developers had never bothered to patch.

More importantly, he knew Marcus's schedule.

As if summoned by his thoughts, a familiar voice called out behind him.

"Hey there! Nice work with those herbs. I'm Marcus - I couldn't help but notice you're playing as an Alchemist. That's a tough class to start with."

Ren turned slowly, his face a carefully constructed mask of innocence. There he was - Marcus in all his manipulative glory. Tall, charismatic, with the kind of smile that had fooled Ren completely the first time around.

"Oh, thanks!" Ren replied, injecting just the right amount of eager gratitude into his voice. "I'm still learning the ropes. This game is pretty complex."

Marcus's eyes lit up - Ren could practically see the gears turning in his head. A new player, clearly talented but inexperienced, playing a support class that would be valuable in a guild. Perfect prey.

"Tell you what," Marcus said, stepping closer with that practiced casual confidence, "I run a small guild - nothing fancy, just a group of friends helping each other out. We could use someone with your talents. What do you say?"

In his previous life, Ren had been so grateful for the invitation that he'd accepted immediately. This time, he knew better.

"That sounds amazing," Ren said, letting excitement creep into his voice. "But I'm still pretty new to all this. Maybe I should get a bit more experience first? I don't want to hold your guild back."

It was perfect - the response of someone who was interested but not desperate. Marcus's smile widened, and Ren could see the hook setting itself.

"Smart thinking," Marcus nodded approvingly. "Tell you what, how about I show you some of the intermediate areas? Help you level up faster. Consider it a preview of what guild membership could offer."

And there it was - the same offer that had started Ren's downfall five years ago. Marcus would indeed help him level up, introduce him to powerful players, and guide him through increasingly complex content. But every favor would come with a price, every piece of help would create an obligation, until Ren found himself completely under Marcus's control.

This time, though, Ren would be the one pulling the strings.

"That would be incredible," Ren said, his voice heavy with false gratitude. "I can't believe someone would be so generous to a stranger."

Marcus waved off his thanks with practiced humility. "We've all been new players before. Besides, talent like yours shouldn't be wasted."

As they walked toward the town gates, Ren's mind was already working three steps ahead. He knew exactly which areas Marcus would take him to, which players they would encounter, and which opportunities Marcus would use to demonstrate his value.

But this time, Ren would be ready for all of it.

The student was about to become the teacher, and Marcus had no idea what was coming.`,
        publishDate: "2023-01-17",
        wordCount: 2890,
      },
    },
  };

  const handlePreviousChapter = () => {
    if (currentChapter > 1) {
      const newChapter = currentChapter - 1;
      setCurrentChapter(newChapter);
      navigate(`/info/${novelId}/reading/${newChapter}`);
    }
  };

  const handleNextChapter = () => {
    if (currentChapter < novel.totalChapters) {
      const newChapter = currentChapter + 1;
      setCurrentChapter(newChapter);
      navigate(`/info/${novelId}/reading/${newChapter}`);
    }
  };

  const handleChapterSelect = (chapterId) => {
    setCurrentChapter(chapterId);
    setShowChapterList(false);
    navigate(`/info/${novelId}/reading/${chapterId}`);
    // Scroll to top when changing chapters
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSettingsChange = (newSettings) => {
    setReadingSettings((prev) => ({ ...prev, ...newSettings }));
  };

  // Update chapter when URL parameter changes
  useEffect(() => {
    const chapterFromUrl = parseInt(chapterId) || 1;
    setCurrentChapter(chapterFromUrl);
  }, [chapterId]);

  // Update document theme class when theme changes (since ReadingPage is outside PublicLayout)
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";

    // Cleanup function to remove theme classes when component unmounts
    return () => {
      document.body.className = "";
    };
  }, [isDarkMode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Prevent navigation if user is typing in an input
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          handlePreviousChapter();
          break;
        case "ArrowRight":
          event.preventDefault();
          handleNextChapter();
          break;
        case " ": // Spacebar for scrolling
          event.preventDefault();
          window.scrollBy(0, window.innerHeight * 0.8);
          break;
        case "Home":
          event.preventDefault();
          window.scrollTo(0, 0);
          break;
        case "End":
          event.preventDefault();
          window.scrollTo(0, document.body.scrollHeight);
          break;
        case "Escape":
          event.preventDefault();
          setShowSettings(false);
          setShowChapterList(false);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [currentChapter, novel.totalChapters]);

  // Auto-save reading progress
  useEffect(() => {
    // In real app, save to localStorage or API
    localStorage.setItem(
      `reading-progress-${novelId}`,
      JSON.stringify({
        novelId: novel.id,
        chapterId: currentChapter,
        timestamp: Date.now(),
      })
    );
  }, [currentChapter, novel.id, novelId]);

  const currentChapterData = novel.chapters[currentChapter];

  return (
    <div className={`reading-page ${isDarkMode ? "dark" : "light"}`}>
      <ReadingHeader
        novel={novel}
        currentChapter={currentChapter}
        onSettingsToggle={() => setShowSettings(!showSettings)}
        onChapterListToggle={() => setShowChapterList(!showChapterList)}
        onPrevious={handlePreviousChapter}
        onNext={handleNextChapter}
        showSettings={showSettings}
        showChapterList={showChapterList}
      />

      <div className="reading-container">
        <main className="reading-main">
          <ChapterContent
            chapter={currentChapterData}
            settings={readingSettings}
          />

          <ReadingNavigation
            currentChapter={currentChapter}
            totalChapters={novel.totalChapters}
            novel={novel}
            onPrevious={handlePreviousChapter}
            onNext={handleNextChapter}
          />
        </main>

        {/* Settings Panel */}
        {showSettings && (
          <ReadingSettings
            settings={readingSettings}
            onChange={handleSettingsChange}
            onClose={() => setShowSettings(false)}
          />
        )}

        {/* Chapter List Panel */}
        {showChapterList && (
          <ChapterList
            novel={novel}
            currentChapter={currentChapter}
            onChapterSelect={handleChapterSelect}
            onClose={() => setShowChapterList(false)}
          />
        )}
      </div>

      {/* Floating Navigation */}
      <FloatingNavigation
        currentChapter={currentChapter}
        totalChapters={novel.totalChapters}
        onPrevious={handlePreviousChapter}
        onNext={handleNextChapter}
        onScrollToTop={handleScrollToTop}
      />
    </div>
  );
};

export default ReadingPage;
