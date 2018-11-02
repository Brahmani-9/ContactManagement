<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="com.resources.DbConnection"%>
<!DOCTYPE html">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Blog for office</title>

<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/fa_css/css/font-awesome.min.css">
<link rel="stylesheet" href="css/index.css">

</head>
<body data-ng-app="foodweb"  data-ng-style="{'background-color':'white'}">
	
			
			
			
				
				<!-- <a href="#!header">Menu</a>
				<a href="#!services">Services</a>
				<a href="#!header">About</a>
				<a href="#!header">Contact</a> -->
		<!-- <a href="#!header">Contact</a> -->
<!-- <div data-ng-include="'angular/views/header.html'"></div> -->
	<!-- header -->
	<div data-ng-view></div>
	<div data-ng-include="'angular/views/contact.html'"></div>

<!-- angular libraries -->
<script type="text/javascript" src="bootstrap/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="angular/libraries/angular.js"></script>
<script type="text/javascript" src="angular/libraries/angular.min.js"></script>
<script type="text/javascript" src="angular/libraries/angular-route.js"></script>
<script type="text/javascript" src="angular/libraries/angular-route.min.js"></script>
<script type="text/javascript" src="angular/libraries/angular-cookies.js"></script>
<script type="text/javascript" src="bootstrap/bootstrap.min.js"></script>


<!-- User Defined Pages -->
<script type="text/javascript" src="app.js"></script>

</body>
</html>