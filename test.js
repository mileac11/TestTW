window.onload = function()
{
	var input = document.getElementById("input");
	var start = document.getElementById("start");
	var textarea = document.getElementById("textarea");
		input.style.borderColor = "black";
	input.style.borderStyle = "solid";
	textarea.style.borderColor = "black";
	textarea.style.borderStyle = "solid";

	var t = new Date();
	var data = document.createElement("P");
	data.innerHTML = t;



	document.body.insertBefore(data,document.body.firstChild);

	var t=setTimeout(function()
		{
			document.body.removeChild(data);
		},5000);

	start.onclick = function()
	{
		if(parseInt(input.value) > 10)
		{
			for(var i=1; i<= 10; i++)
			{
				if(i==1)
				{
					var br = document.createElement("BR");
					document.body.appendChild(br);
				}
				var patrat = document.createElement("div");
				patrat.style.width = "50px";
				patrat.style.height = "50px";

				patrat.style.borderColor = "green";
				patrat.style.borderStyle = "solid";
				patrat.style.display = "inline-block";
				patrat.innerHTML = Math.floor((Math.random() * parseInt(input.value)) + 1);
				document.body.appendChild(patrat);

				if(i==10)
				{
					patrateFunction();
				}
			}

			start.disabled = true;
		}

		else
		{
			alert("Nr introdus trebuie sa fie mai mare ca 10.");
		}
	}

	function patrateFunction()
	{
		var patrate = document.querySelectorAll("div");
		for(let i = 0; i < patrate.length; i++)
		{
			patrate[i].onclick = function()
			{
				patrate[i].style.backgroundColor = "red";
				var t = setTimeout(function(){
					textarea.innerHTML += "  " + patrate[i].innerHTML;
					document.body.removeChild(patrate[i]);
				},3000);
			}
		}
	}	


}