function getName(){
		var yourname = $("#fullName").val();
		console.log(yourname);
		return yourname;
	};

function getEmail(){
		var youremail = $("#email").val();
		console.log(youremail);
		return youremail;
	};

function getMobileNumber(){
		var yournumber = $("#mobileNumber").val();
		console.log(yournumber);
		return yournumber;
	};	

function editBtn(){
	var editButton = $("<br><button id='editButton'>Edit Contact</button>");
	return editButton;
};

function deleteBtn(){
	var deleteButton = $("<button id='deleteButton'>Delete Contact</button>");
	return deleteButton;
};

var contactSection = $(".myContactsHeading");	

$("#createNewButton").click(function (){

	var newList = $("<div id='newContactList'></div>");
	
	
	var contactObject = {
	newname : getName(),
	newemail : getEmail(),
	newmobileNumber : getMobileNumber(),
	};

	var buttons = {
		editButton : editBtn(),
		deleteButton : deleteBtn()
	};

	var name = contactObject.newname;
	var email = contactObject.newemail;
	var mobileNumber = contactObject.newmobileNumber;

	var newContact = function(){
		var result = ("Name:      " + name  + "<br\>Email:     " + email + "<br\>Number:     " + mobileNumber);

		return result;
	};
		
	var finalContact = newList.insertAfter(contactSection).html(newContact).append(buttons.editButton).append(buttons.deleteButton);	

		$("#deleteButton").click(function(){
			$(finalContact).remove();
		});

		$("#editButton").click(function(){
			// alert ("work in progress");
		});	

		document.getElementById("contactForm").reset();
	});