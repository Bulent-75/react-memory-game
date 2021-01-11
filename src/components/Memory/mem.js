var imgs = ["1.png", "2.png", "3.png","4.png","5.png","6.png","7.png", "8.png", "9.png","10.png","11.png","12.png"];
var path = 'assets/images/' ;
var amount = 4;
var i = 0 ;
var arrImg = [];

arrImg = getRandomArrayElements(imgs,amount);
arrImg = arrImg.concat(arrImg) ;
shuffle(arrImg);

	for (var i = 0; i < arrImg.length; i++) {
	    $('.card-container').append("<img id ='" + i + "' class='card btn-warning'/>") ;
	}

setTimeout(function() {
		i = 0 ;
	    $('.card-container').children().each(function() {
	    	// alert(this.src) ;
	    	this.src = path + arrImg[i];
//	    	alert(this.src) ;
			i++ ;	    	
	    }) ;

}, 300);

setTimeout(function() {
		i = 0 ;

	    $('.card-container').children().each(function() {
	    	// alert(this.src) ;
	    	this.src = "assets/images/default/def.png";
			i++ ;	    	
	    }) ;

}, 1300);



// alert(arrImg);

// $("#bfCaptchaEntry").click(function(){ myFunction(); });
flag = 0 ;
carts = 0;
score = 0 ;
$('.card-container').children('.card').click(function () {


	if (flag == 0 ) {
	    flag = 1 ;
		firstClicked = this;
	    $("#" + firstClicked.id).attr("src",path + arrImg[this.id])
    // second pic
	} else {
		score++ ;
    	$("#" + this.id).attr("src",path + arrImg[this.id])
		// check if matched
		if(arrImg[firstClicked.id] == arrImg[this.id]) {
      			
		// matched -> show the picture 
			$("#" + firstClicked.id).attr("src",path + arrImg[firstClicked.id])
			$("#" + firstClicked.id).off('click');;

			// remove onclick when matched
//			$("#" + firstClicked.id).prop('onClick',null).off('click') ;

			$("#" + firstClicked.id).off('click');
			$("#" + this.id).off('click');

		    	carts = carts + 2;
				if (carts == amount*2) {
	      			alert('score: ' + score) ;
	      		}

			} else {
		// unmatched -> return default
			secondClicked = this ;
      		setTimeout(function() {
				$("#" + secondClicked.id).attr("src", path + 'default/def.png'); 	
				$("#" + firstClicked.id).attr("src", path + 'default/def.png'); 
			},700);
		}
		
		flag = 0 ;

	}
});

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
