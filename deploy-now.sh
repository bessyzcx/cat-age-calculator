#!/bin/bash

echo "🚀 猫咪年龄计算器 - 快速部署脚本"
echo "=================================="
echo ""

# 检查Git状态
echo "📋 检查Git状态..."
if [ -d ".git" ]; then
    echo "✅ Git仓库已初始化"
    git status
else
    echo "❌ 未找到Git仓库，请先初始化Git"
    echo "运行以下命令："
    echo "git init"
    echo "git add ."
    echo "git commit -m 'Initial commit'"
    exit 1
fi

echo ""
echo "🌐 部署选项："
echo "1. Netlify (推荐 - 最快)"
echo "2. Vercel"
echo "3. GitHub Pages"
echo "4. 本地测试"
echo ""

read -p "请选择部署方式 (1-4): " choice

case $choice in
    1)
        echo "🚀 部署到 Netlify"
        echo "请按照以下步骤操作："
        echo "1. 访问 https://netlify.com"
        echo "2. 注册免费账户"
        echo "3. 点击 'New site from Git'"
        echo "4. 连接你的GitHub仓库"
        echo "5. 选择 cat-age 仓库"
        echo "6. 点击 'Deploy site'"
        echo ""
        echo "部署完成后，请更新以下文件中的域名："
        echo "- index.html 中的 og:url"
        echo "- sitemap.xml 中的域名"
        echo "- robots.txt 中的域名"
        ;;
    2)
        echo "🚀 部署到 Vercel"
        echo "请按照以下步骤操作："
        echo "1. 访问 https://vercel.com"
        echo "2. 注册免费账户"
        echo "3. 导入GitHub项目"
        echo "4. 自动部署"
        ;;
    3)
        echo "🚀 部署到 GitHub Pages"
        echo "请按照以下步骤操作："
        echo "1. 在GitHub仓库设置中启用Pages"
        echo "2. 选择main分支"
        echo "3. 获得域名：https://yourusername.github.io/cat-age"
        ;;
    4)
        echo "🚀 本地测试"
        echo "启动本地服务器..."
        python3 -m http.server 8000
        echo "✅ 网站运行在 http://localhost:8000"
        ;;
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac

echo ""
echo "📈 部署后立即行动清单："
echo "1. ✅ 申请Google AdSense"
echo "2. ✅ 添加Google Analytics"
echo "3. ✅ 提交到搜索引擎"
echo "4. ✅ 开始SEO优化"
echo "5. ✅ 开始推广营销"
echo ""
echo "🎯 记住：今天就要开始赚钱！" 