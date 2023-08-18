(function() {
	const slider = [...document.querySelectorAll(".testimony")];
	const butNext = document.querySelector("#next");
	const butPrev = document.querySelector("#prev");

	let value;

	butNext.addEventListener("click", () => {
		changePosition(1)
	})
	butPrev.addEventListener("click", () => {
		changePosition(-1)
	})

	const changePosition = (add) => {
		const cur = document.querySelector(".testimony-show").dataset.id;
		value = Number(cur);
		value += add;

		slider[Number(cur)-1].classList.remove("testimony-show");

		if (value === 0 || value === slider.length + 1) {

			if (value === 0) {
				value = slider.length;
			} else {
				value = 1;
			}

		}
		console.log(value)
		slider[value-1].classList.add("testimony-show");
	}

})();