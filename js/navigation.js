/* Top Navigation */
function initNavigation(seq)
{
	nav = document.getElementById("gnbNavi");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	navLen = nav.childNodes.length;

	allA = nav.getElementsByTagName("li")
	for(k = 0; k < allA.length; k++) {
		allA.item(k).onmouseover = allA.item(k).onfocus = function () {
			nav.isOver = true;
		}
		allA.item(k).onmouseout = allA.item(k).onblur = function () {
			nav.isOver = false;
			setTimeout(function () {
				if (nav.isOver == false) {
					if (nav.menu[seq] == null)
					{
						nav.current.className = "";
						$(nav.current.submenu).stop(true,true).animate({'height':'0'},100);
						$("#gnbsub").stop(true,true).animate({'height':'0'},100);
						$(nav.current.submenu).css("z-index","10");
						//nav.current.submenu.style.display = "none";
					}
					else if (nav.menu[seq])
						nav.menu[seq].onmouseover();
					else if(nav.current) {
						menuImg = nav.current;
						menuImg.className = "on";
						if (nav.current.submenu)
							$(nav.current.submenu).stop(true,true).animate({'height':'0'},100);
							$("#gnbsub").stop(true,true).animate({'height':'0'},100);
							$(nav.current.submenu).css("z-index","10");
							//nav.current.submenu.style.display = "none";
						nav.current = null;
					}
				}
			}, 500);
		}
	}

	for (i = 0; i < navLen; i++) {
		navItem = nav.childNodes.item(i);
		if (navItem.tagName != "LI")
			continue;

		navAnchor = navItem.getElementsByTagName("strong").item(0);
		navAnchor.submenu = navItem.getElementsByTagName("div").item(0);

		navAnchor.onmouseover = navAnchor.onfocus = function () {
			if (nav.current) {
				menuImg = nav.current;
				menuImg.className = "";
				if (nav.current.submenu)
					//nav.current.submenu.style.display = "none";
					$(nav.current.submenu).stop(true,true).animate({'height':'0'},100);
					//$("#gnbsub").stop(true,true).animate({'height':'0'},100);
					$(nav.current.submenu).css("z-index","10");
				nav.current = null;
			}
			if (nav.current != this) {
				menuImg = this;
				menuImg.className = "over";
				if (this.submenu)
					if ( $(this.submenu).children(".subBg").children(".ls").children(".su").length > "0" )
					{
						$(this.submenu).stop(true,true).animate({'height':'152px'});
						//$("#gnbsub").stop(true,true).animate({'height':'152px'});
					}
					else
					{
						$(this.submenu).stop(true,true).animate({'height':'152px'});
						//$("#gnbsub").stop(true,true).animate({'height':'52px'});
					}
					$(this.submenu).css("z-index","100");
					
				nav.current = this;
			}
			nav.isOver = true;
		}
		nav.menuseq++;
		nav.menu[nav.menuseq] = navAnchor;
	}
	if (nav.menu[seq])
		nav.menu[seq].onmouseover();
}
