export default class InterfaceHandler {
	static renderButton(variables) {
		return `
			<div class="file-box">
			  <input type="file" name="${variables.name}" id="${variables.name}-input" class="input-file-btn" accept="image/jpeg, image/png" onchange="VanillaImageUploader.selectedTracking(this)">
			  <label class="custom_file_btn" for="${variables.name}-input">
			      <span class="btn-icon"></span> ${variables.label}
			  </label>
			</div>
			<ul class="file-preview"></ul>
		`
	}

	static renderPreview(target, url) {
		let wrapper = target.parentElement.parentElement.querySelector('.file-preview')
		let template = `
			<li>
				<img src="${url}" />
				<button type="button" class="btn del-btn" onclick="VanillaImageUploader.deletePreview(this)"></button>
			</li>
		`
		wrapper.innerHTML = template
	}
}