<?php
    global $cur_project;
    global $cur_about;
    global $cur_service;
    global $cur_contact;
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--<title>LANZ DESIGN</title>-->
    <title><?php echo $title ; ?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link type="image/x-icon" href="/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
<div class="head-menu">
    <div class="container">
        <a href="/" class="logo"><img src="/images/new-logo.png" alt="Logo" /></a>
        <div class="lang">
            <a href="/">中</a>
            <span>|</span>
            <a href="/">EN</a>
        </div>
        <ul class="clearfix">
            <li><a href="/pages/project.php" <?php if($cur_project) { echo 'class="cur"' ; } ?>>作品</a></li>
            <li><a href="/pages/about.php" <?php if($cur_about) { echo 'class="cur"' ; } ?>>简介</a></li>
            <li><a href="/pages/service.php" <?php if($cur_service) { echo 'class="cur"' ; } ?>>服务</a></li>
            <li><a href="/pages/contact.php" <?php if($cur_contact) { echo 'class="cur"' ; } ?>>联系</a></li>
        </ul>
    </div>
</div>
