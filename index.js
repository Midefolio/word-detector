function detectWords(text, badwords) {
    if (!Array.isArray(badwords) || badwords?.length === 0) {
        return "Please provide a list of bad words";
    }
    if(!text){return "Please provide refrence string"}
    
    const words = text.split(/\s+/);
    const detectedWords = words.filter(word => badwords.includes(word.toLowerCase()));
    
    if (detectedWords.length > 0) {
        return {detected:true, words:detectedWords};
    }
    
    return {detected:true, words:null};
}


module.exports = detectWords