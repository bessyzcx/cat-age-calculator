/**
 * Language Management System
 * 多语言管理系统
 */

class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                // Header
                'Cat Age Calculator': 'Cat Age Calculator',
                'Calculadora de Edad de Gatos': 'Cat Age Calculator',
                
                // Hero Section
                'Calculate Your Cat\'s Age in Human Years': 'Calculate Your Cat\'s Age in Human Years',
                'Calcula la Edad de tu Gato en Años Humanos': 'Calculate Your Cat\'s Age in Human Years',
                'Find out how old your cat is in human years with our free calculator': 'Find out how old your cat is in human years with our free calculator',
                'Descubre qué edad tiene tu gato en años humanos con nuestra calculadora gratuita': 'Find out how old your cat is in human years with our free calculator',
                
                // Calculator Section
                'Birth Date': 'Birth Date',
                'Fecha de Nacimiento': 'Birth Date',
                'Current Age': 'Current Age',
                'Edad Actual': 'Current Age',
                'When was your cat born?': 'When was your cat born?',
                '¿Cuándo nació tu gato?': 'When was your cat born?',
                'How old is your cat? (in years)': 'How old is your cat? (in years)',
                '¿Qué edad tiene tu gato? (en años)': 'How old is your cat? (in years)',
                'Calculate Age': 'Calculate Age',
                'Calcular Edad': 'Calculate Age',
                'Calculate Human Age': 'Calculate Human Age',
                'Calcular Edad Humana': 'Calculate Human Age',
                'Enter age': 'Enter age',
                
                // Results Section
                'Your Cat\'s Age': 'Your Cat\'s Age',
                'La Edad de tu Gato': 'Your Cat\'s Age',
                'cat years': 'cat years',
                'años de gato': 'cat years',
                'human years': 'human years',
                'años humanos': 'human years',
                
                // Information Section
                'How Cat Age Conversion Works': 'How Cat Age Conversion Works',
                'Cómo Funciona la Conversión de Edad de Gatos': 'How Cat Age Conversion Works',
                'Age Conversion Formula': 'Age Conversion Formula',
                'Fórmula de Conversión de Edad': 'Age Conversion Formula',
                '1 cat year = 15 human years': '1 cat year = 15 human years',
                '1 año de gato = 15 años humanos': '1 cat year = 15 human years',
                '2 cat years = 24 human years': '2 cat years = 24 human years',
                '2 años de gato = 24 años humanos': '2 cat years = 24 human years',
                '3 cat years = 28 human years': '3 cat years = 28 human years',
                '3 años de gato = 28 años humanos': '3 cat years = 28 human years',
                'Each additional year = +4 human years': 'Each additional year = +4 human years',
                'Cada año adicional = +4 años humanos': 'Each additional year = +4 human years',
                'Why This Matters': 'Why This Matters',
                'Por Qué Esto Importa': 'Why This Matters',
                'Understanding your cat\'s age in human years helps you provide appropriate care, nutrition, and veterinary attention for their life stage.': 'Understanding your cat\'s age in human years helps you provide appropriate care, nutrition, and veterinary attention for their life stage.',
                'Entender la edad de tu gato en años humanos te ayuda a proporcionar el cuidado, nutrición y atención veterinaria apropiados para su etapa de vida.': 'Understanding your cat\'s age in human years helps you provide appropriate care, nutrition, and veterinary attention for their life stage.',
                
                // Footer
                '© 2024 Cat Age Calculator. All rights reserved.': '© 2024 Cat Age Calculator. All rights reserved.',
                '© 2024 Calculadora de Edad de Gatos. Todos los derechos reservados.': '© 2024 Cat Age Calculator. All rights reserved.',
                'Privacy Policy': 'Privacy Policy',
                'Política de Privacidad': 'Privacy Policy',
                'Terms of Service': 'Terms of Service',
                'Términos de Servicio': 'Terms of Service',
                'Contact': 'Contact',
                'Contacto': 'Contact'
            },
            es: {
                // Header
                'Cat Age Calculator': 'Calculadora de Edad de Gatos',
                'Calculadora de Edad de Gatos': 'Calculadora de Edad de Gatos',
                
                // Hero Section
                'Calculate Your Cat\'s Age in Human Years': 'Calcula la Edad de tu Gato en Años Humanos',
                'Calcula la Edad de tu Gato en Años Humanos': 'Calcula la Edad de tu Gato en Años Humanos',
                'Find out how old your cat is in human years with our free calculator': 'Descubre qué edad tiene tu gato en años humanos con nuestra calculadora gratuita',
                'Descubre qué edad tiene tu gato en años humanos con nuestra calculadora gratuita': 'Descubre qué edad tiene tu gato en años humanos con nuestra calculadora gratuita',
                
                // Calculator Section
                'Birth Date': 'Fecha de Nacimiento',
                'Fecha de Nacimiento': 'Fecha de Nacimiento',
                'Current Age': 'Edad Actual',
                'Edad Actual': 'Edad Actual',
                'When was your cat born?': '¿Cuándo nació tu gato?',
                '¿Cuándo nació tu gato?': '¿Cuándo nació tu gato?',
                'How old is your cat? (in years)': '¿Qué edad tiene tu gato? (en años)',
                '¿Qué edad tiene tu gato? (en años)': '¿Qué edad tiene tu gato? (en años)',
                'Calculate Age': 'Calcular Edad',
                'Calcular Edad': 'Calcular Edad',
                'Calculate Human Age': 'Calcular Edad Humana',
                'Calcular Edad Humana': 'Calcular Edad Humana',
                'Enter age': 'Ingresa la edad',
                
                // Results Section
                'Your Cat\'s Age': 'La Edad de tu Gato',
                'La Edad de tu Gato': 'La Edad de tu Gato',
                'cat years': 'años de gato',
                'años de gato': 'años de gato',
                'human years': 'años humanos',
                'años humanos': 'años humanos',
                
                // Information Section
                'How Cat Age Conversion Works': 'Cómo Funciona la Conversión de Edad de Gatos',
                'Cómo Funciona la Conversión de Edad de Gatos': 'Cómo Funciona la Conversión de Edad de Gatos',
                'Age Conversion Formula': 'Fórmula de Conversión de Edad',
                'Fórmula de Conversión de Edad': 'Fórmula de Conversión de Edad',
                '1 cat year = 15 human years': '1 año de gato = 15 años humanos',
                '1 año de gato = 15 años humanos': '1 año de gato = 15 años humanos',
                '2 cat years = 24 human years': '2 años de gato = 24 años humanos',
                '2 años de gato = 24 años humanos': '2 años de gato = 24 años humanos',
                '3 cat years = 28 human years': '3 años de gato = 28 años humanos',
                '3 años de gato = 28 años humanos': '3 años de gato = 28 años humanos',
                'Each additional year = +4 human years': 'Cada año adicional = +4 años humanos',
                'Cada año adicional = +4 años humanos': 'Cada año adicional = +4 años humanos',
                'Why This Matters': 'Por Qué Esto Importa',
                'Por Qué Esto Importa': 'Por Qué Esto Importa',
                'Understanding your cat\'s age in human years helps you provide appropriate care, nutrition, and veterinary attention for their life stage.': 'Entender la edad de tu gato en años humanos te ayuda a proporcionar el cuidado, nutrición y atención veterinaria apropiados para su etapa de vida.',
                'Entender la edad de tu gato en años humanos te ayuda a proporcionar el cuidado, nutrición y atención veterinaria apropiados para su etapa de vida.': 'Entender la edad de tu gato en años humanos te ayuda a proporcionar el cuidado, nutrición y atención veterinaria apropiados para su etapa de vida.',
                
                // Footer
                '© 2024 Cat Age Calculator. All rights reserved.': '© 2024 Calculadora de Edad de Gatos. Todos los derechos reservados.',
                '© 2024 Calculadora de Edad de Gatos. Todos los derechos reservados.': '© 2024 Calculadora de Edad de Gatos. Todos los derechos reservados.',
                'Privacy Policy': 'Política de Privacidad',
                'Política de Privacidad': 'Política de Privacidad',
                'Terms of Service': 'Términos de Servicio',
                'Términos de Servicio': 'Términos de Servicio',
                'Contact': 'Contacto',
                'Contacto': 'Contacto'
            }
        };
        
        this.init();
    }

    /**
     * Initialize language manager
     * 初始化语言管理器
     */
    init() {
        // Set initial language from localStorage or default to English
        const savedLanguage = localStorage.getItem('catAgeCalculatorLanguage');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
            this.currentLanguage = savedLanguage;
        }
        
        // Update language buttons
        this.updateLanguageButtons();
        
        // Apply current language
        this.applyLanguage();
        
        // Add event listeners
        this.addEventListeners();
    }

    /**
     * Add event listeners for language switching
     * 添加语言切换事件监听器
     */
    addEventListeners() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const language = e.target.getAttribute('data-lang');
                this.switchLanguage(language);
            });
        });
    }

    /**
     * Switch language
     * 切换语言
     * @param {string} language - Language code (en/es)
     */
    switchLanguage(language) {
        if (language === this.currentLanguage) return;
        
        this.currentLanguage = language;
        localStorage.setItem('catAgeCalculatorLanguage', language);
        
        // Update language buttons
        this.updateLanguageButtons();
        
        // Apply new language
        this.applyLanguage();
        
        // Update calculator language if it exists
        if (window.catAgeCalculator) {
            window.catAgeCalculator.setLanguage(language);
        }
    }

    /**
     * Update language buttons appearance
     * 更新语言按钮外观
     */
    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            if (lang === this.currentLanguage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    /**
     * Apply current language to all translatable elements
     * 将当前语言应用到所有可翻译元素
     */
    applyLanguage() {
        const elements = document.querySelectorAll('[data-en], [data-es]');
        elements.forEach(element => {
            const currentText = element.getAttribute(`data-${this.currentLanguage}`);
            if (currentText) {
                // Handle different element types
                if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                    element.placeholder = currentText;
                } else {
                    element.textContent = currentText;
                }
            }
        });
        
        // Update document language attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update page title
        this.updatePageTitle();
    }

    /**
     * Update page title based on current language
     * 根据当前语言更新页面标题
     */
    updatePageTitle() {
        const titles = {
            en: 'Cat Age Calculator - Calculate Your Cat\'s Human Age | Free Online Tool',
            es: 'Calculadora de Edad de Gatos - Calcula la Edad Humana de tu Gato | Herramienta Gratuita'
        };
        
        if (titles[this.currentLanguage]) {
            document.title = titles[this.currentLanguage];
        }
    }

    /**
     * Get translation for a key
     * 获取翻译文本
     * @param {string} key - Translation key
     * @returns {string} - Translated text
     */
    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    /**
     * Get current language
     * 获取当前语言
     * @returns {string} - Current language code
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Detect user's preferred language from browser
     * 从浏览器检测用户首选语言
     * @returns {string} - Detected language code
     */
    detectUserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Check if we support this language
        if (langCode === 'es') {
            return 'es';
        }
        
        // Default to English for unsupported languages
        return 'en';
    }

    /**
     * Auto-detect and set user's preferred language
     * 自动检测并设置用户首选语言
     */
    autoDetectLanguage() {
        // Only auto-detect if no language is saved
        if (!localStorage.getItem('catAgeCalculatorLanguage')) {
            const detectedLang = this.detectUserLanguage();
            this.switchLanguage(detectedLang);
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
} 