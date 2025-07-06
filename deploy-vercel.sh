#!/bin/bash

# Vercel 快速部署脚本
# 使用方法：./deploy-vercel.sh

echo "🚀 Vercel 快速部署脚本"
echo "========================"

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 请在项目根目录运行此脚本"
    exit 1
fi

# 检查Git是否安装
if ! command -v git &> /dev/null; then
    echo "❌ Git未安装，请先安装Git"
    exit 1
fi

echo "📋 部署步骤："
echo "1. 初始化Git仓库"
echo "2. 提交代码到GitHub"
echo "3. 部署到Vercel"
echo ""

# 步骤1：初始化Git仓库
echo "📁 步骤1：初始化Git仓库..."
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git仓库已初始化"
else
    echo "✅ Git仓库已存在"
fi

# 步骤2：添加和提交文件
echo ""
echo "📝 步骤2：添加和提交文件..."
git add .
git commit -m "Initial commit: Cat Age Calculator"
echo "✅ 文件已提交"

# 步骤3：设置主分支
echo ""
echo "🌿 设置主分支..."
git branch -M main
echo "✅ 主分支已设置"

echo ""
echo "🎯 下一步操作："
echo ""
echo "1️⃣ 在GitHub上创建新仓库："
echo "   - 访问 https://github.com"
echo "   - 点击 'New repository'"
echo "   - 仓库名：cat-age-calculator"
echo "   - 设为公开仓库"
echo "   - 不要初始化README"
echo ""
echo "2️⃣ 连接远程仓库："
echo "   git remote add origin https://github.com/你的用户名/cat-age-calculator.git"
echo "   git push -u origin main"
echo ""
echo "3️⃣ 部署到Vercel："
echo "   - 访问 https://vercel.com"
echo "   - 使用GitHub账户登录"
echo "   - 点击 'New Project'"
echo "   - 选择你的GitHub仓库"
echo "   - 保持默认设置"
echo "   - 点击 'Deploy'"
echo ""
echo "🌐 部署完成后，你将获得类似这样的地址："
echo "   https://cat-age-calculator-xxx.vercel.app"
echo ""
echo "💡 提示："
echo "- 部署通常需要1-2分钟"
echo "- 每次推送代码到GitHub，Vercel会自动重新部署"
echo "- 可以在Vercel控制台查看部署状态"
echo ""
echo "📚 详细说明请查看：DEPLOYMENT_VERCEL.md"
echo ""
echo "💰 部署完成后记得配置AdSense开始盈利！" 