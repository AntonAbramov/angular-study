module.exports = function (grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          // sassDir: 'scss',
          // cssDir: 'css',
          // environment: 'production'
          config: 'config.rb'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scss: {
        files: ['scss/**/*.scss'],
        tasks: ['compass']
      },
      css: {
        files: ['css/style.css'],
//        tasks: ['asset_cachebuster']
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 3
        },
        src: ['css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/**/*.css']
      }
    },
    asset_cachebuster: {
      options: {
        buster: Date.now(),
        ignore: [],
        htmlExtension: 'html'
      },
      build: {
        files: {
          'css/style.css': ['css/style.css']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-asset-cachebuster');

//  grunt.registerTask('default', ['compass', 'csslint', 'asset_cachebuster', 'watch']);
  grunt.registerTask('default', ['compass', 'watch']);
}
