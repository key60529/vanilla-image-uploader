export default class Helper {
	static readURL(file) {
    return new Promise(function(resolve,reject){
      let reader = new FileReader()

      reader.onload = function(){
          resolve(reader.result)
      };

      reader.onerror = function(){
          reject(reader)
      };

      reader.readAsDataURL(file)
    })
	}
}