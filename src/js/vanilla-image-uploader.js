// vanilla image uploader by KayL

const template = `
<div class="file-box">
  <input type="file" name="imageFile" id="imageFile" class="input-file-btn" accept="image/jpeg, image/png">
  <label class="custom_file_btn" for="imageFile">
      <span class="btn-icon"></span> Choose a file
  </label>
</div>
<ul class="file-list"></ul>
`

class VanillaImageUploader {
	static init(el) {
		let element = document.getElementById(el)
		element.innerHTML = template
	}
}

export default VanillaImageUploader