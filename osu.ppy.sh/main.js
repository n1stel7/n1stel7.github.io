// pin topnav on scroll
	const body = document.querySelector("body");
	window.onscroll = function() {
		scrollHandler()
	};
	function scrollHandler() {
		if (document.documentElement.scrollTop > 30) {
			body.classList.add("js-pinned-header");
		} else if (document.documentElement.scrollTop < 30) {
			body.classList.remove("js-pinned-header");
		}
	}

// show/hide subnav
	const js_links = [...document.querySelectorAll(".js_topnav_li_link")];
	const sublinks_bg = document.querySelector(".topnav_sublinks_bg");
	js_links.forEach(link => {
		link.addEventListener("mouseover", () => {
			// toadd.forEach(el => { el.classList.remove("hidden") })
			sublinks_bg.classList.remove("hidden")
		})
		link.addEventListener("mouseleave", () => {
			// toadd.forEach(el => { el.classList.add("hidden") })
			sublinks_bg.classList.add("hidden")
		})
	})

// thumbs for maps
	thumbs = document.querySelectorAll(".map_thumb");
	for (let i = 0; i < thumbs.length; i++) {
		thumbs[i].style.backgroundImage = `url(images/maps/list${i+1}.jpg)`
	}

// mobile menu
	const menu_links = document.querySelector(".menu_links");
	menu_links.querySelectorAll(".menu_drop").forEach(link => {
		link.addEventListener("click", e => {
			e.preventDefault();
			if (link.querySelector(".mobile_submenu").classList.contains("none")) {
				link.querySelector(".item_arrow").classList.remove("tfed")
				link.querySelector(".mobile_submenu").classList.remove("none");
			} else {
				link.querySelector(".item_arrow").classList.add("tfed")
				link.querySelector(".mobile_submenu").classList.add("none");
			}
		})
	})




	mobile_menu = document.querySelector(".mobile_menu");
	document.querySelector(".toggle").addEventListener("click", e => {
		if (mobile_menu.classList.contains("none")) {
			mobile_menu.classList.remove("none")
		} else {
			mobile_menu.classList.add("none")
		}
	})