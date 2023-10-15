---
layout: doc
---

# 墙内部署开发环境

> 又是被墙反复揉捏的一天！

## Debain 11

```sh
sudo apt update
sudo apt upgrade
sudo apt install build-essential procps curl file git
```

安装 https://github.com/zhengbangbo/dotfiles


## CentOS

```sh
sudo yum groupinstall "Development Tools"
```

## Python 开发环境

对于阿里云的服务器，默认都已将 `.pip/pip.conf` 配置成阿里云镜像。

```toml
[global]
index-url = https://mirrors.aliyun.com/pypi/simple

[install]
trusted-host = mirrors.aliyun.com
```

安装合适版本的 Python，我一般使用 pyenv。但在墙内不好安装，可以使用 gitee 镜像。

```sh
git clone https://gitee.com/chenshuchuan/pyenv.git ~/.pyenv
```
> 看看这个仓库的更新时间，如果不是最新的可以换 https://search.gitee.com/?skin=rec&type=repository&q=pyenv

配置一下环境变量，让 pyenv 这个命令可以使用

```sh
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc

source ~/.bashrc
```

安装合适版本的 python，以 3.9.18 为例。

```sh
v=3.9.18
mkdir ~/.pyenv/cache  # 我的环境需要先创建文件夹，不然会报错
curl -L https://npmmirror.com/mirrors/python/$v/Python-$v.tar.xz -o ~/.pyenv/cache/Python-$v.tar.xz
pyenv install $v
```
> 很多陈旧的教程中 https://npm.taobao.org 这个域名没有更新为 https://npmmirror.com

我有些项目使用 poetry 管理依赖，所以先安装 pipx 再安装 poetry

```sh
pip install --user pipx
pipx ensurepath

pipx install poetry
```

poetry 也需要设置镜像，有一个有效的配置方式是在项目的 `pyproject.toml` 中加上如下配置

```toml
[[tool.poetry.source]]
name = "aliyun"
url = "http://mirrors.aliyun.com/pypi/simple"
default = true
```
