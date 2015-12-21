"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),

    csscomb: {
      style: {
        expand: true,
        src: ["less/**/*.less"]
      }
    },

    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "css/*.css"
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    cmq: {
      style: {
        files: {
        "css/style.css": ["css/style.css"]
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        report: "gzip"
        },
      style: {
        files: {
        "build/css/style.min.css": ["css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          caseSensitive: true,
          keepClosingSlash: false
        },
        files: {                                   // Dictionary of files
          "build/index.min.html": "index.html",
          "build/form.min.html": "form.html"
        }
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "",
          src: [
            "img/**"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    uglify: {
      my_target: {
        files: [{
            expand: true,
            src: 'js/**/*.js',
        }]
      }
    },

    svgstore: {
      options: {
        prefix : 'icon-', // This will prefix each ID
        svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          viewBox : '0 0 100 100',
          xmlns: 'http://www.w3.org/2000/svg'
        }
      },
      your_target: {
        // Target-specific file lists and/or options go here.
        expand: true,
        src: 'img/**/*.svg',
      },
    },

    sprite:{
      all: {
        src: 'img/sprite/*.png',
        dest: 'img/spritesheet.png',
        destCss: 'less/sprite.less',
        padding: 50
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/script.js', 'js/map.js', 'js/tap.min.js', 'js/mustache.min.js'],
        dest: 'build/js/script.js',
      },
  },

  };

  grunt.registerTask("build", [
    "clean",
    "copy",
    "csscomb",
    "less",
    "cmq",
    "postcss",
    "cssmin",
    "htmlmin",
    "uglify",
    "concat"
  ])


  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  grunt.initConfig(config);
};
