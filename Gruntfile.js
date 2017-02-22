'use strict';

var pkg = require('./package.json');

module.exports = function(grunt) {

  // ----------------------------------------------------------
  // WARNING, BRAVE DEVELOPER
  // ----------------------------------------------------------
  // Webhook allows you to use local grunt tasks and files.
  // However, these tasks are ONLY RUN LOCALLY and not when
  // your live site needs to be rebuilt. This means you should
  // only use grunt for pre-processing tasks like building
  // Sass, less or coffescript files, not for reading things
  // from your templates and making dynamic changes during
  // the build process. Doing so will cause your live site
  // not to regenerate.
  //
  // You have been warned!
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: ['sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['app.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 5 versions'})
        ]
      },
      dist: {
        src: 'static/css/app.css'
      }
    },

    browserify: {
      dist: {
        options: {
          transform: [
            [
              'babelify',
              {
                loose: 'all'
              }
            ]
          ]
        },
        files: {
          './static/javascript/app.js': ['./javascript/index.js']
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, src: ['./javascript/libs/*'], dest: './static/', filter: 'isFile'},
        ]
      }
    },


    // Watch for sass changes and build css using the sass task we set above
    watch: {
      scripts: {
        files: ['./javascript/**/*.js'],
        tasks: ['copy', 'browserify', 'build']
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss', 'build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['watch']);

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
