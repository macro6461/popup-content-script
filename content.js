whiteout = () => {

    var ptags = document.getElementsByTagName("p")

    for (var i = 0; i < ptags.length; ++i){
        ptags[i].style.color = "white"
        ptags[i].style.border = "solid 1px red"

    }

}

whiteout()
