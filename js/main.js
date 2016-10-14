//Run when all HTML/DOM has loaded
$(document).ready(function () {
    //Get initial client height and width to use for future calculations
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    //Current tab that is viewed by user 
    var currentTab = "pageOne";

    //LastTab that was viewed
    var lastTab = "pageOne";

    //State for menu to see if page is being viewed
    var state = "onTab";

    //Numbers for tab menu to view or hide pages
    var numbers = {
        "pageOne": {
            "x": -(clientWidth * 0.5),
            "xBig": -((clientWidth * 0.5) - (clientWidth * 0.1)),
            "y": -((clientHeight - 90) * 0.5)
        },
        "pageTwo": {
            "x": (clientWidth * 0.5),
            "xBig": (clientWidth * 0.5) - (clientWidth * 0.1),
            "y": -((clientHeight - 90) * 0.5)
        },
        "pageThree": {
            "x": -(clientWidth * 0.5),
            "xBig": -((clientWidth * 0.5) - (clientWidth * 0.1)),
            "y": (clientHeight - 90) * 0.5
        },
        "pageFour": {
            "x": (clientWidth * 0.5),
            "xBig": (clientWidth * 0.5) - (clientWidth * 0.1),
            "y": (clientHeight - 90) * 0.5
        }
    }

    function show(domId, tagId) {
        $("#" + tagId).addClass("fadeOff")
        
        $("." + domId).css({
            transition: "all 500ms ease",
            transform: "scale(0.5, 0.5)"
        });

        setTimeout(function (){
            $("#" + domId).css("zIndex", "99");
        }, 450)
        
        setTimeout(function () {
            $("#" + domId).css({
                transition: "all 450ms ease",
                transform: "translate(0px, 0px)" + "scale(1, 1)"
            });
        }, 550)

        currentTab = domId;
        lastTab = domId;
        state = "onTab";
    }

    function hide(domId, tagId) {
        if (clientWidth > 992 || clientWidth == 992) {
            $("#" + domId).css({
                transition: "all 350ms ease",
                transform: "scale(0.475, 0.475)" + "translate(" + numbers["" + domId].xBig + "px," + numbers["" + domId].y + "px)"
            });
        } else {
            $("#" + domId).css({
                transition: "all 350ms ease",
                transform: "scale(0.475, 0.475)" + "translate(" + numbers["" + domId].x + "px," + numbers["" + domId].y + "px)"
            });
        }

        setTimeout(function () {
            $("#" + domId).css("zIndex", "95");
            $("#" + tagId).removeClass("fadeOff");
            $("#" + tagId).addClass("fadeOn");
        }, 375)

        $("." + domId).css({
            transition: "all 500ms ease",
            transform: "scale(1, 1)"
        });
    }
    //Set up initial css based on client height 
    $('article, aside, #pageOne, #pageTwo, #pageThree, #pageFour').css({
        height: clientHeight - 90 + 'px'
    })

    if (clientWidth > 992 || clientWidth == 992) {
        $("#pageTwo").css("transform", "scale(0.475, 0.475)" + "translate(" + numbers.pageTwo.xBig + "px," + numbers.pageTwo.y + "px)");
        $("#pageThree").css("transform", "scale(0.475, 0.475)" + "translate(" + numbers.pageThree.xBig + "px," + numbers.pageThree.y + "px)");
        $("#pageFour").css("transform", "scale(0.475, 0.475)" + "translate(" + numbers.pageFour.xBig + "px," + numbers.pageFour.y + "px)");
    } else {
        $("#pageTwo").css("transform", "scale(0.475, 0.475)" + "translate(" + numbers.pageTwo.x + "px," + numbers.pageTwo.y + "px)");
        $("#pageThree").css("transform", "scale(0.475, 0.475)" + "translate(" + numbers.pageThree.x + "px," + numbers.pageThree.y + "px)");
        $("#pageFour").css("transform", "scale(0.475, 0.475)" + "translate(" + numbers.pageFour.x + "px," + numbers.pageFour.y + "px)");
    }

    //Once menu button has been clicked run switch statment to figure out
    //which tab is current tab, do calculations for x/y movment then run velocity function
    $('#navBtn').click(function () {
        state = "chooseTab";
        
        switch (currentTab) {
        case "pageOne":
            hide(currentTab, "pOneTag")

            break;
        case "pageTwo":
            hide(currentTab, "pTwoTag")
            break;
        case "pageThree":
            hide(currentTab, "pThreeTag")
            break;
        case "pageFour":
            hide(currentTab, "pFourTag")
            break;
        }
    })

    //Once a tab has been clicked run switch statment to figure out
    //which tab is clicked, do calculations for x/y movment then run velocity function
    $('#pOneTag').click(function () {
        if (state == "chooseTab") {
            show("pageOne", "pOneTag")
        }
    })
    $('#pTwoTag').click(function () {
        if (state == "chooseTab") {
            show("pageTwo", "pTwoTag")
        }
    })
    $('#pThreeTag').click(function () {
        if (state == "chooseTab") {
            show("pageThree", "pThreeTag")
        }
    })
    $('#pFourTag').click(function () {
        if (state == "chooseTab") {
            show("pageFour", "pFourTag")
        }
    })
});