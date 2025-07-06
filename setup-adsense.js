/**
 * AdSense 快速配置脚本
 * 使用方法：在浏览器控制台中运行此脚本
 */

class AdSenseSetup {
    constructor() {
        this.publisherId = '';
        this.adSlots = {
            top: '',
            calc: '',
            info: ''
        };
    }

    /**
     * 设置发布商ID
     * @param {string} publisherId - AdSense发布商ID
     */
    setPublisherId(publisherId) {
        this.publisherId = publisherId;
        console.log('发布商ID已设置:', publisherId);
    }

    /**
     * 设置广告位ID
     * @param {string} slot - 广告位类型 (top/calc/info)
     * @param {string} slotId - 广告位ID
     */
    setAdSlot(slot, slotId) {
        if (this.adSlots.hasOwnProperty(slot)) {
            this.adSlots[slot] = slotId;
            console.log(`${slot} 广告位ID已设置:`, slotId);
        } else {
            console.error('无效的广告位类型:', slot);
        }
    }

    /**
     * 应用AdSense配置到页面
     */
    applyConfiguration() {
        if (!this.publisherId) {
            console.error('请先设置发布商ID');
            return;
        }

        // 更新head中的AdSense脚本
        this.updateAdSenseScript();
        
        // 更新所有广告位
        this.updateAdSlots();
        
        console.log('AdSense配置已应用完成！');
        console.log('请刷新页面查看效果');
    }

    /**
     * 更新AdSense脚本
     */
    updateAdSenseScript() {
        const script = document.querySelector('script[src*="googlesyndication"]');
        if (script) {
            script.src = script.src.replace(/client=ca-pub-[^&]+/, `client=${this.publisherId}`);
            console.log('AdSense脚本已更新');
        }
    }

    /**
     * 更新广告位
     */
    updateAdSlots() {
        const adUnits = document.querySelectorAll('ins.adsbygoogle');
        
        adUnits.forEach((unit, index) => {
            // 更新发布商ID
            unit.setAttribute('data-ad-client', this.publisherId);
            
            // 根据位置更新广告位ID
            const container = unit.closest('.ad-container');
            if (container) {
                const section = container.closest('.ads-section');
                if (section.classList.contains('ads-top')) {
                    unit.setAttribute('data-ad-slot', this.adSlots.top);
                } else if (section.previousElementSibling && 
                          section.previousElementSibling.classList.contains('calculator')) {
                    unit.setAttribute('data-ad-slot', this.adSlots.calc);
                } else if (section.previousElementSibling && 
                          section.previousElementSibling.classList.contains('info-section')) {
                    unit.setAttribute('data-ad-slot', this.adSlots.info);
                }
            }
        });
        
        console.log('广告位已更新');
    }

    /**
     * 验证配置
     */
    validateConfiguration() {
        const errors = [];
        
        if (!this.publisherId) {
            errors.push('发布商ID未设置');
        }
        
        if (!this.adSlots.top) {
            errors.push('顶部广告位ID未设置');
        }
        
        if (!this.adSlots.calc) {
            errors.push('计算器广告位ID未设置');
        }
        
        if (!this.adSlots.info) {
            errors.push('信息区域广告位ID未设置');
        }
        
        if (errors.length > 0) {
            console.error('配置验证失败:', errors);
            return false;
        }
        
        console.log('配置验证通过！');
        return true;
    }

    /**
     * 显示配置状态
     */
    showStatus() {
        console.log('=== AdSense 配置状态 ===');
        console.log('发布商ID:', this.publisherId || '未设置');
        console.log('顶部广告位:', this.adSlots.top || '未设置');
        console.log('计算器广告位:', this.adSlots.calc || '未设置');
        console.log('信息区域广告位:', this.adSlots.info || '未设置');
        console.log('========================');
    }
}

// 创建全局实例
window.adsenseSetup = new AdSenseSetup();

// 使用示例：
console.log(`
=== AdSense 快速配置指南 ===

1. 设置发布商ID：
   adsenseSetup.setPublisherId('ca-pub-1234567890123456');

2. 设置广告位ID：
   adsenseSetup.setAdSlot('top', '1234567890');
   adsenseSetup.setAdSlot('calc', '0987654321');
   adsenseSetup.setAdSlot('info', '1122334455');

3. 验证配置：
   adsenseSetup.validateConfiguration();

4. 应用配置：
   adsenseSetup.applyConfiguration();

5. 查看状态：
   adsenseSetup.showStatus();

注意：请将示例中的ID替换为你的实际AdSense ID
`); 