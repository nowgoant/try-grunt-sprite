'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app/sprites',
    dist: 'app/sprites'
  };

  grunt.initConfig({
    config: config,
    // 自动雪碧图
    // sprite: {
    //   allslice: {
    //     files: [{
    //       //启用动态扩展
    //       expand: true,
    //       // css文件源的文件夹
    //       cwd: '<%= config.app %>/styles/',
    //       // 匹配规则
    //       src: ['*.css'],
    //       //导出css和sprite的路径地址
    //       dest: 'tmp/',
    //       // 导出的css名
    //       ext: '.sprite.css'
    //     }],
    //     options: {
    //       // 默认使用GM图像处理引擎
    //       'engine': 'gm',
    //       // 默认使用二叉树最优排列算法
    //       'algorithm': 'binary-tree',
    //       // 给雪碧图追加时间戳，默认不追加
    //       'imagestamp': false,
    //       // 给样式文件追加时间戳，默认不追加
    //       'cssstamp': true,
    //       // 是否以时间戳为文件名生成新的雪碧图文件，默认不生成新文件
    //       'newsprite': true
    //     }
    //   }
    // },
    sprite: {
      // options: {
      //   // cwd: '<%= config.app %>/images/sprites/'
      // },
      // options: {
      //   algorithm: 'top-down'
      // },

      home: {
        src: '<%= config.app %>/home/*.png',
        dest: '<%= config.dist %>/home-ssh.png',
        destCss: '<%= config.dist %>/home-ssh.css',
        algorithm: 'binary-tree',
        //每个拼接图之间的间隔
        padding: 50
          //重写css 的class名称
          // cssVarMap: function(sprite) {
          //   sprite.name = 'sprite_' + sprite.name;
          //   // console.log(sprite.name);
          // }
      },
      home2: {
        src: '<%= config.app %>/home2/*.png',
        dest: '<%= config.dist %>/home2-ssh.png',
        destCss: '<%= config.dist %>/home2-ssh.css'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*.css',
            '<%= config.dist %>/*.png',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    }
  });

  grunt.registerTask('imgsprite', [
    'clean',
    'sprite'
  ]);
};
