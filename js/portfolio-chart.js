/*!
 * Chart.js
 * http://chartjs.org
 * Copyright 2013 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */

 /* ------------------------------------------------------------------------- */
 /* --------------------------- Radar Charts -------------------------------- */
 /* ------------------------------------------------------------------------- */
 /* ------- Documentation: http://www.chartjs.org/docs/#radar-chart --------- */
 /* ------------------------------------------------------------------------- */
 /*
  * [01.] Radar Chart 1 - Languages
  * [02.] Radar Chart 2 - Frameworks
  * [03.] Radar Chart 3 - Tools
	* [034] Radar Chart 4 - Design
  */

// [01.] Options
var setOneOptions = {

	//Boolean - If we show the scale above the chart data
	scaleOverlay : false,

	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,

	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 10,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 10,
	//Number - The centre starting value
	scaleStartValue : 0,

	//Boolean - Whether to show lines for each scale point
	scaleShowLine : true,

	//String - Colour of the scale line
	scaleLineColor : "#999",

	//Number - Pixel width of the scale line
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale
	scaleShowLabels : false,

	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",

	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",

	//Number - Scale label font size in pixels
	scaleFontSize : 12,

	//String - Scale label font weight style
	scaleFontStyle : "normal",

	//String - Scale label font colour
	scaleFontColor : "#373f51",

	//Boolean - Show a backdrop to the scale label
	scaleShowLabelBackdrop : true,

	//String - The colour of the label backdrop
	scaleBackdropColor : "rgba(255,255,255,0.75)",

	//Number - The backdrop padding above & below the label in pixels
	scaleBackdropPaddingY : 2,

	//Number - The backdrop padding to the side of the label in pixels
	scaleBackdropPaddingX : 2,

	//Boolean - Whether we show the angle lines out of the radar
	angleShowLineOut : true,

	//String - Colour of the angle line
	angleLineColor : "rgba(255,255,255,0.3)",

	//Number - Pixel width of the angle line
	angleLineWidth : 1,

	//String - Point label font declaration
	pointLabelFontFamily : "'Arial'",

	//String - Point label font weight
	pointLabelFontStyle : "normal",

	//Number - Point label font size in pixels
	pointLabelFontSize : 12,

	//String - Point label font colour
	pointLabelFontColor : "#373f51",

	//Boolean - Whether to show a dot for each point
	pointDot : false,

	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 1,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,

	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,

	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null

}

// [01.] Data
var setOneData = {
	labels : [
		"HTML",
		"CSS",
		"JavaScript",
		"JQuery",
		"AJAX",
		"PHP",
		"SQL",
		"Java"
	],
	datasets : [
		{
			fillColor : "#373f51",
			strokeColor : "#373f51",
			data : [90, 80, 65, 60, 50, 50, 40, 60]
		}
	]
}

// [01.] Chart
var ctx = document.getElementById("setOne").getContext("2d");
var setOne = new Chart(ctx).Radar(setOneData, setOneOptions);

// [02.] Options
var setTwoOptions = {

	//Boolean - If we show the scale above the chart data
	scaleOverlay : false,

	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,

	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 10,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 10,
	//Number - The centre starting value
	scaleStartValue : 0,

	//Boolean - Whether to show lines for each scale point
	scaleShowLine : true,

	//String - Colour of the scale line
	scaleLineColor : "#999",

	//Number - Pixel width of the scale line
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale
	scaleShowLabels : false,

	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",

	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",

	//Number - Scale label font size in pixels
	scaleFontSize : 12,

	//String - Scale label font weight style
	scaleFontStyle : "normal",

	//String - Scale label font colour
	scaleFontColor : "#58a4b0",

	//Boolean - Show a backdrop to the scale label
	scaleShowLabelBackdrop : true,

	//String - The colour of the label backdrop
	scaleBackdropColor : "rgba(255,255,255,0.75)",

	//Number - The backdrop padding above & below the label in pixels
	scaleBackdropPaddingY : 2,

	//Number - The backdrop padding to the side of the label in pixels
	scaleBackdropPaddingX : 2,

	//Boolean - Whether we show the angle lines out of the radar
	angleShowLineOut : true,

	//String - Colour of the angle line
	angleLineColor : "rgba(255,255,255,0.3)",

	//Number - Pixel width of the angle line
	angleLineWidth : 1,

	//String - Point label font declaration
	pointLabelFontFamily : "'Arial'",

	//String - Point label font weight
	pointLabelFontStyle : "normal",

	//Number - Point label font size in pixels
	pointLabelFontSize : 12,

	//String - Point label font colour
	pointLabelFontColor : "#58a4b0",

	//Boolean - Whether to show a dot for each point
	pointDot : false,

	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 1,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,

	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,

	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null

}

// [02.] Data
var setTwoData = {
	labels : [
		"Bootstrap",
		"AngularJS",
		"Spring",
		"Photoshop",
		"Illustrator"
	],
	datasets : [
		{
			fillColor : "#58a4b0",
			strokeColor : "#58a4b0",
			data : [80, 40, 40, 70, 60]
		}
	]
}

// [02.] Chart
var ctx = document.getElementById("setTwo").getContext("2d");
var setTwo = new Chart(ctx).Radar(setTwoData, setTwoOptions);

// [03.] Options
var setThreeOptions = {

	//Boolean - If we show the scale above the chart data
	scaleOverlay : false,

	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,

	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 10,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 10,
	//Number - The centre starting value
	scaleStartValue : 0,

	//Boolean - Whether to show lines for each scale point
	scaleShowLine : true,

	//String - Colour of the scale line
	scaleLineColor : "#999",

	//Number - Pixel width of the scale line
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale
	scaleShowLabels : false,

	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",

	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",

	//Number - Scale label font size in pixels
	scaleFontSize : 12,

	//String - Scale label font weight style
	scaleFontStyle : "normal",

	//String - Scale label font colour
	scaleFontColor : "#daa49a",

	//Boolean - Show a backdrop to the scale label
	scaleShowLabelBackdrop : true,

	//String - The colour of the label backdrop
	scaleBackdropColor : "rgba(255,255,255,0.75)",

	//Number - The backdrop padding above & below the label in pixels
	scaleBackdropPaddingY : 2,

	//Number - The backdrop padding to the side of the label in pixels
	scaleBackdropPaddingX : 2,

	//Boolean - Whether we show the angle lines out of the radar
	angleShowLineOut : true,

	//String - Colour of the angle line
	angleLineColor : "rgba(255,255,255,0.3)",

	//Number - Pixel width of the angle line
	angleLineWidth : 1,

	//String - Point label font declaration
	pointLabelFontFamily : "'Arial'",

	//String - Point label font weight
	pointLabelFontStyle : "normal",

	//Number - Point label font size in pixels
	pointLabelFontSize : 12,

	//String - Point label font colour
	pointLabelFontColor : "#daa49a",

	//Boolean - Whether to show a dot for each point
	pointDot : false,

	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 1,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,

	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,

	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null

}

// [03.] Data
var setThreeData = {
	labels : [
		"Git",
		"SourceTree",
		"Slack",
		"Confluence",
		"MySQL"
	],
	datasets : [
		{
			fillColor : "#daa49a",
			strokeColor : "#daa49a",
			data : [60, 70, 50, 50, 40]
		}
	]
}

// [03.] Chart
var ctx = document.getElementById("setThree").getContext("2d");
var setThree = new Chart(ctx).Radar(setThreeData, setThreeOptions);
