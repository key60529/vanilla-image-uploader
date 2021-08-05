// vanilla image uploader by KayL
import InterfaceHandler from './interface-handler'
import Helper from './helper'

let variables = {
    name: 'imageFile',
    label: 'Choose a file',
    intialImage: '',
    isMultiple: false
}

class VanillaImageUploader {

    constructor(variables) {
        this.variables = variables
        this.init()
    }

    init() {
        let element = document.getElementById(this.variables.name)
        element.innerHTML = InterfaceHandler.renderButton(this.variables)
        if (this.variables.intialImage && Array.isArray(this.variables.intialImage)) {
          console.log(this.variables.intialImage)
          for(let i = 0; i < this.variables.intialImage.length; i++) {
            InterfaceHandler.renderPreview(document.getElementById(this.variables.name), this.variables.intialImage[i])
          }
        } else if (this.variables.intialImage) {
          InterfaceHandler.renderPreview(document.getElementById(this.variables.name), this.variables.intialImage)
        }
    }

    static async selectedTracking(input) {
      let readers = []
      
      if (input.files.length) {
        // clear all previous rendered previews
        input.parentElement.parentElement.querySelector('ul.file-preview').innerHTML = ''

        // read all files and push to an array
        for(let i = 0; i < input.files.length; i++) {
          let file = await Helper.readURL(input.files[i])
          readers.push(file)
        }
  
        Promise.all(readers).then((files) => {
          for(let j = 0; j < files.length; j++) {
            InterfaceHandler.renderPreview(input, files[j], j)
          }
          InterfaceHandler.showHelper(input)
        })
      }
    }

}

export default VanillaImageUploader
