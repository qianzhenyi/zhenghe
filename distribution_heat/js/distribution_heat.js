var chart = echarts.init(document.getElementById('main'));

chart.setOption({
     
//   tooltip: {
//      trigger: 'item',
//    formatter: '{b}'
//      
//  },
	
     roam: true,
     series: [{
     	nameMap:
              {
             'Russia' : '23.7%',
             'China':'12',
             'Japan':'5.3%',
             'Australia':'1.2%',
             'India':'4.5%',
             'Malaysia':'5.8%',
             'United States of America':'7.5%',
             'Mexico':'9.5%',
             'Brazil':'4.4%',
             'Spain':'9.9%',
             'France':'3.4%',
             'Germany':'8.9%',
             'United Kingdom':'5.6%',
             'Italy':'9.4%',
             'South Korea':'7.7%',
             
              },
     data:[
     	{name:'23.7%',itemStyle:{emphasis:{areaColor:'rgb(202,74,75)'},normal:{label:{textStyle:{color:'black',fontSize:'30'}}}}},
      	{name:'12',itemStyle:{emphasis:{areaColor:'white'},normal:{label:{textStyle:{color:'black',fontSize:'30'}}}}},
      	{name:'5.3%',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'1.2%',itemStyle:{emphasis:{areaColor:'rgb(202,154,122)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'4.5',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'5.8',itemStyle:{emphasis:{areaColor:'rgb(223,199,117)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'7.5%',itemStyle:{emphasis:{areaColor:'rgb(252,242,111)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'9.5%',itemStyle:{emphasis:{areaColor:'pink'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'4.4%',itemStyle:{emphasis:{areaColor:'yellowgreen'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'9.9%',itemStyle:{emphasis:{areaColor:'teal'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'3.4%',itemStyle:{emphasis:{areaColor:'rgb(8,33,78)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'8.9%',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'5.6%',itemStyle:{emphasis:{areaColor:'orange'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'9.4%',itemStyle:{emphasis:{areaColor:'pink'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'7.7%',itemStyle:{emphasis:{areaColor:'white'},normal:{label:{textStyle:{color:'black'}}}}},
      	
      ],	
       
      type: 'map',
      map: 'world',
           

            itemStyle:{
				normal:{
//				    formatter: '{c}',
					areaColor:'#8b415c',//地图颜色 
					label:{
						
							show:true,
							textStyle: {
							   color: 'transparent'
									}
						  },
					borderColor: '#b8738d',//边界颜色
					borderWidth: 0.5,
							},
							
							
				    emphasis:{

					  areaColor:'#8b415c',	 //区块hover时的颜色
					},		
				},	
     }]
 });    
 

 
 chart.on('click',function(params){
 	var country=params.name;
 	if(country=='12'){
 		window.location.href='../contury_detail/contury_detail_010.html';
 	}else if(country=='5.3%'){
 		window.location.href='../contury_detail/contury_detail_014.html';
 	}else if(country=='1.2%'){
 		window.location.href='../contury_detail/contury_detail_007.html';
 	}else if(country=='4.5%'){
 		window.location.href='../contury_detail/contury_detail_009.html';
 	}else if(country=='23.7%'){
 		window.location.href='../contury_detail/contury_detail_001.html';
 	}else if(country=='5.8%'){
 		window.location.href='../contury_detail/contury_detail_013.html';
 	}else if(country=='7.5%'){
 		window.location.href='../contury_detail/contury_detail_008.html';
 	}else if(country=='9.5%'){
 		window.location.href='../contury_detail/contury_detail_012.html';
 	}else if(country=='4.4%'){
 		window.location.href='../contury_detail/contury_detail_003.html';
 	}else if(country=='9.9%'){
 		window.location.href='../contury_detail/contury_detail_005.html';
 	}else if(country=='3.4%'){
 		window.location.href='../contury_detail/contury_detail_004.html';
 	}else if(country=='8.9%'){
 		window.location.href='../contury_detail/contury_detail_006.html';
 	}else if(country=='5.6%'){
 		window.location.href='../contury_detail/contury_detail_011.html';
 	}else if(country=='9.4%'){
 		window.location.href='../contury_detail/contury_detail_002.html';
 	}else if(country=='7.7%'){
 		window.location.href='../contury_detail/contury_detail_015.html';
 	}
 })

