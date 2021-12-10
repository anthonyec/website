function $ (target) {
	this.el = document.querySelectorAll(target);
	return this.el;
}

function hasClass (el, className) {
	if (el.classList) {
		return el.classList.contains(className);
	} else {
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}

function addClass (el, className) {
	if (el.classList) {
		el.classList.add(className);
	} else {
		el.className += ' ' + className;
	}
}

function removeClass (el, className) {
	if (el.classList) {
  		el.classList.remove(className)
	} else {
  		el.className = el.className.replace(new RegExp('(^| )' + className.split(' ').join('|') + '( |$)', 'gi'), ' ')
	}
}

function each (array, func) {
	for (i = 0; i < array.length; i++) {
		func(array[i], i);
	}
}

function addEventListener (el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
	el.attachEvent('on' + eventName, handler);
	}
}

function inArray (term, arr) {
	var length = arr.length;

	for (var i = 0; i < length; i++) {
		if (arr[i] == term) return true;
	}
}

function returnCleanTag (tagName) {
	cleanString = tagName.replace(/\s/g, "");
	cleanString = cleanString.replace(/[^\w\d\s]/, "");
	return cleanString.toLowerCase();
}

function toggleSelectedTag (tagName) {
	if (inArray(tagName, selectedTags)) {
		var position = selectedTags.indexOf(tagName);
		selectedTags.splice(position, 1);
	} else {
		selectedTags.push(tagName);
	}
}

function renderProjects () {
	each($(".projects span"), function($el, i) {
		removeClass($el, "selected");

		for (var i=selectedTags.length-1; i>=0; i--) {
			if (hasClass($el, selectedTags[i])) {
				addClass($el, "selected");
				break;
			}
		}
	});
}

var selectedTags = ["featured"];

each($(".tag-button"), function($el, i) {
	addEventListener($el, "click", function (e) {
		console.log(returnCleanTag($el.innerText))
		toggleSelectedTag(returnCleanTag($el.innerText));

		if (hasClass($el, "selected")) {
			removeClass($el, "selected");
		} else {
			addClass($el, "selected");
		}
		
		renderProjects();
	});
});

renderProjects();

var ctx = document.getElementById("sidebar-canvas").getContext('2d');
var sidebarWidth;
var sidebarHeight;

function resizeCanvasBackground () {
	sidebarWidth = $(".sidebar")[0].offsetWidth;
	sidebarHeight = $(".sidebar")[0].offsetHeight;
	ctx.canvas.width = sidebarWidth;
	ctx.canvas.height = sidebarHeight-2; // Fixes the border size offset
	ctx.translate(0.5, 0.5);
}

function drawCanvasBackground () {
	var sidebarX = $(".sidebar")[0].offsetLeft;
	var sidebarY = $(".sidebar")[0].offsetTop;

	var doc = document.documentElement, body = document.body;
	var scrollX = (doc && doc.scrollLeft || body && body.scrollLeft || 0);
	var scrollY = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

	if (scrollY < 0) { scrollY = 0; } // Fix for magic mouse scrolling

	// var img = new Image();
	// img.src = "../images/dashed4.gif";
	// var dashed = ctx.createPattern(img, "repeat");

	each($(".projects .project"), function($el, i) {
		var x = $el.offsetLeft;
		var y = $el.offsetTop;
		var width = $el.offsetWidth-1;
		var height = $el.offsetHeight-1;

		if (x+width > sidebarX && x < sidebarX+sidebarWidth && y+height+scrollY > sidebarY && y-scrollY < sidebarY+sidebarHeight) {
			newX = x-sidebarX-scrollX-1;
			newY = y-sidebarY-scrollY-1;

			// var imageObj = new Image();
			// var imageURL = getComputedStyle($el)["background-image"];
			// imageObj.src = imageURL.slice(4, -1);;
			// ctx.drawImage(imageObj, x-sidebarX, y-sidebarY-scrollY-2, width, height);

			if (ctx.setLineDash) {
				ctx.beginPath();
					ctx.setLineDash([5, 5]);
					ctx.rect(newX, newY, width, height);
					ctx.strokeStyle = '#5E5E5E';
					// ctx.strokeStyle = '#D9D9D9';
				ctx.stroke();
			} else {
				// ctx.fillStyle = "rgb(220, 240, 240)";
				// ctx.fillStyle = "rgb(230, 250, 250)";
				// ctx.fillStyle = "#ffeead";
				ctx.fillStyle = "rgb(245, 245, 245)";
				// ctx.fillStyle = dashed;
				ctx.fillRect (newX, newY, width, height);
			}

		}
	});
}

function updateCanvas () {
	ctx.clearRect(0, 0, sidebarWidth, sidebarHeight);
	resizeCanvasBackground();
	drawCanvasBackground();	
}

addEventListener(document, "scroll", updateCanvas);
addEventListener(document, "mousemove", updateCanvas);
window.onresize = updateCanvas;
updateCanvas();

setTimeout(function () {
	updateCanvas();
}, 50);
