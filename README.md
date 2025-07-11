# 猫咪年龄计算器 (Cat Age Calculator)

一个简单易用的猫咪年龄计算器网页，帮助宠物主人了解猫咪的真实年龄。

## 🌟 功能特点

### 核心功能
- **出生日期计算**：输入猫咪的出生日期，自动计算猫咪年龄和对应的人类年龄
- **年龄直接计算**：直接输入猫咪年龄，快速获得对应的人类年龄
- **多语言支持**：支持英语和西班牙语两种语言
- **响应式设计**：完美适配桌面端和移动端设备

### 年龄计算规则
猫咪年龄转换为人类年龄的计算公式：
- 1岁猫咪 = 15岁人类
- 2岁猫咪 = 24岁人类
- 3岁猫咪 = 28岁人类
- 之后每增加1岁，人类年龄增加4岁

## 🚀 使用方法

### 通过出生日期计算
1. 选择"出生日期"模式
2. 输入猫咪的出生日期
3. 点击"计算年龄"按钮
4. 查看结果：猫咪年龄和对应人类年龄

### 直接输入年龄计算
1. 选择"直接输入"模式
2. 输入猫咪的年龄（年）
3. 点击"计算年龄"按钮
4. 查看对应的人类年龄

### 语言切换
- 点击页面右上角的语言切换按钮
- 支持英语 (EN) 和西班牙语 (ES)

## 📁 项目结构

```
cat-age/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── calculator.js   # 年龄计算逻辑
│   ├── language.js     # 多语言支持
│   └── main.js         # 主要功能
├── assets/
│   └── images/         # 图片资源
└── README.md           # 项目说明
```

## 🛠️ 技术栈

- **前端**：HTML5 + CSS3 + Vanilla JavaScript
- **多语言**：JavaScript实现的语言切换系统
- **SEO优化**：语义化HTML + Meta标签优化
- **响应式**：CSS Grid + Flexbox布局




## 🌐 部署

这是一个静态网页项目，可以部署到任何静态托管服务：

- GitHub Pages
- Netlify
- Vercel
- 阿里云OSS
- 腾讯云COS

## 📱 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 本地开发

1. 克隆项目
```bash
git clone [repository-url]
cd cat-age
```

2. 使用本地服务器运行
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .

# 使用PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

## 📊 性能优化

- 图片压缩和懒加载
- CSS和JavaScript文件压缩
- 浏览器缓存优化
- CDN加速

## 🔮 未来计划

- [ ] 添加更多语言支持（中文、法语、德语等）
- [ ] 支持不同猫咪品种的年龄计算差异
- [ ] 添加猫咪健康建议功能
- [ ] 实现社交分享功能
- [ ] 添加用户反馈系统
- [ ] 移动端APP开发



---

**注意**：这个计算器提供的是估算结果，实际猫咪的年龄和健康状况应该咨询专业兽医。 
