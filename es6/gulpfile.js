/**
 * 初始化
 * npm install gulp-util gulp-imagemin gulp-sass gulp-minify-css gulp-uglify gulp-rename gulp-concat gulp-clean gulp-ruby-sass tiny-lr gulp-livereload gulp-html-extend  browser-sync --save-dev
 npm install gulp-util gulp-imagemin gulp-sass gulp-minify-css gulp-uglify gulp-rename gulp-concat gulp-clean gulp-babel babel-preset-es2015 --save-dev
 */

// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    sourcemaps = require("gulp-sourcemaps"),   //js处理
  	 babel = require("gulp-babel"),              //es6转es5
//  babel = require("babel-preset-es2015"),              //es6转es5
    concat = require("gulp-concat"),            //js处理
    sass = require('gulp-sass'),          		//sass
    minifycss = require('gulp-minify-css'),    //css压缩
    //jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    //tinylr = require('tiny-lr'),               //livereload
	extender = require('gulp-html-extend'),    //html引入模版
	//babel = require("gulp-babel"),               //引入babel
	htmlbeautify = require('gulp-html-beautify'); //格式化html
	
	//browserSync = require('browser-sync').create();//引入自动刷新browser-sync
	//server = tinylr(),
	// port = 35729,
    //livereload = require('gulp-livereload');   //livereload

	
	/* gulp.task("es5", function () {
	  return gulp.src("src/js/app.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(gulp.dest("dist/js"));
	}); */
	// 静态服务器
	/* gulp.task('browser-sync', function() {
		browserSync.init({
			server: {
				baseDir: "./dist/"
			}
		});
	}); */
// HTML处理
gulp.task('html', function() {
    var htmlSrc = './src/*.html',
        htmlDst = './dist/';
	var options ={indentSize: 2};

    gulp.src(htmlSrc)
		.pipe(extender({annotations:true,verbose:false})) // default options 
		.pipe(htmlbeautify({indentSize: 2}))
        .pipe(gulp.dest(htmlDst));
});

// 样式css处理
gulp.task('css', function () {
    var cssSrc = './src/css/*.css',
        cssDst = './dist/css';

    gulp.src(cssSrc)
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst));
});
// 样式scss处理

gulp.task('scss', function () {
    var scssSrc = './src/scss/*.scss',
        scssDst = './dist/css';

    gulp.src(scssSrc)
        .pipe(sass({ style: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest(scssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(scssDst));
});

// 图片处理
gulp.task('images', function(){
    var imgSrc = './src/images/**/*',
        imgDst = './dist/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
})

// js处理

gulp.task('js', function () {
    var mainSrc = './src/js/main.js',
        mainDst = './dist/js/',
        appSrc = './src/js/*.js',
        appDst = './dist/js/';

    /* gulp.src(mainSrc)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(gulp.dest(mainDst))
        .pipe(livereload(server)); */
       
// gulp.src(appSrc)
//  .pipe(sourcemaps.init())
//  .pipe(babel())
//  .pipe(concat("all.js"))
//  .pipe(sourcemaps.write("."))
//  .pipe(gulp.dest(appDst));

     gulp.src(appSrc)
        .pipe(gulp.dest(appDst))
        .pipe(babel())
//      .pipe(uglify())
//		.pipe(rename({ suffix: '.min' }))
        //.pipe(concat("vendor.js"))
        .pipe(gulp.dest(appDst)); 
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js','./dist/img','./dist/*html'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','css','images');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){
   /*  server.listen(port, function(err){
        if (err) {
            return console.log(err);
        } */

        // 监听html
        gulp.watch('./src/*.html',function(event){
			var htmlSrc = event.path,//获取绝对路径
				htmlDst = htmlSrc.replace(/src/,"dist");//获取绝对路径替换路径
				htmlDst = htmlDst.replace(/\\([^\\]+?)$/,'\\');//去除文件名只取路径
				console.log(htmlSrc);
			 gulp.src(htmlSrc)
				.pipe(extender({annotations:true,verbose:false})) // default options 
				.pipe(htmlbeautify({indentSize: 2}))
				.pipe(gulp.dest(htmlDst));
		});
		/* function(event){
            gulp.run('html');
        } */

        // 监听css
        //gulp.watch('./src/scss/*.scss',['css']);
		gulp.watch('./src/css/*.css',function(event){
			var cssSrc = event.path,//获取绝对路径
				cssDst = cssSrc.replace(/src/,"dist");//替换路径
				cssDst = cssDst.replace(/\\([^\\]+?)$/,'\\');//去除文件名只取路径
				console.log(cssSrc);
			gulp.src(cssSrc)
				.pipe(gulp.dest(cssDst))
				.pipe(rename({ suffix: '.min' }))
				.pipe(minifycss())
				.pipe(gulp.dest(cssDst));
		});
		// 监听scss
        //gulp.watch('./src/scss/*.scss',['css']);
		gulp.watch('./src/scss/*.scss',function(event){
			var scssSrc = event.path,//获取绝对路径
				scssDst = scssSrc.replace(/src/,"dist").replace(/scss/,"css");//获取绝对路径替换路径
				scssDst = scssDst.replace(/\\([^\\]+?)$/,'\\');//去除文件名只取路径
				console.log(scssSrc);
			gulp.src(scssSrc)
				.pipe(sass({ style: 'expanded'}).on('error', sass.logError))
				.pipe(gulp.dest(scssDst))
				.pipe(rename({ suffix: '.min' }))
				.pipe(minifycss())
				.pipe(gulp.dest(scssDst));
		});
		//监听JS
		gulp.watch('./src/js/*.js',function(event){
			var jsSrc = event.path,//获取绝对路径
				jsDst = jsSrc.replace(/src/,"dist").replace(/js/,"js");//获取绝对路径替换路径
				jsDst = jsDst.replace(/\\([^\\]+?)$/,'\\');//去除文件名只取路径
				console.log(jsSrc);
				console.log(jsDst);
			gulp.src(jsSrc)
//				.pipe(gulp.dest(jsDst))
				.pipe(babel())
       			.pipe(gulp.dest(jsDst)); 
				 
		});
		

        // 监听images
        gulp.watch('./src/images/**/*',['images']);

        // 监听js
     //   gulp.watch(['./src/js/main.js','./src/js/vendor/*.js'],['js']);

    //});
});
  