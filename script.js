const boldWords = document.querySelectorAll("strong");
function highlight() {
    //Write your code here
	boldWords.forEach(word=>word.style.color="green")

}

function return_normal() {
    //Write your code here
	boldWords.forEach(word=>word.style.color="")
    
}


