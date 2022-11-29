import { Chord } from "@tonaljs/tonal";
import useSound from "use-sound";
import { notes } from "./useChordTones";

export const useSoundChord = () => {
  const [playC3] = useSound("/sounds/C3.wav");
  const [playC4] = useSound("/sounds/C4.wav");
  const [playCSharp3] = useSound("sounds/CSharp3.wav");
  const [playCSharp4] = useSound("sounds/CSharp4.wav");
  const [playD3] = useSound("sounds/D3.wav");
  const [playD4] = useSound("sounds/D4.wav");
  const [playDSharp3] = useSound("sounds/DSharp3.wav");
  const [playDSharp4] = useSound("sounds/DSharp4.wav");
  const [playE3] = useSound("sounds/E3.wav");
  const [playE4] = useSound("sounds/E4.wav");
  const [playF3] = useSound("sounds/F3.wav");
  const [playF4] = useSound("sounds/F4.wav");
  const [playFSharp3] = useSound("sounds/FSharp3.wav");
  const [playFSharp4] = useSound("sounds/FSharp4.wav");
  const [playG3] = useSound("sounds/G3.wav");
  const [playG4] = useSound("sounds/G4.wav");
  const [playGSharp3] = useSound("sounds/GSharp3.wav");
  const [playGSharp4] = useSound("sounds/GSharp4.wav");
  const [playA3] = useSound("sounds/A3.wav");
  const [playA4] = useSound("sounds/A4.wav");
  const [playASharp3] = useSound("sounds/ASharp3.wav");
  const [playASharp4] = useSound("sounds/ASharp4.wav");
  const [playB3] = useSound("sounds/B3.wav");
  const [playB4] = useSound("sounds/B4.wav");

  const noteSounds = [
    playC3,
    playCSharp3,
    playD3,
    playDSharp3,
    playE3,
    playF3,
    playFSharp3,
    playG3,
    playGSharp3,
    playA3,
    playASharp3,
    playB3,
    playC4,
    playCSharp4,
    playD4,
    playDSharp4,
    playE4,
    playF4,
    playFSharp4,
    playG4,
    playGSharp4,
    playA4,
    playASharp4,
    playB4,
  ];

  const createChordToneFlagsForCard = (chord: string): string[] => {
    let isDiscover = false;
    let flags: string[] = [];
    notes.forEach((note, index) => {
      if (note.includes(Chord.get(chord).tonic!)) {
        if (!isDiscover) {
          flags = Array.from(
            "0".repeat(index) + Chord.get(chord).chroma + "0".repeat(12 - index)
          );
          isDiscover = true;
        }
      }
    });
    return flags;
  };

  const soundChord = (chord: string) => {
    const chordToneFlagsForCard: any = createChordToneFlagsForCard(chord);
    chordToneFlagsForCard.forEach((flag: string, index: number) => {
      if (flag === "1") {
        noteSounds[index]();
      }
    });
  };

  return { soundChord };
};
