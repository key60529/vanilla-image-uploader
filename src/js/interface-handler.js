export default class InterfaceHandler {
	static renderButton(variables) {
		return `
			<div class="file-box">
			  <input type="file"
               name="${variables.name}${variables.isMultiple ? "[]" : ""}"
               id="${variables.name}-input"
               class="input-file-btn"
               accept="image/jpeg, image/png"
               onchange="VanillaImageUploader.selectedTracking(this)"
               ${variables.isMultiple ? "multiple" : ""}
        >
			  <label class="custom_file_btn" for="${variables.name}-input">
			      <span class="btn-icon"></span> ${variables.label}
			  </label>
			</div>
      <small class="vji-small-helper-text">Select image again to replace the selected image.</small>
			<ul class="file-preview"></ul>
		`
	}

	static renderPreview(target, url, key) {
    console.log(target.parentElement.parentElement)
		let wrapper = target.parentElement.parentElement.querySelector('.file-preview')
		let template = `
			<li>
				<img src="${url}" />
			</li>
		`
		wrapper.innerHTML += template
	}

  static showHelper(target) {
    let el = target.parentElement.parentElement.querySelector('small.vji-small-helper-text')
    el.classList.add('show')
  }
}