import React from "react";
import { Input } from "@chakra-ui/react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const VoiceInput = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleInput = (e) => {
    resetTranscript(); // Reset transcript when user manually types in input box
  };

  const handleVoiceSearch = () => {
    if (SpeechRecognition.browserSupportsSpeechRecognition()) {
      SpeechRecognition.startListening();
    } else {
      console.error("Browser does not support speech recognition.");
    }
  };

  return (
    <Input
      placeholder="Type or speak here"
      onChange={handleInput}
      value={transcript}
      onFocus={handleVoiceSearch}
      aria-label="Voice search input"
    />
  );
};

export default VoiceInput;
