// vanilla image uploader by KayL
import InterfaceHandler from './interface-handler'

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
		this.eventTracking()
	}

	eventTracking() {
		let wrapper = document.getElementById(this.variables.name)
		let target = wrapper.querySelector('#' + this.variables.name + '-input')
		target.addEventListener('ValueChange', InterfaceHandler.renderPreview());
	}
}

export default VanillaImageUploader