/*
 * author：yangxin
 * date：2016-04-15
 * description：this is description
 */

//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');
    

//css扩展语言sass
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

//sass生成css并且自动处理浏览器兼容前缀
gulp.task('css', function () {
		//sass生成css
	gulp.src(['src/css/demo.css','src/css/iconfont.css','src/css/main.css','src/css/nprogress.css'])
		.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        
        //自动处理浏览器兼容前缀
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(sourcemaps.write())
        .pipe(concat('common.css'))//合并后的文件名
        .pipe(gulp.dest('src/css'))
        //css文件压缩
        .pipe(cleancss({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('asset/css'))
        .pipe(connect.reload());
});

//css文件合并
gulp.task('concatcss', function () {
    gulp.src(['src/css/index.css','src/css/index2.css'])
        .pipe(concat('common.css'))//合并后的文件名
        .pipe(gulp.dest('src/css'));
});

//js文件合并
gulp.task('concatjs', function () {
    gulp.src(['src/js/jquery.testPLugin.js','src/js/nprogress.js'])
        .pipe(concat('common.js'))//合并后的文件名
        .pipe(gulp.dest('src/js'));
});

//css文件压缩
gulp.task('cssmin', function () {
    gulp.src('src/css/common.css')
        .pipe(cleancss({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('asset/css'))
        .pipe(connect.reload());
});

//js文件压缩
gulp.task('jsmin', function () {
    gulp.src(['src/js/common.js']) //多个文件以数组形式传入
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('asset/js'))
        .pipe(connect.reload());
});

//img文件压缩
gulp.task('imgmin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('asset/img'))
        .pipe(connect.reload());
});

//创建服务器
gulp.task('server', function() {
	connect.server({
	    root: '',
	    port: 8000,
	    livereload: true
	});
});

//刷新html
gulp.task('html', function () {
  	gulp.src('./tpl/*.html')
    	.pipe(connect.reload());
});

//看守文档
gulp.task('watch', function() {

	// 看守所有.scss档,生成css并且自动处理浏览器兼容前缀
	gulp.watch('src/sass/*.scss', ['css']);
	
	// 看守所有.js档
	gulp.watch('src/js/*.js', ['jsmin']);
	
	// 看守所有图片档
	gulp.watch('src/img/*', ['imgmin']);
	
	// 看守所有html
	gulp.watch(['./tpl/*.html'], ['html']);
});

//定义默认任务
gulp.task('default',['server', 'watch']);

//合并css，js
gulp.task('concat',['concatjs', 'concatcss']);

//压缩css，img，js
gulp.task('min',['cssmin', 'jsmin', 'imgmin']);
