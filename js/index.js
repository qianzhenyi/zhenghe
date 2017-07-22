window.onload = function() {
	//1.地图
	var chart = echarts.init(document.querySelector('.map_detail'));
	var geoCoordMap = {
		'中国': [116.3002283764, 39.9181370976],
		'日本': [130.21, 33.39],
		'澳大利亚': [140.17, -25.55],
		'印度': [78, 27.09],
		'马来西亚': [101.42, 5.08],
		'俄罗斯': [37.37, 55.45],
		'美国': [-77.02, 38.52],
		'墨西哥': [-99.56, 20.52],
		'巴西': [-47.3, -15.5],
		'西班牙': [-2.06, 41.18],
		'法国': [3.2, 48.51],
		'德国': [10.2, 52.31],
		'英国': [0, 55.04],
		'意大利': [11.15, 45.28],
		'韩国': [126.38, 37.3],

	};
	//value  可控制光点大小
	var BJData = [
		[{
			name: '中国'
		}, {
			name: '日本',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '印度',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '澳大利亚',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '马来西亚',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '俄罗斯',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '美国',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '墨西哥',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '巴西',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '西班牙',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '法国',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '德国',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '英国',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '意大利',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '中国',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '韩国',
			value: 60
		}],
	];
	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if(fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};
	var color = ['#fdd442', '#ffa022', '#46bee9'];
	var series = [];
	[
		['中国', BJData]
	].forEach(function(item, i) {
		series.push({

			name: '贸易' + ' Top15',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			
			
			rippleEffect: {
				brushType: 'fill',
				scale:6
			},
			label: {
				//地名
				normal: {
					show: false,
					position: 'right',
					formatter: '{b}',
					shadowBlur: 2,
					shadowColor: 'rgba(255, 255, 255, 0.8)',
				}
			},
			symbolSize: function(val) {
				return val[2] / 10;
			},
			itemStyle: {
				normal: {
					color: color[0],
					shadowBlur: 100,
					shadowColor: 'rgba(255, 255, 255, 0.8)',
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});

	option = {

		tooltip: {
				trigger: 'item',
				height:200,
				width:200,
				fontSize:12,
				formatter: "{a} <br/> {b} <br/>交易量: {c} ",
			
		},
		//地图样式
		geo: {
			map: 'world',
			top: '10%',
			label: {
				emphasis: {
					show: false
				}
			},
			//地图可否拖动
			roam: true,
			itemStyle: {
				normal: {
					//地图颜色
					areaColor: 'white',
					borderColor: '#0f345a'
				},
				emphasis: {
					//hover时颜色
					areaColor: '#0f345a'
				}
			}
		},
		series: series
	};
	chart.setOption(option)

	//柱状图
	var topbar = echarts.init(document.querySelector('.top_bar'));

	topbar.setOption({
		color: ["white", "red", "tan"],
		title: [{
			text: '询盘邮件趋势图（单位：万封）',
			x: '70',
			y: "10",
			textStyle: {
				color: "white",
				fontSize: 14,
				fontWeight: 100
			}
		}],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: [{
			orient: 'vertical',
			right: 'right',
			data: ['8:00~20:00', '20:00~8:00', '峰值IP', '同期环比', ],
			itemWidth: 20,
			itemHeight: 10,
			align: "right",
			itemGap: 4,
			padding: [10, 20, 0, 0],
			textStyle: {
				color: "white",
				fontSize: 10
			}
		}],
		grid: {
			left: '5%',
			top: '15%',
			containLabel: true,
			//width:300,
			height: 120
		},
		xAxis: [{
			type: 'category',
			data: ['俄罗斯', '法国', '加拿大', '菲律宾', '日本', '美国', '俄罗斯', ],
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		series: [{
				name: '8:00~20:00',
				type: 'bar',
				stack: '总量',
				barWidth: '15',
				data: [520, 502, 501, 534, 590, 530, 520]
			}, {
				name: '20:00~8:00',
				type: 'bar',
				stack: '总量',
				data: [520, 432, 301, 234, 190, 230, 210]
			}, {
				name: '峰值IP',
				type: 'bar',
				stack: '总量',
				data: [420, 482, 491, 434, 490, 470, 410]
			}, {
				name: '同期环比',
				type: 'line',
				stack: '总量',
				data: [550, 412, 501, 354, 290, 330, 210],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#8F8E8E" //折线颜色
						}
					}
				},
			},

		]
	});

	//IP访问量
	var bottomline = echarts.init(document.querySelector('.bottom_line'));

	bottomline.setOption({
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '5%',
			top: '20%',
			containLabel: true,
			//width:'100%',
			height: '77%',
		},
		xAxis: [{
			type: 'category',
			data: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		series: [

			{
				name: 'xxx',
				type: 'line',
				data: [520, 432, 301, 234, 190, 230, 210],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#84BCC4" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [520, 432, 301, 234, 190, 530, 710],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "white" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [220, 232, 201, 234, 390, 530, 610],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#ED6F0E" //折线颜色
						}
					}
				},
			},

		]
	});

	//IP访问量2
	var bottomline1 = echarts.init(document.querySelector('.bottom_line1'));

	bottomline1.setOption({
		color: ["white", "red", "tan"],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '5%',
			top: '20%',
			containLabel: true,
			//width:'100%',
			height: '77%',
		},
		xAxis: [{
			type: 'category',
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		series: [{
				name: 'xxx',
				type: 'line',
				data: [520, 432, 301, 234, 190, 230, 210],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#84BCC4" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [520, 432, 301, 234, 190, 530, 710],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "white" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [220, 232, 201, 234, 390, 530, 610],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#ED6F0E" //折线颜色
						}
					}
				},
			},

		]
	});

	//IP访问量3
	var bottomline2 = echarts.init(document.querySelector('.bottom_line2'));
	var linedata = [];
	var linedata1 = [];
	var linedata2 = [];
	var linedata3 = [];
	var date = new Date();
	var m = date.getMonth();
	var y = date.getYear();
	var curMonthDays = new Date(y, (m + 1), 0).getDate();
	for(var i = 0; i <= curMonthDays; i++) {
		linedata.push(i);
		linedata1.push(i * Math.random() * 15);
		linedata2.push(i * Math.random() * 33);
		linedata3.push(i * Math.random() * 12);
	}

	bottomline2.setOption({
		color: ["white", "red", "tan"],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '5%',
			top: '20%',
			containLabel: true,
			//width:'100%',
			height: '77%',
		},
		xAxis: [{
			type: 'category',
			data: linedata,
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色

				}
			}
		}],
		series: [

			{
				name: 'xxx',
				type: 'line',
				data: linedata1,
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#84BCC4" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: linedata2,
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "white" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: linedata3,
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#ED6F0E" //折线颜色
						}
					}
				},
			},

		]
	});

	//点击事件
	var ctitle = document.querySelectorAll(".chart_title>a");
	var cline = document.querySelectorAll(".cline");
	ctitle[0].onclick = function() {
		cline[0].style.opacity = "1";
		cline[1].style.opacity = "0";
		cline[2].style.opacity = "0";
	}
	ctitle[1].onclick = function() {
		cline[1].style.opacity = "1";
		cline[0].style.opacity = "0";
		cline[2].style.opacity = "0";
	}
	ctitle[2].onclick = function() {
			cline[2].style.opacity = "1";
			cline[1].style.opacity = "0";
			cline[0].style.opacity = "0";
		}
		//南丁格尔图
	var lpie = echarts.init(document.querySelector('.lpie'));
	lpie.setOption({
		title: [{
			text: '10大热销产品',
			x: '50',
			y: "80%",
			textStyle: {
				color: "white",
				fontSize: 16,
				fontWeight: 100
			}
		}],
		legend: [{
			orient: 'vertical',
			right: 'right',
			data: ['1.建筑', '2.能源', '3.有色金属', '4.食品', '5.核能', '6.航空航天', '7.交通', '8.IT', '9.医药', '10.机械电子'],
			itemWidth: 10,
			itemHeight: 10,
			itemGap: 4,
			padding: [20, 0, 0, 0],
			position: "inner",
			textStyle: {
				color: "white"
			}
		}],
		tooltip: [{
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		}],

		series: [{
			name: '10大热销产品',
			type: 'pie',
			radius: '85%',
			center: ['35%', '45%'],
			labelLine: {
				normal: {
					show: false
				}
			},
			label: {
				normal: {
					show: false,
					position: "inner"
				}
			},
			data: [{
				value: 99,
				name: '1.建筑',
				itemStyle: {
					normal: {
						color: '#B93C20'
					}
				}
			}, {
				value: 80,
				name: '2.能源',
				itemStyle: {
					normal: {
						color: '#F2CB09'
					}
				}

			}, {
				value: 95,
				name: '3.有色金属',
				itemStyle: {
					normal: {
						color: '#9E2223'
					}
				}
			}, {
				value: 80,
				name: '4.食品',
				itemStyle: {
					normal: {
						color: '#218C3B'
					}
				}
			}, {
				value: 55,
				name: '5.核能',
				itemStyle: {
					normal: {
						color: '#E46606'
					}
				}
			}, {
				value: 60,
				name: '6.航空航天',
				itemStyle: {
					normal: {
						color: '#E38F18'
					}
				}
			}, {
				value: 75,
				name: '7.交通',
				itemStyle: {
					normal: {
						color: '#E38F18'
					}
				}
			}, {
				value: 83,
				name: '8.IT',
				itemStyle: {
					normal: {
						color: '#7DB927'
					}
				}
			}, {
				value: 80,
				name: '9.医药',
				itemStyle: {
					normal: {
						color: '#C39C69'
					}
				}
			}, {
				value: 88,
				name: '10.机械电子',
				itemStyle: {
					normal: {
						color: '#94592E'
					}
				}
			}],
			roseType: 'angle',
			itemStyle: {
				emphasis: {

					shadowBlur: 100,
					shadowColor: 'rgba(0, 0, 0, 0.5)',

					shadowOffsetX: 30, //阴影水平方向上的偏移
					shadowOffsetY: 50, //阴影垂直方向上的偏移
				}
			},
			
		}]
	})
	
	//表格上下滚动
	var tb1=document.querySelector('.tble-left');
	var tb2=document.querySelector('.tble-right');
	var step1=0;
	var step2=0;
	
    function fn(){
    	if(step1==-246)(step1=0);
    	step1-=3;
    	tb1.style.top=step1+'px';
    }
    function fn2(){
    	if(step2==-246)(step2=0);
    	step2-=3;
    	tb2.style.top=step2+'px';
    }
    var t1=setInterval(fn,150);
	var t2=setInterval(fn2,150);
	
	var tr1=document.querySelectorAll('.tble-left tr');
	var tr2=document.querySelectorAll('.tble-right tr');
//	for (var i = 0; i < tr1.length; i++) {
//		for (var j = 0; j < i; j++) {
//		tr1[i].onmouseover=function(){
//		clearInterval(t1);
//	}
//		tr1[j].onmouseleave=function(){
//		t1=setInterval(fn,150);
//		}
//		
//		}}
	function ff(obj,num,count){
		for (var i = 0; i < obj.length; i++) {
		for (var j = 0; j < i; j++) {
		obj[i].onmouseover=function(){
		clearInterval(num);
	}
		obj[j].onmouseleave=function(){
		num=setInterval(count,150);
		}
		
		}}
	}
	
	ff(tr1,t1,fn);
	ff(tr2,t2,fn2);
	
//	for (var j = 0; j < tr2.length; j++) {
//  	tr2[j].onmouseover=function(){
//		clearInterval(t2);
//	}
//		tr2[j].onmouseleave=function(){
//		t2=setInterval(fn,150);
//	}
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	//各个图表的点击跳转
	var se1 = document.querySelector(".map"),
		se2 = document.querySelector(".chart_top"),
		se3 = document.querySelector(".cline"),
		se4 = document.querySelector(".left_pie"),
		se5 = document.querySelector(".center_chart_left"),
		se6 = document.querySelector(".center_chart_right"),
		se7 = document.querySelectorAll(".right_trade>div");

//	se1.onclick = function() {
//		window.location.href = "distribution_heat/distribution_heat.html";
//	}
//	se2.onclick = function() {
//		window.location.href = "distribution_heat/mail.html";
//	}
//	se3.onclick = function() {
//		window.location.href = "distribution_heat/mail.html";
//	}
//	se4.onclick = function() {
//		window.location.href = "web_bestsell_goods/web_bestsell_goods.html";
//	}
	se5.onclick = function() {
		window.location.href = "country_of_buyer/country_of_buyer.html";
	}
	se6.onclick = function() {
		window.location.href = "buyer_of_China/buyer_of_China.html";
	}
//	se7[0].onclick = function() {
//		window.location.href = "distribution_heat/distribution_heat.html";
//	}
//	se7[1].onclick = function() {
//		window.location.href = "distribution_heat/distribution_heat.html";
//	}
//	se7[2].onclick = function() {
//		window.location.href = "deal_of_ShanDong/deal_of_ShanDong.html";
//	}
//	se7[3].onclick = function() {
//		window.location.href = "deal_of_ShanDong/deal_of_ShanDong.html";
//	}

}