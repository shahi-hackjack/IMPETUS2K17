$(document).ready(function() {

			// $("body").niceScroll().resize();
			// $("#md").css('visibility','hidden');
	    // $("#lt").niceScroll({cursorcolor:"#777777",cursorborder:"none"}).resize();
	    // $("#rt").niceScroll({cursorcolor:"#777777",cursorborder:"none"}).resize();
	    // $("#md").niceScroll({cursorcolor:"#777777",cursorborder:"none"}).resize();

	    $("a").click(function(){
	    	 img = "eventmain/images/"+ $(this).attr('id')+".jpg";
	    	 console.log(img);
	    	 dn = $(this).attr('id');
	    	 $('body').css({"background-image":"url(" + img + ")","background-size":" cover"});
	    	 switch(dn){
	    	 	case "itw":
	    	 		{
		    	 		$("#head h1").html("IT Wiz");
		    	 		$("#cont h2").html("IMPETUS 17 presents to you IT Wiz - an exciting quizzing platform to further hone your knowledge. <br>From Linux to Apple. From Charles Babbage to Sunder Pichai. Here is everything you need to know and learn about the flourishing Technology.")
		       	 		$("#names h3").html("Anaghesh M &nbsp; 7847880074<br>Harshitha M &nbsp; 9483706181<br>");
		    	 		$("#size h1").html("2");
	    	 		}
	    	 		break;
	    	 	case "bot":
	    	 		{
	    	 			$("#head h1").html("Botnia 3.0");
		    	 		$("#cont h2").html("Pick and drop;Twist and turn, get prepared to move your bot on curves and humps. Catch the whole lot of excitement and fun@Botnia 3.0")
		       	 		$("#names h3").html("Mahesh HG &nbsp; 9035663465<br>Thanush S &nbsp; 8867768009<br>Tejaswini Beliraya K &nbsp; 9483912008<br>");
		    	 		$("#size h1").html("3");
	    	 		}
	    	 		break;
	    	 	case "rr":
	    	 		{
	    	 			$("#head h1").html("RoboRally");
		    	 		$("#cont h2").html("All you have to do is control the bot! A mind boggling experience where you feel the adrenaline rush to complete the circuit faster.<br>Do you think you could avoid the penalties and grab maximum points?<br>Then roborally is the event for you!")
		       	 		$("#names h3").html("Likith M &nbsp; 9972748187<br>Harsha S &nbsp; 9480281997<br>Smruthi L &nbsp; 8951502058<br>");
		    	 		$("#size h1").html("1");
	    	 		}
	    	 		break;
	    	 	case "cc":
	    	 		{
	    	 			$("#head h1").html("Channel:Code");
		    	 		$("#cont h2").html("An event that kicks off with a poetry competition followed by a fun filled round of enacting popular TV shows.<br> It also features a round of competitive programming with a twist. Use the points earned in the first two rounds to buy solutions.")
		       	 		$("#names h3").html("Anuj B &nbsp; 9900179123<br>Kaushik G &nbsp; 9480107925<br>Jehil Vora &nbsp; 9731720066");
		    	 		$("#size h1").html("3");
	    	 		}
	    	 		break;
	    	 	case "ul":
	    	 		{
	    	 			$("#head h1").html("UNLOCK");
		    	 		$("#cont h2").html("Can your brain galvanise the puzzles?Do you wish to discover the best solution to the socialistic problems? If your answer is Yes, then we have an Arena ready!<br>UNLOCK- Solve,Discover and Produce!")
		       	 		$("#names h3").html("Darshan S &nbsp; 8867362582<br>Kruthi hegde &nbsp; 9902938356<br>Adarsh M Bhat &nbsp; 8073581883");
		    	 		$("#size h1").html("3");
	    	 		}
	    	 		break;
	    	 	case "alc":
	    	 		{
	    	 			$("#head h1").html("THE ALCHEMIST");
		    	 		$("#cont h2").html("We acquaint you with THE ALCHEMIST. Unravel the mystery,hunt for the series of clues, get mind boggled and gloat your victory.")
		       	 		$("#names h3").html("Vaaruni Desai &nbsp; 7411707456<br>Shreya Uday &nbsp; 9880049825<br>Jishnu S M &nbsp; 7353120520");
		    	 		$("#size h1").html("3");
	    	 		}
	    	 		break;
	    	 	case "am":
	    	 		{
	    	 			$("#head h1").html("Auto Mania");
		    	 		$("#cont h2").html("If you are an Automobile freak and you remain up to date with every news in the Automobile industry, then you have found the right event.<br>Auto Mania will make you reach your absolute limits in testing your knowledge. What are you waiting for?<br>Let the roar of engines rock your heart!!")
		       	 		$("#names h3").html("Vignesh Shenoy	&nbsp; 7259872178<br>Adhithya Pai B	&nbsp; 9446325235<br>Shaikh Adil Shaheer &nbsp; 9844442185");
		    	 		$("#size h1").html("3");
	    	 		}
	    	 		break;
	    	 	case "su":
	    	 		{
	    	 			$("#head h1").html("Summit");
		    	 		$("#cont h2").html("Summit is IEEE UVCE's flagship event at IMPETUS. It is a student parliament where students of various colleges, including our own will participate and present their ideas and views to the judges and the audience. The student parliament is preceded with a Panel Discussion.This year the theme is 'Smart Era'.")
		       	 		$("#names h3").html("Melissa &nbsp; 9845405016<br>Aarsi &nbsp; 8147149854");
		    	 		$("#size h1").html("Max 3");
	    	 		}
	    	 		break;
	    	 	case "goc":
	    	 		{
	    	 			$("#head h1").html("Game of Codes");
		    	 		$("#cont h2").html("Time to put your thinking caps on and solve the challenges.<br>Happy coding!")
		       	 		$("#names h3").html("Prathik &nbsp; 9035396466<br>Arya &nbsp; 9945020490<br>Vishwas &nbsp; 9482649254");
		    	 		$("#size h1").html("2");
	    	 		}
	    	 		break;
	    	 	case "tnl":
	    	 		{
	    	 			$("#head h1").html("Tech and Ladder");
		    	 		$("#cont h2").html("An outburst of knowledge entwined with the thrill of a Smart-variant of the traditional 'Snake and Ladder' game. Technical knowledge with lady luck's grace is the combination you need to look out for.")
		       	 		$("#names h3").html("Ganesh N Sharma &nbsp; 9164267500<br>Sanchay DC &nbsp; 8747801211<br>Vindith Kamath &nbsp; 9480440283");
		    	 		$("#size h1").html("2");
	    	 		}
	    	 		break;
	    	 	case "vm":
	    	 		{
	    	 			$("#head h1").html("Vaksamara");
		    	 		$("#cont h2").html("Unleash the debater in you!")
		       	 		$("#names h3").html("Suresh Maradi &nbsp; 9164976367<br>Rajesh &nbsp; 7019432399");
		    	 		$("#size h1").html("1");
	    	 		}
	    	 		break;
	    	 	case "gm":
	    	 		{
	    	 			$("#head h1").html("Gaming");
		    	 		$("#cont h2").html("DAY 1<br>CS 1.6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FIFA 15<br><br>DAY 2<br>DOTA 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NFS MOST WANTED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINI MILITIA")
		       	 		$("#names h3").html("Saurabh Chalke &nbsp; 8050670274<br>Shivasheesh Yadav &nbsp; 8792524824<br>Digvijay &nbsp; 9900454620<br>Chandan &nbsp; 9916923645<br>Rohith R (Mini Militia) &nbsp; 9972708467");
		    	 		$("#size h1").html("1-&nbsp;&nbsp;FIFA and NFS<br>5-&nbsp;&nbsp;CS and DOTA<br>1 or 3-&nbsp;&nbsp;MINI MILITIA<br>");
	    	 		}
	    	 		break;
	    	 	case "mp":
	    	 		{
	    	 			$("#head h1").html("Mock Placements");
		    	 		$("#cont h2").html("Experience the environment of a real interview in this event. Paarticipate in mock placements if you think you have what it takes to get placed in a company.<br>The event simulates the actual proceedings of a campus interview.<br>The first round being an aptitude test followed by group discussion in the second round and third round will be an interview.")
		       	 		$("#names h3").html("AG Satish &nbsp; 9740111552");
		    	 		$("#size h1").html("1");
	    	 		}
	    	 		break;
	    	 }
	    	 $("#md").css('visibility','visible');

	    })
	  }
	);
