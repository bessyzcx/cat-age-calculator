# Vercel 免费部署指南

## 🎯 Vercel 优势
- **完全免费**：个人项目免费托管
- **自动部署**：连接GitHub后自动更新
- **全球CDN**：访问速度极快
- **SSL证书**：自动HTTPS
- **自定义域名**：支持多个域名
- **预览部署**：每次提交都有预览链接
- **分析工具**：内置网站分析

## 📋 部署步骤

### 方法一：通过Vercel网站部署（推荐）

#### 1. 准备GitHub仓库
```bash
# 在项目目录中执行
git init
git add .
git commit -m "Initial commit: Cat Age Calculator"
git branch -M main
git remote add origin https://github.com/你的用户名/cat-age-calculator.git
git push -u origin main
```

#### 2. 注册Vercel账户
1. 访问 [Vercel](https://vercel.com)
2. 点击 "Sign Up"
3. 选择 "Continue with GitHub"
4. 授权Vercel访问GitHub

#### 3. 导入项目
1. 在Vercel控制台点击 "New Project"
2. 选择你的GitHub仓库：`cat-age-calculator`
3. 保持默认设置：
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: 留空
   - **Output Directory**: 留空
4. 点击 "Deploy"

#### 4. 等待部署完成
- 部署时间：通常1-2分钟
- 获得域名：`https://cat-age-calculator-xxx.vercel.app`

### 方法二：通过Vercel CLI部署

#### 1. 安装Vercel CLI
```bash
# 使用npm安装
npm install -g vercel

# 或使用yarn安装
yarn global add vercel
```

#### 2. 登录Vercel
```bash
vercel login
```

#### 3. 部署项目
```bash
# 在项目目录中执行
vercel

# 按提示操作：
# - 选择账户
# - 选择项目名称
# - 确认部署设置
```

#### 4. 生产环境部署
```bash
vercel --prod
```

## 🔧 自定义域名配置

### 1. 在Vercel中添加域名
1. 进入项目设置
2. 点击 "Domains"
3. 添加你的自定义域名
4. 按照提示配置DNS记录

### 2. DNS配置示例
```
类型: CNAME
名称: @ 或 www
值: cname.vercel-dns.com
```

## 📊 性能优化

### 1. 自动优化功能
- **图片优化**：自动压缩和格式转换
- **代码分割**：自动优化加载
- **缓存策略**：智能缓存配置
- **预渲染**：静态页面预生成

### 2. 自定义配置
创建 `vercel.json` 文件：
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

## 🔄 持续部署

### 1. 自动部署
- 每次推送到GitHub，Vercel自动重新部署
- 支持预览部署（每个分支都有独立链接）
- 支持回滚到之前的版本

### 2. 部署钩子
```bash
# 手动触发部署
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_xxx
```

## 📈 监控和分析

### 1. Vercel Analytics
- 页面访问统计
- 性能监控
- 用户行为分析
- 实时数据

### 2. 性能指标
- **Core Web Vitals**：LCP、FID、CLS
- **加载时间**：首屏加载、完全加载
- **错误率**：4xx、5xx错误统计

## 💰 成本分析

### 免费计划限制
- **带宽**：100GB/月
- **构建时间**：6000分钟/月
- **函数执行**：100GB-Hours/月
- **团队协作**：最多3人

### 升级计划
- **Pro计划**：$20/月
- **Enterprise计划**：联系销售

## 🚀 高级功能

### 1. 环境变量
```bash
# 设置环境变量
vercel env add VARIABLE_NAME

# 在代码中使用
console.log(process.env.VARIABLE_NAME);
```

### 2. 函数部署
```javascript
// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World!' });
}
```

### 3. 边缘函数
```javascript
// api/edge.js
export default function handler(req) {
  return new Response('Hello from Edge!');
}

export const config = {
  runtime: 'edge'
};
```

## 🔍 故障排除

### 常见问题

#### 1. 部署失败
- 检查构建日志
- 确认文件路径正确
- 验证依赖配置

#### 2. 域名解析问题
- 检查DNS配置
- 等待DNS传播（最多48小时）
- 联系域名提供商

#### 3. 性能问题
- 优化图片大小
- 减少JavaScript文件
- 启用压缩

## 📱 移动端优化

### 1. 响应式设计
- 确保所有元素适配移动端
- 测试不同屏幕尺寸
- 优化触摸交互

### 2. PWA支持
```json
// public/manifest.json
{
  "name": "Cat Age Calculator",
  "short_name": "CatAge",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#007bff"
}
```

## 🎯 SEO优化

### 1. 元标签优化
- 确保所有meta标签正确
- 添加Open Graph标签
- 配置Twitter Cards

### 2. 结构化数据
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Cat Age Calculator",
  "description": "Calculate your cat's age in human years"
}
</script>
```

## 📞 技术支持

### 1. 官方资源
- [Vercel文档](https://vercel.com/docs)
- [Vercel社区](https://github.com/vercel/vercel/discussions)
- [Vercel支持](https://vercel.com/support)

### 2. 常见解决方案
- 查看部署日志
- 检查GitHub集成
- 验证域名配置

---

**提示**：Vercel是目前最流行的静态网站托管平台之一，特别适合像猫咪年龄计算器这样的工具网站。免费计划完全够用，而且性能优秀。 