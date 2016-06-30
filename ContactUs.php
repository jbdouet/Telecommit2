<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>ContactUs</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/font-awesome.min.css" rel="stylesheet">
<link href="css/animate.min.css" rel="stylesheet">
<link href="css/prettyPhoto.css" rel="stylesheet">
<link href="css/main.css" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet">
<link href="css/custom.css" rel="stylesheet">

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.prettyPhoto.js"></script>
<script src="js/jquery.isotope.min.js"></script>
<script src="js/main.js"></script>
<script src="js/wow.min.js"></script>
<script language="javascript" type="text/javascript" src="js/insert_contact.js"></script>

<header id="header">
	<nav class="navbar navbar-inverse" role="banner">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
				<a class="navbar-brand" href="index.html"><img src="Images/logo2.jpg" width="100" height="70" alt=""/></a></div>
			<div class="collapse navbar-collapse navbar-right">
				<ul class="nav navbar-nav">
					<li class="active"><a href="index.html">Home</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Products<i class="fa fa-angle-down"></i></a>
						<ul class="dropdown-menu">
							<li><a href="SmartphonesAndPhones.html">Smartphones and Phones</a></li>
							<li><a href="TabletsAndComputers.html">Tablets and computers</a></li>
							<li><a href="ModemsAndNetworking.html">Modems and Networking</a></li>
						</ul>
					</li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Smart Life<i class="fa fa-angle-down"></i></a>
						<ul class="dropdown-menu">
							<li><a href="TvAndEntertainment.html">Tv and Entertainment</a></li>
							<li><a href="HomeAndFamily.html">Home and Family</a></li>
							<li><a href="Health.html">Health</a></li>
							<li><a href="Personal.html">Personal</a></li>
						</ul>
					</li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Assistance Services<i class="fa fa-angle-down"></i></a>
						<ul class="dropdown-menu">
							<li><a href="LineManagment.html">Line managment</a></li>
							<li><a href="MonitoringCost.html">Monitoring Cost</a></li>
							<li><a href="TechnicalSupport.html">Technical Support</a></li>
							<li><a href="SmartLife.html">Smart Life</a></li>
						</ul>
					</li>
					<li><a href="ContactUs.php">Contact</a></li>
					<li><a href="Thegroup.html">The group</a></li>
				    <li><a href="WhoWeAre.html">Who we are</a></li>
					
				</ul>
			</div>
		</div>
		<!--/.container-->
	</nav>
	<!--/.top-bar--><!--/nav-->
	
</header>
<!--/header-->

<body>
<div class="container">
	<div class="row">
		<div class="col-lg-8 col-lg-offset-2"> 
		<h2 class="text-primary">Contact Form</h2>
		
			<p class="lead">Please Fill All the Information</p>
			<form id="contact-form" method="post" action="ContactUs.php" role="form">
				<div class="messages">
				
				
				</div>
				<div class="controls">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="form_name">Firstname *</label>
								<input id="form_name" type="text" name="name" class="form-control" 
								       placeholder="Please enter your firstname *" required="required" data-error="Firstname is required.">
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="form_lastname">Lastname *</label>
								<input id="form_lastname" type="text" name="surname" class="form-control" 
								        placeholder="Please enter your lastname *" required="required" data-error="Lastname is required.">
								<div class="help-block with-errors"></div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="form_email">Email *</label>
								<input id="form_email" type="email" name="email" class="form-control"
								        placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="form_phone">Phone</label>
								<input id="form_phone" type="tel" name="phone" class="form-control" 
								        placeholder="Please enter your phone">
								<div class="help-block with-errors"></div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="form_message">Message *</label>
								<textarea id="form_message" name="message" class="form-control" 
								           placeholder="Message for me *" rows="4" required data-error="Please,leave us a message.">
							    </textarea>
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-12">
							<input id="sub" type="submit" class="btn btn-success btn-send" value="Send message">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<p class="text-muted"><strong>*</strong> These fields are required. </p>
						</div>
					</div>
				</div>
			</form>
		</div>
		<!-- /.8 --> 
		
	</div>
	<!-- /.row--> 
	
</div>
<!-- /.container--> 



<script src="css/bootstrap.3.3.6.min.css"></script> 
 
<script src="js/jquery.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/jquery.prettyPhoto.js"></script> 
<script src="js/jquery.isotope.min.js"></script> 
<script src="js/main.js"></script> 
<script src="js/wow.min.js"></script> 
<script src="js/validator.js"></script>
</body>
</html>
