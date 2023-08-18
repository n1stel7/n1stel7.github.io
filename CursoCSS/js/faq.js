(function() {
	const question_titles = [...document.querySelectorAll(".question_title")];

	question_titles.forEach(title => {
		title.addEventListener("click", function(e) {
			// console.log(e)
			// this.parentElement.parentElement.classList.add("question_padding-add")
			let height;
			let para = title.nextElementSibling;

			if (para.clientHeight === 0) {
				height = para.scrollHeight;
				title.parentElement.parentElement.classList.add("question_padding-add");
				title.querySelector("span").classList.add("question_arrow-rotate");
			}
			else {
				height = 0
				title.parentElement.parentElement.classList.remove("question_padding-add");
				title.querySelector("span").classList.remove("question_arrow-rotate");
			}
			para.style.height = `${height}px`;
		})
	})
})();