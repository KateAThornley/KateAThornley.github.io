var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
	type: 'scatter',
	data: {
		datasets: [{
			label: 'Scatter Dataset',
			data: [{
				x: -10,
				y: 0,
				label: 'test'
			}, {
				x: 0,
				y: 10
			}, {
				x: 10,
				y: 5
			}]
		}]
	},
	options: {
		tooltips: {
			mode: 'index'
		},
		events: ['click'],
		scales: {
			xAxes: [{
				type: 'linear',
				position: 'bottom'
			}]
		}
	}
});