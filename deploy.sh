#!/bin/bash

# 猫咪年龄计算器一键部署脚本
# 使用方法：./deploy.sh

echo "🐱 猫咪年龄计算器部署脚本"
echo "================================"

# 检查Git是否安装
if ! command -v git &> /dev/null; then
    echo "❌ Git未安装，请先安装Git"
    exit 1
fi

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 请在项目根目录运行此脚本"
    exit 1
fi

echo "📋 部署选项："
echo "1. Vercel (推荐，免费，性能优秀)"
echo "2. GitHub Pages (免费)"
echo "3. Netlify (免费，功能更多)"
echo "4. 本地测试"
echo ""

read -p "请选择部署方式 (1-4): " choice

case $choice in
    1)
        echo "🚀 开始部署到 Vercel..."
        
        # 检查是否已初始化Git
        if [ ! -d ".git" ]; then
            echo "📁 初始化Git仓库..."
            git init
        fi
        
        # 添加所有文件
        echo "📝 添加文件到Git..."
        git add .
        
        # 提交更改
        echo "💾 提交更改..."
        git commit -m "Initial commit: Cat Age Calculator"
        
        # 设置主分支
        git branch -M main
        
        echo ""
        echo "📋 下一步操作："
        echo "1. 在GitHub上创建新仓库：cat-age-calculator"
        echo "2. 运行以下命令："
        echo "   git remote add origin https://github.com/你的用户名/cat-age-calculator.git"
        echo "   git push -u origin main"
        echo "3. 访问 https://vercel.com"
        echo "4. 使用GitHub账户登录"
        echo "5. 点击 'New Project'"
        echo "6. 选择你的GitHub仓库"
        echo "7. 保持默认设置，点击 'Deploy'"
        echo ""
        echo "🌐 网站地址将是：https://cat-age-calculator-xxx.vercel.app"
        ;;
        
    2)
        echo "🚀 开始部署到 GitHub Pages..."
        
        # 检查是否已初始化Git
        if [ ! -d ".git" ]; then
            echo "📁 初始化Git仓库..."
            git init
        fi
        
        # 添加所有文件
        echo "📝 添加文件到Git..."
        git add .
        
        # 提交更改
        echo "💾 提交更改..."
        git commit -m "Initial commit: Cat Age Calculator"
        
        # 设置主分支
        git branch -M main
        
        echo ""
        echo "📋 下一步操作："
        echo "1. 在GitHub上创建新仓库：cat-age-calculator"
        echo "2. 运行以下命令："
        echo "   git remote add origin https://github.com/你的用户名/cat-age-calculator.git"
        echo "   git push -u origin main"
        echo "3. 在仓库设置中启用GitHub Pages"
        echo ""
        echo "🌐 网站地址将是：https://你的用户名.github.io/cat-age-calculator"
        ;;
        
    2)
        echo "🚀 开始部署到 Netlify..."
        
        # 检查是否已初始化Git
        if [ ! -d ".git" ]; then
            echo "📁 初始化Git仓库..."
            git init
        fi
        
        # 添加所有文件
        echo "📝 添加文件到Git..."
        git add .
        
        # 提交更改
        echo "💾 提交更改..."
        git commit -m "Initial commit: Cat Age Calculator"
        
        # 设置主分支
        git branch -M main
        
        echo ""
        echo "📋 下一步操作："
        echo "1. 访问 https://netlify.com"
        echo "2. 使用GitHub账户登录"
        echo "3. 点击 'New site from Git'"
        echo "4. 选择你的GitHub仓库"
        echo "5. 保持默认设置，点击 'Deploy site'"
        echo ""
        echo "🌐 网站地址将是：https://random-name.netlify.app"
        ;;
        
    3)
        echo "🚀 开始部署到 Netlify..."
        
        # 检查是否已初始化Git
        if [ ! -d ".git" ]; then
            echo "📁 初始化Git仓库..."
            git init
        fi
        
        # 添加所有文件
        echo "📝 添加文件到Git..."
        git add .
        
        # 提交更改
        echo "💾 提交更改..."
        git commit -m "Initial commit: Cat Age Calculator"
        
        # 设置主分支
        git branch -M main
        
        echo ""
        echo "📋 下一步操作："
        echo "1. 访问 https://netlify.com"
        echo "2. 使用GitHub账户登录"
        echo "3. 点击 'New site from Git'"
        echo "4. 选择你的GitHub仓库"
        echo "5. 保持默认设置，点击 'Deploy site'"
        echo ""
        echo "🌐 网站地址将是：https://random-name.netlify.app"
        ;;
        
    4)
        echo "🚀 启动本地测试服务器..."
        
        # 检查Python是否安装
        if command -v python3 &> /dev/null; then
            echo "🐍 使用Python3启动服务器..."
            echo "🌐 访问地址：http://localhost:8000"
            echo "按 Ctrl+C 停止服务器"
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            echo "🐍 使用Python启动服务器..."
            echo "🌐 访问地址：http://localhost:8000"
            echo "按 Ctrl+C 停止服务器"
            python -m http.server 8000
        else
            echo "❌ 未找到Python，请安装Python或使用其他方式启动服务器"
            echo "💡 也可以直接双击index.html文件在浏览器中打开"
        fi
        ;;
        
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac

echo ""
echo "✅ 部署脚本执行完成！"
echo ""
echo "📚 更多信息请查看："
echo "- DEPLOYMENT_VERCEL.md (Vercel部署)"
echo "- DEPLOYMENT_GITHUB.md (GitHub Pages部署)"
echo "- DEPLOYMENT_NETLIFY.md (Netlify部署)"
echo "- OPERATION_STRATEGY.md (运营策略)"
echo "- COST_ANALYSIS.md (成本分析)"
echo ""
echo "�� 记得配置AdSense来开始盈利！" 