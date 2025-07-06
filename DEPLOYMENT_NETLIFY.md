# Netlify 免费部署指南

## 🎯 优势
- **免费计划**：每月100GB带宽，足够小型网站
- **自动部署**：连接GitHub后自动更新
- **全球CDN**：访问速度极快
- **SSL证书**：自动HTTPS
- **自定义域名**：支持多个域名
- **表单处理**：免费表单提交

## 📋 部署步骤

### 1. 注册Netlify账户
1. 访问 [Netlify](https://netlify.com)
2. 使用GitHub账户登录
3. 完成注册

### 2. 连接GitHub仓库
1. 点击 "New site from Git"
2. 选择 "GitHub"
3. 授权Netlify访问GitHub
4. 选择你的仓库

### 3. 配置部署设置
- **Build command**：留空（静态网站）
- **Publish directory**：留空（根目录）
- **Branch to deploy**：main

### 4. 部署网站
1. 点击 "Deploy site"
2. 等待部署完成
3. 获得默认域名：`https://random-name.netlify.app`

### 5. 自定义域名
1. 在站点设置中添加自定义域名
2. 在域名提供商处设置DNS记录
3. 等待DNS生效

## 🔧 持续更新
- 每次推送代码到GitHub，Netlify自动重新部署
- 可在Netlify控制台查看部署状态

## 💰 成本分析
- **Netlify免费计划**：免费
- **域名**：约60-100元/年（可选）
- **总计**：0-100元/年

## 📊 免费计划限制
- 每月100GB带宽
- 每月300分钟构建时间
- 最多100个站点
- 对于小型网站完全够用 