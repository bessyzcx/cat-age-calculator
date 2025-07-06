/**
 * Main Application Logic
 * 主要应用逻辑
 */

class CatAgeCalculatorApp {
    constructor() {
        this.calculator = null;
        this.languageManager = null;
        this.currentMode = 'birthdate';
        
        this.init();
    }

    /**
     * Initialize the application
     * 初始化应用
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApp());
        } else {
            this.setupApp();
        }
    }

    /**
     * Setup the application
     * 设置应用
     */
    setupApp() {
        // Initialize calculator
        this.calculator = new CatAgeCalculator();
        
        // Initialize language manager
        this.languageManager = new LanguageManager();
        
        // Set calculator language
        this.calculator.setLanguage(this.languageManager.getCurrentLanguage());
        
        // Make calculator globally available
        window.catAgeCalculator = this.calculator;
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Set default date to today for birthdate input
        this.setDefaultDate();
        
        // Auto-detect language
        this.languageManager.autoDetectLanguage();
        
        console.log('Cat Age Calculator initialized successfully');
    }

    /**
     * Setup all event listeners
     * 设置所有事件监听器
     */
    setupEventListeners() {
        // Mode switching
        this.setupModeSwitching();
        
        // Form submissions
        this.setupFormSubmissions();
        
        // Input validation
        this.setupInputValidation();
        
        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
    }

    /**
     * Setup mode switching functionality
     * 设置模式切换功能
     */
    setupModeSwitching() {
        const modeButtons = document.querySelectorAll('.mode-btn');
        const forms = document.querySelectorAll('.calc-form');
        
        modeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const mode = e.target.getAttribute('data-mode');
                this.switchMode(mode);
            });
        });
    }

    /**
     * Switch between calculation modes
     * 切换计算模式
     * @param {string} mode - Mode to switch to (birthdate/age)
     */
    switchMode(mode) {
        if (mode === this.currentMode) return;
        
        this.currentMode = mode;
        
        // Update mode buttons
        const modeButtons = document.querySelectorAll('.mode-btn');
        modeButtons.forEach(button => {
            if (button.getAttribute('data-mode') === mode) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Update forms
        const forms = document.querySelectorAll('.calc-form');
        forms.forEach(form => {
            if (form.id === `${mode}-form`) {
                form.classList.add('active');
            } else {
                form.classList.remove('active');
            }
        });
        
        // Clear results
        this.clearResults();
        
        // Focus on the appropriate input
        setTimeout(() => {
            if (mode === 'birthdate') {
                document.getElementById('birthdate').focus();
            } else {
                document.getElementById('cat-age').focus();
            }
        }, 100);
    }

    /**
     * Setup form submission handlers
     * 设置表单提交处理器
     */
    setupFormSubmissions() {
        // Birth date form
        const birthdateForm = document.getElementById('birthdate-form');
        const birthdateBtn = birthdateForm.querySelector('.calculate-btn');
        birthdateBtn.addEventListener('click', () => this.calculateFromBirthDate());
        
        // Age form
        const ageForm = document.getElementById('age-form');
        const ageBtn = ageForm.querySelector('.calculate-btn');
        ageBtn.addEventListener('click', () => this.calculateFromAge());
        
        // Enter key support
        const birthdateInput = document.getElementById('birthdate');
        const ageInput = document.getElementById('cat-age');
        
        birthdateInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.calculateFromBirthDate();
            }
        });
        
        ageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.calculateFromAge();
            }
        });
    }

    /**
     * Setup input validation
     * 设置输入验证
     */
    setupInputValidation() {
        const birthdateInput = document.getElementById('birthdate');
        const ageInput = document.getElementById('cat-age');
        
        // Birth date validation
        birthdateInput.addEventListener('change', () => {
            this.validateBirthDate();
        });
        
        // Age input validation
        ageInput.addEventListener('input', () => {
            this.validateAgeInput();
        });
    }

    /**
     * Setup keyboard shortcuts
     * 设置键盘快捷键
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + 1: Switch to birth date mode
            if ((e.ctrlKey || e.metaKey) && e.key === '1') {
                e.preventDefault();
                this.switchMode('birthdate');
            }
            
            // Ctrl/Cmd + 2: Switch to age mode
            if ((e.ctrlKey || e.metaKey) && e.key === '2') {
                e.preventDefault();
                this.switchMode('age');
            }
            
            // Ctrl/Cmd + Enter: Calculate
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                if (this.currentMode === 'birthdate') {
                    this.calculateFromBirthDate();
                } else {
                    this.calculateFromAge();
                }
            }
        });
    }

    /**
     * Calculate age from birth date
     * 从出生日期计算年龄
     */
    calculateFromBirthDate() {
        const birthdateInput = document.getElementById('birthdate');
        const birthDate = birthdateInput.value;
        
        if (!birthDate) {
            this.showError('Please enter a birth date');
            return;
        }
        
        if (!this.calculator.validateBirthDate(birthDate)) {
            this.showError('Please enter a valid birth date (not in the future and not more than 30 years ago)');
            return;
        }
        
        try {
            const result = this.calculator.calculateFromBirthDate(birthDate);
            this.displayResults(result);
        } catch (error) {
            console.error('Calculation error:', error);
            this.showError('An error occurred during calculation. Please try again.');
        }
    }

    /**
     * Calculate age from current age
     * 从当前年龄计算
     */
    calculateFromAge() {
        const ageInput = document.getElementById('cat-age');
        const catAge = parseFloat(ageInput.value);
        
        if (!ageInput.value) {
            this.showError('Please enter your cat\'s age');
            return;
        }
        
        if (!this.calculator.validateCatAge(catAge)) {
            this.showError('Please enter a valid age (between 0 and 30 years)');
            return;
        }
        
        try {
            const result = this.calculator.calculateFromCatAge(catAge);
            this.displayResults(result);
        } catch (error) {
            console.error('Calculation error:', error);
            this.showError('An error occurred during calculation. Please try again.');
        }
    }

    /**
     * Display calculation results
     * 显示计算结果
     * @param {object} result - Calculation result
     */
    displayResults(result) {
        const resultsSection = document.getElementById('results');
        const catAgeResult = document.getElementById('cat-age-result');
        const humanAgeResult = document.getElementById('human-age-result');
        const ageInfo = document.getElementById('age-info');
        
        // Update age displays
        catAgeResult.textContent = this.calculator.formatAge(result.catAge, result.unit);
        humanAgeResult.textContent = Math.floor(result.humanAge);
        
        // Update age info
        ageInfo.innerHTML = this.calculator.getAgeInfoText(result);
        
        // Show results
        resultsSection.style.display = 'block';
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Track analytics
        this.trackCalculation(result);
    }

    /**
     * Clear results
     * 清除结果
     */
    clearResults() {
        const resultsSection = document.getElementById('results');
        resultsSection.style.display = 'none';
    }

    /**
     * Show error message
     * 显示错误信息
     * @param {string} message - Error message
     */
    showError(message) {
        // Create error notification
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc3545;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            max-width: 300px;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    /**
     * Validate birth date input
     * 验证出生日期输入
     */
    validateBirthDate() {
        const birthdateInput = document.getElementById('birthdate');
        const birthDate = birthdateInput.value;
        
        if (birthDate && !this.calculator.validateBirthDate(birthDate)) {
            birthdateInput.style.borderColor = '#dc3545';
        } else {
            birthdateInput.style.borderColor = '#e9ecef';
        }
    }

    /**
     * Validate age input
     * 验证年龄输入
     */
    validateAgeInput() {
        const ageInput = document.getElementById('cat-age');
        const age = parseFloat(ageInput.value);
        
        if (ageInput.value && !this.calculator.validateCatAge(age)) {
            ageInput.style.borderColor = '#dc3545';
        } else {
            ageInput.style.borderColor = '#e9ecef';
        }
    }

    /**
     * Set default date for birthdate input
     * 为出生日期输入设置默认日期
     */
    setDefaultDate() {
        const birthdateInput = document.getElementById('birthdate');
        const today = new Date();
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        birthdateInput.value = oneYearAgo.toISOString().split('T')[0];
    }

    /**
     * Track calculation for analytics
     * 跟踪计算用于分析
     * @param {object} result - Calculation result
     */
    trackCalculation(result) {
        // Google Analytics tracking (if available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'calculate_age', {
                'event_category': 'calculator',
                'event_label': this.currentMode,
                'value': Math.floor(result.humanAge)
            });
        }
        
        // Console log for debugging
        console.log('Calculation tracked:', {
            mode: this.currentMode,
            catAge: result.catAge,
            humanAge: result.humanAge,
            lifeStage: result.lifeStage
        });
    }

    /**
     * Get current mode
     * 获取当前模式
     * @returns {string} - Current mode
     */
    getCurrentMode() {
        return this.currentMode;
    }

    /**
     * Get calculator instance
     * 获取计算器实例
     * @returns {CatAgeCalculator} - Calculator instance
     */
    getCalculator() {
        return this.calculator;
    }

    /**
     * Get language manager instance
     * 获取语言管理器实例
     * @returns {LanguageManager} - Language manager instance
     */
    getLanguageManager() {
        return this.languageManager;
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the application when the script loads
const app = new CatAgeCalculatorApp();

// Make app globally available
window.catAgeCalculatorApp = app;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CatAgeCalculatorApp;
} 