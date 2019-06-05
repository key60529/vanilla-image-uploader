// vanilla image uploader by KayL
import InterfaceHandler from './interface-handler'
import Helper from './helper'

let variables = {
	name: 'imageFile',
	label: 'Choose a file'
}

class VanillaImageUploader {

	constructor(variables) {
		this.variables = variables
		this.init()
	}

	init() {
		let element = document.getElementById(this.variables.name)
		element.innerHTML = InterfaceHandler.renderButton(this.variables)
	}

	static async selectedTracking(input) {
		let reader = await Helper.readURL(input)
		reader.onload = function (e) {
			InterfaceHandler.renderPreview(input, e.target.result)
    }
	}

	static deletePreview(button) {
		let el = button.closest('.file-preview')
		let input = el.parentElement.querySelector('input[type=file]')
		input.value = null
		button.parentElement.remove()
	}
}

export default VanillaImageUploader