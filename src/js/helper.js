export default class Helper {
	static readURL(input) {
		if (input.files && input.files[0]) {
			console.log(input.files)
	    let reader = new FileReader();
	    reader.readAsDataURL(input.files[0]);
	    return reader
	  }
	}
}