export default class InterfaceHandler {
	static renderButton(variables) {
		return `
			<div class="file-box">
			  <input type="file" name="${variables.name}" id="${variables.name}-input" class="input-file-btn" accept="image/jpeg, image/png">
			  <label class="custom_file_btn" for="${variables.name}-input">
			      <span class="btn-icon"></span> ${variables.label}
			  </label>
			</div>
		`
	}

	static renderPreview() {
		console.log('render preview now!')
	}
}