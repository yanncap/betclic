module.exports = function (grunt) {

    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options : {
                separator: ' '
            },
            dist: {
                src: ["public/css/*.css"],
                dest:"public/build/css/style.css"
            }
        },
        cssUrls: {
            src: "public/sit.css"
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css-url');

    grunt.registerTask('default', ["concat"]);
};
