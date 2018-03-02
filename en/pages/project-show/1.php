<?php
$title = '产品展示-LANZ DESIGN';
$cur_project = true;
include_once '../../layout/header.php' ;
?>

<div class="project-show-page container">
	<?php
        $len = 9;
        for($i = 1; $i <= $len ; $i++) {
            echo "<img src='/images/project/project-show/1/pr-" .$i. ".jpg' alt='LanzDesign' />" ;
        }
    ?>
</div>

<?php include_once '../../layout/footer.php' ; ?>