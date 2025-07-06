# GitHub Pages 免费部署指南

## 🎯 优势
- **完全免费**：无任何费用
- **自动部署**：代码推送后自动更新
- **SSL证书**：自动提供HTTPS
- **全球CDN**：访问速度快
- **自定义域名**：支持绑定自己的域名

## 📋 部署步骤

### 1. 创建GitHub仓库
```bash
# 在GitHub上创建新仓库
# 仓库名：cat-age-calculator
# 设为公开仓库
```

### 2. 上传代码到GitHub
```bash
# 在项目目录中执行
git init
git add .
git commit -m "Initial commit: Cat Age Calculator"
git branch -M main
git remote add origin https://github.com/你的用户名/cat-age-calculator.git
git push -u origin main
```

### 3. 启用GitHub Pages
1. 进入仓库设置 (Settings)
2. 找到 "Pages" 选项
3. Source选择 "Deploy from a branch"
4. Branch选择 "main"
5. Folder选择 "/ (root)"
6. 点击 "Save"

### 4. 访问网站
- 默认地址：`https://你的用户名.github.io/cat-age-calculator`
- 等待几分钟后生效

### 5. 自定义域名（可选）
1. 购买域名（推荐：阿里云、腾讯云）
2. 在GitHub Pages设置中添加自定义域名
3. 在域名提供商处设置DNS记录

## 🔧 持续更新
```bash
# 每次修改后推送更新
git add .
git commit -m "Update: 描述修改内容"
git push
```

## 💰 成本分析
- **GitHub Pages**：免费
- **域名**：约60-100元/年（可选）
- **总计**：0-100元/年 