var KillerGrid = (function (w, d) {

	Object.prototype.MyForEach = function (callback) {
		var object = this;
		var keys = Object.keys(object);

		keys.forEach(function (key) {
			callback(key, object[key]);
		})
	}

	return function(tableId){

		var killerGrid = this;

		var table = d.getElementById(tableId);

		killerGrid.load = function (data) {

			//TODO - remove from production
			if (!data){
				console.error("The data parameter is not defined!");
			}

			//TODO - remove from production
			if (Object.prototype.toString.call( data ) !== "[object Array]") {
				console.error("The data parameter is not an array!");
			}

			data.forEach(function(line) {

				//TODO - remove from production
				if (Object.prototype.toString.call(line) !== "[object Object]") {
					return;
				}

				var headerSet;

				setTimeout(function () {
					var row = table.insertRow(0);					

					line.MyForEach(function (key, value) {
						var cell = row.insertCell(-1);
						cell.innerHTML = value;
					});

					
				});
			});
		}
	}

})(window, document)
