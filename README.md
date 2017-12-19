# A-Sample
前端项目框架和结构，本文件包含目录命名原则、资源目录结构、文件注释规则。

## 目录命名原则

- 简洁。有习惯性缩写的单词 必须(MUST) 采用容易理解的缩写。如：源代码目录使用src，不使用source。下面是更多例子：
	- img: 图片。 不允许(MUST NOT) 使用image、images、imgs等。
	- js: javascript脚本。 不允许(MUST NOT) 使用script、scripts等。
	- css: 样式表。 不允许(MUST NOT) 使用style、styles等。
	- swf: flash。 不允许(MUST NOT) 使用flash等。
	- src: 源文件目录。 不允许(MUST NOT) 使用source等。
	- dep: 引入的第三方依赖包目录。 不允许(MUST NOT) 使用lib、library、dependency等。
- 不允许(MUST NOT) 使用复数形式。如：imgs、docs是不被允许的。

## asset  资源目录结构

### js
	js目录可用于存放js资源文件（包含可编译成js的coffeescript等语言）。
	
	js目录内 必须(MUST) 存放js资源文件，但js资源文件不一定（MAY NOT）存放于js目录下：
	1. 对于src目录，js资源文件 不允许(MUST NOT) 存放于js目录下。
	2. 对于asset目录，js资源文件 可以(SHOULD) 存放于js目录下，视构建行为决定。
	3. 对于其他一级目录内，js资源文件 可以(SHOULD) 不存放于js目录下。
		
### css
	css目录可用于存放css资源文件（包含less，sass等动态样式表语言）。

	css目录内 必须(MUST) 存放css资源文件，但css资源文件不一定（MAY NOT）存放于css目录下：
	1. 对于src目录，css资源文件 可以(SHOULD) 存放于业务目录下，也 可以(SHOULD) 存放于css目录下。
	2. 对于asset目录，css资源文件 可以(SHOULD) 存放于css目录下，视构建行为决定。
	3. 对于其他一级目录内，css资源文件 可以(SHOULD) 不存放于css目录下。
		
### img
	img目录可用于存放图片资源文件。包括页面直接引用的图片与css引用图片。常见的图片资源有gif/jpg/png/svg/bmp等。
		
	对于css引用的图片， 必须(MUST) 放在./img目录下，.代表当前css资源所在的目录。
		
	对于页面直接引用的图片：
	1. 被多页面引用的图片 应该(SHOULD) 放在${root}/src/common/img目录下。
	2. 单一页面引用的图片 应该(SHOULD) 放在./img目录下，.代表当前页面所在的目录。
		
### tpl
	tpl目录可用于存放template资源文件。template资源文件后缀名 可以(SHOULD) 为.html或.tpl。
		
	通常，对于RIA系统，template资源文件采用.html后缀使其能够被xhr加载。
		
### font
	font目录可用于存放字体资源文件。常见的字体资源有tff/woff/svg等。
		
### swf
	swf目录可用于存放flash资源文件。flash资源文件 不允许(MUST NOT) 置于img目录中
		
## 文件头注释
- html
```
<!--
	author: author
	date: 2016-04-15
	description: this is description
-->
```

- js、css
```
/*
 * author：author
 * date：2016-04-15
 * description：this is description
 */
 ```
