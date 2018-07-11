var gulp = require('gulp'); // Сам Gulp
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var csso = require('gulp-csso');
var babel = require('gulp-babel');
var uglifyJs = require('gulp-uglifyjs');
// Ещё расширения для gulp
/**
 * gulp-imagemin : Минификация изображений
 * gulp-concat : Склейка группы файлов в 1 файл
 * gulp-htmlmin : Минификация HTML
 * gulp-rename : Переименование выбранных файлов
 * gulp-csso : Минификация CSS
 * del : Для Node.js модуль удаления
 * gulp-babel : Модуль преобразования JS ES6 в ES5
 * gulp-if : Фильтрует файлы по условию
 * gulp-useref : Модуль анализирует HTML код и выхватывает подключенные файлы
 */

// Конфигурация
var config = {
    app:'./app',
    dest:'./dest'
};

/**
 * Gulp - 4 метода
 * 1) task - Объявляет новую задачу
 * 2) src - Выбор файлов для преобразования
 * 3) dest - Размещение итоговых файлов в директории
 * 4) watch - Метод отслеживания изменений
 */

gulp.task('test',function () {
    console.log('Gulp Работает!');
});

gulp.task('img', [], function () {
    gulp.src(config.app+ '/images/*.{png,gif,jpg}')
        .pipe(gulp.dest(config.dest + '/images'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass',function () {
    gulp.src(config.app+ '/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('csso',function () {
    gulp.src(config.dest+ '/css/**/*.css')
        .pipe(csso())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', [], function () {
    gulp.src(config.app+ '/js/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglifyJs())
        .pipe(gulp.dest(config.dest + '/js'))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('packagejs', [], function () {
    gulp.src(config.app+ '/js/jquery-3.1.0.js')
        .pipe(gulp.dest(config.dest + '/js'))
        .pipe(browserSync.reload({stream:true}));
});
/**
 * Работа с HTML
 */

gulp.task('html',function () {
    gulp.src(config.app+ '/**/*.html')
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('fonts',function () {
    gulp.src(config.app+ '/fonts/*.{ttf,otf}')
        .pipe(gulp.dest(config.dest + '/fonts'))
        .pipe(browserSync.reload({stream:true}));
});

/**
 * Отслеживание изменений
 */
gulp.task('watch',function () {
    gulp.watch(config.app + '/sass/**/*.sass',['sass']);
    gulp.watch(config.app + '/**/*.html',['html']);
    gulp.watch(config.app + '/**/*.js',['js']);
    gulp.watch(config.app + '/fonts/*.{ttf,otf}',['fonts']);
    gulp.watch(config.app + '/images/*.{png,gif,jpg}',['img']);
});

gulp.task('server',function () {
    browserSync({
        server:{
            baseDir:config.dest,
            index : "index.html"
        }
    });
});

// Задача по умолчанию
gulp.task('default',['test', 'img', 'sass', 'csso', 'js', 'packagejs', 'html', 'fonts', 'watch', 'server'],function () {
    console.log('Выполнено!');
});