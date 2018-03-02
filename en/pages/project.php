<?php
$title = '作品-LANZ DESIGN';
$cur_project = true;
include_once '../layout/header.php' ;
?>

<div class="project-page container">
    <div class="project-wrap clearfix J_lazy">
        <?php
            $len = 21;
            for($i = 1; $i <= $len ; $i++) {
            	if($i == 1){
	                echo "<a href='/pages/project-show/1.php'><img src='/images/project/project-" .$i. ".jpg' alt='LanzDesign' /></a>" ;
            	}else{
	                echo "<a href='javascript:;'><img src='/images/project/project-" .$i. ".jpg' alt='LanzDesign' /></a>" ;
            	}
            }
        ?>
    </div>
</div>

<?php include_once '../layout/footer.php' ; ?>
