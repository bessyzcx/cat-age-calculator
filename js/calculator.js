/**
 * Cat Age Calculator - Core calculation logic
 * 猫咪年龄计算器 - 核心计算逻辑
 */

class CatAgeCalculator {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                kitten: 'Kitten',
                young: 'Young Adult',
                adult: 'Adult',
                senior: 'Senior',
                geriatric: 'Geriatric',
                kittenInfo: 'Your cat is still a kitten! This is the time for vaccinations, socialization, and establishing good habits.',
                youngInfo: 'Your cat is in the prime of youth. Regular check-ups and good nutrition are important.',
                adultInfo: 'Your cat is a mature adult. Monitor for any health changes and maintain regular veterinary care.',
                seniorInfo: 'Your cat is entering senior years. More frequent check-ups and age-appropriate care are recommended.',
                geriatricInfo: 'Your cat is in geriatric age. Special care, frequent monitoring, and gentle handling are important.',
                ageDescription: 'Your cat is approximately {humanAge} years old in human terms.',
                lifeStage: 'Life Stage: {stage}'
            },
            es: {
                kitten: 'Gatito',
                young: 'Adulto Joven',
                adult: 'Adulto',
                senior: 'Senior',
                geriatric: 'Geriátrico',
                kittenInfo: '¡Tu gato aún es un gatito! Es el momento para vacunas, socialización y establecer buenos hábitos.',
                youngInfo: 'Tu gato está en la flor de la juventud. Los chequeos regulares y una buena nutrición son importantes.',
                adultInfo: 'Tu gato es un adulto maduro. Monitorea cualquier cambio de salud y mantén el cuidado veterinario regular.',
                seniorInfo: 'Tu gato está entrando en años senior. Se recomiendan chequeos más frecuentes y cuidados apropiados para la edad.',
                geriatricInfo: 'Tu gato está en edad geriátrica. Se requieren cuidados especiales, monitoreo frecuente y manejo gentil.',
                ageDescription: 'Tu gato tiene aproximadamente {humanAge} años en términos humanos.',
                lifeStage: 'Etapa de Vida: {stage}'
            }
        };
    }

    /**
     * Calculate cat age from birth date
     * 从出生日期计算猫咪年龄
     * @param {string} birthDate - Birth date in YYYY-MM-DD format
     * @returns {object} - Object containing cat age and human age
     */
    calculateFromBirthDate(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date();
        
        // Calculate difference in years
        let years = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        // Adjust for months
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            years--;
        }
        
        // Calculate months for more precise age
        let months = monthDiff;
        if (months < 0) {
            months += 12;
        }
        
        // If less than 1 year, calculate in months
        if (years === 0) {
            const catAgeMonths = months;
            const humanAgeMonths = this.convertCatMonthsToHuman(catAgeMonths);
            return {
                catAge: catAgeMonths,
                humanAge: humanAgeMonths,
                unit: 'months',
                lifeStage: this.getLifeStage(catAgeMonths / 12)
            };
        }
        
        const humanAge = this.convertCatYearsToHuman(years);
        return {
            catAge: years,
            humanAge: humanAge,
            unit: 'years',
            lifeStage: this.getLifeStage(years)
        };
    }

    /**
     * Calculate human age from cat age
     * 从猫咪年龄计算人类年龄
     * @param {number} catAge - Cat age in years
     * @returns {object} - Object containing human age
     */
    calculateFromCatAge(catAge) {
        const humanAge = this.convertCatYearsToHuman(catAge);
        return {
            catAge: catAge,
            humanAge: humanAge,
            unit: 'years',
            lifeStage: this.getLifeStage(catAge)
        };
    }

    /**
     * Convert cat years to human years
     * 将猫咪年龄转换为人类年龄
     * @param {number} catYears - Cat age in years
     * @returns {number} - Human age
     */
    convertCatYearsToHuman(catYears) {
        if (catYears <= 0) return 0;
        if (catYears === 1) return 15;
        if (catYears === 2) return 24;
        if (catYears === 3) return 28;
        
        // For cats 4 years and older: 28 + (catYears - 3) * 4
        return 28 + (catYears - 3) * 4;
    }

    /**
     * Convert cat months to human months (for kittens)
     * 将猫咪月龄转换为人类月龄（适用于幼猫）
     * @param {number} catMonths - Cat age in months
     * @returns {number} - Human age in months
     */
    convertCatMonthsToHuman(catMonths) {
        if (catMonths <= 0) return 0;
        if (catMonths <= 6) return catMonths * 2.5; // First 6 months
        if (catMonths <= 12) return 15 + (catMonths - 6) * 1.5; // 6-12 months
        return 24; // 1 year
    }

    /**
     * Get life stage based on cat age
     * 根据猫咪年龄获取生命阶段
     * @param {number} catAge - Cat age in years
     * @returns {string} - Life stage
     */
    getLifeStage(catAge) {
        if (catAge < 1) return this.translations[this.currentLanguage].kitten;
        if (catAge < 3) return this.translations[this.currentLanguage].young;
        if (catAge < 7) return this.translations[this.currentLanguage].adult;
        if (catAge < 11) return this.translations[this.currentLanguage].senior;
        return this.translations[this.currentLanguage].geriatric;
    }

    /**
     * Get life stage information
     * 获取生命阶段信息
     * @param {string} lifeStage - Life stage
     * @returns {string} - Life stage information
     */
    getLifeStageInfo(lifeStage) {
        const stageKey = Object.keys(this.translations.en).find(key => 
            this.translations.en[key] === lifeStage || this.translations.es[key] === lifeStage
        );
        
        if (stageKey && stageKey.endsWith('Info')) {
            return this.translations[this.currentLanguage][stageKey];
        }
        return '';
    }

    /**
     * Format age display
     * 格式化年龄显示
     * @param {number} age - Age value
     * @param {string} unit - Unit (years or months)
     * @returns {string} - Formatted age string
     */
    formatAge(age, unit) {
        if (unit === 'months') {
            return `${Math.floor(age)} ${age === 1 ? 'month' : 'months'}`;
        }
        return `${Math.floor(age)} ${age === 1 ? 'year' : 'years'}`;
    }

    /**
     * Set current language
     * 设置当前语言
     * @param {string} language - Language code (en/es)
     */
    setLanguage(language) {
        this.currentLanguage = language;
    }

    /**
     * Get age information text
     * 获取年龄信息文本
     * @param {object} result - Calculation result
     * @returns {string} - Formatted information text
     */
    getAgeInfoText(result) {
        const t = this.translations[this.currentLanguage];
        const ageDesc = t.ageDescription.replace('{humanAge}', Math.floor(result.humanAge));
        const stageDesc = t.lifeStage.replace('{stage}', result.lifeStage);
        const stageInfo = this.getLifeStageInfo(result.lifeStage);
        
        return `
            <h4>${stageDesc}</h4>
            <p>${ageDesc}</p>
            <p>${stageInfo}</p>
        `;
    }

    /**
     * Validate birth date
     * 验证出生日期
     * @param {string} birthDate - Birth date string
     * @returns {boolean} - Is valid
     */
    validateBirthDate(birthDate) {
        const date = new Date(birthDate);
        const today = new Date();
        
        // Check if it's a valid date
        if (isNaN(date.getTime())) {
            return false;
        }
        
        // Check if it's not in the future
        if (date > today) {
            return false;
        }
        
        // Check if it's not too far in the past (more than 30 years)
        const thirtyYearsAgo = new Date();
        thirtyYearsAgo.setFullYear(today.getFullYear() - 30);
        
        return date >= thirtyYearsAgo;
    }

    /**
     * Validate cat age input
     * 验证猫咪年龄输入
     * @param {number} age - Cat age
     * @returns {boolean} - Is valid
     */
    validateCatAge(age) {
        return age >= 0 && age <= 30 && !isNaN(age);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CatAgeCalculator;
} 