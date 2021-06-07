$(window).on('load', function() {

	$("#submitForm").click(function(e){
		e.preventDefault();
		let playerName=from=price=description="";
		let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));

		playerName = $("#playername").val();
		from = $("#teamfrom").find(":selected").text();
		price = $("#price").val();
		let isPlaying = true;
		if($("#isPlaying").val()){isPlaying=true;}else{isPlaying=false;}
		description = $("#role").val();

		let chkDuplicate = teamData.filter(obj => obj.playerName == playerName);
		console.log("chkDuplicate",chkDuplicate);
		if(chkDuplicate.length){
			alert("This player already exists");
			return false;
		}
		
		let newPlayer = {
			"id": teamData.length + 1,
			"playerName": playerName,
			"from": from,
			"price": price,
			"isPlaying": isPlaying,
			"description": description
		}
		console.log("teamData",teamData);
		console.log("newPlayer",newPlayer);
		teamData.push(newPlayer);
		console.log("teamData",teamData);
		let iplString = JSON.stringify(teamData);
		localStorage.setItem("iplTeamDetails", iplString);
		$("#response").html('<div class="alert alert-success">Player Added Successfully.</div>');
		setTimeout(function(){ location.reload(); }, 2000);
		 

	})
	
});

