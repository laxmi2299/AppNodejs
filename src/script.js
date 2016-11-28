/// <reference path="angular.min.js" />

var app = angular.module("Demo", ["ngRoute"])
                 .config(function ($routeProvider) {
                     $routeProvider
                      .when("/home", {
                          templateUrl: "./Templates/home.html",
                          controller:"homeController"
                      })
                     .when("/courses", {
                         templateUrl: "Templates/courses.html",
                         controller: "coursesController"
                     })
                     .when("/student", {
                         templateUrl: "Templates/student.html",
                         controller: "studentController"
                     }).when("/", {
                         templateUrl: "./Templates/home.html",
                         controller:"homeController"
                     });
                 })
                 .controller("homeController", function ($scope) {
                     $scope.message = "Home Page";
                 })
                 .controller("coursesController", function ($scope, $http) {

                     $http({
                       method: 'GET',
                       url: '/getCourses'
                     }).then(function successCallback(response) {
                       console.log(response.data);
                        $scope.courses = response.data.courses;
                     }, function errorCallback(response) {
                       console.log(response);
                     });
                 })
                 .controller("studentController", function ($scope, $http) {
                     $http.get("getStudentInfo")
                     .then(function (response) {
                         console.log(response.data);
                         $scope.studentInfo = response.data.info;
                     });

                 })
