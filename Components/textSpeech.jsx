import React, { useState } from 'react';
import { useEffect } from 'react';
import './textSpeech.css';

const TexttoSpeech = () => {
    const [text, setText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [supportedLanguages, setSupportedLanguages] = useState([
        { name: 'English', code: 'en-US' },
        { name: 'French', code: 'fr-FR' },
        { name: 'Spanish', code: 'es-ES' }
    ]);

    // useEffect (() => {
    //     const updateVoices = () => {
    //         const voices = window.speechSynthesis.getVoices();
    //         const availableLanguageCodes = voices.map(voice => voice.lang);
    
    //         supportedLanguages.forEach(language => {
    //             if (!availableLanguageCodes.includes(language.code)) {
    //                console.warn(`${language.name} (${language.code}) is not supported by the Speech API.`);
    //             }
    //         });
    //     };
    
    //     // Listen for voiceschanged event
    //     window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
    
    //     // Fetch initial voices
    //     updateVoices();
    
    //     // Cleanup event listener
    //     return () => {
    //         window.speechSynthesis.removeEventListener('voiceschanged', updateVoices);
    //     };
    // }, []);



    // Function to handle speech synthesis
    const speakText = () => {
       
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = selectedLanguage; 
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Speech Synthesis is not supported by this browser');
        }
         console.log(`Selected Language :`, selectedLanguage);
    };


    // Function to handle language selection
    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    return (
        <main className='main-container'> 
            <textarea
            className='text-area'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to convert to speech"
                rows={4}
                cols={50}
            />

            {/* Language selection dropdown */}
            <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">Select a language</option>

                {/* Render supported languages as options */}
                
                {supportedLanguages.map((language, index) => (
                    <option key={index} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
            <button onClick={speakText}>Speak</button>
        </main>
    );
};

export default TexttoSpeech;