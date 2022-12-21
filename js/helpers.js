/* helpers.js */
import translations from "./translations.js";

/**
 * @param {string} language
 */
export const getTranslation = language => {
	// your code
    const result = translations?.welcome[language]
    return result
}